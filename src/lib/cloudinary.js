// Two ways to upload, both without ever exposing the API secret to the browser:
//  1. Signed (default in dev): the dev server signs each upload using
//     CLOUDINARY_API_SECRET, which lives only in Node (see vite.config.js).
//  2. Unsigned: if VITE_CLOUDINARY_UPLOAD_PRESET is set to an unsigned preset.

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const cloudinaryConfigured = Boolean(CLOUD_NAME && (UPLOAD_PRESET || import.meta.env.DEV));

export const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];
export const MAX_BYTES = 10 * 1024 * 1024;

export const validateImage = (file) => {
  if (!ACCEPTED_TYPES.includes(file.type)) return "Use a JPG, PNG, WebP or AVIF image.";
  if (file.size > MAX_BYTES) return "Image is larger than 10 MB.";
  return null;
};

const getUploadFields = async (file) => {
  const body = new FormData();
  body.append("file", file);

  if (UPLOAD_PRESET) {
    body.append("upload_preset", UPLOAD_PRESET);
    body.append("folder", "portfolio/projects");
    return { cloudName: CLOUD_NAME, body };
  }

  const res = await fetch("/__cloudinary/sign", { cache: "no-store" });
  let data = {};
  try {
    data = await res.json();
  } catch {
    // not JSON
  }
  if (!res.ok || !data.signature) {
    throw new Error(data.error || "Could not get an upload signature from the dev server.");
  }
  body.append("api_key", data.apiKey);
  body.append("timestamp", String(data.timestamp));
  body.append("signature", data.signature);
  body.append("folder", data.folder);
  return { cloudName: data.cloudName, body };
};

export const uploadImage = async (file, { onProgress } = {}) => {
  if (!cloudinaryConfigured) throw new Error("Cloudinary is not configured.");
  const problem = validateImage(file);
  if (problem) throw new Error(problem);

  const { cloudName, body } = await getUploadFields(file);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress?.(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onerror = () => reject(new Error("Network error while uploading."));
    xhr.onabort = () => reject(new Error("Upload cancelled."));
    xhr.onload = () => {
      let data = {};
      try {
        data = JSON.parse(xhr.responseText);
      } catch {
        // non-JSON response
      }
      if (xhr.status >= 200 && xhr.status < 300 && data.secure_url) {
        resolve({ url: data.secure_url, publicId: data.public_id });
      } else {
        reject(new Error(data.error?.message || `Upload failed (${xhr.status}).`));
      }
    };
    xhr.send(body);
  });
};

// Serve Cloudinary images with automatic format/quality and a width cap.
// Other URLs (e.g. local /projects/*.png) are returned unchanged.
export const optimizeImage = (url, width = 1200) => {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) return url;
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
};

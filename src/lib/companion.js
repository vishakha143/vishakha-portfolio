export const COMPANION_EVENT = "companion:mode";

export const setCompanionMode = (mode) => {
  window.dispatchEvent(new CustomEvent(COMPANION_EVENT, { detail: mode }));
};

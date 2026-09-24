import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  User,
  MessageSquare,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "vk5201109@gmail.com";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vishakha-kumari-857b89251",
    href: "https://www.linkedin.com/in/vishakha-kumari-857b89251/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/vishakha143",
    href: "https://github.com/vishakha143",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Contact
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Let's{" "}
            <span className="text-primary glow-text">
              connect.
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I'm open to entry-level Software Engineering opportunities,
            collaborations, and interesting projects.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Contact Information */}
          <div
            className="
              glass
              rounded-3xl
              p-8
              md:p-10
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <h3 className="text-2xl font-semibold">
                Get in touch
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Have an opportunity, project idea, or simply want to
                connect? Feel free to reach out.
              </p>

              <div className="mt-10 space-y-5">

                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.label === "Email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        item.label === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="
                        flex
                        items-center
                        gap-4
                        group
                        rounded-2xl
                        p-3
                        -mx-3
                        hover:bg-primary/5
                        transition-all
                        duration-300
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          w-12
                          h-12
                          shrink-0
                          rounded-xl
                          glass
                          flex
                          items-center
                          justify-center
                          group-hover:bg-primary/10
                          group-hover:border-primary/30
                          transition-all
                          duration-300
                        "
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm md:text-base font-medium truncate group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                          w-4
                          h-4
                          ml-auto
                          shrink-0
                          text-muted-foreground
                          group-hover:text-primary
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-all
                          duration-300
                        "
                      />
                    </a>
                  );
                })}

              </div>
            </div>

            {/* Location */}
            <div
              className="
                mt-10
                pt-6
                border-t
                border-border
                flex
                items-center
                gap-3
              "
            >
              <MapPin className="w-5 h-5 text-primary shrink-0" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Location
                </p>

                <p className="mt-1 font-medium">
                  Bihar, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 md:p-10">

            <h3 className="text-2xl font-semibold">
              Send a message
            </h3>

            <p className="mt-3 text-muted-foreground">
              Have an opportunity or want to connect? Drop me a message.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>

                <div className="relative">

                  <User
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      w-5
                      h-5
                      text-muted-foreground
                      pointer-events-none
                    "
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-border
                      bg-background/40
                      pl-12
                      pr-4
                      py-3
                      text-sm
                      outline-none
                      placeholder:text-muted-foreground/60
                      focus:border-primary/50
                      focus:ring-2
                      focus:ring-primary/10
                      transition-all
                    "
                  />

                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>

                <div className="relative">

                  <Mail
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      w-5
                      h-5
                      text-muted-foreground
                      pointer-events-none
                    "
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-border
                      bg-background/40
                      pl-12
                      pr-4
                      py-3
                      text-sm
                      outline-none
                      placeholder:text-muted-foreground/60
                      focus:border-primary/50
                      focus:ring-2
                      focus:ring-primary/10
                      transition-all
                    "
                  />

                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>

                <div className="relative">

                  <MessageSquare
                    className="
                      absolute
                      left-4
                      top-4
                      w-5
                      h-5
                      text-muted-foreground
                      pointer-events-none
                    "
                  />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity..."
                    required
                    rows={5}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-border
                      bg-background/40
                      pl-12
                      pr-4
                      py-3
                      text-sm
                      outline-none
                      resize-none
                      placeholder:text-muted-foreground/60
                      focus:border-primary/50
                      focus:ring-2
                      focus:ring-primary/10
                      transition-all
                    "
                  />

                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full
                  rounded-xl
                  bg-primary
                  text-primary-foreground
                  px-6
                  py-3
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
                  shadow-primary/20
                  hover:bg-primary/90
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Opens your email app with the message pre-filled.
              </p>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
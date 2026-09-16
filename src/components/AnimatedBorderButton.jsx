import { Download } from "lucide-react";

export const AnimatedBorderButton = ({
  children = "Resume",
  href = "/Vishakha_Kumari_Resume.pdf",
  icon = <Download className="w-5 h-5" />,
  ariaLabel = "Open resume",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative inline-flex items-center justify-center
        gap-2 px-8 py-4
        rounded-full
        border border-border
        bg-transparent
        text-foreground
        font-medium
        text-lg
        overflow-visible
        group
        transition-all duration-300
        hover:border-primary/50
        hover:text-primary
        hover:bg-primary/5
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
      "
      aria-label={ariaLabel}
    >
      {/* Animated Border */}
      <svg
        className="
          absolute inset-0
          w-full h-full
          pointer-events-none
          overflow-visible
        "
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="198"
          height="58"
          rx="29"
          ry="29"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="90 510"
          className="animated-border-path"
        />
      </svg>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon}
        <span>{children}</span>
      </span>
    </a>
  );
};

import { Link } from "react-router-dom";

const base =
  "relative inline-flex whitespace-nowrap items-center justify-center overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition";

const sizes = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

// Renders a router Link (`to`), an anchor (`href`) or a real button, so links
// are never wrapped around buttons.
export const Button = ({ className = "", size = "default", to, href, children, ...rest }) => {
  const classes = `${base} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

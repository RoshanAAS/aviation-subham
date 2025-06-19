export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  ...props 
}) {
  const baseClasses = "font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 btn-hover-effect flex items-center justify-center space-x-3";
  
  const variants = {
    primary: "btn-aviation-primary",
    secondary: "btn-aviation-secondary",
    outline: "bg-transparent border-2 border-aviation-teal text-aviation-teal hover:bg-aviation-teal hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-8 py-4 text-base rounded-xl", 
    lg: "px-10 py-5 text-lg rounded-xl"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
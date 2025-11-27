function ArrowIcon({
  className = "w-6 h-6",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M5 19L19 5" />
      <path d="M12 5h7v7" />
    </svg>
  );
}

export default ArrowIcon;

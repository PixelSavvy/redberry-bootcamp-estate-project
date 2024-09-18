export const ChevronDown = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={className}
      fill="none"
      height="15"
      viewBox="0 0 14 15"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-foreground"
        d="M3.91247 5.33785C3.68466 5.11004 3.31532 5.11004 3.08751 5.33785C2.85971 5.56565 2.85971 5.935 3.08751 6.1628L6.58751 9.6628C6.81532 9.89061 7.18466 9.89061 7.41247 9.6628L10.9125 6.1628C11.1403 5.935 11.1403 5.56565 10.9125 5.33785C10.6847 5.11004 10.3153 5.11004 10.0875 5.33785L6.99999 8.42537L3.91247 5.33785Z"
      />
    </svg>
  );
};

export const CheckedIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      height="11"
      viewBox="0 0 12 11"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={className}
        d="M11 1.40918L4.125 9.591L1 5.87199"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

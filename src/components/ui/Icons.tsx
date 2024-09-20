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

export const PlusIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      height="23"
      viewBox="0 0 22 23"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M16.5 12.4144H11.9166V16.9977C11.9166 17.2408 11.8201 17.474 11.6482 17.6459C11.4763 17.8178 11.2431 17.9144 11 17.9144C10.7569 17.9144 10.5237 17.8178 10.3518 17.6459C10.1799 17.474 10.0833 17.2408 10.0833 16.9977V12.4144H5.49998C5.25686 12.4144 5.02371 12.3178 4.8518 12.1459C4.67989 11.974 4.58331 11.7408 4.58331 11.4977C4.58331 11.2546 4.67989 11.0214 4.8518 10.8495C5.02371 10.6776 5.25686 10.5811 5.49998 10.5811H10.0833V5.99772C10.0833 5.75461 10.1799 5.52145 10.3518 5.34954C10.5237 5.17763 10.7569 5.08105 11 5.08105C11.2431 5.08105 11.4763 5.17763 11.6482 5.34954C11.8201 5.52145 11.9166 5.75461 11.9166 5.99772V10.5811H16.5C16.7431 10.5811 16.9763 10.6776 17.1482 10.8495C17.3201 11.0214 17.4166 11.2546 17.4166 11.4977C17.4166 11.7408 17.3201 11.974 17.1482 12.1459C16.9763 12.3178 16.7431 12.4144 16.5 12.4144Z"
      />
    </svg>
  );
};

export const PlusIconRounded = () => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#2D3648"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V16"
        stroke="#2D3648"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#2D3648"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DeleteIconRounded = () => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" fill="white" r="11.5" stroke="#021526" />
      <path
        d="M6.75 8.5H7.91667H17.25"
        stroke="#021526"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0834 8.50033V16.667C16.0834 16.9764 15.9605 17.2732 15.7417 17.492C15.5229 17.7107 15.2262 17.8337 14.9167 17.8337H9.08341C8.774 17.8337 8.47725 17.7107 8.25846 17.492C8.03966 17.2732 7.91675 16.9764 7.91675 16.667V8.50033M9.66675 8.50033V7.33366C9.66675 7.02424 9.78966 6.72749 10.0085 6.5087C10.2272 6.28991 10.524 6.16699 10.8334 6.16699H13.1667C13.4762 6.16699 13.7729 6.28991 13.9917 6.5087C14.2105 6.72749 14.3334 7.02424 14.3334 7.33366V8.50033"
        stroke="#021526"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 11.417V14.917"
        stroke="#021526"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1667 11.417V14.917"
        stroke="#021526"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

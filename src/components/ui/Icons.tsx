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

export const LocationIcon = () => {
  return (
    <svg
      fill="none"
      height="23"
      viewBox="0 0 22 23"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M5.55533 4.95547C8.56236 1.94844 13.4377 1.94844 16.4448 4.95547C19.4518 7.96251 19.4518 12.8379 16.4448 15.8449L11 21.2896L5.55533 15.8449C2.54829 12.8379 2.54829 7.96251 5.55533 4.95547ZM11 12.6002C12.2151 12.6002 13.2 11.6152 13.2 10.4002C13.2 9.18517 12.2151 8.2002 11 8.2002C9.78502 8.2002 8.80005 9.18517 8.80005 10.4002C8.80005 11.6152 9.78502 12.6002 11 12.6002Z"
        fill="#808A93"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const BedIcon = () => {
  return (
    <svg
      fill="none"
      height="23"
      viewBox="0 0 22 23"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5625 10.4129C18.1291 10.2226 17.6608 10.1246 17.1875 10.125H4.8125C4.3392 10.1245 3.87097 10.2224 3.4375 10.4125C2.82485 10.6804 2.30353 11.121 1.93724 11.6804C1.57096 12.2398 1.37559 12.8938 1.375 13.5625V18.375C1.375 18.5573 1.44743 18.7322 1.57636 18.8611C1.7053 18.9901 1.88016 19.0625 2.0625 19.0625C2.24484 19.0625 2.4197 18.9901 2.54864 18.8611C2.67757 18.7322 2.75 18.5573 2.75 18.375V18.0313C2.75111 17.9404 2.78769 17.8536 2.85191 17.7894C2.91614 17.7252 3.00293 17.6886 3.09375 17.6875H18.9062C18.9971 17.6886 19.0839 17.7252 19.1481 17.7894C19.2123 17.8536 19.2489 17.9404 19.25 18.0313V18.375C19.25 18.5573 19.3224 18.7322 19.4514 18.8611C19.5803 18.9901 19.7552 19.0625 19.9375 19.0625C20.1198 19.0625 20.2947 18.9901 20.4236 18.8611C20.5526 18.7322 20.625 18.5573 20.625 18.375V13.5625C20.6243 12.8939 20.4289 12.24 20.0626 11.6806C19.6964 11.1213 19.1751 10.6808 18.5625 10.4129Z"
        fill="#808A93"
      />
      <path
        d="M16.1562 3.9375H5.84375C5.20557 3.9375 4.59353 4.19102 4.14227 4.64227C3.69102 5.09353 3.4375 5.70557 3.4375 6.34375V9.4375C3.43752 9.46413 3.44373 9.4904 3.45564 9.51422C3.46755 9.53805 3.48483 9.55878 3.50612 9.57478C3.52741 9.59078 3.55213 9.60161 3.57833 9.60642C3.60453 9.61123 3.63148 9.60989 3.65707 9.6025C4.03238 9.49273 4.42146 9.43717 4.8125 9.4375H4.99426C5.03668 9.43777 5.07771 9.42234 5.10944 9.39418C5.14117 9.36602 5.16136 9.32712 5.16613 9.28496C5.20363 8.94903 5.36356 8.63868 5.61537 8.41318C5.86718 8.18768 6.19323 8.06284 6.53125 8.0625H8.9375C9.27574 8.06253 9.60211 8.18722 9.85419 8.41275C10.1063 8.63828 10.2664 8.94881 10.3039 9.28496C10.3087 9.32712 10.3289 9.36602 10.3606 9.39418C10.3923 9.42234 10.4334 9.43777 10.4758 9.4375H11.5268C11.5692 9.43777 11.6102 9.42234 11.642 9.39418C11.6737 9.36602 11.6939 9.32712 11.6987 9.28496C11.7361 8.94925 11.8959 8.63908 12.1474 8.41361C12.399 8.18814 12.7247 8.06316 13.0625 8.0625H15.4688C15.807 8.06253 16.1334 8.18722 16.3854 8.41275C16.6375 8.63828 16.7976 8.94881 16.8352 9.28496C16.8399 9.32712 16.8601 9.36602 16.8919 9.39418C16.9236 9.42234 16.9646 9.43777 17.007 9.4375H17.1875C17.5786 9.43731 17.9676 9.49302 18.3429 9.60293C18.3686 9.61033 18.3955 9.61167 18.4218 9.60683C18.448 9.602 18.4727 9.59113 18.4941 9.57508C18.5154 9.55903 18.5326 9.53824 18.5445 9.51436C18.5564 9.49049 18.5625 9.46417 18.5625 9.4375V6.34375C18.5625 5.70557 18.309 5.09353 17.8577 4.64227C17.4065 4.19102 16.7944 3.9375 16.1562 3.9375Z"
        fill="#808A93"
      />
    </svg>
  );
};

export const AreaIcon = () => {
  return (
    <svg
      fill="none"
      height="18"
      viewBox="0 0 17 18"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15.6111C0 16.1121 0.199007 16.5925 0.553243 16.9468C0.907478 17.301 1.38792 17.5 1.88889 17.5H15.1111C15.6121 17.5 16.0925 17.301 16.4468 16.9468C16.801 16.5925 17 16.1121 17 15.6111V2.38889C17 1.88792 16.801 1.40748 16.4468 1.05324C16.0925 0.699007 15.6121 0.5 15.1111 0.5H1.88889C1.38792 0.5 0.907478 0.699007 0.553243 1.05324C0.199007 1.40748 0 1.88792 0 2.38889V15.6111ZM8.5 3.33333H14.1667V9H12.2778V5.22222H8.5V3.33333ZM2.83333 9H4.72222V12.7778H8.5V14.6667H2.83333V9Z"
        fill="#808A93"
      />
    </svg>
  );
};

export const SignIcon = () => {
  return (
    <svg
      fill="none"
      height="23"
      viewBox="0 0 22 23"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.89431 1.3945C9.65904 1.64712 9.52683 1.98978 9.52676 2.34709V5.83142H3.25446C2.92176 5.83142 2.60268 5.97338 2.36742 6.22606C2.13217 6.47874 2 6.82146 2 7.1788V12.5683C2 12.9257 2.13217 13.2684 2.36742 13.5211C2.60268 13.7738 2.92176 13.9157 3.25446 13.9157H9.52676V22H12.0357V13.9157H16.4664C16.6503 13.9156 16.8319 13.8722 16.9984 13.7883C17.1649 13.7045 17.3122 13.5824 17.4298 13.4307L19.8547 10.3047C19.9486 10.1837 20 10.0311 20 9.87357C20 9.71602 19.9486 9.56346 19.8547 9.4424L17.4298 6.31648C17.3122 6.16473 17.1649 6.04263 16.9984 5.95881C16.8319 5.87498 16.6503 5.8315 16.4664 5.83142H12.0357V2.34709C12.0356 2.08065 11.962 1.8202 11.8242 1.59868C11.6863 1.37716 11.4904 1.2045 11.2612 1.10255C11.032 1.00059 10.7799 0.973909 10.5366 1.02587C10.2932 1.07784 10.0698 1.20612 9.89431 1.3945Z"
        fill="#021526"
        fillOpacity="0.5"
      />
    </svg>
  );
};

export const EmailIcon = () => {
  return (
    <svg
      fill="none"
      height="13"
      viewBox="0 0 16 13"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M9.84341e-05 2.15414C-1.95112e-05 2.16127 -3.14003e-05 2.16839 6.24258e-05 2.17551V10.8333C6.24258e-05 12.0266 0.980211 13 2.18186 13H13.8181C15.0198 13 15.9999 12.0266 15.9999 10.8333V2.1756C16 2.16841 16 2.16122 15.9999 2.15404C15.993 0.966489 15.0155 0 13.8181 0H2.18186C0.984418 0 0.00692812 0.966547 9.84341e-05 2.15414ZM1.53211 1.84452C1.65238 1.60833 1.89971 1.44444 2.18186 1.44444H13.8181C14.1003 1.44444 14.3476 1.60833 14.4679 1.84452L8 6.34064L1.53211 1.84452ZM14.5454 3.55381V10.8333C14.5454 11.2289 14.2165 11.5556 13.8181 11.5556H2.18186C1.78353 11.5556 1.4546 11.2289 1.4546 10.8333V3.55381L7.58294 7.81389C7.83335 7.98796 8.16665 7.98796 8.41706 7.81389L14.5454 3.55381Z"
        fill="#808A93"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const PhoneIcon = () => {
  return (
    <svg
      fill="none"
      height="15"
      viewBox="0 0 15 15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.08632 3.45996C9.69678 3.57906 10.2578 3.87762 10.6976 4.31742C11.1374 4.75722 11.436 5.31825 11.5551 5.92871M9.08632 0.959961C10.3546 1.10086 11.5373 1.66882 12.4402 2.57059C13.3431 3.47236 13.9126 4.65434 14.0551 5.92246M13.4301 10.91V12.785C13.4308 12.959 13.3951 13.1313 13.3254 13.2908C13.2557 13.4503 13.1534 13.5935 13.0251 13.7111C12.8969 13.8288 12.7454 13.9184 12.5805 13.9742C12.4157 14.0299 12.2409 14.0506 12.0676 14.035C10.1443 13.826 8.29695 13.1688 6.67382 12.1162C5.16372 11.1566 3.88341 9.87632 2.92382 8.36621C1.86756 6.73571 1.21022 4.87933 1.00507 2.94746C0.989455 2.77463 1.00999 2.60044 1.06539 2.43598C1.12078 2.27152 1.2098 2.12039 1.3268 1.99222C1.4438 1.86406 1.5862 1.76165 1.74494 1.69154C1.90368 1.62142 2.07529 1.58512 2.24882 1.58496H4.12382C4.42714 1.58198 4.72119 1.68939 4.95117 1.88717C5.18116 2.08495 5.33137 2.35962 5.37382 2.65996C5.45296 3.26 5.59973 3.84917 5.81132 4.41621C5.89541 4.63991 5.91361 4.88303 5.86376 5.11676C5.81392 5.35049 5.69811 5.56503 5.53007 5.73496L4.73632 6.52871C5.62605 8.09343 6.92161 9.38899 8.48632 10.2787L9.28007 9.48496C9.45 9.31692 9.66454 9.20112 9.89827 9.15127C10.132 9.10142 10.3751 9.11962 10.5988 9.20371C11.1659 9.41531 11.755 9.56207 12.3551 9.64121C12.6587 9.68404 12.9359 9.83697 13.1342 10.0709C13.3324 10.3048 13.4377 10.6034 13.4301 10.91Z"
        stroke="#808A93"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const CrossIcon = () => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 14 15"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 4L3.5 11"
        stroke="#354451"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 4L10.5 11"
        stroke="#354451"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

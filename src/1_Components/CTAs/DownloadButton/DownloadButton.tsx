import { AnchorHTMLAttributes, FC } from "react";

import S from "./DownloadButton.module.scss";

export interface DownloadButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  url?: string;
  color?: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({
  label,
  color,
  url,
  ...rest
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className={S.DownloadButton}
      style={{ color: color }}
      {...rest}
    >
      {label}

      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
};
export default DownloadButton;
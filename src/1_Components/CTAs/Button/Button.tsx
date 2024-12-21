import { ButtonHTMLAttributes, FC } from "react";

import S from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  url?: string;
  color?: string;
}

const Button: FC<ButtonProps> = ({ label, color, ...rest }) => {
  return (
    <button className={S.Button} style={{ backgroundColor: color }} {...rest}>
      {label}
    </button>
  );
};
export default Button;

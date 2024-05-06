import React, { ElementType, FC, PropsWithChildren } from "react";
import { Link } from '@mui/material';
import './CustomLink.scss';

interface Props extends PropsWithChildren {
  underline?: "hover" | "none" | "always";
  href?: string;
  component?: ElementType<any, keyof React.JSX.IntrinsicElements>;
  customCls?: string;
}

/**
 * Custom Link
 * @param children 
 * @param underline "hover" | "none" | "always"
 * @param href 
 * @param component 
 * @param customCls "link-blue" | any custom string
 */
const CustomLink: FC<Props> = ({
  children,
  underline,
  href="",
  component='a',
  customCls="",
}) => {
  return (
    <Link
      underline={underline || "hover"}
      href={href}
      component={component}
      className={customCls} 
    >
      {children}
    </Link>
  );
};

export default CustomLink;
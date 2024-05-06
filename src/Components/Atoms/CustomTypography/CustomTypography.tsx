import React, { ElementType, FC, PropsWithChildren } from "react";
import { Typography } from '@mui/material';
import './CustomTypography.scss';

interface Props extends PropsWithChildren {
  component?: ElementType<any, keyof React.JSX.IntrinsicElements>;
  customCls?: string;
}

/**
 * Custom Typography
 * @param children
 * @param component
 * @param customCls "title" | "sub-title" | "heading" | "type-tiny" | "type-normal" | any custom string
 */
const CustomTypography: FC<Props> = ({
  children,
  component='p',
  customCls="",
}) => {
  return (
    <Typography className={customCls} component={component}>{children}</Typography>
  );
};

export default CustomTypography;
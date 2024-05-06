import React, { ElementType, FC, PropsWithChildren } from "react";
import { Typography } from '@mui/material';
import './JobCardTypography.scss';

interface Props extends PropsWithChildren {
  component?: ElementType<any, keyof React.JSX.IntrinsicElements>;
  customCls?: string;
}

/**
 * Custom Typography
 * @param component 
 * @param customCls title, sub-title, heading, type-tiny, type-normal or any custom string
 */
const JobCardTypography: FC<Props> = ({
  children,
  component='p',
  customCls="",
}) => {
  return (
    <Typography className={customCls} component={component}>{children}</Typography>
  );
};

export default JobCardTypography;
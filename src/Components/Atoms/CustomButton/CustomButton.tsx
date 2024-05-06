import React, { ElementType, FC, PropsWithChildren } from "react";
import { Button } from '@mui/material';
import './CustomButton.scss';

interface Props extends PropsWithChildren {
  component?: ElementType<any, keyof React.JSX.IntrinsicElements>;
  href?: string;
  fullWidth?: boolean;
  customCls?: string;
}

/**
 * Custom Link
 * @param children 
 * @param component
 * @param href
 * @param fullWidth
 * @param customCls "primary" | "secondary" | any custom string
 */
const CustomButton: FC<Props> = ({
  children,
  component = 'button',
  href = "",
  fullWidth = true,
  customCls = "",
}) => {
  return (
    <Button
      component={component}
      href={href}
      fullWidth={fullWidth}
      className={customCls}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
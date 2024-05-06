import React, { ElementType, FC, PropsWithChildren, ReactNode } from "react";
import { Badge } from '@mui/material';
import './CustomBadge.scss';

interface Props extends PropsWithChildren {
  badgeContent?: ReactNode;
  component?: ElementType<any, keyof React.JSX.IntrinsicElements>;
  customCls?: string;
}

/**
 * Custom Button
 * @param children 
 * @param badgeContent
 * @param component
 * @param customCls "primary" | any custom string
 */
const CustomBadge: FC<Props> = ({
  children,
  component = 'span',
  badgeContent,
  customCls = "",
}) => {
  return (
    <Badge
      component={component}
      className={customCls}
      badgeContent={badgeContent}
    >
      {children}
    </Badge>
  );
};

export default CustomBadge;
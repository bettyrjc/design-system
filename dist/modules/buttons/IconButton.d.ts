import React, { FC } from 'react';
type Color = 'primary' | 'secondary' | 'tertiary';
type Variant = 'filled';
type IconButtonProps = {
    icon: React.ReactNode;
    onClick: () => void;
    color?: Color;
    size?: 'small' | 'normal';
    variant?: Variant;
};
declare const IconButton: FC<IconButtonProps>;
export default IconButton;

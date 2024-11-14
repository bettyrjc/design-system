import React, { FC } from 'react';
type CardProps = {
    children: React.ReactNode;
    className?: string;
    padding?: 'none' | 'small' | 'normal' | 'large';
    center?: boolean;
    onClick?: () => void;
    bordered?: boolean;
};
declare const Card: FC<CardProps>;
export default Card;

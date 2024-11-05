import React from 'react';

import clsx from 'clsx';

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'div';

export type Color =
  | 'white'
  | 'black'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'zinc-500'
  | 'zinc-700'
  | 'violet-500'
  | 'primary'
  | 'primary-dark'
  | 'teal-400'
  | 'error'
  | 'info'
  | 'info-200'
  | 'info-500'
  | 'info-600'
  | 'secondary-500'
  | 'secondary-600'
  | 'secondary-700'
  | 'tertiary-500'
  | 'tertiary-600'
  | 'success'
  | 'amber-50'
  | 'yellow-500'
  | 'red-500'
  | 'green-500'
  | 'pink-500'
  | 'black'
  | 'orange-500'
  | 'coral-500';

export type Size =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type FontWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

type UnderlineOffset = 'auto' | 0 | 1 | 2 | 4 | 8;

export type TypographyProps = {
  children: React.ReactNode;
  as?: As;
  className?: string;
  color?: Color;
  fontWeight?: FontWeight;
  size?: Size;
  leading?: 'none' | 'normal' | 'tight' | 'loose';
  italic?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  inheritedColor?: boolean;
  inheritedSize?: boolean;
  underlineOffset?: UnderlineOffset;
};

const Typography = React.forwardRef(function TypographyWithRef(
  {
    as = 'span',
    className = '',
    color = 'gray-800',
    fontWeight = 'normal',
    size = 'base',
    leading,
    italic = false,
    underline = false,
    uppercase = false,
    capitalize = false,
    inheritedColor = false,
    inheritedSize = false,
    underlineOffset,
    children,
  }: TypographyProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const classes = clsx(
    className,
    underline && 'underline',
    italic && 'italic',
    uppercase && 'uppercase',
    capitalize && 'capitalize',
    !inheritedSize && `text-${size}`,
    `font-${fontWeight}`,
    !inheritedColor && !['error', 'info'].includes(color) && `text-${color}`,
    !inheritedColor && color === 'error' && 'text-error',
    !inheritedColor && color === 'info' &&  'text-info',
    leading === 'tight' && 'leading-tight',
    leading === 'loose' && 'leading-loose',
    leading === 'none' && 'leading-none',
    leading === 'normal' && 'leading-normal',
    underlineOffset !== undefined && underlineOffset !== null && `underline-offset-${underlineOffset}`
  );

  return (
    <>
      {React.createElement(
        as,
        {
          ref,
          className: classes,
        },
        children
      )}
    </>
  );
});

export default Typography;

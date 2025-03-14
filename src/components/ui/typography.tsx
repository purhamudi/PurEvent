// @/components/ui/typography.tsx
import React from "react";
import { cn } from "../../lib/utils"; // Make sure `cn` utility exists

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

export const TypographyH1: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-black lg:text-5xl", className)} {...props} />
);
export const TypographyH2: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-black first:mt-0", className)} {...props} />
);

export const TypographyH3: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight text-black", className)} {...props} />
);

export const TypographyH4: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight text-black", className)} {...props} />
);

export const TypographyH5: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h5 className={cn("scroll-m-20 text-lg font-medium tracking-tight text-black", className)} {...props} />
);

export const TypographyH6: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h6 className={cn("scroll-m-20 text-base font-medium tracking-tight text-black", className)} {...props} />
);

export const TypographySmall: React.FC<TypographyProps> = ({ className, ...props }) => (
  <small className={cn("text-sm font-medium leading-none text-black", className)} {...props} />
);

export const TypographyMuted: React.FC<TypographyProps> = ({ className, ...props }) => (
  <p className={cn("text-sm text-gray-500 text-black", className)} {...props} />
);

export const TypographyP: React.FC<TypographyProps> = ({ className, ...props }) => (
  <p className={cn("leading-7 [&:not(:first-child)]:mt-6 text-black", className)} {...props} />
);
export const TypographyA: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, ...props }) => (
  <a className={cn("text-blue-600 hover:underline", className)} {...props} />
);
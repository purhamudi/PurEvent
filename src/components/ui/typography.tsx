// @/components/ui/typography.tsx
import React from "react";
import { cn } from "../../lib/utils"; // Make sure `cn` utility exists

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

export const TypographyH1: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props} />
);
export const TypographyH2: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props} />
);

export const TypographyP: React.FC<TypographyProps> = ({ className, ...props }) => (
  <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
);

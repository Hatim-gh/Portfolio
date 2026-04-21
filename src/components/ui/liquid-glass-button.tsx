"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium outline-none transition-[color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-white hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-indigo-300/60",
        outline:
          "border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-11 px-7",
        xl: "h-12 px-8",
        xxl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  }
);

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <Comp
        data-slot="button"
        className={cn("relative", liquidbuttonVariants({ variant, size, className }))}
        {...props}
      >
        <div className="absolute left-0 top-0 z-0 h-full w-full rounded-full shadow-[0_0_8px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.18),inset_1px_1px_1px_rgba(255,255,255,0.22),inset_-1px_-1px_1px_rgba(255,255,255,0.08),inset_0_0_14px_rgba(255,255,255,0.1)] transition-all" />
        <div
          className="absolute left-0 top-0 isolate -z-10 h-full w-full overflow-hidden rounded-full bg-white/[0.05]"
          style={{ backdropFilter: 'url("#container-glass")' }}
        />
        <div className="pointer-events-none z-10">{children}</div>
        <GlassFilter />
      </Comp>
    </>
  );
}

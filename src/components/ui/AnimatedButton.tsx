import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) {
    return node.map(extractText).filter(Boolean).join(" ").trim();
  }
  if (React.isValidElement(node) && (node.props as any)?.children) {
    return extractText((node.props as any).children);
  }
  return "";
}

type BaseProps = {
  className?: string;
  children: React.ReactNode;
  marqueeText?: string;
  spacing?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    as?: "button";
  };

type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    as: "a";
    href: string;
  };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, "children"> & {
    as: "link";
    to: string;
  };

export type AnimatedButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export const AnimatedButton = React.forwardRef<any, AnimatedButtonProps>((props, ref) => {
  const { className, children, marqueeText, spacing, ...rest } = props;

  const resolvedText = marqueeText || extractText(children) || "MS World Travels";
  // Calculate sensible spacing so marquee doesn't collide with text-shadow
  const calculatedSpacing = spacing || `${Math.max(6, Math.ceil(resolvedText.length * 0.72))}em`;

  const innerContent = (
    <>
      <span className="btn-text">{children}</span>
      <span className="btn-marquee-wrap" aria-hidden="true">
        <span
          className="marquee"
          style={{
            ["--spacing" as any]: calculatedSpacing,
            ["--end" as any]: calculatedSpacing,
          }}
        >
          {resolvedText}
        </span>
      </span>
    </>
  );

  const combinedClassName = cn("btn-23", className);

  if (props.as === "link") {
    const { as, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link ref={ref} className={combinedClassName} {...linkProps}>
        {innerContent}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as, ...anchorProps } = rest as ButtonAsAnchor;
    return (
      <a ref={ref} className={combinedClassName} {...anchorProps}>
        {innerContent}
      </a>
    );
  }

  const { as, type = "button", ...buttonProps } = rest as ButtonAsButton;
  return (
    <button ref={ref} type={type} className={combinedClassName} {...buttonProps}>
      {innerContent}
    </button>
  );
});

AnimatedButton.displayName = "AnimatedButton";

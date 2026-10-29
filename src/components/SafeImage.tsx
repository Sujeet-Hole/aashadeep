// <img> that hides itself if the file fails to load (including failures that happen before
// hydration), so decorative photos over a tinted backdrop never show a broken-image icon.
import type { ImgHTMLAttributes } from "react";

export function SafeImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

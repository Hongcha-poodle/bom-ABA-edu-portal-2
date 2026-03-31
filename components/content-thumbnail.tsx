import Image from "next/image";
import type { CSSProperties } from "react";

import type { VisualAsset } from "@/lib/content-data";

type ContentThumbnailProps = {
  asset: VisualAsset;
  className?: string;
  sizes?: string;
};

export function ContentThumbnail({
  asset,
  className = "aspect-[1.6/1] w-full",
  sizes
}: ContentThumbnailProps) {
  const style = {
    background: asset.background
  } satisfies CSSProperties;

  return (
    <div className={`overflow-hidden border border-black/5 ${className}`} style={style}>
      <Image
        src={asset.thumbnailSrc}
        alt={asset.alt}
        width={1200}
        height={750}
        className="h-full w-full object-cover"
        loading="lazy"
        unoptimized
        sizes={sizes}
      />
    </div>
  );
}

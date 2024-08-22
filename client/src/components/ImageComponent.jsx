import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function ImageComponent({
  src,
  useHash,
  styling,
  useWidth,
  useHeight,
}) {
  const [ImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = src;
  }, [src]);

  return (
    <>
      {!ImageLoaded ? (
        <Blurhash
          hash={useHash}
          width={useWidth}
          height={useHeight}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={styling}
        />
      ) : (
        <img src={src} alt="" className={styling} />
      )}
    </>
  );
}

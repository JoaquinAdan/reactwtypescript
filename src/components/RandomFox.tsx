import { useRef, useEffect, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

type LazyImageProps = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

const transparentBackground =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';

export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(transparentBackground);

  useEffect(() => {
    if (isLazyLoaded) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
          observer.disconnect();
          setIsLazyLoaded(true);
          if (typeof onLazyLoad === 'function')
            if (node.current) onLazyLoad(node.current);
        }
      });
    });
    if (node.current) observer.observe(node.current);
    return () => observer.disconnect();
  }, [src, onLazyLoad, isLazyLoaded]);

  useEffect(() => {}, [currentSrc]);

  return <img src={currentSrc} ref={node} {...imgProps} />;
};

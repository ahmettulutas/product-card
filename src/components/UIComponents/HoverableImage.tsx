import * as React from "react";

type ImageProps = {
  url?: string;
};

const HoverableImage: React.FC<ImageProps> = ({ url }) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const handleHover = (event: React.MouseEvent<HTMLImageElement>) => {
    const { pageX, pageY } = event;
    if (imgRef.current) {
      const { left, top } = imgRef.current.getBoundingClientRect();
      const x = pageX - left;
      const y = pageY - top;
      imgRef.current.style.transform = "scale(1.3)";
      imgRef.current.style.transformOrigin = `${x}px ${y}px`;
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1)";
      imgRef.current.style.transition = "transform 0.2s ease-in-out";
    }
  };
  return (
    <div className="overflow-hidden relative h-full">
      {!loaded && (
        <div
          style={{ height: 380 }}
          className="flex animate-pulse flex-row items-center w-full bg-gray-300 justify-center space-x-5"
        ></div>
      )}
      <img
        className="aspect-square object-cover h-auto w-full transition-all duration-900"
        ref={imgRef}
        onMouseMove={handleHover}
        onMouseLeave={handleMouseLeave}
        onLoad={() => setLoaded(true)}
        src={url}
      />
    </div>
  );
};
export default HoverableImage;

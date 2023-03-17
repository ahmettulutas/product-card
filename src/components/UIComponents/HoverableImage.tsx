import * as React from "react";

type ImageProps = {
  url?: string,
}

const HoverableImage: React.FC<ImageProps> = ({ url }) => {

  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const handleHover = (event:React.MouseEvent<HTMLImageElement>) => {
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
      <img
        className="aspect-square object-cover h-auto w-full transition-all duration-900"
        ref={imgRef}
        onMouseMove={handleHover}
        onMouseLeave={handleMouseLeave}
        src={url}/>
    </div>
  );
};
export default HoverableImage;
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              src="https://res.cloudinary.com/dfpgpcaso/image/upload/v1788711121/banner_cyh7fs.png"
              alt="Banner 1"
            />
          </div>

          <div className="embla__slide">
            <img
              src="https://res.cloudinary.com/dfpgpcaso/image/upload/v1788711121/Untitled-1_evwolh.png"
              alt="Banner 2"
            />
          </div>

          <div className="embla__slide">
            <img
              src="https://res.cloudinary.com/dfpgpcaso/image/upload/v1788711121/anh_1_ficlmx.png"
              alt="Banner 3"
            />
          </div>
        </div>
</div>
</div>)}
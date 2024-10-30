import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const DynamicImage = ({ image }: { image: string[] }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
      {image?.map((imgSrc, index) => (
        <div key={index}>
          <img
            src={imgSrc}
            alt={`Service Image ${index + 1}`}
            className="rounded-lg"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default DynamicImage;

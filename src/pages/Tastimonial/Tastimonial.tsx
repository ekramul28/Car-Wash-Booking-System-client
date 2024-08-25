import Rating from "@/components/rating/Rating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    feedback:
      "Excellent service! My car looks brand new after the wash. Highly recommended!",
    image:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1724584237/download_2_tzpo6i.jpg",
  },
  {
    name: "Jane Smith",
    rating: 4,
    feedback:
      "Good overall experience. The staff was friendly, and the wash was thorough.",
    image:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1724584237/download_1_tog8gl.jpg",
  },
  {
    name: "Michael Johnson",
    rating: 5,
    feedback:
      "Fantastic job! The detailing was perfect, and they even cleaned the interior thoroughly.",
    image:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1724584237/download_3_tt8act.jpg",
  },
  {
    name: "Emily Davis",
    rating: 3,
    feedback:
      "The wash was decent, but there were a few spots missed. Could be better.",
    image:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1724584236/istockphoto-1392528328-612x612_pwigi5i.jpg",
  },
  {
    name: "Daniel Wilson",
    rating: 4,
    feedback:
      "Solid service with quick turnaround. I'll be coming back for sure!",
    image:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1724584236/istockphoto-1388645967-612x612_jdssyw.jpg",
  },
  {
    name: "Sophia Martinez",
    rating: 5,
    feedback: "Amazing attention to detail! My car has never looked this good.",
    image:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1724584236/download_4_k7kpvn.jpg",
  },
  {
    name: "David Lee",
    rating: 4,
    feedback:
      "Great service, but a bit pricey. The quality justifies it though.",
    image:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1724584236/istockphoto-1331257339-612x612_uos47h.jpg",
  },
  {
    name: "Olivia Brown",
    rating: 5,
    feedback: "Best car wash I've ever had! The staff was very professional.",
    image:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1724584236/download_5_gldbtl.jpg",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative w-full h-[400px] mx-auto my-6">
      <Carousel className="relative h-full">
        <CarouselContent
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          className="flex transition-transform duration-500"
        >
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center space-x-4 p-4 h-[400px] text-black bg-white">
                <div className="w-1/2">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-[80%] object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg roboto-bold">{review.name}</p>
                  <p className="text-sm my-3">
                    <Rating value={review.rating} count={5}></Rating>
                  </p>

                  <p className="mt-2 roboto-medium">{review.feedback}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Buttons should be within the Carousel component */}
        <CarouselPrevious
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white"
        />
        <CarouselNext
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white"
        />
      </Carousel>
    </div>
  );
};

export default Testimonial;

import Slider, { Settings } from 'react-slick';
import {
  Box,
  Image,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import img1 from '../../assets/images/c1.jpg';
import img2 from '../../assets/images/c2.jpg';
import img3 from '../../assets/images/c3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const arrowSize = useBreakpointValue({ base: '20px', md: '40px' });
  const arrowPosition = useBreakpointValue({ base: '5px', md: '10px' });
  const imageHeight = useBreakpointValue({ base: '250px', md: '500px' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <NextArrow size={arrowSize} position={arrowPosition} />,
    prevArrow: <PrevArrow size={arrowSize} position={arrowPosition} />,
  
    customPaging: (i) => (
      <Box
        p="0"
        justifyContent="center"
        width="30px"
        height="10px"
        m="0"
        border="1px black solid"
        opacity={0.8}
        _hover={{ opacity: 1 }}
        bg={i === currentSlide ? "gray" : "white"}
      />
    ),
  };

  const slides = [
    { id: 1, src: img1, alt: "Slide 1" },
    { id: 2, src: img2, alt: "Slide 2" },
    { id: 3, src: img3, alt: "Slide 3" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.id}>
            <Image src={slide.src} alt={slide.alt} width="100%" height={imageHeight} />
          </Box>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick, size, position }: { onClick?: () => void, size?: string, position?: string }) => {
  return (
    <IconButton
      variant="solid"
      aria-label="next-slide"
      icon={<ChevronRightIcon boxSize={size} />}
      onClick={onClick}
      position="absolute"
      right={position}
      borderRadius="none"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const PrevArrow = ({ onClick, size, position }: { onClick?: () => void, size?: string, position?: string }) => {
  return (
    <IconButton
      variant="solid"
      aria-label="prev-slide"
      icon={<ChevronLeftIcon boxSize={size} />}
      onClick={onClick}
      position="absolute"
      left={position}
      borderRadius="none"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

export default Carousel;

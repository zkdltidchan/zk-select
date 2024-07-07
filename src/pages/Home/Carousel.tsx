import Slider, { Settings } from 'react-slick';
import { 
  Box, 
  Image,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = () => {
  const arrowSize = useBreakpointValue({ base: '20px', md: '40px' });
  const arrowPosition = useBreakpointValue({ base: '5px', md: '10px' });
  const imageHeight = useBreakpointValue({ base: '300px', md: '600px' });

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow size={arrowSize} position={arrowPosition} />,
    prevArrow: <PrevArrow size={arrowSize} position={arrowPosition} />,
    appendDots: dots => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px"
        }}
      >
        {dots}
      </div>
    ),
  };

  const slides = [
    { id: 1, src: "https://picsum.photos/1600/600?random=1", alt: "Slide 1" },
    { id: 2, src: "https://picsum.photos/1600/600?random=2", alt: "Slide 2" },
    { id: 3, src: "https://picsum.photos/1600/600?random=3", alt: "Slide 3" },
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

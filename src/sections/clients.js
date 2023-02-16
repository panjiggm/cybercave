/** @jsx jsx */
import { jsx, Box, Button, Container, Image } from 'theme-ui';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import alfajar from 'assets/clients/alfajar.png';
import greencover from 'assets/clients/greencover.png';
import muhammad from 'assets/clients/muhammad.png';
import performate from 'assets/clients/performate.png';
import rekacipta from 'assets/clients/reka-cipta.png';
import limaevent from 'assets/clients/lima-event.png';
import tkkhalifah from 'assets/clients/tk-khalifah.png';
import yayasan from 'assets/clients/yayasan-ilmu.png';
import SectionHeader from 'components/section-header';

const clients = [
  {
    id: 1,
    name: 'alfajar',
    logo: alfajar,
  },
  {
    id: 2,
    name: 'greencover',
    logo: greencover,
  },
  {
    id: 3,
    name: 'muhammad',
    logo: muhammad,
  },
  {
    id: 4,
    name: 'performate',
    logo: performate,
  },
  {
    id: 5,
    name: 'rekacipta',
    logo: rekacipta,
  },
  {
    id: 6,
    name: 'limaevent',
    logo: limaevent,
  },
  {
    id: 7,
    name: 'tkkhalifah',
    logo: tkkhalifah,
  },
  {
    id: 8,
    name: 'yayasan',
    logo: yayasan,
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="whiteButton"
      className={className}
      sx={styles.paginationButton}
      onClick={onClick}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const Clients = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickArrow control="next" />,
    prevArrow: <SlickArrow control="prev" />,
    responsive: [
      {
        breakpoint: 100000,
        settings: 'unslick',
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeader
          slogan="Meet Our Clients"
          title="Kami melayani mereka dan mereka bahagia"
        />
        <Slider sx={styles.clients} {...settings}>
          {clients?.map((client) => (
            <Box key={client.id} as="figure" sx={styles.logo}>
              <Image
                loading="lazy"
                src={client.logo}
                alt={client.name}
                sx={{ height: 65 }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
    mt: [50, 50, 50, 60, 50, 80],
    mb: [50, 50, 50, 60, 50, 80],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    pt: [0, 0, 20, 20, 20, 1],
    '&.slick-slider': {
      marginBottom: '40px',
    },
    '.slick-track': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  logo: {
    display: 'flex !important',
    justifyContent: 'center',
    mx: '10px',
    ':focus': {
      outline: 'none',
    },
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
};

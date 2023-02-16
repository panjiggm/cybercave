/** @jsx jsx */
import { jsx, Box, Container, Text, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';

import GalleryCard from 'components/gallery-card';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import gallery1 from 'assets/gallery/minibootcamp.jpg';
import gallery2 from 'assets/gallery/training.png';
import gallery3 from 'assets/gallery/mlf.png';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Mini Bootcamp - Penetration Test',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Training for Non IT',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Muslim Life Fest - Ticketing System',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeader
          sx={styles.heading}
          slogan="Events"
          title="Kegiatan dan partisipasi Cybercave"
          isWhite={true}
        />
        <Box
          as={Masonry}
          options={masonryOptions}
          sx={styles.galleryWrapper}
        >
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button variant="muted" sx={styles.button}>
          <Text>Explore More</Text> <RiArrowRightSLine size={20} />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};

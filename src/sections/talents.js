/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import PaymentThumb from 'assets/undraw_talent.svg';
import PaymentPattern from 'assets/payment-pattern.png';

const data = {
  subTitle: 'OUR TALENTS',
  title: 'Terdiri dari berbagai bidang keahlian yang berpengalaman',
  description:
    'Talent Cybercave dibekali dengan berbagai sertifikasi keahlian dibidang kemanan cyber dan jaringan. Juga tim engineer yang sudah berpengalaman merancang beragam jenis aplikasi.',
  btnName: 'Learn More',
  btnURL: '/about',
};

export default function Talent() {
  return (
    <section sx={{ variant: 'section.securePayment' }}>
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={PaymentThumb} alt={data.title} />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  bgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: -1,
    width: [
      '100%',
      null,
      null,
      'calc(50% + 400px)',
      'calc(50% + 480px)',
      'calc(50% + 570px)',
      null,
      'calc(50% + 625px)',
    ],
    backgroundImage: `url(${PaymentPattern})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    mb: -2,
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ['100%', 420, 480, 380, 500, 570],
    mx: 'auto',
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    pt: [0, null, null, 4, '50px', null, 4, '80px'],
    pl: [0, null, null, 40, '90px'],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
};

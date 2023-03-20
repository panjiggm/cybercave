/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Experts from 'assets/undraw_experts.svg';
import Amanah from 'assets/undraw_business_deal.svg';
import Professional from 'assets/undraw_certificate.svg';

const data = [
  {
    id: 1,
    imgSrc: Experts,
    altText: 'Experts',
    title: 'Berpengalaman',
    text: 'Dengan pengalaman 10 tahun kami percaya diri terhadap produk dan layanan yang kami berikan.',
  },
  {
    id: 2,
    imgSrc: Professional,
    altText: 'Professional',
    title: 'Profesional',
    text: 'Berkapasitas memberikan hasil dan pelayanan yang sesuai dengan apa yang client harapkan.',
  },
  {
    id: 3,
    imgSrc: Amanah,
    altText: 'Amanah',
    title: 'Amanah',
    text: 'Layanan terbaik merupakan hal yang wajib kami tunaikan, karena itu merupakan hak client.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }}>
      <Container>
        <SectionHeader
          slogan="Why Choose Us"
          title="Komitmen Kami untuk Anda"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};

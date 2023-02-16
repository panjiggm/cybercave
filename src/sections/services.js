/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

import { BsPeopleFill } from 'react-icons/bs';
import { ImLab } from 'react-icons/im';
import { SiSmartthings } from 'react-icons/si';
import { MdWeb } from 'react-icons/md';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <MdWeb color="#df5e6b" size={30} />,
    bgColor: '#ffecef',
    title: 'Modern Web App',
    text: 'Webiste company profile, landing page, atau fullstack web app? Kami akan membantu membuatnya untuk anda dengan tech stack yang modern dan tampilan yang apik.',
  },
  {
    id: 2,
    icon: <ImLab color="#5fab7a" size={30} />,
    bgColor: '#e4ffee',
    title: 'Penetration Testing',
    text: 'Penetration Test (PENTEST) untuk mengevaluasi keamanan webiste, memberikan solusi perbaikan "hole" yang mungkin ditemukan agar keamanan anda menjadi lebih baik.',
  },
  {
    id: 3,
    icon: <SiSmartthings color="#56b6e1" size={30} />,
    bgColor: '#e0f1f9',
    title: 'Internet of Things',
    text: 'Segala sesuatu dapat terhubung dan dikendalikan melalui jaringan internet. Salah satu produk unggulan IoT kami adalah Smart Laundy munggunakan QR payment.',
  },
  {
    id: 4,
    icon: <FaLaptopCode color="#9d56c0" size={30} />,
    bgColor: '#f3e1fc',
    title: 'Training for IT',
    text: 'Kami menyediakan Trainer yang sudah memiliki Sertifikasi Internasional untuk memberikan pelatihan Basic Digital Forensic dan Basic Web Hacking/ Penetration Testing.',
  },
  {
    id: 5,
    icon: <FaLaptop color="#666666" size={30} />,
    bgColor: '#e4e4e4',
    title: 'Training for Non IT',
    text: 'Training Cyber Security Awareness for Non-IT: Karyawan yang bekerja di IT maupun non-IT perlu diedukasi Cyber Security Awareness demi keamanan aset perusahaan.',
  },
  {
    id: 6,
    icon: <BsPeopleFill color="#D6AB00" size={30} />,
    bgColor: '#f6eecc',
    title: 'HR Consultant',
    text: 'Indikator kinerja serta beban kerja pada karyawan harus diperhitungkan secara tepat sehingga tujuan perusahaan maupun organisasi dapat tercapai lebih optimal.',
  },
];

export default function Services() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Our Services"
          title="Solusi yang kami tawarkan untuk anda"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              color={item.color}
              bgColor={item.bgColor}
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
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};

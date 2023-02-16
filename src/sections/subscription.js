/** @jsx jsx */
import Logo from 'components/logo';
import Link from 'next/link';
import { jsx, Box, Flex, Container, Text } from 'theme-ui';
import LogoWhite from 'assets/logo-cybercave.png';
import { RiInstagramFill } from 'react-icons/ri';

const Subscription = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.content}>
          <Flex sx={styles.form}>
            <Box sx={styles.leftSide}>
              <Box>
                <Logo src={LogoWhite} />
                <Text
                  sx={styles.subTitle}
                  style={{ marginTop: 10 }}
                  variant="secondary"
                >
                  PT Cyber Cave Indonesia hadir sebagai partner yang
                  fokus memberikan solusi bagi kebutuhan teknologi dan
                  performance management bisnis anda.
                </Text>
              </Box>
              <Link href="https://instagram.com/cybercave.id">
                <a target="_blank">
                  <RiInstagramFill size={24} color="#ccc" />
                </a>
              </Link>
            </Box>
            <Box sx={styles.rightSide}>
              <Text as="h3" variant="secondary">
                Get In Touch
              </Text>
              <Text sx={styles.subTitle}>
                ALAMANDA TOWER, Harka office lantai 2 Unit H1 Jl. TB.
                Simatupang No.22-26, Cilandak Jakarta Selatan 12430
              </Text>
              <br />
              <Text sx={styles.subTitle}>0851-6285-5162</Text>
              <Text sx={styles.subTitle}>
                customer.service@cybercave.id
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscription;

const styles = {
  section: {
    backgroundColor: '#020718',
    pt: '60px',
    pb: '70px',
  },
  heading: {
    color: '#fff',
    mb: [30, 30, 50],
    h2: {
      fontSize: [22, 28, '36px'],
      lineHeight: 1.4,
      letterSpacing: 'heading',
    },
    p: {
      lineHeight: [2, 3.12],
      mt: [20, 0],
      letterSpacing: 'heading',
      color: '#ffffff',
    },
  },
  content: {
    // maxWidth: '555px',
    margin: '0 auto',
    // textAlign: 'center',
  },
  leftSide: {
    maxWidth: '555px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 4,
  },
  rightSide: {
    maxWidth: 330,
  },
  form: {
    display: ['flex'],
    justifyContent: 'space-between',
    gap: 4,
    flexDirection: ['column', 'column', 'row'],
  },
  subTitle: {
    fontSize: 1,
    fontWeight: 400,
    lineHeight: [1.85, null, null, 1.9, 2],
    color: '#ccc',
  },
};

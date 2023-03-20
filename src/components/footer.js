/** @jsx jsx */
import { jsx, Box, Flex, Text, Container } from 'theme-ui';
import { Link } from 'components/link';

const navItems = [
  {
    id: 1,
    link: '/',
    title: 'Home',
  },
  {
    id: 2,
    link: '/services',
    title: 'Services',
  },
  {
    id: 3,
    link: '/about',
    title: 'About',
  },
  {
    id: 4,
    link: '/contact',
    title: 'Contact',
  },
  {
    id: 5,
    link: '/event',
    title: 'Event',
  },
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Flex sx={styles.content}>
          <Flex sx={styles.copyright}>
            <Text as="span">2023 © All right reserved</Text>
          </Flex>

          <Flex as="ul" sx={styles.nav}>
            {/* {navItems?.map((item) => (
              <li key={item.id}>
                <Link path={item.link}>{item.title}</Link>
              </li>
            ))} */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: '#020718',
  },
  content: {
    alignItems: 'center',
    borderTop: `1px solid #bbb`,
    display: ['block', null, null, null, 'flex'],
    justifyContent: 'space-between',
    paddingTop: '20px',
    paddingBottom: '60px',
    textAlign: ['center', null, null, null],
    '@media only screen and (max-width: 400px)': {
      pb: 50,
    },
  },
  copyright: {
    display: ['flex', 'flex'],
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: ['center', null, null, null],
    span: {
      fontSize: '14px',
      lineHeight: [1.8, null, null, 1.29],
      color: 'white',
      marginTop: 1,
      display: 'inline-flex',
    },
  },
  nav: {
    listStyle: 'none',
    alignItems: 'center',
    padding: 0,
    // display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, null, null],
    mt: [5, null, null, null, 0],
    li: {
      '+ li': {
        marginLeft: [4],
      },
      '@media only screen and (max-width: 400px)': {
        mb: 4,
      },
      a: {
        color: 'white',
        display: 'inline-flex',
        textAlign: 'right',
        textDecoration: 'none',
      },
    },
  },
};

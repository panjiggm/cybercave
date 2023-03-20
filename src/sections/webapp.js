/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import SectionHeader from 'components/section-header'

const Webapp = () => {
  return (
    <Box  as="section" sx={styles.section}>
      <Container>
        <SectionHeader
          slogan="Modern Web App"
          title="Menjamin keamanan anda"
        />
      </Container>
    </Box>
  )
}

export default Webapp

const styles = {
  section: {
    pt: [140, 140, 140, 120, 110, 130],
    pb: [30, 40, 50, 60, 50, 80],
    mt: -110,
    mb: [50, 50, 50, 60, 50, 80],
    backgroundColor: 'secondary'
  },
}
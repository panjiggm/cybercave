/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  icon,
  bgColor,
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={{ backgroundColor: bgColor, ...styles.icon }}>
        {icon}
      </Box>

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  icon: {
    borderRadius: 15,
    px: 4,
    py: 3,
    mr: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: '2px',
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};

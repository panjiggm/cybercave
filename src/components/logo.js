/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, sticky, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        textDecoration: 'none',
        mr: 15,
      }}
      {...rest}
    >
      <Image
        src={src}
        alt="startup landing logo"
        width={38}
        height={35}
      />
      <Text
        style={{
          color: sticky ? '#333' : '#ffff',
          marginLeft: 8,
          fontSize: 22,
        }}
      >
        cybercave
      </Text>
    </Link>
  );
}

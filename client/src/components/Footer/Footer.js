import React from 'react';
import { Anchor, Box, Text } from 'grommet';
import { Facebook, Twitter, Youtube } from 'grommet-icons';

const links = [
  {
    label: 'Watch us on Youtube',
    url: 'https://www.youtube.com/user/SAPtvCIS',
    icon: <Youtube color="neutral-3" size="medium" />
  },
  {
    label: 'Read us on Facebook',
    url: 'https://www.facebook.com/sapcis',
    icon: <Facebook color="neutral-3" size="medium" />
  },
  {
    label: 'Follow us on Twitter',
    url: 'https://twitter.com/sap_cis',
    icon: <Twitter color="neutral-3" size="medium" />
  }
];

const Footer = props => {
  return (
    <Box direction="row" gap="large" justify="center" margin={{ vertical: 'large' }}>
      {links.map(link =>
        props.size !== 'small' ? (
          <Anchor
            target="_blank"
            a11yTitle={link.label}
            href={link.url}
            icon={link.icon}
            label={<Text size="medium">{link.label}</Text>}
          />
        ) : (
          <Anchor target="_blank" a11yTitle={link.label} href={link.url} icon={link.icon} />
        )
      )}
    </Box>
  );
};

export default Footer;

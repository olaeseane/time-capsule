import React from 'react';
import { Box, Button, Heading, Image, Paragraph } from 'grommet/es6';

import logo from './logo.svg';
import { CircleQuestion } from 'grommet-icons/es6';

const Header = props => (
  <Box>
    <Box
      align="center"
      alignContent="stretch"
      alignSelf="center"
      direction="row"
      gap="small"
      justify="between"
      margin="xsmall"
      width="xlarge"
    >
      <Image margin={{ horizontal: 'small', vertical: 'small' }} src={logo} />
      <Button
        margin={{ horizontal: 'small', vertical: 'xsmall' }}
        focusIndicator="false"
        icon={<CircleQuestion color="neutral-3" />}
        label="Подробнее о смарт-контракте"
        hoverIndicator="background"
        plain="true"
        onClick={props.onOpen}
      />
    </Box>
    <Box
      align="center"
      alignContent="stretch"
      alignSelf="center"
      direction="column"
      margin="xsmall"
      gap="xsmall"
      width="xlarge"
      justify="between"
    >
      <Heading
        margin={{ horizontal: 'small', vertical: 'xsmall' }}
        color="neutral-4"
        textAlign="center"
        level="1"
      >
        Летняя студия SAP 2019 «Данные есть!»
      </Heading>
      <Paragraph margin={{ horizontal: 'small' }} textAlign="center" size="large">
        Предсказания наших гостей сохранены в смарт-контракте в блокчейне и будут доступны летом
        2020 года
      </Paragraph>
    </Box>
  </Box>
);

export default Header;

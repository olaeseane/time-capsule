import React from 'react';
import { Box, Button, Image, Layer, Paragraph, Text, ThemeContext } from 'grommet';
import { DocumentImage, FormClose } from 'grommet-icons/es6';

import { Stack } from 'grommet';

class Item extends React.Component {
  state = { showPrediction: false };

  render() {
    const { name, cid, date, gridArea, size } = this.props;
    const { showPrediction } = this.state;

    const openPrediction = () => this.setState({ showPrediction: true });
    const closePrediction = () => this.setState({ showPrediction: false });
    // const ipfsURL = `http://127.0.0.1:8080/ipfs/${cid}`;
    const ipfsURL = `https://ipfs.infura.io/ipfs/${cid}`;

    console.log('item=', size);
    const elementImage = (
      <Layer position="center" onEsc={closePrediction}>
        <Stack anchor="top-right">
          <Box
            height={size === 'small' ? 'large' : 'medium'}
            width={size === 'small' ? 'large' : 'medium'}
            background={{ color: 'light-3' }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Image fit="contain" src={ipfsURL} />
          </Box>
          <Box background="dark-2" pad="none">
            <Button icon={<FormClose />} onClick={closePrediction} />
          </Box>
        </Stack>
      </Layer>
    );

    let elementWarning = (
      <Layer position="center" onEsc={closePrediction}>
        <Stack anchor="top-right">
          <Box
            height="medium"
            width="large"
            background={{ color: 'light-3' }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Paragraph textAlign="center" size="large" margin="large">
              Cогласно условиям смарт-контракта, предсказания станут доступными летом 2020 года в
              момент открытия онлайн-шоу «Летняя студия SAP 2020»
            </Paragraph>
          </Box>
          <Box background="dark-2" pad="none">
            <Button icon={<FormClose />} onClick={closePrediction} />
          </Box>
        </Stack>
      </Layer>
    );

    return (
      <Box>
        {showPrediction && elementWarning}

        <Box direction="column" round="small" gridArea={gridArea} background="dark-2">
          <Text weight="bold" size="xxlarge" margin={{ top: 'medium' }} textAlign="center">
            {name}
          </Text>
          <Text margin="xsmall" textAlign="center">
            Дата предсказания: {date}
          </Text>
          <Text size="xsmall" margin="xsmall" textAlign="center">
            Хэш: {cid}
          </Text>
          <Box pad="small">
            <ThemeContext.Extend
              value={{
                button: {
                  border: {
                    radius: '5px',
                    width: '1px'
                  }
                }
              }}
            >
              <Button
                alignSelf="center"
                icon={<DocumentImage />}
                label="Просмотр"
                onClick={openPrediction}
              />
            </ThemeContext.Extend>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Item;

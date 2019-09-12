import React from 'react';
import { ThemeContext, Box, Button, Heading, Layer, Paragraph, Anchor } from 'grommet';

class HelpPage extends React.Component {
  render() {
    const { onClose } = this.props;

    return (
      <Layer position="right" full="vertical" onEsc={onClose}>
        <Box pad={{ horizontal: 'medium' }}>
          <Heading level="2">Справка</Heading>
          <Paragraph margin={{ bottom: 'xsmall', top: 'xsmall' }}>
            Летом 2018 года мы провели летнюю студию SAP
            <br />
            <Anchor
              target="_blank"
              href="https://www.youtube.com/watch?v=fbd2vQthJdE&t=4559s"
              label="«Данные есть!»"
            />
          </Paragraph>
          <Paragraph margin={{ bottom: 'xsmall', top: 'xsmall' }}>
            Гостей студии мы попросили предсказать&nbsp;
            <i>
              как будет выглядеть противостояние искусственного интеллекта и человека через 5 и 10
              лет.
            </i>
          </Paragraph>
          <Paragraph margin={{ bottom: 'xsmall', top: 'xsmall' }}>
            Ответы-предсказания были оцифрованы в изображения, и хэши* этих изображений сохранены в
            смарт контракте в блокчейн сети Ethereum по адресу:
            <Anchor
              target="_blank"
              href="https://ropsten.etherscan.io/address/0x51b93999044eacff450752ecf4cebf0fc5abf343#code"
              label=" 0x51b93999044eacff450752ecf4cebf0fc5abf343"
            />
          </Paragraph>
          <Paragraph margin={{ bottom: 'medium', top: 'xsmall' }}>
            В 2020 году мы снова проведем нашу Летнюю Студию SAP и уже во время первого эфира на
            этом сайте будет открыт доступ к ответам-предсказаниям 2019 года.
          </Paragraph>
          <Paragraph margin={{ bottom: 'xsmall', top: 'xsmall' }} size="small">
            *Хэш (cid) - это строка, состоящая из букв и цифр фиксированной длины строго
            соответствующая изображению). Хэш позволяет гарантировать, что ответы-предсказания не
            могут быть незаметно изменены, так как при любом изменении (даже в одном знаке) хэш
            будет абсолютно другой.
          </Paragraph>
          <Box align="center" margin={{ vertical: 'medium' }}>
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
              <Button label="Закрыть" onClick={onClose} />
            </ThemeContext.Extend>
          </Box>
        </Box>
      </Layer>
    );
  }
}

export default HelpPage;

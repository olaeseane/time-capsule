import React, { Component } from 'react';

import { Box, ResponsiveContext, Grommet, Grid } from 'grommet';
// import { Spinning } from 'grommet-controls';
import { Spinning } from 'grommet-controls/components/Spinning/Spinning';

import Header from '../Header';
import Footer from '../Footer';
import Item from '../Item';
import HelpPage from '../HelpPage';

import { dark } from 'grommet/themes';

import CapsuleContractInterface from '../../contracts/Capsule.json';

import getWeb3 from '../../utils/getWeb3';

class App extends Component {
  state = { showHelp: false, predictions: null };

  async componentDidMount() {
    try {
      let predictions = [];
      const web3 = await getWeb3();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CapsuleContractInterface.networks[networkId];
      const contract = new web3.eth.Contract(
        CapsuleContractInterface.abi,
        deployedNetwork && deployedNetwork.address
      );
      const number = await contract.methods.getPredictionsNumber().call();
      for (let i = 0; i < number; i++) {
        const { cid, name, date } = await contract.methods.predictions(i).call();
        predictions.push({ cid, name, date });
      }
      this.setState(state => ({
        ...state,
        predictions: [...predictions]
      }));
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    }
  }

  render() {
    const { showHelp, predictions } = this.state;

    if (predictions === null) {
      return (
        <Grommet style={{ height: '100vh' }} theme={dark}>
          <Box
            align="center"
            justify="center"
            pad="small"
            fill="vertical"
            background={{ dark: true }}
          >
            <Spinning kind="cube-grid" color="accent-4" size="xlarge" />
          </Box>
        </Grommet>
      );
    }

    const closeHelp = () => this.setState({ showHelp: false });
    const openHelp = () => this.setState({ showHelp: true });

    let helpElement = <HelpPage onClose={closeHelp} />;
    return (
      <Grommet theme={dark}>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <Header onOpen={openHelp} />
              {showHelp && helpElement}
              <Box background="light-2" align="center">
                {size !== 'small' ? (
                  <Grid
                    rows={['small', 'small', 'small']}
                    columns={['medium', 'medium']}
                    gap="medium"
                    align="stretch"
                    margin="large"
                    areas={[
                      { name: 'item_1', start: [0, 0], end: [0, 0] },
                      { name: 'item_2', start: [1, 0], end: [1, 0] },
                      { name: 'item_3', start: [0, 1], end: [0, 1] },
                      { name: 'item_4', start: [1, 1], end: [1, 1] },
                      { name: 'item_5', start: [0, 2], end: [0, 2] }
                    ]}
                  >
                    {predictions.map((p, i) => (
                      <Item key={i} {...p} gridArea={`item_${i + 1}`} />
                    ))}
                  </Grid>
                ) : (
                  <Grid
                    rows={['small', 'small', 'small', 'small', 'small']}
                    columns={['medium']}
                    gap="medium"
                    align="stretch"
                    margin="large"
                    areas={[
                      { name: 'item_1', start: [0, 0], end: [0, 0] },
                      { name: 'item_2', start: [0, 1], end: [0, 1] },
                      { name: 'item_3', start: [0, 2], end: [0, 2] },
                      { name: 'item_4', start: [0, 3], end: [0, 3] },
                      { name: 'item_5', start: [0, 4], end: [0, 4] }
                    ]}
                  >
                    {predictions.map((p, i) => (
                      <Item key={i} {...p} gridArea={`item_${i + 1}`} />
                    ))}
                  </Grid>
                )}
              </Box>
              <Footer size={size} />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;

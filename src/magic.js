import { Magic } from 'magic-sdk';
import Web3 from 'web3';

export const magic = new Magic('pk_live_DCEE325C6958B804', {
  network: {
    rpcUrl: 'https://alfajores-forno.celo-testnet.org'
  }
});

export const web3 = new Web3(magic.rpcProvider);
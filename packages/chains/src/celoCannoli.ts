import { Chain } from './types'

export const celoCannoli = {
  id: 17_323,
  name: 'Cannoli',
  network: 'celo-cannoli',
  nativeCurrency: {
    decimals: 18,
    name: 'CELO',
    symbol: 'C-CELO',
  },
  rpcUrls: {
    default: {
      http: ['https://forno.cannoli.celo-testnet.org'],
    },
    public: {
      http: ['https://forno.cannoli.celo-testnet.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Celo Explorer',
      url: 'https://explorer.celo.org/cannoli',
    },
  },
  contracts: {},
  testnet: true,
} as const satisfies Chain

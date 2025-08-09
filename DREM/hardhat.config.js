require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const AMOY_RPC_URL = "https://polygon-amoy-bor-rpc.publicnode.com";

module.exports = {
  defaultNetwork: "Amoy",
  networks: {
    hardhat: {
      chainId: 80002,
    },
    Amoy: {
      url: AMOY_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 80002,
    },
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
};

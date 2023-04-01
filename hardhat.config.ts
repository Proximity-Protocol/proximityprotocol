import { task } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import 'hardhat-contract-sizer';
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545",
      gas: 1000000000000000,
    },
    hardhat: {
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      gas: 8000000,
    },
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};

task("deploy", "Deploy the ProximityProtocol and ProximityProtocolGlobal contracts")
  .setAction(async (args, hre) => {
    const { ethers, upgrades } = hre;
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with account:", deployer.address);

    const ProximityProtocol = await ethers.getContractFactory("ProximityProtocol");
    const ProximityProtocolProxy = await upgrades.deployProxy(ProximityProtocol, ["https://example.com"], { initializer: "initialize" });
    await ProximityProtocolProxy.deployed();
    console.log("ProximityProtocol deployed at:", ProximityProtocolProxy.address);

    // const ProximityProtocolGlobal = await ethers.getContractFactory("ProximityProtocolGlobal");
    // const ProximityProtocolGlobalProxy = await upgrades.deployProxy(ProximityProtocolGlobal, ["https://example.com", ProximityProtocolProxy.address], { initializer: "initialize" });
    // await ProximityProtocolGlobalProxy.deployed();
    // console.log("ProximityProtocolGlobal deployed at:", ProximityProtocolGlobalProxy.address);
  });

export default config;

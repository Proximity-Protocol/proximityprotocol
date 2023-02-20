# Proximity Protocol DAO
Stateworks is a regional DAO protocol that seeks to unite global citizens based on geographical proximity and power their governance using on-chain governance mechanisms

## Project Structure

The project contemplates two Solidity smart contracts. The Stateworks Global DAO contract contains a number of features designed to facilitate administration of the global protocol, these include:
- The token is not transferable
- The token standard is ERC-1155
- Only whitelisted addresses can mint
- Only multi-sig can whitelist 2FA’d addresses
- Global token image should be updateable by the multi-sig
- Contract should create 1 token per country, new members will use the same token.
- Country token images should be updateable.
- Only admin/multi-sig can enable transfer

## TODO

- Make contracts upgradeable
- Token ID. These should be comprised of a global and regional system. Refer to core team for technical specifications. Country IDs should be drawn from a given list of countries. For Regional DAOs, this should be a concatenation of country + region counter. A simple mapping should do and the county and regional DAO is should be bit-shifted into a single ID.
- Regional Leader, every mint should have a regional leader attached to it. Again, simple mapping should work for this (regionalID -> address of country lead). This should be reflected in transfer logic.
- A convenience function that allows one to confirm membership. This is meant to support voting.
- Only global DAO NFT holders should be able to mint a regional DAO NFT. (Currently the regional contract accepts the address of the global DAO token, just include checks to ensure that necessary checks occur during minting and transfers)

## Getting Started

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

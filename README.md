# StakingRewardsFactory Test

## Install

- npm install

## Instructions

npx hardhat compile
npx hardhat deploy --network rinkeby
npx hardhat verify --network rinkeby --constructor-args arguments.js ContractAddress 

## Result
[https://rinkeby.etherscan.io/address/0x266571c50E064F8Fbc219306d09C72FDBA4c0dF4]
## State what could be improved in the overall logic

- [https://github.com/ultrastable-money/Candidates/blob/e081dfb68913be4aacbdfb0d7867a55e92860d6f/contracts/StakingRewardsFactory.sol#L72] 
  totalSupply should be used instead of periodFinish.

- Added SPDX-License-Identifier on all contracts, and updated dependencies.git
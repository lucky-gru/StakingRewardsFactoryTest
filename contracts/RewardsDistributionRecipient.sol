// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

abstract contract RewardsDistributionRecipient {
  address public rewardsDistribution;

  function claimRewardAmount(uint256 reward, uint256 duration) external virtual;

  modifier onlyRewardsDistribution() {
    require(
      msg.sender == rewardsDistribution,
      "Caller is not RewardsDistribution contract"
    );
    _;
  }
}

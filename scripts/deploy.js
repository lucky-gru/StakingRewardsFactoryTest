// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const StakingRewardsFactory = await hre.ethers.getContractFactory("StakingRewardsFactory");
  console.log("here=======>111");

  const stakingRewardsFactory = await StakingRewardsFactory.deploy("0x66a0f676479cee1d7373f3dc2e2952778bff5bd6", 0);
  console.log("here=======>");
  await stakingRewardsFactory.deployed();
  console.log("here=======23423423>");

  console.log("StakingRewardsFactory deployed to:", stakingRewardsFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

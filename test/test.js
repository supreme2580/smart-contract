const { ethers } = require("hardhat");

const main = async () => {
  const nameContractFactory = await ethers.getContractFactory("StoreContract");
  const nameContract = await nameContractFactory.deploy();
  await nameContract.deployed();
  console.log("Contract deployed to:", nameContract.address);
  const [deployer, address1, address2] = await ethers.getSigners();
  let name = "Victor Omorogbe";
  let cid = "ij65525685855212545666322154"
  let txn = await nameContract.storeNewName(name, cid);
  let wait = await txn.wait();
  console.log("NEW EVENT CREATED:", wait.events[0].event, wait.events[0].args);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
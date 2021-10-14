const hardhat = require("hardhat");

async function deploy() {
  const contract = await hardhat.ethers.getContractFactory(process.env.NFT_NAME);
  const nftDeployed = await contract.deploy();
  
  await nftDeployed.deployed();
  console.log("NFT deployed to:", nftDeployed.address);
  return { deployedContract: nftDeployed.address };
}

async function getToken(props) {
  const { NFT_NAME, DEPLOYED_CONTRACT_ADDRESS } = process.env;
  const deployedContract = props
    ? props.deployedContract
    : DEPLOYED_CONTRACT_ADDRESS;
  const contact = await hardhat.ethers.getContractFactory(NFT_NAME);
  const deployedNFT = contact.attach(deployedContract);
  const owner = await deployedNFT.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await deployedNFT.tokenURI(1);
  console.log("URI: ", uri);
}

async function mint(props) {
  const {
    NFT_NAME,
    IPFS_NFT_CONFIG,
    WALLET_ADDRESS,
    DEPLOYED_CONTRACT_ADDRESS,
  } = process.env;
  const deployedContract = props
    ? props.deployedContract
    : DEPLOYED_CONTRACT_ADDRESS;
  
  console.log({
    NFT_NAME,
    IPFS_NFT_CONFIG,
    WALLET_ADDRESS,
    DEPLOYED_CONTRACT_ADDRESS,
  });

  const contact = await hardhat.ethers.getContractFactory(NFT_NAME);
  const URI = `ipfs://${IPFS_NFT_CONFIG}`;
  const contract = contact.attach(deployedContract);

  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted!");
}

async function distribute() {
  const { deployedContract } = await deploy();
  await mint({ deployedContract });
  await getToken({ deployedContract });
}

module.exports = {
  deploy,
  distribute,
  getToken,
  mint,
};

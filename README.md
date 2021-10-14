# Sample for a NFT deployment in Polygon
This project shows an automatizated and basic Hardhat use case to deploy a NFT contract to OpenSea testnet.

## Requeriments set-up
- Metamask 
- Node
- **Will** 

## Setup Metamask Network 
To be able to run this scripts, you'll need to have metamask downloaded pointing to Mambai Testnet of Polygon.

## Upload to IPFS(NFT asset into Pinata)
Go to [pinata.club](https://www.pinata.cloud/) and create an account if you don't have one.
Once you are in, you'll upload the asset that you want to convert to NFT and then copy the CID from the table.
After you get the CID, you'll create a file named metadata.json and then upload it into pinata, that file should be fixed with the next information.

```json
{
  "name": "<put here the same of NFT_NAME that you put in .env file>", 
  "description": "<put here a description of the NFT>", 
  "image": "ipfs://<put here the CID of the image uploaded to pinata>"
}
```
Then copy again the CID but for the metadata.json file that you uploaded and put it in IPFS_NFT_CONFIG .env variable

## Setup .env 
There's an environment file example in .env.example that has all the variables needed to make this service to work.

| Variable  | Description | Example
| ------------- | ------------- | ------------ | 
| PRIVATE_KEY  | This is the exported key of your metamask wallet  | a2da3f1c881e17854d19e526181a53484de893830acce7540c380f3de38a99ff | 
| NFT_NAME  | Name of the NFT  | TestNFT | 
| COIN  | Identificator of the NFT  | TNFT | 
| WALLET_ADDRESS  | This is the your address that is set-up in the Polygon Mumbai Testnet    | 0x7395034d8FddC1091c521a315e0457e993c56F51 | 
| DEPLOYED_CONTRACT_ADDRESS  | This is the address of the deployed contract before minting. It's only needed if you are doing it manually.  | 0xB94CC8b401fB810c02f3F615646BA7Cfdb4a978F | 
| IPFS_NFT_CONFIG  | This is the CID of the metadata json file copied from Pinata | QmUYF7xtHKEjuXQ2U6JTWYSkg5DZn5MxMbmxrMhCooe99E | 

## How to use it?
You can take two paths to upload a NFT, automated or manually.

### Automated 
After we set-up all the environment variables we just execute
```bash
npm run distribute
```
**Note: To run an automated script you won't need to setup the DEPLOYED_CONTRACT_ADDRESS as it's being handled automatically by the script.**

### Manually
We need to update the .env variable with all the variables with the exception of DEPLOYED_CONTRACT_ADDRESS. And then execute:
```bash
npm run deploy
```

Then it'll log the address of the deployed contract, copy that and put into DEPLOYED_CONTRACT_ADDRESS .env variable. And then execute:
```bash
npm run mint
```

After that, you are good to go, but for quick checks, you can use the next command to check which data is related to the address:
```bash
npm run log-token
```

# Validating 
After you successfully mint your NFTS: If you are minting to the testnet you should see the generated NFT in https://testnets.opensea.io/
 otherway you should connect to the mainnet of opensea that can be accesed in https://opensea.io/







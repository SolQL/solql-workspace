const { SolQL } = require('solql');
const hre = require('hardhat');
const { ethers } = require('ethers');






async function main() {

    const provider = new ethers.providers.JsonRpcProvider(`<YOUR PROVIDER URL HERE>`);
    const contractName = 'Query';
    const chainId = '5';

    const solql = new SolQL(contractName, chainId, provider, hre);

    const result = await solql.query.run();

    console.log(result);

    return result;

}





main()
.then()
.catch(error => {
    console.error(error);
    process.exit(1);
})
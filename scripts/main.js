const { SolQL } = require('solql');
const hre = require('hardhat');
const { ethers } = require('ethers');






async function main() {

    const provider = new ethers.providers.JsonRpcProvider(`<YOUR PROVIDER URL HERE>`);
    const contractName = 'Query';
    const chainId = '5';

    const solql = new SolQL(contractName, chainId, provider, hre);

    const result = await solql.query.run(); //this is your raw, bytes encoded result

    console.log(result);

    const decodedResult = ethers.utils.defaultAbiCoder.decode(["address[100]"], result); //this decodes the returned result into the appropriate type (type depends on your particular query contract).

    console.log(decodedResult);



    return result;

}





main()
.then()
.catch(error => {
    console.error(error);
    process.exit(1);
})
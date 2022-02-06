require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remind concert harvest brave bottom thunder'; 
let testAccounts = [
"0x15c425ab089aac2423966daa6746257d4259249b9be37325c87e382bae4f4a98",
"0x58d864208fdc9cbc6b33c727553fdc0f48373cd50b3aa16fa94ac5d825b77e87",
"0x5ff637ea4be0d5df1ae5ebfca606953ece16060f7ddee50d06632b0091cabacb",
"0xad814fb12300ebfaa7ece0322999cfabab0c26183ff6952bc02b02618cad8972",
"0x4ae3987aee2f11fba3ae173641c079dd10e2ad88aa0528c35b30d1628e56cd92",
"0xc7e97773a656153185f03f2aa79a21b4da42c2e6bc5ac50a0cb31892a1f164bc",
"0xa19478ec5e196d28c109fcf9086b934115a6c76c5f74a15a90b78708a862f96c",
"0x7ebe4f20e3b5ae9bf598b7ec0159841904ad4a9cfa51d771b75d30ee52bdf92b",
"0xcb0752313a1d166193b40fa40c134ccac722d115e0dff431d2e9b233317b43ee",
"0xa9e9e1d192b19b664ae77a97b505fb28f28bc84a8c5f9de8f23519b1a0993ae9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


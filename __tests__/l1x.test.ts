import { parseEther } from "ethers/lib/utils";
import { L1XProvider } from "../src";
import { remove0xPrefix } from "../src/utils/general";

const l1xProvider = new L1XProvider({
    clusterType: 'mainnet',
    // endpoint: "https://v2-mainnet-rpc.l1x.foundation"
    // endpoint: "https://testnet-prerelease-rpc.l1x.foundation"
    endpoint: "https://v2-devnet-rpc.l1x.foundation"
    // endpoint: "https://54.251.122.134:50051"
})

test('should', async () => {
    // const response = await l1xProvider.core.getTransactionReceipt({ hash: "0x8673bfdef06201f02993513ca5c0d6323a1c6fa62c1e27f47b1bb90d5854a5e8" });
    // const response = await l1xProvider.core.getCurrentNonce({ address: remove0xPrefix("a56e408c3dfef96ab0baeb6e12bfeb779bd305e6") });
    // const response = await l1xProvider.core.getAccountState({ address: remove0xPrefix("d53779ef18c3a21b9ddfea56b6dea3ed9181732a,") });
    // const response = await l1xProvider.core.transfer({
    //     private_key: '07909eab98df8bce3a7c35a0e04e5b2c2d87821eb44354a63a98fec8f222a9a0',
    //     receipient_address: remove0xPrefix("9B6E19C24BF3f1F12F088Fac367384F0D827c53F"),
    //     value: Number(parseEther('1'))
    // })
    // console.log(JSON.stringify(response));

    let params = {
        attrib: {
          arguments: {
            pool_id: "13"
          },
          contract_address: "9f10ca806f89c4d057ac80badb3f671219dfd319",
          function: "stake",
          deposit: 2500000000000000000000,
          is_argument_object: true,
        },
        private_key: "f3fc1420c4d85baaada785655ddb6cedf7cf6cb3baf31846496abd813df4a0cd",
        fee_limit: 1000000,
      };

    let response = await l1xProvider.vm.makeStateChangingFunctionCall(params);
    console.log(response);
});
import { ApiPromise, WsProvider } from '@polkadot/api'
import { GearApi } from '@gear-js/api'
import { formatBalance } from '@polkadot/util'
//import { BN } from 'bn'

export default async function handler(request, response) {

    // Construct
    const wsProvider = new WsProvider('wss://testnet.vara-network.io')
    const api = await ApiPromise.create({ provider: wsProvider })
    console.log(`${request.query.address} address`);
    const {nonce, data} = await api.query.system.account(request.query.address)

    //console.log("resp " + JSON.stringify(resp))
    console.log("balance: " + data.free + " nonce: " + nonce)

    // Do something
    //console.log(api.genesisHash.toHex());

    //const body = api.genesisHash.toHex()
    const gearApi = await GearApi.create({
        providerAddress: 'wss://testnet.vara-network.io',
      })

    const chain = await gearApi.chain()
    const nodeName = await gearApi.nodeName()
    const nodeVersion = await gearApi.nodeVersion()
    //const genesis = gearApi.genesisHash.toHex()

    const body = JSON.stringify( {
        chain,
        nodeName,
        nodeVersion,
        balance: formatBalance(data.free, { withSi: false, },12),
         //data.free.div('1000000000000').toHuman(),
      //  genesis
    } )

    response.status(200).json({
      body,
      query: request.query,
      cookies: request.cookies,
    });
  }
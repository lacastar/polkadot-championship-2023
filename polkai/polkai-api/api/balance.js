//import { ApiPromise, WsProvider } from '@polkadot/api'
//import { GearApi } from '@gear-js/api'
import { getPolkaApi, getGearApi} from './_util.js'
import { formatBalance } from '@polkadot/util'

export default async function handler(request, response) {

  console.log("request " + request.path) 
    // Construct
    //const wsProvider = new WsProvider('wss://testnet.vara-network.io')
    //const api = await ApiPromise.create({ provider: wsProvider })
    const api = await getPolkaApi(request.query.network)
    //console.log(`${request.query.address} address`);
    const {nonce, data} = await api.query.system.account(request.query.address)

    //const gearApi = await GearApi.create({
    //    providerAddress: 'wss://testnet.vara-network.io',
    //  })
    const gearApi = await getGearApi(request.query.network)

    const chain = await gearApi.chain()
    const nodeName = await gearApi.nodeName()
    const nodeVersion = await gearApi.nodeVersion()
   
    const body = JSON.stringify( {
        chain,
        nodeName,
        nodeVersion,
        balance: formatBalance(data.free, { withSi: false, },12),
    } )

    response.status(200).json({
      body,
      query: request.query,
      cookies: request.cookies,
    });
  }
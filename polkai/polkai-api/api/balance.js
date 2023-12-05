import { getPolkaApi, getGearApi} from './_util.js'
import { formatBalance } from '@polkadot/util'

export default async function handler(request, response) {

    const api = await getPolkaApi(request.query.network)
    const {nonce, data} = await api.query.system.account(request.query.address)

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
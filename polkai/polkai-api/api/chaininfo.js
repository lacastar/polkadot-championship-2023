import { getPolkaApi, getGearApi} from './_util.js'
import { formatBalance } from '@polkadot/util'

export default async function handler(request, response) {

    const api = await getPolkaApi(request.query.network)
     
    const body = JSON.stringify( {
        genisisHash: api.genesisHash,
       // metadata: api.runtimeMetadata,
        runtimeVersion: api.runtimeVersion,
        libraryInfo: api.libraryInfo,
    } )

    response.status(200).json({
      body,
      query: request.query,
      cookies: request.cookies,
    });
  }
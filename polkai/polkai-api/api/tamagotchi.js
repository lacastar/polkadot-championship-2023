import { getGearApi} from './_util.js'
import { readFileSync } from 'fs'
import { getStateMetadata } from '@gear-js/api';
//import { formatBalance } from '@polkadot/util'


export default async function handler(request, response) {

    //const api = await getPolkaApi(request.query.network)
    //const {nonce, data} = await api.query.system.account(request.query.address)

    const stateWasm = readFileSync('./api/_tamagotchi.wasm')
    const metadata = await getStateMetadata(stateWasm)
    const gearApi = await getGearApi(request.query.network)
    //const state = await gearApi.programState.read({ programId: request.query.programId }, metadata)
    const state = await api.programState.readUsingWasm(
      {
        programId: request.query.programId,
        fn_name: 'tmg_info',
        stateWasm,
        argument: { /*input: 'payload'*/ },
      },
      metadata,
    )
    
    const chain = await gearApi.chain()
    const nodeName = await gearApi.nodeName()
    const nodeVersion = await gearApi.nodeVersion()
   
    const body = JSON.stringify( {
        chain,
        nodeName,
        nodeVersion,
        state,
    } )

    response.status(200).json({
      body,
      query: request.query,
      cookies: request.cookies,
    });
  }
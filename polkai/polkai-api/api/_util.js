import { ApiPromise, WsProvider } from '@polkadot/api'
import { GearApi } from '@gear-js/api'

const config = {
    networks: {
        main: 'wss://rpc.vara-network.io/',
        test: 'wss://testnet.vara-network.io',
    }
}




export async function getPolkaApi(network){
    const wsProvider = new WsProvider(config.networks[network])
    const api = await ApiPromise.create({ provider: wsProvider })
    return api
}

export async function getGearApi(network){
    const gearApi = await GearApi.create({
        providerAddress: config.networks[network],
    })
    return gearApi
}
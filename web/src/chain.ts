export type ChainState = {
    chainToken: string
    chainUrl: string
    chainPort: number
    chainAccounts: {
        alias: string
        privateKey: string
        address: string
        mnemonic: string
    }[]
}

export type ChainAccount = ChainState['chainAccounts'][number]
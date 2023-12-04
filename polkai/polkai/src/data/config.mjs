const config = {
    'meta': {
        'sitemapChunkSize': 1 
    },
    'sitemaps': {
       'varaDocs': './sitemap/vara-network.xml',
       'varaWiki': './sitemap/vara-wiki.xml',
       'gearWiki': './sitemap/gear-wiki.xml',
    },
    'repos': [
        {
            'name': 'Gear dApp examples',
            'repo': 'https://github.com/gear-foundation/dapps/master',
            'use': true
        },
        {
            'name': 'Rosetta API for blockchains based on Gear Protocol',
            'repo': 'https://github.com/gear-foundation/integrations-rosetta-api/master',
            'use': true
        },
    ],
    'tutorials': [
        {
          //  'name': 'Title of the tutorial',
          //  'source': 'https://www.youtube.com/watch?xxxxxxxxx',
          //  'repo': 'https://github.com/[path-to-repo]'
        },
    ],
    'paths': {
        'varaRepos': './data/varaRepos/',
    }
}


export { config }
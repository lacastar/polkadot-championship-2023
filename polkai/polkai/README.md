# Polkai

ETL part of the project.

This module does the information extraction from the configured sources.
Website extraction needs downloaded sitemap.xml-s to work. (Because it is not available or outdated on several sites.) I used [sitemap-generator-cli](https://github.com/lgraubner/sitemap-generator-cli)
Usage:

```text

npx sitemap-generator-cli -v -r https://vara-network.io/

```

The downloaded files are defluffed and merged. Chunks and sizes can be configured.

Currently scraped sites:

- vara-network.io
- wiki.vara-network.io
- wiki.gear-tech.io

It is configured in src/data/config.mjs among the other sources.
Repositories:

- [Gear dApp examples](https://github.com/gear-foundation/dapps/master)
- [Rosetta API for blockchains based on Gear Protocol](https://github.com/gear-foundation/integrations-rosetta-api/master)

## Requirements

- Node v20+
- openssl-1.1.1 required for phantom.js dependency
- 4 gigabytes memory for running Node: export NODE_OPTIONS="--max-old-space-size=8192"

init:
_npm install_

usage:
_npm run start_

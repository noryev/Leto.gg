const express = require('express')
const { Client } = require('@elastic/elasticsearch')
const app = express()
const port = 3000

// create an Elasticsearch client
const client = new Client({
    node: 'http://localhost:9200'
})

app.get('/cid-requests', async (req, res) => {
    // search for CID requests in Elasticsearch
    const { body } = await client.search({
        index: 'cloudflare_worker_logs',
        body: {
            query: {
                match: {
                    "ipfs_hash": "CID_HASH"
                }
            }
        }
    })

    // return the number of CID requests in the response
    res.json({
        cidRequests: body.hits.total.value
    })
})

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
})

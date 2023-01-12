const express = require('express');
const { Client } = require('@elastic/elasticsearch');
const app = express();

const client = new Client({
    node: 'http://localhost:9200'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/cid-requests', async (req, res) => {
    try {
        const { body } = await client.search({
            index: 'cloudflare_worker_logs',
            body: {
                query: {
                    match: {
                        "ipfs_hash": req.query.hash
                    }
                }
            }
        });
        res.status(200).json({
            cidRequests: body.hits.total.value
        });
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
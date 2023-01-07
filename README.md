# This is the public facing repo for leto.gg, an anonymous IPFS metrics Gateway/CDN
Leto.gg(this will soon change to leto.gg/lookup)

## https://leto.gg redirects to >> https://s3.amazonaws.com/leto.gg/index.html

### Data-Points
- How many times an IPFS object was requested via the leto.gg Gateway?

## Currently these are milestones that have been completed
- Setup Conventional Gateway
- Configure Gateway Logs to be sent to Metrics Engine
- Finish Anon Metrics Engine(ubuntu server)

# Form-Processing
Started with HTMLPane for preliminary implementations. Will probably move up to Node.js when it makes more sense. More information coming soon! 

Notes about Relative linking on IPFS... 
Though it is not required, it is strongly recommended that websites hosted on IPFS use only relative links, unless linking to a different domain. This is because data can be accessed in many different (but ultimately equivalent) ways:

From your custom domain: https://ipfs.tech/index.html
From a gateway: https://cloudflare-ipfs.com/ipns/ipfs.tech/index.html
By immutable hash: https://cloudflare-ipfs.com/ipfs/QmNksJqvwHzNtAtYZVqFZFfdCVciY4ojTU2oFZQSFG9U7B/index.html
Using only relative links within a web application supports all of these at once, and gives the most flexibility to the user. The exact method for switching to relative links, if you do not use them already, depends on the framework you use.

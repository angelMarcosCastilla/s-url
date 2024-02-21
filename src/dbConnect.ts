import { createClient } from 'redis'

export const client = createClient({
  url: process.env.URL_REDIS
})

client.on('error', function (err) {
  throw err
})

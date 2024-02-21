import Redis from 'ioredis'

export const client = new Redis(process.env.URL_REDIS as string)

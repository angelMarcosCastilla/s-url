import { NextResponse } from 'next/server'
import { client } from '../../dbConnect'

export async function POST (request: Request) {
  const { url } = await request.json()
  const urlShort = crypto.randomUUID().slice(0, 7)

  await client.set(urlShort, url)

  const urlRequest = new URL(request.url)
  const baseUrl = urlRequest.origin
  const shortUrl = `${baseUrl}/${urlShort}`

  return NextResponse.json({ body: { short: shortUrl, large: url } })
}

import { readFileData, writeFileData } from '@/utils/utils'
import { NextResponse } from 'next/server'
import path from 'node:path'

export async function POST (request: Request) {
  const { url } = await request.json()

  const urlShort = crypto.randomUUID().slice(0, 7)

  const pathFile = path.join(process.cwd(), 'src', 'database', 'data.json')
  const parsedContentFile = await readFileData(pathFile)
  parsedContentFile.data.push({ short: urlShort, large: url })

  const urlShortened = `${request.url}/${urlShort}`

  await writeFileData(pathFile, parsedContentFile)

  return NextResponse.json({ body: { short: urlShortened, large: url } })
}

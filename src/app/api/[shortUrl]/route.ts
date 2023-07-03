import path from 'node:path'
import { NextResponse } from 'next/server'
import { readFileData } from '@/utils/utils'
import { Link } from '@/type/link'

export async function GET (
  request: Request,
  { params }: { params: { shortUrl: string } }
) {
  const pathFile = path.join(process.cwd(), 'src', 'database', 'data.json')
  const parsedContentFile = await readFileData(pathFile)
  const contentLine: Link | null = parsedContentFile.data.find(
    (url: Link) => url.short === params.shortUrl
  )

  if (contentLine == null) {
    return NextResponse.json({ body: { error: 'Url not found' }, status: 404 })
  }

  return NextResponse.redirect(contentLine.large)
}

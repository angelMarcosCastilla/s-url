import { client } from '@/dbConnect'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET (
  request: Request,
  { params }: { params: { url: string } }
) {
  await client.connect()
  const data = await client.get(params.url)
  await client.disconnect()
  if (data !== null) {
    return NextResponse.redirect(data)
  }
  return redirect('/')
}

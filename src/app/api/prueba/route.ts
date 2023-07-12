import { NextResponse } from 'next/server'

export async function GET () {
  await new Promise(resolve => setTimeout(resolve, 10000))
  return NextResponse.json({ body: { message: 'Hello World 10min' } })
}

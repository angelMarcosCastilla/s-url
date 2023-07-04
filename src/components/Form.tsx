'use client'

import { useState } from 'react'
import Copy from './Copy'

export default function Form () {
  const [url, setUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    })

    const data = await res.json()
    setShortUrl(data.body.short)
  }
  console.log(shortUrl)
  return (
    <>
      <form onSubmit={handleSubmit} className=' bg-red-500'>
        <div>
          <input
            type='text'
            name='url'
            id='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='https://example.com'
          />
          <button type='submit'>Acortar</button>
        </div>
      </form>
      {shortUrl !== '' && <Copy shortUrl={shortUrl} />}
    </>
  )
}

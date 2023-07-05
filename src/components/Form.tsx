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
  return (
    <>
      <form onSubmit={handleSubmit} className='mb-6 '>
        <div className='relative flex flex-row py-2 px-3 bg-slate-100 border-2 border-slate-200 rounded-lg '>
          <input
            className='py-2 px-3 w-full  outline-none bg-transparent'
            type='text'
            name='url'
            id='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='https://example.com'
          />
          <button className=' px-9  bg-emerald-900 hover:bg-emerald-800 text-white rounded-lg ' type='submit'>
            Acortar
          </button>
        </div>
      </form>
      {shortUrl !== '' && <Copy shortUrl={shortUrl} />}
    </>
  )
}

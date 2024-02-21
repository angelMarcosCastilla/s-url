'use client'

import { useState } from 'react'
import Copy from './Copy'
import { Toaster, toast } from 'sonner'

const validateUrl = (url: string): boolean => {
  try {
    const urlValidate = new URL(url)
    return Boolean(urlValidate)
  } catch (err) {
    return false
  }
}

export default function Form () {
  const [url, setUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateUrl(url)) {
      toast.error('Url no validate')
      return
    }

    setLoading(true)
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    })

    const data = await res.json()
    setShortUrl(data.body.short)
    setLoading(false)
    setUrl('')
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='mb-6 '>
        <div className='relative flex flex-row py-2 px-3  border border-gray-200 rounded-lg '>
          <input
            className='py-2 px-3 w-full  outline-none bg-transparent placeholder:text-gray-400 text-white'
            type='text'
            name='url'
            id='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='https://example.com'
          />
          <button
            disabled={loading}
            className=' px-9  bg-emerald-900 hover:bg-emerald-800 text-white rounded-lg  disabled:opacity-25'
            type='submit'
          >
            Acortar
          </button>
        </div>
      </form>
      <Toaster position='bottom-center' richColors />
      {shortUrl !== '' && <Copy shortUrl={shortUrl} />}
    </>
  )
}

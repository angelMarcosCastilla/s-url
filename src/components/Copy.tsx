'use client'
import { toast } from 'sonner'

export default function Copy ({ shortUrl }: { shortUrl: string }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortUrl)
    toast.success('Copiado correctamente')
  }
  return (
    <>
      <div className='w-full  py-3 px-4 flex justify-between border-[1px] border-emerald-500 rounded-lg text-emerald-100'>
        <span>{shortUrl}</span>
        <button className='hover:text-emerald-600' type='button' onClick={handleCopy}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'

          >
            <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
          </svg>
        </button>
      </div>
    </>
  )
}

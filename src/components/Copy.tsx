'use client'

export default function Copy ({ shortUrl }: { shortUrl: string }) {
  return (
    <div>
      <span>{shortUrl}</span>
      <button
        type='button' onClick={async () => {
          await navigator.clipboard.writeText(shortUrl)
        }}
      >Copiar
      </button>
    </div>
  )
}

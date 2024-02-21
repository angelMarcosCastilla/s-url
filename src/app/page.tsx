import Form from '@/components/Form'

export default function Page ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <main className='grid place-content-center min-h-screen bg-black'>

      <h1 className=' text-3xl lg:text-6xl font-bold text-center mb-2 text-gray-100'>
        Short URL
      </h1>
      <p className='text-xl lg:text-2xl mb-6 text-gray-200'>
        ¡Genera URL cortas de manera fácil y sencilla!
      </p>
      <Form />
    </main>
  )
}

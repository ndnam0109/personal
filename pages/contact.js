import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 py-10">
          <div className="mx-auto w-full md:w-96 md:max-w-full">
            <div className="border border-gray-300 p-6 dark:bg-[#1f2937] sm:rounded-md">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="mb-6 block">
                  <span className="text-gray-800 dark:text-gray-300">Your name</span>
                  <input
                    name="name"
                    type="text"
                    {...register('name', { required: true })}
                    className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-600
            bg-transparent
            text-gray-800 placeholder-gray-300 shadow-sm
            focus:border-cyan-300
            dark:text-gray-300
            dark:placeholder-gray-600
          "
                    placeholder="A b c"
                    required
                  />
                </label>
                <label className="mb-6 block">
                  <span className="text-gray-800 dark:text-gray-300">Email address</span>
                  <input
                    name="email"
                    type="email"
                    {...register('email', { required: true })}
                    className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-600
            bg-transparent
           text-gray-800 placeholder-gray-300 shadow-sm
            focus:border-cyan-300
            dark:text-gray-300
            dark:placeholder-gray-600
          "
                    placeholder="abc@example.com"
                    required
                  />
                </label>
                <label className="mb-6 block">
                  <span className="text-gray-800 dark:text-gray-300">Message</span>
                  <textarea
                    name="message"
                    className="
            mt-1
            block
            w-full
            overscroll-none
            rounded-md
            border-gray-600
            bg-transparent
            text-gray-800 placeholder-gray-300 shadow-sm
            focus:border-cyan-300
            dark:text-gray-300
            dark:placeholder-gray-600
          "
                    rows="3"
                    {...register('message', { required: true })}
                    required
                    placeholder="Tell me what you're thinking about..."
                  ></textarea>
                </label>
                <div className="mb-6 text-end">
                  <button
                    type="submit"
                    className="
            focus:shadow-outline
            h-10
            rounded-lg
            bg-cyan-600
            px-5
            text-cyan-100
            transition-colors
            duration-150
            hover:bg-cyan-800
          "
                  >
                    Contact Me ❤️
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <blockquote>
              <p>
                If you'd like to make an inquiry, please feel free to get in touch, and I will
                respond as soon as possible.
              </p>
              <p className="py-1">If you prefer to contact me directly, send your Email to: </p>
              <div className="flex items-center">
                <span className="text-2xl">&#128231;</span> {`  `} namnd0901@gmai.com
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  )
}

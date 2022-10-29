import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useForm } from 'react-hook-form'
import { getFirestore, collection, query, addDoc } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const app = initializeApp({
    apiKey: 'AIzaSyC2W-r6k25wcRXyJpBK2hZ8JAlg-kxaguA',
    authDomain: 'db-mail-fd503.firebaseapp.com',
    projectId: 'db-mail-fd503',
    storageBucket: 'db-mail-fd503.appspot.com',
    messagingSenderId: '636515526633',
    appId: '1:636515526633:web:172aa17336931425048d78',
  })
  const [isLoading, setIsLoading] = useState(false)
  let [mails, mailsLoading, mailsError] = useCollection(
    query(collection(getFirestore(app), 'emails')),
    {}
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => addPostToStore(data)
  async function addPostToStore(formValue) {
    setIsLoading(true)
    const newPost = formValue
    const docRef = await addDoc(collection(getFirestore(app), 'emails'), newPost)
    toast.success('Thank you! I will respond as soon as possible ❤', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
    reset()
    setIsLoading(false)
  }
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-center space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
          <div className="relative ml-3 inline-flex items-center rounded-lg bg-transparent  text-center text-sm font-medium text-gray-900 dark:bg-transparent dark:text-white ">
            <svg
              className="h-10 w-10"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className="sr-only">Notifications</span>
            <div className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-bold  text-white dark:bg-gray-700">
              {mails?.docs.length ?? 0}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 py-10 sm:grid-cols-2">
          <div className="mx-auto w-full md:w-96 md:max-w-full">
            <div className="border border-gray-600 bg-gray-50 p-6 dark:border-gray-300 dark:bg-[#1f2937] sm:rounded-md">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="mb-6 block">
                  <span className="text-gray-800 dark:text-gray-300">Your name</span>
                  <input
                    name="name"
                    type="text"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Name is required',
                      },
                    })}
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
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </label>
                <label className="mb-6 block">
                  <span className="text-gray-800 dark:text-gray-300">Email address</span>
                  <input
                    name="email"
                    type="email"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: 'Email like example@gmail.com',
                      },
                    })}
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
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
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
                    {...register('message', {
                      required: {
                        value: true,
                        message: 'Message is required',
                      },
                    })}
                    placeholder="Tell me what you're thinking about..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </label>
                <div className="mb-6 flex justify-end">
                  <button
                    type="submit"
                    className=" focus:shadow-outline
            flex h-10
            items-center
            rounded-lg
            bg-cyan-600
            px-5
            text-cyan-100
            transition-colors
            duration-150
            hover:bg-cyan-800
          "
                  >
                    Contact Me{' '}
                    {isLoading ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="ml-2 h-4 w-4 animate-spin fill-white text-gray-200 dark:text-gray-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <div className="ml-2"> ❤ </div>
                    )}
                    ️
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <blockquote className="text-lg text-gray-500 dark:text-gray-200">
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
      <ToastContainer />
    </>
  )
}

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 text-center md:space-y-5">
          <Image
            src={'/static/images/dev.gif'}
            alt="avatar"
            width="500px"
            height="350px"
            className="h-48 w-48 rounded-xl "
          />
          <div className="flex justify-center">
            <div className="h-[100px] w-[100px] rounded-full border-2 border-gray-500 dark:border-2 dark:border-gray-50">
              <Image
                src={`/static/images/avatar-author.jpg`}
                alt="avatar"
                width="100px"
                height="100px"
                className="h-48 w-48 rounded-full  object-cover dark:border-2  dark:border-gray-50"
              />
            </div>
            <div className="ml-5">
              <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
                Hello ! I'm <span className="text-[#4cd5eb]"> Nam Nguyen</span>
              </h1>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
                {siteMetadata.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

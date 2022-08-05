import fs from 'fs'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdx.utils'
import matter from 'gray-matter'

interface props {
  source: MdxRemote.Source
  frontMatter: any
}

export default function PostPage({ source, frontMatter }: props) {
  const content = hydrate(source)
  return (
    <div className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative px-4 sm:px-6">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 dark:text-indigo-500 font-semibold tracking-wide uppercase">
              {frontMatter.type}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              {frontMatter.title}
            </span>
          </h1>
          <p className="mt-8 text-lg text-gray-500 dark:text-gray-300 text-justify">
            {frontMatter.description}
          </p>
        </div>
        <div className="mt-6 prose dark:prose-light prose-indigo prose-lg mx-auto">{content}</div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath).toString()
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, { scope: data })

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

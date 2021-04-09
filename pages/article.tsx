import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'

interface Props {
  source: MdxRemote.Source
}

export default function Article({ source }: Props) {
  const content = hydrate(source)
  return <div className="my-wrapper mt-4">{content}</div>
}

export async function getStaticProps() {
  const mdxContent: string = 'Some **mdx** text, with a component'
  const mdxSource: MdxRemote.Source = await renderToString(mdxContent)
  return { props: { source: mdxSource } }
}

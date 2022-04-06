import Head from 'next/head'
import { Interface } from 'readline'

interface HeadInterface {
    title: string
}

const HeadComponent: React.FC<HeadInterface> = ({title}) => {
  return (
      <>
        <Head>
            <title>{title}</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Head>
            <meta property="og:title" content="My new title" key="title" />
        </Head>
        <Head>
            <link rel="../.."></link>
        </Head>
      </>
  )
}

export default HeadComponent
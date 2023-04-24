import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-mainBg w-full md:overflow-hidden overflow-scroll'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

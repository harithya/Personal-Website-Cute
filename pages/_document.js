import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Hey there! I'm Della Rianty Febrian 👋</title>
            </Head>
            <body data-reactroot className='bg-[#f9f7f5] dark:bg-gray-800 transition-colors duration-300'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
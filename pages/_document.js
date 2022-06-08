import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Hey there! I'm Della Rianty Febrian 👋</title>
                <div>
                    <meta name="title" content="Hey! I'm Della Rianty Febrian, a student and also a nutritionist 👋" />
                    <meta name="description" content="I'm a student and also a nutritionist, anime and manga are things I like, but there are some things I hate including peanuts." />
                    <meta name="keywords" content="Della Rianty Febria, della rianty, rianty, nutritionist, unsoed, student" />
                    <meta name="robots" content="index, follow" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                </div>

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
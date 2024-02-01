import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script src="https://scert.ez-iok.com/stdauth/ds_auth_ptb/asset/js/ptb_ezauth_proc.js" defer></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

import Header from 'components/header/Header';
import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="">
                <div className="">
                    <div className="">
                        {/* <Header /> */}
                        <div className="">{children}</div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </body>
        </html>
    );
}

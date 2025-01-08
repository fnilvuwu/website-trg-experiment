import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Component {...pageProps} />
      {router.pathname !== '/' && <Footer />}
    </>
  )
}

export default MyApp
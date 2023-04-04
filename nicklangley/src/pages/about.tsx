import Seo from '../../components/Seo'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Seo
        title = {'About - Nick Langley'}
        description = {'The Home landing page for the Portfolio of Nicholas Langley'}
      ></Seo>
      <main className={styles.main}>
        <div className={styles.description}>
          
        </div>
      </main>
    </>
  )
}
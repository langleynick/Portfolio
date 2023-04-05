import Seo from '../../components/Seo'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Seo
        title = {'Home - Nick Langley'}
        description = {'The Home landing page for the Portfolio of Nicholas Langley'}
      ></Seo>
      <main className={styles.main}>
        <div className='container-fluid w-75'>
          <div className='row'>
            <h1 className='text-center fw-bold fst-italic mb-5'>Hello World.</h1>
          </div>
          <div className='row'>
            <div className='col-lg-8 bg-light text-dark'>
              What it do
            </div>
            <div className='col-lg-4 bg-dark'>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

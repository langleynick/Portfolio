import Seo from '../../components/Seo'
import { Inter } from 'next/font/google'
import ProjectsList from '../../components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Seo
        title = {'Projects - Nick Langley'}
        description = {'The Home landing page for the Portfolio of Nicholas Langley'}
      ></Seo>
      <main>
        <div className='row justify-content-center'>
          <div className='col-3 my-5 text-center'>
            <h1 id='header-title'>My Projects.</h1>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col text-center'>
            <a href='https://github.com/langleynick/Portfolio' role='button' className='btn btn-lg btn-dark mb-2'>Check out this site's code</a>
          </div>
        </div>
        <ProjectsList></ProjectsList>
      </main>
    </>
  )
}
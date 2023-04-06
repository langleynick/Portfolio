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
        <div className='row'>
          <div className='col'>
            <h1 className='fw-bold text-center my-5'>My Projects</h1>
            <a href='https://github.com/langleynick/Portfolio' role='button' className='btn btn-outline-secondary'>Check out this site's code</a>
          </div>
        </div>
        <ProjectsList></ProjectsList>
      </main>
    </>
  )
}
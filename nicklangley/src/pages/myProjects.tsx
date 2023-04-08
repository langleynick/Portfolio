import Seo from '../../components/Seo'
import dynamic from 'next/dynamic';

const DynamicList = dynamic(() => import('../../components/Projects'));

export default function Home() {
  return (
    <>
      <Seo
        title = {'Projects - Nick Langley'}
        description = {'View my most recent (and favourite) projects here!'}
      ></Seo>
      <main>
        <div className='row justify-content-center'>
          <div className='col-5'>
            <h1 id='header-title'>My Projects.</h1>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col'>
            <a href='https://github.com/langleynick/Portfolio' role='button' className='btn btn-lg btn-dark'>Check out this site's code</a>
          </div>
        </div>
        <DynamicList></DynamicList>
      </main>
    </>
  )
}
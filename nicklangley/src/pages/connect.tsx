import Seo from '../../components/Seo'
import { Inter } from 'next/font/google'
import metadata from '../../data/metadata'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Seo
        title = {'Connect - Nick Langley'}
        description = {'Connect with me. Here lies my contact information to get in touch with me.'}
      ></Seo>
      <main>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-3 my-5 text-center'>
              <h1 id='header-title'>Connect with me.</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-8 justify-content-center m-auto p-4 text-center bg-dark rounded-5'>
              <h2 className='text-primary fw-bold mt-2 mb-5'>Contact Info:</h2>
              <dl className='row fs-4'>
                <dt className='col-sm-6 text-center'>Phone:</dt>
                <dd className='col-sm-6 text-start'>{metadata.phoneNumber}</dd>
                <dt className='col-sm-6 text-center'>Email:</dt>
                <dd className='col-sm-6 text-start'>{metadata.email}</dd>
                <dt className='col-sm-6 text-center'>Address:</dt>
                <dd className='col-sm-6 text-start'>{metadata.address}</dd>
                <dt className='col-sm-6 text-center'>City:</dt>
                <dd className='col-sm-6 text-start'>{metadata.city}</dd>
              </dl>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-8 m-auto'>
              <h3 className='text-light text-center fw-bold mt-4'>I look forward to chatting with you.</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
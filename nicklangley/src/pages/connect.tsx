import Seo from '../../components/Seo'
import metadata from '../../data/metadata'

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
            <div className='col-5'>
              <h1 id='header-title'>Connect with me.</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-lg-8 justify-content-center m-auto p-4 bg-dark rounded-5'>
              <h2 className='text-primary'>Contact Info:</h2>
              <dl className='row col-8 m-auto'>
                <dt className='col-sm-6'>Phone:</dt>
                <dd className='col-sm-6'>{metadata.phoneNumber}</dd>
                <dt className='col-sm-6'>Email:</dt>
                <dd className='col-sm-6'>{metadata.email}</dd>
                <dt className='col-sm-6'>Address:</dt>
                <dd className='col-sm-6'>{metadata.address}</dd>
                <dt className='col-sm-6'>City:</dt>
                <dd className='col-sm-6'>{metadata.city}</dd>
              </dl>
            </div>
          </div>
          <div className='row'>
            <div className='col-8 m-auto my-5'>
              <h3 className='fw-bold'>I look forward to chatting with you.</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
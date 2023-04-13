import Link from 'next/link'
import Seo from '../../components/Seo'
import metadata from '../../data/metadata'

export default function Home() {
  return (
    <>
      <Seo
        title = {'Connect - Nick Langley'}
        description = {'Connect with me. Here lies my contact information to get in touch with me.'}
      ></Seo>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col mt-5'>
              <h1 id='header-title'>Connect with me.</h1>
            </div>
          </div>
          <div className='container p-4 bg-dark rounded-5'>
            <div className='row'>
              <div className='justify-content-center m-auto'>
                <h2 className='text-primary'>Contact Info:</h2>
                <ul className='list-unstyled d-flex flex-column gap-3'>
                  <li className='fs-4'>{metadata.authorName}</li>
                  <li className='fs-4'>{metadata.phoneNumber}</li>
                  <li className='fs-4'>{metadata.email}</li>
                  <li className='fs-4'>{metadata.city}</li>
                </ul>
              </div>
            </div>
            <div className='row'>
              <ul className="nav col justify-content-center list-unstyled d-flex mx-3">
                <li className="ms-4">
                  <Link href={metadata.instagram}><i className="bi bi-instagram text-light fs-4"></i></Link>
                </li>
                <li className="ms-4">
                  <Link href={metadata.linkedin}><i className="bi bi-linkedin text-light fs-4"></i></Link>
                </li>
                <li className="ms-4">
                  <Link href={metadata.github}><i className="bi bi-github text-light fs-4"></i></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-8 m-auto my-5'>
              <h3 className='fw-bold'>I look forward to chatting with you.</h3>
            </div>
          </div>
        </div>
    </>
  )
}
import Seo from '../../components/Seo'
import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Seo
        title = {'Home - Nick Langley'}
        description = {'The Home landing page for the Portfolio of Nicholas Langley'}
      ></Seo>
      <main>
        <div className='container-fluid'>
          <div className='row mb-4'>
            <h1 className='text-center fw-bold fst-italic my-5 fadein'>Hello World.</h1>
          </div>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-sm-10 col-xs-11 bg-light text-dark rounded-5 p-5'>
                <div className='col'>
                  <h2 className='text-center text-primary fw-bold mb-4'>I am Nicholas (Nick) Langley.</h2>
                  <div className='fw-bold fs-3 text-center text-dark'>
                    <p>I'm a 24 year old Web Developer currently living in Windsor, Ontario and I enjoy Front-End design, including UI/UX design and coming up with unique and creative solutions to problems. </p>
                  </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-sm-10 bg-dark p-3 rounded-5 text-center align-self-center'>
              <Image
              src="/home-image.JPG"
              alt="Nicholas Langley(Me)"
              width={400}
              height={400}
              className='p-3 mx-auto img-fluid border rounded-5 border-5'
              id="image-focus">
              </Image>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

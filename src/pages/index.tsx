import Seo from '../../components/Seo'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Seo
        title = {'Home - Nick Langley'}
        description = {'The Home landing page for the Portfolio of Nicholas Langley, check out what I am up to!'}
      ></Seo>
      <main>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-5'>
              <h1 id='header-title'>Hello World.</h1>
            </div>
          </div>
          <div className='row justify-content-center align-items-center'>
            <div className='col-xs-11 col-lg-8 bg-dark rounded-5 p-5'>
                <div className='col p-4' id='brackets-wrap'>
                  <h2 className='text-primary'>I am Nicholas (Nick) Langley.</h2>
                  <div>
                    <p>I'm a 24 year old Web Developer currently living in Windsor, Ontario and I enjoy Front-End design, including UI/UX design and coming up with unique and creative solutions to problems. </p>
                  </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-7 col-xl-3 bg-dark p-3 rounded-5 align-self-center'>
              <Image
              src="/home-image.JPG"
              alt="Nicholas Langley(Me)"
              width={400}
              height={400}
              priority
              className='p-3 img-fluid border rounded-5 border-5 image-focus'>
              </Image>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

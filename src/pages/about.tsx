import Seo from '../../components/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title = {'About - Nick Langley'}
        description = {'A page all about me! Learn more about me and what makes me tick.'}
      ></Seo>
      <main>
        <div className='container-fluid col-sm-12 col-md-8'>
          <div className='row justify-content-center'>
              <div className='col-5'>
                <h1 id='header-title'>About me.</h1>
              </div>
          </div>
          <div className='row justify-content-start'>
            <div className=' col-md-12 col-lg-8 p-5 bg-dark rounded-5'>
              <div id='brackets-wrap'>
                <h2 className='text-primary mt-2'>Hello There!</h2>
                <p className='m-4'>Being new to the Tech World, I am eager to learn new processes and languages that can further my career in the industry.</p>
                <p className='m-4'>I love being faced with complex problems that are not easy to solve.</p>
              </div>
            </div>
          </div>
          <div className='row justify-content-end'>
            <div className='col-md-12 col-lg-8 p-5 bg-dark rounded-5'>
              <div id='brackets-wrap'>
                <h2 className='text-primary'>Schooling</h2>
                <p className='m-4'>I will be graduating from St. Clair College with a Diploma in Web Development and Computer Applications after taking a 2 year course there.</p>
                <p className='m-4'>I am proud to be keeping a 3.8 Overall GPA in my studies there.</p>
              </div>
            </div>
          </div>
          <div className='row justify-content-start'>
            <div className='col-md-12 col-lg-8 p-5 bg-dark rounded-5'>
              <div id='brackets-wrap'>
                <h2 className='text-primary'>Hobbies</h2>
                <p className='m-4'>I love to play video games on my downtime. Some of my favourite games of all time are:</p>
                <ul className='text-primary list-unstyled'>
                  <li>The Last of Us Part II</li>
                  <li className='my-2'>Uncharted 2: Among Theives</li>
                  <li>God of War(2018)</li>
                </ul>
                <p className='m-4'>With the rest of my free time, I create custom wood furniture with my father. It's been a hobby of mine for years.</p>
              </div>
            </div>
          </div>
          <div className='row justify-content-end'>
            <div className='col-md-12 col-lg-8 p-5 bg-dark rounded-5'>
              <div id='brackets-wrap'>
                <h2 className='text-primary'>Fun Fact:</h2>
                <p className='m-4'>I'm able to wiggle my ears on demand.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
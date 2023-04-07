import React from 'react'
import Image from 'next/image';
import projectList from "../data/projectList";

export default class ProjectsList extends React.Component {
    render() {
        return(
            <div className='container'>
            {projectList.map(data => (
                <div className='row justify-content-center text-dark fw-bold my-3' key={data.id}>
                    <div className='col-md-11 col-lg-6 bg-light rounded-5 text-center'>
                        <h2 className='text-primary fw-bold fs-2 mt-3 mb-4'>{data.name}</h2>
                        <Image 
                        src={data.img}
                        alt='Project Image'
                        width={400}
                        height={400}
                        className='img-fluid mb-3 p-3 border border-4 border-dark image-focus'
                        ></Image>
                        <p className='fs-5 fst-italic text-primary'>{data.languages}</p>
                        <p className='px-3 fs-5'>{data.description}</p>
                        <a href={data.githubUrl} role='button' target='_blank'className='btn btn-outline-secondary fw-bold mb-3'>View my work</a>
                    </div>
                </div>
             ))}
            </div>
        )
    }
}
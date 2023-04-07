import React from 'react'
import Image from 'next/image';
import projectList from "../data/projectList";

export default class ProjectsList extends React.Component {
    render() {
        return(
            <div className='container'>
            {projectList.map(item => (
                <div className='row justify-content-center text-light fw-bold my-3' key={item.id}>
                    <div className='col-md-11 col-lg-6 bg-dark rounded-5 text-center'>
                        <h2 className='text-primary fw-bold fs-2 mt-3 mb-4'>{item.name}</h2>
                        <Image
                        src={item.img}
                        alt='Project Image'
                        width={400}
                        height={400}
                        className='img-fluid mb-3 p-3 border border-4 border-dark image-focus'
                        blurDataURL='URL'
                        placeholder='blur'
                        ></Image>
                        <p className='fs-5 fst-italic text-primary'>{item.languages}</p>
                        <p className='px-3 fs-5'>{item.description}</p>
                        <a href={item.githubUrl} role='button' target='_blank'className='btn btn-outline-secondary text-light fw-bold mb-3'>View my work</a>
                    </div>
                </div>
             ))};
            </div>
        )
    }
}
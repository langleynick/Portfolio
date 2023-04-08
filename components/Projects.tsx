import React from 'react'
import Image from 'next/image';
import projectList from "../data/projectList";

export default class ProjectsList extends React.Component {
    render() {
        return(
            <div className='container'>
            {projectList.map(item => (
                <div className='row justify-content-center' key={item.id}>
                    <div className='col-md-11 col-lg-6 bg-dark rounded-5 text-center'>
                        <h2 className='text-primary mt-3 mb-4'>{item.name}</h2>
                        <Image
                        src={item.img}
                        alt='Project Image'
                        width={400}
                        height={400}
                        className='img-fluid mb-3 p-3 border rounded-5 border-5 image-focus'
                        blurDataURL='URL'
                        placeholder='blur'
                        ></Image>
                        <p className='fst-italic text-primary'>{item.languages}</p>
                        <p className='px-3'>{item.description}</p>
                        <a href={item.githubUrl} role='button' target='_blank'className='btn btn-outline-secondary text-light mb-3'>View my work</a>
                    </div>
                </div>
             ))}
            </div>
        )
    }
}
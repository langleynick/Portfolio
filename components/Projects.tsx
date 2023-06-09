import React from 'react'
import Image from 'next/image';
import projectList from "../data/projectList";

export default function ProjectsList() {
        return(
            <div className='row gap-4 justify-content-center'>
            {projectList.map(item => (
                <div className='col-md-11 col-xl-5 bg-dark rounded-5 text-center' key={item.id}>
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
                        <p className='fw-bold fst-italic text-primary'>{item.languages}</p>
                        <p className='px-3'>{item.description}</p>
                        <a href={item.githubUrl} role='button' target='_blank'className='btn btn-outline-secondary text-light mb-3'>View my work</a>
                    </div>
             ))}
             </div>
        )
}
import React from 'react'

function Course({ course }) {

    const { id, title, description, price, link, image } = course; //destructed object

    return (
        <div className='course'>
            <div>
                <img src={image} width={350} height={170} />
                <h4 className='course-title'>{title}</h4>
                <span className='course-desc'>{description}</span>
                <h3 className='course-price'>{price} ₺</h3>
                <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>Kurs link</a></div>
            </div>
        </div>
    )
}

export default Course
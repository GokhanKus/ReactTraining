import React from 'react'

function Course({ course }) {

    const { id, title, description, price, link, image } = course; //destructed object

    return (
        <div className='course'>
            <div>
                <img src={image} width={250} height={150} />
                <h4>{title}</h4>
                <span>{description}</span>
                <h3>{price}</h3>
                <a href={link}>Kurs link</a>
            </div>
        </div>
    )
}

export default Course
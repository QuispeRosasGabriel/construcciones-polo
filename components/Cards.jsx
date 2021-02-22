import React from 'react'
import {projects} from '../utils';
import Card from './Card';
console.log(projects, 'xd');
const Cards = () => {
    return (
        <div className="wrapper">
            <h2>Cónoce nuestros proyectos</h2>
            <div className="cols">
                {
                    projects?.map((project, idx) => (
                        <Card project={project} key={idx} />
                    ))
                }
       
            </div>
        </div>
    )
}

export default Cards

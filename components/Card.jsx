import React from 'react'

const Card = ({project}) => {
    return (
        <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
                <div className="front" style={{backgroundImage: 'url("https://unsplash.it/500/500/")'}}>
                    <div className="inner">
                        <p>{project.name}</p>
                        <span>Lorem ipsum</span>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

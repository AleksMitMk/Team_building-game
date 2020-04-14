import React from 'react';

const TextDetail = (props) => {
    console.log(props.steps)

    return (
        <div>
            {props.steps.map((el, i) => (
                <div key={i}>
                <hr />
                <h4>{el.step}</h4>
                <p>{el.stepDescription}</p>
            </div>
            ))}
            
        </div>
    )
}
export default TextDetail;
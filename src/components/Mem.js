import React from 'react';
import '../styles/Mem.css';

const Mem = (props) => {
    const thumbUp = props.mem.upvotesOnScreen;
    const thumbDown = props.mem.downvotesOnScreen;
    return (
        <div className="wrapper">
            <h2 className="title">{props.mem.title}</h2>
            <div className="mem">
                <img src={props.mem.img} alt="" />
            </div>
            <button className="star" onClick={() => props.handleStarChange(props.mem.id)}>
                {props.mem.star ? <i className="fas str fa-star"></i> : <i className="far fa-star"></i>}

            </button>
            <button onClick={() => props.handleThumbUp(props.mem.id)} className="votes upvotes"><i className="far fa-thumbs-up"></i> <em> Ocena: {thumbUp}</em></button>
            <button onClick={() => props.handleThumbDown(props.mem.id)} className="votes downvotes"><i className="far fa-thumbs-down"></i> <em> Ocena: {thumbDown}</em></button>
            <hr />
        </div>
    );
}

export default Mem;
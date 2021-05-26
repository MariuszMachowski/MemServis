import React from 'react';
import '../styles/Mem.css';

const Mem = (props) => {
    const thumbUp = props.mem.upvotesOnScreen;
    const thumbDown = props.mem.downvotesOnScreen;
    return (
        <div>
            <h2>{props.mem.title}</h2>
            <div className="mem">       <img src={props.mem.img} alt="" /></div>
            <button onClick={() => props.handleThumbUp(props.mem.id)} className="upvotes"><i class="far fa-thumbs-up"></i> <em> Ocena: {thumbUp}</em></button>
            <button onClick={() => props.handleThumbDown(props.mem.id)} className="downvotes"><i class="far fa-thumbs-down"></i> <em> Ocena: {thumbDown}</em></button>
            <hr />
        </div>
    );
}

export default Mem;
import React from 'react';
import Mem from './Mem';
import '../styles/MemesList.css';

const StarMemesList = (props) => {

    const star = props.regular.filter(mem => mem.star === true);
    const starMemes = star.map(mem => <Mem key={mem.id} mem={mem} handleStarChange={props.handleStarChange} handleThumbUp={props.handleThumbUp} handleThumbDown={props.handleThumbDown} />);
    if (starMemes.length < 1) {
        return (
            <div>
                <h1 className="description">Memy z <i class="star header far fa-star"></i></h1>
                <h1 className="empty">Brak memów oznaczonych gwiazdką!</h1>
            </div>
        )
    } else {
        return (
            <  >
                <div>
                    <h1 className="description">Memy z gwiazdką :</h1>
                    <hr />
                    {starMemes}
                </div>
            </ >
        );
    }
}

export default StarMemesList;
import React from 'react';
import Mem from './Mem';
import '../styles/MemesList.css';

const HotMemesList = (props) => {

    const hot = props.regular.filter(mem => mem.upvotes - mem.downvotes >= 5);
    const hotMemes = hot.map(mem => <Mem key={mem.id} mem={mem} handleStarChange={props.handleStarChange} handleThumbUp={props.handleThumbUp} handleThumbDown={props.handleThumbDown} />);
    if (hotMemes.length < 1) {
        return (
            <div>
                <h1 className="description">Memy HOT :</h1>
                <h1 className="empty">Brak Hot memów do wyświetlenia!</h1>
            </div>
        )
    } else {
        return (
            <  >
                <div>
                    <h1 className="description">Memy HOT :</h1>
                    <hr />
                    {hotMemes}
                </div>
            </ >
        );
    }
}

export default HotMemesList;
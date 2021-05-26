import React from 'react';
import Mem from './Mem';
// import './MemesList.css';
import '../styles/MemesList.css'

const HotMemesList = (props) => {

    const hot = props.regular.filter(mem => mem.upvotes - mem.downvotes >= 5);

    // console.log(reg);


    const hotMemes = hot.map(mem => <Mem key={mem.id} mem={mem} handleThumbUp={props.handleThumbUp} handleThumbDown={props.handleThumbDown} />);
    return (
        <>


            <div>
                <h1 className="description">Memy HOT :</h1>
                <hr />
                {hotMemes}

            </div>
        </>
    );
}

export default HotMemesList;
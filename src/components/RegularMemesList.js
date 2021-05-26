import React from 'react';
import Mem from './Mem';
import '../styles/MemesList.css';

const RegularMemesList = (props) => {

    const reg = props.regular.filter(mem => mem.upvotes - mem.downvotes < 5);


    // console.log(reg);

    const regular = reg.map(mem => <Mem key={mem.id} mem={mem} handleThumbUp={props.handleThumbUp} handleThumbDown={props.handleThumbDown} />);

    return (
        <>
            <div>
                <h1 className="description">Memy REGULAR :</h1>
                <hr />
                {regular}
            </div>
        </>
    );
}

export default RegularMemesList;
import React from 'react';
import List from './List'; 
import {useParams } from 'react-router-dom';

function Topic() {
    let { id } = useParams();
    return <h3>Requested topic ID: {id}</h3>;
}

class Board extends React.Component {
    render(){
        return (
            <div>
                <Topic />
            </div>
        );
    }

}
export default Board;
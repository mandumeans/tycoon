import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoardMaker from './BoardMaker'; 
import Board from './Board'; 
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/read/:id">
                <Board/>
            </Route>
            <Route path="/">
                <BoardMaker/>
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);
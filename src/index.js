import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoardMaker from './BoardMaker'; 
import Board from './Board'; 
import './index.css';
import Backend from 'react-dnd-html5-backend'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/read/:id">
                <DndProvider backend={Backend}>
                    <Board/>
                </DndProvider>
            </Route>
            <Route path="/">
                <BoardMaker/>
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);
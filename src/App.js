import './App.css';
import React from 'react';
import H1ByReactCreateElement from './components/H1ByReactCreateElement';
import H1ByReactComponent from './components/H1ByReactComponent';
import H1ByReactPureComponent from './components/H1ByReactPureComponent';
import H1ByFunctionalComponent from './components/H1ByFunctionalComponent';
import Counter from './components/Counter';
import SearchField from './components/SearchField';
import GenreToggle from './components/GenreToggle';

function App() {
    return (
        <div className="App">
            <ul className="components-list">
                <li><H1ByReactCreateElement /></li>
                <li><H1ByReactComponent /></li>
                <li><H1ByReactPureComponent /></li>
                <li><H1ByFunctionalComponent /></li>
                <li><Counter /></li>
                <li><SearchField /></li>
                <li><GenreToggle /></li>
            </ul>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Card} from 'antd';
import 'antd/dist/antd.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Main from "../src/main/component/Main"

function App() {
    return (
        <div className="App">
            <div className="Main">
                <BrowserRouter>

                    <Route exact path={"/main"} component={Main}/>
                    {/*<Route exact path={"/main"} component={Main}/>*/}

                </BrowserRouter>
                <Main/>
            </div>
        </div>
    );
}

export default App;

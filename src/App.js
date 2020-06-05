import React from 'react';
import './App.css';
import {Card} from 'antd';
import 'antd/dist/antd.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Main from "../src/main/component/Main"
import TemporaryCreatePost from "./create/component/TemporaryCreatePost";
/*import CreatePost from "./create/component/TemporaryCreatePost";*/

function App() {
    return (
        <div className="App">
            <div className="Main">
                <BrowserRouter>

                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={"/create"} component={TemporaryCreatePost}/>
                   {/* <Route exact path={"/create"} component={CreatePost}/>*/}

                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

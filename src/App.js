import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./Components/main";
import ExOne from "./Components/exercise-one";
import ExTwo from "./Components/exercise-two";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/exercise1' component={ExOne}/>
                    <Route exact path='/exercise2' component={ExTwo}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;

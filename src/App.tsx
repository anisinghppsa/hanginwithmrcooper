import * as React from 'react';
import { isLoggedIn } from "./api";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Login } from './Login';
import { Store } from './Store';

export const App: React.SFC = () => {
    return (
        <>
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Dwayne "The Store" Johnson</h1>
                        <h2 className="subtitle">Can you buy what The Store is selling?!</h2>
                    </div>
                </div>
            </section>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {
                            isLoggedIn()
                                ? <Store />
                                : <Login />
                        }
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/store">
                        <Store />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

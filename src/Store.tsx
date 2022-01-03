import * as React from 'react';
import { isLoggedIn } from './api';
import { Redirect } from 'react-router';

export const Store: React.FC = props => {
    return (
        <div className="container is-fluid has-background-dark">
            <div className="columns">
                <div className="column is-three-quarters">
                    <p className="notification is-primary">
                        Product list
                    </p>
                </div>
                <div className="column">
                    <p className="notification is-danger">
                        Shopping cart
                    </p>
                </div>
            </div>
            {
                !isLoggedIn() &&
                <Redirect to="/" />
            }
        </div>
    );
}
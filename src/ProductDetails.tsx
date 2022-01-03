import * as React from 'react';
import { isLoggedIn } from './api';
import { Redirect } from 'react-router';

export const ProductDetails: React.FC = props => {
    return (
        <div className="container is-fluid has-text-light">
            This is the product details page!
            {
                !isLoggedIn() &&
                <Redirect to="/" />
            }
        </div>
    );
}
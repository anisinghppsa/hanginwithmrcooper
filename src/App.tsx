import * as React from 'react';

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
            </div>
        </>
    );
}

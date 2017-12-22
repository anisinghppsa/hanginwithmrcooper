import * as React from "react";

interface IAppProps {}
interface IAppState {}

export class App extends React.Component<IAppProps, IAppState> {
  render(){
    return (
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-three-quarters">
            <p className="notification is-primary">Product list</p>
          </div>
          <div className="column">
            <p className="notification is-danger">Shopping cart</p>
          </div>
        </div>
      </div>
    );
  }
}

// @flow

import React from "react";

type Props = {};
export default class Login2 extends React.Component<Props> {
  props: {};
  doSomething = () => {
    console.log("something"); // eslint-disable-line no-console
  };
  render() {
    return (
      <div className="loginDiv">
        <h1>Login 2 Works</h1>
      </div>
    );
  }
}

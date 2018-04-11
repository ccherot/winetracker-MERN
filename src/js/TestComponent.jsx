// @flow

import React from "react";

type Props = {};
export default class TestComponent extends React.Component<Props> {
  props: {};
  doSomething = () => {
    console.log("something"); // eslint-disable-line no-console
  };
  render() {
    return (
      <div className="testComponentDiv">
        <h1>Test Component Works</h1>
      </div>
    );
  }
}

// const TestComponent = () => (
//   <div className="testComponentDiv">
//     <h1>Test Component Works</h1>
//   </div>
// );

// export default TestComponent

import React from 'react';

interface Props {
  title: string;
}

class MyComponent extends React.Component<Props> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

console.log(MyComponent);

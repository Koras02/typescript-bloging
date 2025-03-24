import React from 'react';

interface Props {
  message: string;
}

const MyComponent: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

console.log(MyComponent);

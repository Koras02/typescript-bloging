import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

console.log(Wrapper);

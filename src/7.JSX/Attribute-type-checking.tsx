import React from 'react';

interface Props {
  isActive: boolean;
}

const MyComponent: React.FC<Props> = ({ isActive }) => {
  return <div>{isActive ? '활성화' : '비활성화'}</div>;
};

console.log(MyComponent);

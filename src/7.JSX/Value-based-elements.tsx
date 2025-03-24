interface MyProps {
  title: string;
}

const MyComponent = (props: MyProps) => {
  return <div>{props.title}</div>;
};

const element = <MyComponent title="Hello" />;

console.log(element);

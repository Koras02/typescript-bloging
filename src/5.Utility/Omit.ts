interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, 'email'>;

const user: UserWithoutEmail = {
  id: 1,
  name: 'Alice',
  // not email type
};

console.log(user); // { id: 1, name: "Alice" }

interface User {
  id: number;
  name: string;
  email: string;
}

type UserNameAndEmail = Pick<User, 'name' | 'email'>;

const user: UserNameAndEmail = {
  name: 'Alice',
  email: 'alice@example.com',
};

console.log('User Name and Email:', user); // User Name and Email: { name: "Alcie", email: "alice@example.com" }

interface UserWithOptionalFields {
  id?: number;
  name?: string;
  email?: string;
}

const createUser = (user: Required<UserWithOptionalFields>) => {
  console.log('Creating user:', user);
};

createUser({ id: 1, name: 'Bob', email: 'Bob@example.com' });

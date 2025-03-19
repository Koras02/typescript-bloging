const getUser = () => {
  return { id: 1, name: 'Alice' };
};

type UserType = ReturnType<typeof getUser>;
const userData: UserType = getUser();
console.log('User Data:', userData); // User Data: { id: 1, name: "Alice" }

interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (userId: number, userUpdates: Partial<User>) => {
  console.log(`Update User ${userId} with data:`, userUpdates);
};

updateUser(1, { name: 'James' }); // Update User 1 with data: { name: "James" }

type UserRoles = 'admin' | 'user' | 'guest';

const UserRoles: Record<UserRoles, string> = {
  admin: 'Adminstrator',
  user: 'Regular User',
  guest: 'Guest User',
};

console.log('User Roles:', UserRoles); // User Roles: { admin: "Adminstrator", user: "Regular User", guest: "Guest User" }

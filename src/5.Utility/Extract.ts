type Role = 'admin' | 'user' | 'guest';
type AdminRole = Extract<Role, 'admin'>; // "admin

const adminRole: AdminRole = 'admin';

console.log('Admin Role:', adminRole); // Admin Role: admin

type Role = 'admin' | 'user' | 'guest';
type NonAdminRole = Exclude<Role, 'admin'>;

const NonAdminRoles: NonAdminRole[] = ['user', 'guest'];

console.log('Non-Admin Role:', NonAdminRoles); // Non-Admin Role: [ 'user', 'guest' ]

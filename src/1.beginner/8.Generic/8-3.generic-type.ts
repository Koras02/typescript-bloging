interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identityFn<T>(arg: T): T {
  return arg;
}

const myIdentity: GenericIdentityFn<number> = identityFn;
console.log(myIdentity(10)); // 10

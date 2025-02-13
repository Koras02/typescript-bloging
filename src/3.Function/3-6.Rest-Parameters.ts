function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}

// restName은 "Kora Kiko Luci Picus"가 됨
// let restName = buildName('Kora', 'Kiko', 'Lucio', 'Picus');
let restName: (fname: string, ...rest: string[]) => string = buildName;

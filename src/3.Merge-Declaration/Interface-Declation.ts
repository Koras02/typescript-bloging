interface Option {
  name: string;
}

interface Option {
  size: number;
}

const option: Option = {
  name: 'Full-Size',
  size: 1920 * 1080,
};

console.log(option); // { name: 'Full-Size', size: 2073600 }

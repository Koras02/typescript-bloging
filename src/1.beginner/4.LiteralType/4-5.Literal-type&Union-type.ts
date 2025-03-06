type Toast = 'Egg' | 'ham' | 'Cheese';

function eat(toast: Toast) {
  console.log(`Eating a ${toast}`);
}

eat('Cheese'); // true
eat('Egg'); // true
// eat('chicken'); // Error: 'chicken' toast is not list

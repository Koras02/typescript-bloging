type Driver = 'left' | 'right' | 'up' | 'down' | 'break';

function MoveEvent(direction: Driver) {
  console.log(`Moving ${direction}`);
}

MoveEvent('up'); // OK
MoveEvent('break'); // OK
MoveEvent('foward'); // X Not Driver Type

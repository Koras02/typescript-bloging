type Pack = {
  color: 'red' | 'gray' | 'blue';
  pack: 'collection' | 'Fork' | 'Thank';
};

const pickA: Pack = { color: 'red', pack: 'Fork' }; // Success
// const pickB: Pack = { color: 'red', pack: 'Tick' }; // Fail

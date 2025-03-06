type IsActive = true | false; // true or false only

function setActive(active: IsActive) {
  console.log(`Active Status: ${active}`);
}

setActive(true); // OK
setActive(false); // OK
// setActive(NotTrue); // Not Error True & False

type StatusCode = 200 | 404 | 500;

function InternetCode(status: StatusCode) {
  console.log(`Response status: ${status}`);
}

InternetCode(404); // OK
InternetCode(200); // OK
InternetCode(5000); // Failed 5000 Code Not List !

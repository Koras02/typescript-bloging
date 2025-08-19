const items = document.querySelectorAll<HTMLElement>('ul > li');
items.forEach((item) => {
  console.log(item.innerHTML);
});

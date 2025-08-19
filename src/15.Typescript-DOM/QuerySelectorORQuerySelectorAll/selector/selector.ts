const input = document.querySelector<HTMLInputElement>('#username');
const button = document.querySelector<HTMLButtonElement>('#btn');

button?.addEventListener('click', () => {
  alert(`입력값: ${input?.value}`);
});

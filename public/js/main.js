const input = document.querySelector('.search-bar');
const suggestion = document.querySelector('.search-suggestion');

input.addEventListener('input', () => {
  const val = input.value.trim();
  fetch('/name', (dataObj) => {
    const countryName = dataObj.name;
    countryName.forEach((item) => {
      if (val === item) {
        suggestion.appendChild(item);
      }
    });
  });
});

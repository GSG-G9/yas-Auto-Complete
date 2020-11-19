function fetch() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const dataObj = JSON.parse(xhr.responseText);

         


      } else if (xhr.status === 404) {
        // eslint-disable-next-line no-use-before-define
        handleError('page Not found..!');
      } else {
        // eslint-disable-next-line no-use-before-define
        handleError(`internal error ${xhr.status}, ${xhr.responseText}`);
      }
    }
  };
  xhr.open('GET', '/name', true);
  xhr.send();
}
function handleError(error) {
  const bodyHtml = document.querySelector('body');
  const bodyText = document.textContent(error);
  bodyHtml.appendChild(bodyText);
}
module.exports = fetch;

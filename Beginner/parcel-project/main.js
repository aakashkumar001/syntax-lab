import axios from "axios";

const app = document.getElementById("app");
app.textContent = "Fetching data...";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    app.innerHTML = `<pre>${JSON.stringify(
      response.data.slice(0, 5),
      null,
      2
    )}</pre>`;
  })
  .catch((error) => {
    app.textContent = "Error fetching data.";
    console.error(error);
  });

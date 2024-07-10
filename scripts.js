const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  if (typeof entries !== "number" || entries == "null") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
  } else {
    const { dividend, divider } = Object.fromEntries(entries);

    // Added rounds down to the first whole number
    result.innerText = Math.floor(dividend / divider);
  }
});

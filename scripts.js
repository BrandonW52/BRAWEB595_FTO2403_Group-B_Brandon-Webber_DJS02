// Declares global varables
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// sets up the event listenere for the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  // Declers dividend && divider
  const { dividend, divider } = Object.fromEntries(entries);

  // Checks if input fields are empty
  if (dividend.length === 0 || divider.length === 0) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";

    // Checks if the divider is above 0
  } else if (+divider <= 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    // final check to see if it is a number
  } else {
    // Rounds down to the first whole number
    const sum = Math.floor(dividend / divider);

    // Checks if it is a number
    if (isNaN(sum)) {
      document.querySelector(
        "body"
      ).innerHTML = `<h1>Something critical went wrong. Please reload the page</h1>`;

      throw new Error("Critical Error invalid data entry");

      // Displays the number
    } else {
      result.innerText = sum;
    }
  }
});

# JavaScript Fundamentals Practice Exercises (ldm-24-25/3-javascript-fundamentals/3-practicas-fundamentals-2)

This repository contains a series of practical exercises designed to reinforce the fundamentals of JavaScript, including DOM (Document Object Model) manipulation, event handling, and form interaction.

## Exercise Descriptions

Below are the descriptions of the exercises contained in the HTML files within this folder, along with the objectives outlined in the `TODO` comments inside each file.

### 1. `1-display-value.html`

*   **Objective:** Display the value of a text field in a `<p>` element when a button is clicked.
*   **Description:**
    *   There is a text input field (`<input type="text">`) with the `id="myInput"`.
    *   There is a button (`<button>`) with the `id="showValueButton"`.
    *   There is a paragraph element (`<p>`) with the `id="inputValue"`.
    *   When the button is clicked, the value of the text field should be displayed in the `<p>` element.
*   **`TODO`:**
    *   **Add a second button to display the input value in an `<h1>` element.**

### 2. `2-multiple-values-change.html`

*   **Objective:** Change the text of multiple `<p>` elements when a button is clicked.
*   **Description:**
    *   There is a button (`<button>`) with the `id="changeAllButton"`.
    *   There are several paragraph elements (`<p>`) with the class `changeable`.
    *   When the button is clicked, the text of all paragraphs with the class `changeable` should change to "Changed!".
*   **`TODO`:**
    *   **Display the changed text in an unordered list (`<ul>`).**

### 3. `3-inner-html-error.html`

*   **Objective:** Add and remove HTML content within a `<div>` using `innerHTML`.
*   **Description:**
    *   There is a button (`<button>`) with the `id="htmlButton"`.
    *   There is a `<div>` element with the `id="htmlDiv"`.
    *   When the button is clicked, the content `<p>New Paragraph</p>` is added inside the `<div>`.
    *   **Correction:** The original code has an error (`innerHtml` instead of `innerHTML`), which must be corrected.
*   **`TODO`:**
    *   **Create another button to remove the HTML content from the `<div>`.**

### 4. `4-hello-world.html`

*   **Objective:** Display the message "Hello World" in the console, in an alert, and in a `<p>` element.
*   **Description:**
    *   There is an `<h1>` title with the text "Hello World".
    *   There is a paragraph element `<p>`.
*   **`TODO`:**
    *   **Add "Hello World" in the console, in an alert, and also in the `<p>` tag from JavaScript.**

### 5. `5-hello-world-event.html`

*   **Objective:** Display the message "Hello World" in an alert and in a `<p>` element when a button is clicked.
*   **Description:**
    *   There is a button (`<button>`) that, when clicked, should execute the `mostrarMensaje()` function.
    *   There is a paragraph element (`<p>`) with the `id="mensaje"`.
*   **`TODO`:**
    *   **Create a function `mostrarMensaje` that shows an alert with "Hello World" and also adds the same message to the `<p>` tag with `id="mensaje"`.**

### 6. `6-forms.html`

*   **Objective:** Validate a form and display the entered values in `<p>` elements.
*   **Description:**
    *   There is a form (`<form>`) with the fields: Name, Email, Password, and Confirm Password.
    *   There are `<span>` elements to display error messages next to each field.
    *   There are `<p>` elements to display the entered values.
*   **`TODO`:**
    *   **When the "Registrarse" (Register) button is clicked, all input values should be displayed in their respective `<p>` tags.**
    *   **Add validation for the form:**
        *   If the name is empty, show an error message in the `<span>` with `id="errorNombre"`.
        *   If the email is empty, show an error message in the `<span>` with `id="errorEmail"`.
        *   If the password is empty, show an error message in the `<span>` with `id="errorPassword"`.
        *   If the password and confirm password are not the same, show an error message in the `<span>` with `id="errorConfirmPassword"`.

## How to Use

1.  Open each HTML file in a web browser to view the exercise.
2.  Review the JavaScript code within each file to understand how the functionalities are implemented.
3.  Complete the tasks indicated in the `TODO` comments to practice and reinforce your knowledge.

## Steps to Follow
1.  **Github repositrory:**  Ensure you unzip the folder in your git repository and push your changes before starting the project.
2.  **Solutions:** Resolve all the situation explain above.
3.  **Testing:** Open the HTML file in a web browser to verify that the layout and styles are applied correctly.
5.  **Documentation:** Document the process, including any challenges faced and how they were overcome. This can be done in a README.md file or as comments within the code.
6.  **Push Changes:** Once the project is complete, push the changes to your GitHub repository.
7.  **Review:** Review the project to ensure all requirements are met and that the code is clean and well-organized.


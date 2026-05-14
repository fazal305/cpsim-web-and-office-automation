const surveyForm = document.getElementById("vacationSurveyForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("emailAddress");
const ageInput = document.getElementById("userAge");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

const travelWishes = document.getElementById("travelWishes");
const charCounter = document.getElementById("charCounter");

const surveyCard = document.getElementById("surveyCard");
const thankYouCard = document.getElementById("thankYouCard");
const thankYouMessage = document.getElementById("thankYouMessage");

travelWishes.addEventListener("input", function () {

    const currentLength = travelWishes.value.length;

    charCounter.textContent =
        `${currentLength} / 300 characters`;
});

function isValidEmail(emailText) {

    const atSymbol = emailText.indexOf("@");
    const dotSymbol = emailText.lastIndexOf(".");

    return (
        atSymbol > 0 &&
        dotSymbol > atSymbol + 1 &&
        dotSymbol < emailText.length - 1
    );
}

function clearErrors() {

    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
}

surveyForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors();

    let isFormValid = true;

    const userName = fullNameInput.value.trim();
    const userEmail = emailInput.value.trim();
    const userAge = ageInput.value.trim();

    if (userName === "") {

        nameError.textContent =
            "Please enter your full name.";

        isFormValid = false;
    }

    if (userEmail === "") {

        emailError.textContent =
            "Please enter your email address.";

        isFormValid = false;

    } else if (!isValidEmail(userEmail)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isFormValid = false;
    }

    if (userAge === "") {

        ageError.textContent =
            "Please enter your age.";

        isFormValid = false;

    } else if (
        isNaN(userAge) ||
        userAge < 1 ||
        userAge > 120
    ) {

        ageError.textContent =
            "Age must be between 1 and 120.";

        isFormValid = false;
    }

    if (isFormValid) {

        surveyCard.classList.add("hidden");

        thankYouCard.classList.remove("hidden");

        thankYouMessage.textContent =
            `Thanks for sharing your travel dreams, ${userName}! 🏝️`;
    }
});
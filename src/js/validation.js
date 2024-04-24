function emailValidation() {
    let value = validateEmail.value;

    if (value.includes("@") === false) {
        value = "";
        labelEmail.classList.add("email_class");
    } else {
        labelEmail.classList.remove("email_class");
    }
    console.log("aquí");
    console.log(value);
};
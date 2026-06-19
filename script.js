function validateContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

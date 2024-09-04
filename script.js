document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Förhindrar att formuläret skickas

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let university = document.getElementById("university").value;
    let year = document.getElementById("year").value;

    if (name && email && university && year) {
        alert("Tack för din anmälan, " + name + " från " + university + "!");
        document.getElementById("registrationForm").reset(); // Återställer formuläret
    } else {
        alert("Vänligen fyll i alla fält.");
    }
});

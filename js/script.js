function toggleProfileDropdown() {
    const profileDropdown = document.getElementById("profileDropdown");
    profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
}

const username = localStorage.getItem("username");
if (username) {
    document.getElementById("username").textContent = username;
}

window.addEventListener("DOMContentLoaded", () => {
    const phoneNumber = localStorage.getItem("phoneNumber");

    if (phoneNumber) {
        const maskedPhone = `${phoneNumber.slice(0, 2)}XXX XXX${phoneNumber.slice(-2)}`;
        const phoneElement = document.getElementById("phone");

        if (phoneElement) {
            phoneElement.textContent = maskedPhone;
        }
    }
});

function logout() {
    localStorage.clear();
    window.location.href = 'login.html';
}

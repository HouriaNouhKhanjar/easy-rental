document.addEventListener('DOMContentLoaded', function () {
    // This code was taken from stackoverflow 
    // Do not allow the user to select a renting date before the current day in Booking form.
    document.getElementById("rent-date").min = new Date().toISOString().split("T")[0];
});
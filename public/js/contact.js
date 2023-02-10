const form = document.querySelector("#direct-message-form");
const scriptURL = "https://script.google.com/macros/s/AKfycbz5NgYcjiy6_dnz-vDxWgnvF3IVeFfKsYd5PgHvtv4AaIM2_eTQQl49hhnM7f90kWqsNw/exec";

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = new FormData(form);
    fetch(scriptURL, {
            method: "POST",
            body: data,
            headers: {
                "Access-Control-Allow-Origin": '*'
            },
            mode: "no-cors"
        })
        .then(res => window.alert("Sent to Nafim"))
        .catch(err => console.log("Error:", err.message));
});
function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "fromName": contactForm.name.value,
        "fromEmailAddr": contactForm.emailaddress.value,
        "projectRequest": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("Failed", error);
        });
        
    return false; // To block from loading a new page
}
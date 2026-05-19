document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const clientName = document.getElementById("name").value;
            
            // Front-end simulatie van berichtverzending
            alert(`Bedankt voor uw bericht, ${clientName}! Uw invoer is opgevangen in de front-end demonstratie. Ik neem zo snel mogelijk contact met u op.`);
            
            contactForm.reset();
        });
    }
});
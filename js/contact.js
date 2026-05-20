document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault(); // Voorkom dat de pagina herlaadt of doorstuurt
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const clientName = document.getElementById("name").value;
            const originalButtonText = submitButton.innerText;
            
            // Zet de knop in een visuele 'laad' status
            submitButton.innerText = "Verzenden...";
            submitButton.disabled = true;

            // Verzamel alle formulierdata (inclusief de access_key)
            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                // Stuur de data via een POST-verzoek naar de Web3Forms API
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                const result = await response.json();

                if (response.status === 200) {
                    // Succesvol verzonden via Web3Forms
                    alert(`Bedankt voor uw bericht, ${clientName}! Het is succesvol verzonden. Ik neem zo snel mogelijk contact met u op.`);
                    contactForm.reset();
                } else {
                    // Foutmelding teruggegeven door de API zelf
                    alert(result.message || "Oeps! Er ging iets mis bij het verwerken van het formulier. Probeer het later nog eens.");
                }
            } catch (error) {
                // Netwerkfout (bijvoorbeeld geen internet)
                alert("Netwerkfout: kan het bericht momenteel niet verzenden. Controleer uw internetverbinding.");
            } finally {
                // Herstel de verzendknop naar zijn originele staat
                submitButton.innerText = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
});
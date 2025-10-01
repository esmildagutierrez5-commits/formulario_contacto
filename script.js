document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsappForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validación PRO
    if (name.length < 2) {
      alert("Por favor ingresa un nombre válido.");
      return;
    }

    if (!validateEmail(email)) {
      alert("El correo electrónico no es válido.");
      return;
    }

    if (message.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    // Reemplaza con tu número de WhatsApp con código de país (sin + ni espacios)
    const phoneNumber = "916387639"; 

    // Crear mensaje con saltos de línea y encodeURIComponent
    const text = `Hola, soy ${name} (%0AEmail: ${email})%0A%0A${encodeURIComponent(message)}`;

    // Redirigir a WhatsApp Web/Mobile
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
  });
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// >>> EDITA ESTO <<<
const WHATSAPP_PHONE = "19209445309"; // solo números con lada (ej: 1 para USA)
const WHATSAPP_MSG   = "Hola, quiero ordenar Puravida Fit 🍍";
const PAYPAL_LINK    = "https://www.paypal.me/tuusuario/35"; // o link a Shopify/Stripe

// Botones
function openWhatsApp(){
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  window.open(url, "_blank");
}
function openPayPal(){
  window.open(PAYPAL_LINK, "_blank");
}

// Enlaces del DOM
document.getElementById("btn-whatsapp")?.addEventListener("click", openWhatsApp);
document.getElementById("btn-paypal")?.addEventListener("click", openPayPal);
document.getElementById("cta-top")?.addEventListener("click", openWhatsApp);

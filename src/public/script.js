async function chargerCitation() {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    document.getElementById("citation").innerText = `${data[0].q} — ${data[0].a}`;
  } catch (error) {
    console.error("Erreur lors du chargement de la citation :", error);
    document.getElementById("citation").innerText = "⚠️ Impossible de charger la citation.";
  }
}

document.getElementById("nouvelle").addEventListener("click", chargerCitation);
window.onload = chargerCitation;

// Initial load of a quote when the page is opened

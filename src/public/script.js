async function chargerCitation() {
  try {
    const response = await fetch("https://zenquotes.io/api/random");

    if (!response.ok) { // Vérifie que la réponse est correcte
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    document.getElementById("citation").innerText = `${data[0].q} — ${data[0].a}`;
  } catch (error) {
    document.getElementById("citation").innerText = "Impossible de charger la citation. Réessayez plus tard.";
    console.error("Erreur fetch :", error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nouvelle").addEventListener("click", chargerCitation);
  chargerCitation();
});

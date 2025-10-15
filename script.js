async function chargerCitation() {
  const citationElement = document.getElementById("citation");
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    citationElement.innerText = `${data[0].q} — ${data[0].a}`;
  } catch (error) {
    citationElement.innerText = "Impossible de charger la citation.";
  }
}
document.getElementById("nouvelle").addEventListener("click", chargerCitation);
window.addEventListener("load", chargerCitation);

function generateQR() {
  const qrInput = document.getElementById("qrInput").value;
  if (!qrInput) return;

  fetch("http://localhost:5000/generate-qr", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: qrInput }),
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const qrOutput = document.getElementById("qrOutput");
      qrOutput.innerHTML = `<img src="${url}" class="mx-auto rounded-lg">`;
      document.getElementById("qrInfo").classList.remove("hidden");
      document.getElementById("downloadBtn").classList.remove("hidden");
      window.currentQR = url; // Store for download
    })
    .catch((error) => console.error("Error:", error));
}

// Update download function
function downloadQR() {
  if (!window.currentQR) return;
  const link = document.createElement("a");
  link.download = "qrcode.png";
  link.href = window.currentQR;
  link.click();
}

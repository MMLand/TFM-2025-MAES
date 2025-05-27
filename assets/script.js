function showPdf(modelName) {
  console.log("trying");
  const pdfViewer = document.getElementById('pdf-viewer');
  pdfViewer.src = `resources/${modelName}.pdf`;
}

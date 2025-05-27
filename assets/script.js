function showPdf(modelName) {
  const pdfViewer = document.getElementById('pdf-viewer');
  pdfViewer.src = `resources/${modelName}.pdf`;
}

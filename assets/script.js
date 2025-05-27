function showPdf(modelName) {
  const pdfViewer = document.getElementById('pdf-viewer');
  pdfViewer.src = `pdfs/${modelName}.pdf`;
}

import html2canvas from "html2canvas";

export default function screenShot() {
  html2canvas(document.body, {
    useCORS: true,
  }).then(function (canvas) {
    // Convert the canvas to a data URL
    var dataURL = canvas.toDataURL("image/png");

    // Create a link element
    var downloadLink = document.createElement("a");

    // Set the download attribute with a filename
    downloadLink.download = "myResume.png";

    // Set the href of the link to the data URL
    downloadLink.href = dataURL;

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Programmatically click the link to trigger the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
  });
}

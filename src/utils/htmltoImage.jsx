import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export default function screenShot() {
  htmlToImage
    .toPng(document.body)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      download(dataUrl, "my-resume.png");
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

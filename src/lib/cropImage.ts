import { createImage } from "./createImage";

interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default async function getCroppedImg(imageSrc: string, croppedAreaPixels: CroppedArea) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return null;

  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  ctx.drawImage(
    image,
    croppedAreaPixels.x,
    croppedAreaPixels.y,
    croppedAreaPixels.width,
    croppedAreaPixels.height,
    0,
    0,
    croppedAreaPixels.width,
    croppedAreaPixels.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("Canvas is empty");
        return;
      }
      const croppedImageUrl = URL.createObjectURL(blob);
      resolve(croppedImageUrl);
    }, "image/jpeg");
  });
}

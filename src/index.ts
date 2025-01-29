import { postImage } from './clients/at';
import { getNextImage } from './images';
import * as dotenv from 'dotenv';
dotenv.config();

// EDIT THIS!
function postTextFromFilename(filename: string): string {
  // Remove the file extension
  const nameWithoutExtension = filename.split('.')[0];

  // Return the filename
  return nameWithoutExtension;
}

// EDIT THIS!
function altTextFromFilename(filename: string): string {
  return 'Image from ' + postTextFromFilename(filename);
}

// Shouldn't have to edit this.
async function main() {
  const { LAST_IMAGE_NAME: lastImageName } = process.env;
  const nextImage = await getNextImage({ lastImageName });

  console.log(nextImage.imageName);

  await postImage({
    path: nextImage.absolutePath,
    text: postTextFromFilename(nextImage.imageName),
    altText: altTextFromFilename(nextImage.imageName),
  });
}

main();
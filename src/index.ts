import { postImage } from './clients/at';
import { getNextImage } from './images';
import * as dotenv from 'dotenv';
dotenv.config();

// EDIT THIS!
function postTextFromImageName(): string {
  // Add a default text and a hashtag link
  return `i dont need this lmao #[tt](#tt #uu)`;
}

// EDIT THIS!
function altTextFromImageName(imageName: string): string {
  return 'gg.';
}

// Shouldn't have to edit this.
async function main() {
  const { LAST_IMAGE_NAME: lastImageName } = process.env;
  const nextImage = await getNextImage({ lastImageName });

  console.log(nextImage.imageName);

  await postImage({
    path: nextImage.absolutePath,
    text: postTextFromImageName(),
    altText: altTextFromImageName(nextImage.imageName),
  });
}

main();
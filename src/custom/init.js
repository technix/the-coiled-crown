import processMarkup from './markup';
import preloadImages from 'src/utils/preload-images';
import { getAssetPath } from "src/utils/get-asset-path";

export default async function customInit(atrament) {
  // scene processor - process game-specific markup
  atrament.game.defineSceneProcessor((scene) => {
    scene.content = scene.content.map(
      (item) => ({ ...item, text: processMarkup(item.text) })
    );
  });
  // preload images
  await preloadImages(getAssetPath, [
    'written-in-ink.png',
    'images/cover.jpg'
  ]);
}

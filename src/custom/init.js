import processMarkup from './markup';
import preloadImages from 'src/utils/preload-images';

export default async function customInit(atrament) {
  // scene processor - process game-specific markup
  atrament.game.defineSceneProcessor((scene) => {
    scene.content = scene.content.map(
      (item) => ({ ...item, text: processMarkup(item.text) })
    );
  });
  // preload images
  await preloadImages([
    'assets/written-in-ink.png',
    'assets/game/images/cover.jpg'
  ]);
}

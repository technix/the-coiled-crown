import { h } from 'preact';
import { route } from 'preact-router';
import { useContext } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import Atrament from 'src/atrament-context';

import { Block, Container, ContainerText, LinkMenu } from 'src/components/ui';

const HomeRoute = () => {
  const atrament = useContext(Atrament);
  const gamestate = useStore(atrament.store());
  const mainMenu = () => route('/');

  return (
    <Container>
      <ContainerText fontSize={gamestate.settings.fontSize}>
        <div style="text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
          <Block>
            <h1>The Coiled Crown</h1>
            <p>    
              (c) 2021 <a href="https://tridentgamebooks.com/" target="_blank" rel="noreferrer">Trident Gamebooks, LLC</a>. All rights reserved.
              Gamebook text used with permission.
            </p>
            <p>
              The gamebook is adapted for Ink and Atrament by <a href="https://technix.in.ua/" target="_blank" rel="noreferrer">Serhii "techniX" Mozhaiskyi</a>.
            </p>
            <p>
              Music by <a href="https://n91music.itch.io/" target="_blank" rel="noreferrer">N91Music</a>.
            </p>
            <p>
              <img src="assets/written-in-ink.png" style="width: 30%; padding: 1rem" />
            </p>
          </Block>
        </div>
        <Block>
          <LinkMenu key="mainmenu" onClick={mainMenu}>Main menu</LinkMenu>
        </Block>
      </ContainerText>
    </Container>
  );
};

export default HomeRoute;
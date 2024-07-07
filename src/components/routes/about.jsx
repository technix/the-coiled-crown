import { h } from 'preact';
import { route } from 'preact-router';
import { Text } from '@eo-locale/preact';

import useAtrament from 'src/atrament/hooks';

import Settings from 'src/components/settings';

import Block from '../ui/block';
import Container from '../ui/container';
import ContainerText from '../ui/container-text';
import ContainerFlex from '../ui/container-flex';
import LinkMenu from '../ui/link-menu';

const AboutRoute = () => {
  const { state } = useAtrament();
  const mainMenu = () => route('/');

  return (
    <Container>
      <Settings />
      <ContainerText fontSize={state.settings.fontSize}>
        <ContainerFlex>
          <div style='text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center'>
            <h1>The Coiled Crown</h1>
            <p>    
              (c) 2021 <a href="https://tridentgamebooks.com/" target="_blank" rel="noreferrer">Trident Gamebooks, LLC</a>. All rights reserved.
              Gamebook text used with permission.
            </p>
            <p>
              The gamebook is adapted for <a href="https://www.inklestudios.com/ink/" target="_blank" rel="noreferrer">Ink</a> and <a href="https://github.com/technix/atrament-core" target="_blank" rel="noreferrer">Atrament</a> by <a href="https://technix.in.ua/" target="_blank" rel="noreferrer">Serhii "techniX" Mozhaiskyi</a>.
            </p>
            <p>
              Music by <a href="https://n91music.itch.io/" target="_blank" rel="noreferrer">N91Music</a>.
            </p>
            <p>
              <img src="game/written-in-ink.png" style="width: 30%; padding: 1rem" /> 
            </p> 
          </div>
        </ContainerFlex>
        <Block>
          <LinkMenu key="mainmenu" onClick={mainMenu}><Text id={'main.menu'} /></LinkMenu>
        </Block>
      </ContainerText>
    </Container>
  );
};

export default AboutRoute;
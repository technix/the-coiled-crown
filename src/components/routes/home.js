import { h } from 'preact';
import { route } from 'preact-router';
import { useContext, useEffect, useState, useCallback } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import Atrament from 'src/atrament-context';

import { Block, Container, ContainerFlex, Header, LinkMenu } from 'src/components/ui';
import Settings from 'src/components/screens/settings';

const HomeRoute = () => {
  const atrament = useContext(Atrament);
  const gamestate = useStore(atrament.store());

  const { title, author } = gamestate.metadata;

  const [ canBeResumed, setResumeState ] = useState(false);
  useEffect(() => {
    const initHome = async () => {
      const canResumeGame = await atrament.game.canResume();
      setResumeState(!!canResumeGame);
    }
    initHome();
  }, [ atrament.game ]);

  const newGame = useCallback(async () => {
    await atrament.game.start();
    await atrament.game.save();
    route('/game');
  }, [ atrament.game ]);

  const resumeGame = () => route('/game');
  const aboutGame = () => route('/about');

  return (
    <Container>
      <ContainerFlex>
        <Settings />
        <Header>
          <img src='assets/game/images/cover.jpg' style={{width: '50%'}} />
          <h1>{title ? title : "Atrament UI"}</h1>
          <p>{author ? `by ${author}` : "Test application"}</p>
        </Header>
        <Block align='end'>
          {canBeResumed ? <LinkMenu key="continuegame" onClick={resumeGame}>Continue</LinkMenu> : ''}
          <LinkMenu key="startgame" onClick={newGame}>New game</LinkMenu>
          <LinkMenu key="about" onClick={aboutGame}>About</LinkMenu>
        </Block>
      </ContainerFlex>
    </Container>
  );
};

export default HomeRoute;
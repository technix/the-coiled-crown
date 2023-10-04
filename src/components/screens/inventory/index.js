import { h } from 'preact';
import style from './index.css';
import { useCallback, useContext, useEffect, useState } from 'preact/hooks';

import {
  Backdrop,
  Modal,
  CloseButton,
  ContainerText
} from 'src/components/ui';

import Atrament from 'src/atrament-context';

const InventoryIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(0,0)" style=""><path d="M250.882 22.802c-23.366 3.035-44.553 30.444-44.553 65.935 0 19.558 6.771 36.856 16.695 48.815l11.84 14.263-18.217 3.424c-12.9 2.425-22.358 9.24-30.443 20.336-8.085 11.097-14.266 26.558-18.598 44.375-7.843 32.28-9.568 71.693-9.842 106.436h42.868l11.771 157.836c29.894 6.748 61.811 6.51 90.602.025l10.414-157.86h40.816c-.027-35.169-.477-75.126-7.584-107.65-3.918-17.934-9.858-33.372-18.04-44.343-8.185-10.97-18.08-17.745-32.563-19.989l-18.592-2.88 11.736-14.704c9.495-11.897 15.932-28.997 15.932-48.082 0-37.838-23.655-65.844-49.399-65.844z" fill="var(--fg-color)" fill-opacity="1" /></g></svg>);

const Inventory = () => {
  const atrament = useContext(Atrament);

  const [ isOpen, setOpenInventory ] = useState(false);
  const [ inventoryText, setInventoryText ] = useState('');
  const toggleInventory = useCallback(() => setOpenInventory(!isOpen), [ isOpen ]);

  const openInventory = () => {
    const result = atrament.ink.evaluateFunction('player_inventory', [], true);
    setInventoryText(result.output);
    toggleInventory();
  };

  const escHandler = useCallback((e) => {
    if (e.key === "Escape") {
      setOpenInventory(false)
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escHandler, false);
    return () => {
      document.removeEventListener("keydown", escHandler, false);
    }
  }, [ escHandler ]);

  if (isOpen) {
    return (
      <div class={style.inventory_container}>
        <Backdrop onClick={toggleInventory} />
        <Modal>
          <CloseButton onClick={toggleInventory} />
          <ContainerText>
            <p dangerouslySetInnerHTML={{__html: inventoryText}} />
          </ContainerText>
        </Modal>
      </div>
    );
  }
  return (
    <button class={style.inventory_toggle} onClick={openInventory} title="Inventory">
      <InventoryIcon />
    </button>
  );
};

export default Inventory;
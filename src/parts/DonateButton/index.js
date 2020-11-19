import React from 'react';

import { useModali } from 'modali';
import useTranslations from '../../components/useTranslations';
import DonateModal from '../DonateModal';

const DonateButton = () => {

  const [modal, toggleModal] = useModali({
    animated: true,
    closeButton: false,
  });
  const { buttonDonate } = useTranslations();

  return (
    <>
      <DonateModal {...modal} toggleModal={toggleModal} />
      <button className="button-donate text-white" onClick={toggleModal}>
        {buttonDonate}
      </button>
    </>
  );
}

export default DonateButton;

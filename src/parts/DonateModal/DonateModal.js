import React from 'react';
// import styled from 'styled-components';
// import { COLORS } from 'src/theme';
import Modali from 'modali';
import DonateForm from '../DonateForm';

// const StyledModal = styled.div`
//   position: relative;
//   max-height: 70vh;
//   overflow-y: auto;
//   padding: 24px;
//   background: ${COLORS.PRIMARY};
//   color: ${COLORS.ACCENT};
// `;
// const StyledClose = styled.div`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   font-size: 36px;
//   line-height: 16px;
//   color: ${COLORS.ACCENT};
//   cursor: pointer;
// `;

export default function DonateModal({ toggleModal, ...modal }) {
  return (
    <Modali.Modal {...modal}>
      {/* <StyledModal> */}
        {/* <StyledClose onClick={toggleModal}>&times;</StyledClose> */}
        <DonateForm />
      {/* </StyledModal> */}
    </Modali.Modal>
  );
}

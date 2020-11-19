import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
// import { COLORS } from 'src/theme';
import PledgeHeader from './PledgeHeader';

// const StyledDonationForm = styled.iframe`
//   background-color: white;
//   max-width: 600px;
//   min-width: 320px;
//   width: 100%;
//   height: 100%;
//   border: none;
//   overflow: hidden;
// `;

export default function Pledge() {
  useEffect(() => {
    const url =
      'https://host.nxt.blackbaud.com/donor-form?svcid=renxt&formId=83cf5ea3-e770-4aa5-a3e2-0999f6d00440&envid=p-4qGzVknmZEmKaFd-duPWDA';
    const iframe = document.getElementById(
      'form-83cf5ea3-e770-4aa5-a3e2-0999f6d00440',
    );
    const bbemlParser = new RegExp('[?&]bbeml=([^&#]*)').exec(
      document.location.search,
    );
    const bbeml = bbemlParser ? decodeURI(bbemlParser[1]) || 0 : '';
    iframe.src =
      url + '&referral=' + document.referrer + '&bbeml=' + bbeml;
    window.addEventListener('message', function(event) {
      if (event.data === 'checkout loaded') {
        document
          .getElementById('form-83cf5ea3-e770-4aa5-a3e2-0999f6d00440')
          .scrollIntoView();
      }
      if (event.data.messageType === 'height-change') {
        document.getElementById(
          'form-83cf5ea3-e770-4aa5-a3e2-0999f6d00440',
        ).style.minHeight = event.data.message.height;
      }
    });
  }, []);

  return (
    <iframe
      id="form-83cf5ea3-e770-4aa5-a3e2-0999f6d00440"
      class="blackbaud-donation-form"
      title="Donation Form"
      scrolling="no"
    />
    // <StyledDonationForm
    //   id="form-83cf5ea3-e770-4aa5-a3e2-0999f6d00440"
    //   class="blackbaud-donation-form"
    //   title="Donation Form"
    //   scrolling="no"
    // />
  );
}

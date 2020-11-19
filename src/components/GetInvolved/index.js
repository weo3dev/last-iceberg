import React, { useEffect, useState } from 'react';
import Modali, { useModali } from 'modali';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import useTranslations from '../useTranslations';
import Share from '../../parts/Share';
import JellyButton from '../../parts/JellyButton';
import SponsorLogosAlt from '../../parts/SponsorLogosAlt';
import DonateModal from '../../parts/DonateModal';
import boysPlaying from '../../images/boys-playing.png';

import 'aos/dist/aos.css';

const GetInvolved = () => {

  const [pledgeModal, togglePledgeModal] = useModali({
    animated: false,
    closeButton: false,
    onShow: handleModaliShow,
  });
  const [donateModal, toggleDonateModal] = useModali({
    animated: false,
    closeButton: false,
    onShow: handleModaliShow,
  });

  const {
    involvedHeaderOne,
    involvedHeaderTwo,
    involvedTitleChange,
    involvedTitleMake,
    involvedMakeParagraphTopline,
    involvedMakeParagraphBody,
    involvedButtonDonateOne,
    involvedButtonDonateTwo,
    involvedTitlePledge,
    involvedPledgeParagraph,
    involvedEmailHere,
    involvedButtonPledgeOne,
    involvedButtonPledgeTwo,
  } = useTranslations();

  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require('aos');
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  const [email, setEmail] = useState('');
  const [successSent, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        let what;
        if(data.result == 'error') {
          what = `no go: ${email}`;
        } else {
          setSuccess(true);
        }
        //alert(what);
      })
      .catch(() => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  function handleModaliShow() {
    let currentModal;

    setTimeout(function() {
      currentModal = document.querySelector('.modali');
          
      if(currentModal) {
        currentModal.classList.add('modali-pledge');
      }
    }, 10);
  }

  return (
    <>
      <Modali.Modal {...pledgeModal}>
        <article className="pledge-modal">
          <a className="modal-close" onClick={togglePledgeModal}>X</a>
          <Share />
        </article>
      </Modali.Modal>
      <DonateModal {...donateModal} toggleModal={toggleDonateModal} />
      <article className="get-involved" id="get-involved">
        <section className="all-column row-1">
          <h2 data-aos="custom-animation">
            <span>{involvedHeaderOne}</span> {involvedHeaderTwo}
          </h2>
        </section>

        <section className="boys-playing" data-aos="fade-in">
          <img src={boysPlaying} />
        </section>

        <section className="left-column row-2">
          <h3>
            {involvedTitleChange}
            <br />
            <span className="text-color-mauve">
              {involvedTitleMake}
            </span>
          </h3>
        </section>

        <section className="left-column row-3">
          <p>
            <span>{involvedMakeParagraphTopline}</span>
            {involvedMakeParagraphBody}
          </p>
          <JellyButton
            buttonTextOne={involvedButtonDonateOne}
            buttonTextTwo={involvedButtonDonateTwo}
            addBreak={false}
            buttonStyle="donate"
            buttonMethod={toggleDonateModal}
          />
        </section>

        <section className="right-column row-2 flex-container mt-2 ord-4">
          <h3 className="text-color-yellow align-self-end">
            {involvedTitlePledge}
          </h3>
        </section>

        <section className="right-column row-3 ord-5">
          <p>{involvedPledgeParagraph}</p>
          
          <form onSubmit={handleSubmit} className="mailchimp-harvest">
            { !successSent && <input type="text" placeholder={involvedEmailHere} onChange={handleEmailChange} /> }
            { !successSent && <JellyButton
              buttonTextOne={involvedButtonPledgeOne}
              buttonTextTwo={involvedButtonPledgeTwo}
              addBreak={true}
              buttonStyle="pledge"
              buttonType="submit"
              buttonMethod={togglePledgeModal}
            /> }
            { successSent && <p className="thank-message">Thank you for your pledge!</p>}
            
          </form>
        </section>

        <section className="left-column row-4 mt-2 logos-alt">
          <SponsorLogosAlt />
        </section>
      </article>
    </>
  );
};

export default GetInvolved;

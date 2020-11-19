import React, { useEffect } from 'react';
import useTranslations from '../useTranslations';
import AddToCalendar from 'react-add-to-calendar';

import JellyButton from '../JellyButton';

import givingTuesdayLogo from '../../images/logos/giving-tuesday.png';
import facebookLogo from '../../images/logos/fb-white.png';
import pfcLogoNew from '../../images/logos/ptm-logo-final-2.png';
import pfcBurst from '../../images/ptm-logo-burst.png';
import pfcTexture from '../../images/ptm-logo-texture.png';
import iconCalendar from '../../images/icon-calendar_brick.png';
import girlHeadphonesSM from '../../images/girl-headphones-sm.png';
import girlHeadphonesMD from '../../images/girl-headphones-md.png';
import girlHeadphonesLG from '../../images/girl-headphones-lg.png';

import 'aos/dist/aos.css';

const Masthead = () => {
  const { monthText, addToCalendar } = useTranslations();

  let event = {
    title: 'Peace Through Music 2020 presented by Playing for Change',
    description:
      'Peace Through Music 2020 presented by Playing for Change',
    location: 'LAX',
    startTime: '2020-12-01T08:00:00+00:00',
    endTime: '2020-12-03T20:00:00-08:00',
  };

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

  function getInvolved() {
    document.getElementById('get-involved').scrollIntoView();
  }

  const {
    involvedOne,
    involvedTwo,
  } = useTranslations();

  return (
    <>
    <article className="masthead">
      <section>
        <article className="pfc-logo-group">
          <img src={pfcTexture} className="pfc-texture" />
          <img src={pfcBurst} className="pfc-burst rotating" />
          <img src={pfcLogoNew} className="pfc-logo" />
        </article>
      </section>

      <section>
        <article className="masthead-datetime">
          <p className="event-date">{monthText} 1</p>
          <section className="event-times">
              <p><span>12</span><span>pm</span><span>pst</span></p>
              <p><span>3</span><span>pm</span><span>est</span></p>
              <a href="https://facebook.com/playingforchange">watch here</a>
          </section>
          <p className="event-year">2020</p>
          <section className="add-to-calendar">
            <img className="icon-calendar" src={iconCalendar} />
            <AddToCalendar className="calendar-button" buttonLabel={addToCalendar} event={event} />
          </section>
        </article>
        <article className="artists">
          <section>
            <p>Aloe Blacc</p><p>•</p><p>Angélique Kidjo</p><p>•</p><p>Annie Lennox</p><p>•</p><p>Becky G</p>
          </section>
          <section>
            <p>Brandi Carlile with Mike McCready of Pearl Jam</p>
          </section>
          <section>
            <p>Carlos Santana and Cindy Blackman Santana</p>
          </section>
          <section>
            <p>Gabi Melim</p><p>•</p><p>Gary Clark Jr.</p><p>•</p><p>Jack Johnson</p><p>•</p><p>Jim James</p>
          </section>
          <section>
            <p>Keb’ Mo’</p><p>•</p><p>Keith Richards</p><p>•</p><p>Mavis Staples</p>
          </section>
          <section>
            <p>Nathaniel Rateliff</p><p>•</p><p>Peter Gabriel</p><p>•</p><p>Rhiannon Giddens</p>
          </section>
          <section>
            <p>Ringo Starr</p><p>•</p><p>Robbie Robertson</p><p>•</p><p>Robert Randolph</p>
          </section>
          <section>
            <p>Run The Jewels with Josh Homme</p><p>•</p><p>Sheila E.</p>
          </section>
          <section>
            <p>Skip Marley and Cedella Marley</p><p>•</p><p>The War and Treaty</p>
          </section>
          <section>
            <p>Yo-Yo Ma</p><p>•</p><p>and many more</p>
          </section>
          <p className="tagline">over 100 artists performing from around the world</p>
        </article>

        <JellyButton
          buttonTextOne={involvedOne}
          buttonTextTwo={involvedTwo}
          addBreak={true}
          buttonStyle="involved"
          buttonType="anchor"
          buttonMethod={getInvolved}
        />
      </section>
      <section className="masthead-background"></section>
      <section className="streaming">
        <article className="facebook-exclusive">
          <p>Exclusively streaming on</p>
          <img src={facebookLogo} />
        </article>
        <article className="giving-tuesday">
          <img src={givingTuesdayLogo} />
        </article>
      </section>
    </article>
    <article className="headphones-girl" data-aos="fade-up">
      <img
        alt="A woman smiling listening to music through headphones."
        src={girlHeadphonesSM}
        srcSet={`
          ${girlHeadphonesMD} 800w,
          ${girlHeadphonesLG} 1600w
        `}
        sizes="160vmin"
      />
    </article>
    </>
  );
};

export default Masthead;

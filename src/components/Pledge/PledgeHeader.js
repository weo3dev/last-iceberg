import React from 'react';
import pfcLogo from '../../images/logos/peace-through-music.png';


export default function PledgeHeader() {
  return (
    <>
      <img alt="Peace Through Music logo" src={pfcLogo} className="pfc-logo" />
      <h2>Pledge<span>and Share!</span></h2>
    </>
  );
}

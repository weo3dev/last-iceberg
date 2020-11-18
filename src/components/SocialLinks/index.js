import React from 'react';

import fbLogo from '../../images/logos/facebook.png';
import twLogo from '../../images/logos/twitter.png';
import igLogo from '../../images/logos/instagram.png';
import ytLogo from '../../images/logos/youtube.png';

const SocialLinks = () => {
  return (
    <ul className="social">
      <li>
        <a
          href="https://twitter.com/playing4change"
          title="Twitter"
          target="_blank"
        >
          <img src={twLogo} />
        </a>
      </li>
      <li>
        <a href="https://facebook.com/PlayingForChange"
           title="Facebook"
           target="_blank"
        >
          <img src={fbLogo} />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/playing4change"
           title="Instagram"
           target="_blank"
        >
          <img src={igLogo} />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/c/playingchange"
           title="YouTube"
           target="_blank"
        >
          <img src={ytLogo} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;

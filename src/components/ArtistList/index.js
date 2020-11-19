import React, { useState, useEffect, useRef } from 'react';

const ArtistList = () => {

  const [isExpanded, toggleExpanded] = useState(false);
  const [widthDimension, setWidthDimension] = useState(0);
  const [elementHeight, setHeightDimension] = useState(0);
  const [threeLinesHeight, setThreeLines] = useState();
  const [originalHeight, setOriginalHeight] = useState();
  const [currentLineHeight, setCurrentLineHeight] = useState();

  const ref = useRef(null);

  const artistText = 'Afro Fiesta, Abiodun Oyewale (The Last Poets), Ahmed Al Harmi, Al Harban Brothers, Alcione, Alfred Howard, Ali Boulala, Aloe Blacc, Amina J. Mohammed (UN), Angélique Kidjo, Azueï, Barou Sall, Becky G, Béla Fleck, Bill Kreutzmann (Grateful Dead), Bill Summers, Billie Eilish, Binho, Bizung Family Band, Brandi Carlile with Mike McCready of Pearl Jam, Carl C-Wyya Edwards, Carlos Santana and Cindy Blackman Santana, Chandrajit and Venkat, Chango Spasiuk, Char, Cristina Pato, Congo Drums, Cory Henry, Courtney "Bam" Diedrick, Donald Harrison and Congo Square Nation, Dr. John, Dr. Michael Eric Dyson, Dudu Nobre, EduMundo and Caveman, Fabián Miodownik, Gabi Melim, Gary Clark Jr., George Porter Jr., Guardians Of The New Fire, Hiromitsu Agatsuma, Ibram X. Kendi, Ivan Neville, Isabella Madrigal, Jack Johnson, Jaiksona Soto, Jane Elliott, Jim James, John Cruz and Hutch Hutchinson, Johnny Herno, Kasha Sequoia Slavner, Keb’ Mo’, Keiko Komaki, Keith Richards, Killer Mike, Kimberly L. Jones, Kolgate, La Escuelita del Ritmo, Larkin Poe, Los Hijos de Benkos, Louis Mhlanga, Lukas Nelson, Mamadou Sarr, Marcus King, Mark Johnson, Mark Lozano, Massamba Diop, Mavis Staples, Megan Rapinoe and Sue Bird, Mermans Mosengo, Meshell Ndegeocello, Mickey Hart (Grateful Dead), Mohammed Alidu, Nasreen Sheikh, Natalia Kanem (UNFPA), Nathaniel Rateliff, Nikki Burt, Nkosinathi Biko, Norm, Norman Lear, Ousseynou and Assane Kaba, "Papi" Felix Garemua, Patrick Simmons (The Doobie Brothers), Paulo Heman, Peter Bunetta, Peter Gabriel, Playing For Change Band, Playing For Change Foundation, Prince EA, Pyramid Lake, Paiute Tribe, Rahat Inayat Ali, Rajeev Shrestha, Rhiannon Giddens, Ringo Starr, Robbie Robertson, Robert Randolph, Roberto Luti, Robin Moxey, Rubén Rada and Family, Rudson Daniel and Enio Taquari, Run The Jewels with Josh Homme, Sanjay Shrestha, Sean "Pow" Diedrick, Sexteto Tabala, Sara Bareilles, Sheila E., Shemekia Copeland, Sherieta Lewis & Roselyn Williams, Skip Marley and Cedella Marley, Sol Homar, Songhoy Blues, Taikoproject, Taimane, Tal Wilkenfeld, Taslima Khan, The Cape Town Ensemble, The Silkroad Ensemble, Tito Puente Jr., Toumani Diabaté, TP OK Jazz, The War and Treaty, Washboard Chaz, Whitney Kroenke Silverstein, Yo-Yo Ma, Zulu Choir';

  useEffect(() => {
        setOriginalHeight(ref.current.clientHeight);
        setCurrentLineHeight(parseInt(window.getComputedStyle(ref.current).getPropertyValue("line-height")));
        setThreeLines(parseInt(currentLineHeight) * 3);
        setHeightDimension(threeLinesHeight);

  }, [threeLinesHeight, originalHeight]);

  useEffect(() => {

    function handleResize() {
      if(window.innerWidth > 1600) {
        setWidthDimension(1400);
      } else {
        setWidthDimension(window.innerWidth - 200);
      }
    }

    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize);
    }

  });

  function heightResizing() {
    setOriginalHeight(ref.current.clientHeight);
    setCurrentLineHeight(parseInt(window.getComputedStyle(ref.current).getPropertyValue("line-height")));
    setThreeLines(parseInt(currentLineHeight) * 3);
    setHeightDimension(threeLinesHeight);

    console.log(`${originalHeight}, ${threeLinesHeight}`);
  }

  function handleToggle() {
    let changeHeight = (isExpanded) ? threeLinesHeight : originalHeight;
    setHeightDimension(changeHeight);
    toggleExpanded(!isExpanded);
  }

  return (
      <>
        <article className="artist-list">
          <p className="list-title">the lineup</p>
          <p className="list-wrapper" ref={ref} style={{ height: elementHeight}}>
            {artistText}
          </p>
          <a className="show-more" onClick={handleToggle}>show {isExpanded ? 'less' : 'more'}</a>
        </article>
      </>
  );

}

export default ArtistList;
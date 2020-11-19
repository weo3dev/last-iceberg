import React from "react";
import Slider from "react-slick";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PTMSlider = (props) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: '100px',
    variableWidth: true,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "artists" }
        },
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery);

  // slider images
  const artistImages = [
    {file:'afro-fiesta', label: 'Afro Fiesta'},
    {file:'aloe-blacc', label: 'Aloe Blacc'},
    {file:'angelique-kidjo', label: 'Angélique Kidjo'},
    {file:'becky-g', label: 'Becky G'},
    {file:'bill-kreutzmann', label: 'Bill Kreutzmann'},
    {file:'billie-eilish', label: 'Billie Eilish'},
    {file:'brandi-carlile', label: 'Brandi Carlile'},
    {file:'colin-jacobsen-the-silkroad-ensemble', label: 'Colin Jacobsen (The Silkroad Ensemble)'},
    {file:'cory-henry', label: 'Cory Henry'},
    {file:'cristina-pato-the-silkroad-ensemble', label: 'Cristina Pato (The Silkroad Ensemble)'},
    {file:'donald-harrison', label: 'Donald Harrison'},
    {file:'dr-john', label: 'Dr. John'},
    {file:'gabi-melim', label: 'Gabi Melim'},
    {file:'gary-clark-jr', label: 'Gary Clark, Jr.'},
    {file:'george-porter-jr', label: 'George Porter, Jr.'},
    {file:'ivan-neville', label: 'Ivan Neville'},
    {file:'jack-johnson', label: 'Jack Johnson'},
    {file:'jim-james', label: 'Jim James'},
    {file:'keb-mo', label: 'Keb\' Mo\''},
    {file:'keith-richards', label: 'Keith Richards'},
    {file:'lukas-nelson', label: 'Lukas Nelson'},
    {file:'mario-gotoh-the-silkroad-ensemble', label: 'Mario Gotoh (The Silkroad Ensemble)'},
    {file:'mavis-staples', label: 'Mavis Staples'},
    {file:'mazz-swift-the-silkroad-ensemble', label: 'Mazz Swift (The Silkroad Ensemble)'},
    {file: 'megan-rapinoe', label: 'Megan Rapinoe'},
    {file:'meshell-ndegeocello', label: 'Meshell Ndegeocello'},
    {file:'mickey-hart', label: 'Mickey Hart'},
    {file:'mike-mccready', label: 'Mike McCready'},
    {file:'nathaniel-rateliff', label: 'Nathaniel Rateliff'},
    {file:'norman-lear', label: 'Norman Lear'},
    {file:'peter-gabriel', label: 'Peter Gabriel'},
    {file:'prince-ea', label: 'Prince EA'},
    {file:'rhiannon-giddens', label: 'Rhiannon Giddens'},
    {file:'ringo-starr', label: 'Ringo Starr'},
    {file:'robbie-robertson', label: 'Robbie Robertson'},
    {file:'robert-randolph', label: 'Robert Randolph'},
    {file:'ruben-rada', label: 'Ruben Rada'},
    {file:'run-the-jewels', label: 'Run The Jewels'},
    {file:'sara-bareilles', label: 'Sara Bareilles'},
    {file:'shemekia-copeland', label: 'Shemekia Copeland'},
    {file:'shiela-e', label: 'Shiela E.'},
    {file:'skip-and-cedella', label: 'Skip Marley and Cedella Marley'},
    {file:'songhoy-blues', label: 'Songhoy Blues'},
    {file:'sue-bird', label: 'Sue Bird'},
    {file:'tal-wilkenfeld', label: 'Tal Wilkenfeld'},
    {file:'the-war-and-treaty', label: 'The War and Treaty'},
    {file:'tito-puente-jr', label: 'Tito Puente Jr.'},
    {file:'tpok', label: 'TP OK Jazz Band'},
    {file:'tushar-lall', label: 'Tushar Lall'},
    {file:'yo-yo-ma', label: 'Yo-Yo Ma'}
  ]

  function artistName(_which) {
    // let whereit = artistImages.indexOf(_which);
    let newhere = artistImages.find(o => o.file === _which.toLowerCase());
    if(newhere) {
      return newhere.label;
    } else {
      return "";
    }
    
  }


  return (
    <>
    <Slider {...settings}>
      {images.map((image,index) => (
        <article key={index} style={{position:"relative"}}>
          <Img fluid={image.node.childImageSharp.fluid} alt={image.node.base.split(".")[0]} />
          <p className="artist-name">
            {artistName(image.node.base.split(".")[0])}
          </p>
        </article>
      ))}
      </Slider>
    </>
  );
}

export default PTMSlider;

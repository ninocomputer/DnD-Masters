import { useState } from 'react';
import Carousel from '../../Carousel/Carousel';
import MapCarouselItem from '../MapCarouselItem/MapCarouselItem';
import './MapSteps.scss';

export default function MapSelection({ history }: any) {
  const [mapIndex, setMapIndex] = useState(0);

  const images = [
    'https://endlessicons.com/wp-content/uploads/2012/12/add-icon-614x460.png',
    'https://media.wizards.com/2015/images/dnd/resources/20151117_Sword-Coast-Map.jpg',
    'https://geekandsundry.com/wp-content/uploads/2019/02/Untitled-design-3.png',
    'https://andrewjluther.files.wordpress.com/2018/06/rpg-5e-tomb-of-annihilation-2.jpg?w=705&h=435&crop=1',
    'https://i0.wp.com/www.fantasticmaps.com/wp-content/uploads/2010/06/townpackunlabelled.jpg',
    'https://explorednd.com/wp-content/uploads/2021/05/DD-Maps.png',
    'https://i.pinimg.com/736x/9f/ec/db/9fecdba47cfcda751e4eadce08ff95a7.jpg',
  ];

  const maps = images.map((image) => <MapCarouselItem url={image} />);

  const nextPage = () => {
    if (mapIndex === 0) {
      history.push('/mapWizard/mapUpload');
    } else {
      history.push('/mapWizard/mapEdit');
    }
  };

  return (
    <div className="map-selection-container">
      <div className="map-carousel-preview-container">
        <img className="map-carousel-preview" src={images[mapIndex]} alt="" />
      </div>
      <div>
        <button
          className="main-button success-button"
          onClick={nextPage}
          type="button"
        >
          {mapIndex === 0 ? 'Create Map' : 'Edit Map'}
        </button>
        {mapIndex > 0 && (
          <button className="side-button danger-button" type="button">
            Delete Map
          </button>
        )}
      </div>
      <Carousel setMapIndex={setMapIndex} show={5}>
        {maps}
      </Carousel>
    </div>
  );
}

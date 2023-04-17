import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          alt="First slide"

        />
        <Carousel.Caption>
          <h3>Sunset</h3>
          <p>silhouette of tree near body of water during beautiful sunset</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"

          src="https://media.istockphoto.com/id/1021170914/photo/beautiful-landscape-in-park-with-tree-and-green-grass-field-at-morning.jpg?b=1&s=170667a&w=0&k=20&c=OC0qKU3KEeeFDsGSydxRizFV6TrXCcNJCXIdtHSqytQ="

          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Public Park</h3>
          <p>Beautiful landscape in park with tree and green grass field at morning.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/603858974/photo/gold-tree-on-a-vineyard-in-autumn.jpg?b=1&s=170667a&w=0&k=20&c=F-FXFSwx_C2qqjhxe1AspmqZnUHwwp28bj84caVh6B4="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Autumn</h3>
          <p> Gold tree on a vineyard with blue sky and the autumn sun shining warmly through its leaves.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
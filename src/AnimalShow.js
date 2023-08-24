import { useState } from 'react';
import bird from './svg/bird.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import heart from './svg/heart.svg';

import './AnimalShow.css';

const svgMap = {
  bird,
  cow,
  gator,
  horse,
  cat,
  dog,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClicks} className="animal">
      <p>
        {type} - {clicks}
      </p>
      <img src={svgMap[type]} alt={type} />
      <img src={heart} alt="heart" style={{ width: 10 + 10 * clicks }} />
    </div>
  );
}

export default AnimalShow;

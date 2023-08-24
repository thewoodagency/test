import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  //console.log(Math.random() * animals.length)
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getAnimal()]);
  };

  const showAnimals = () => {
    return animals.map((animal, index) => (
      <AnimalShow key={index} type={animal} />
    ));
  };

  //Array destructuring
  function makeArray() {
    return [1, 10, 32, 40];
  }
  const [firstItem, secondItem] = makeArray();
  //console.log(firstItem, secondItem);

  return (
    <div className="container">
      <button onClick={handleClick}>Add Animal</button>
      <div className="row">
        {showAnimals()}
      </div>
    </div>
  );
}

export default App;

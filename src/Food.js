import React from "react";
import PropTypes from "prop-types";
//import Potato from "./Potato"; //App.js와 같은 directory에 있어서 이렇게 표현

// function Food2(props){
//   return <h1>I love {props.favorite}</h1>;
// }

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://image.shutterstock.com/image-photo/traditional-korean-kimchi-600w-1029712546.jpg"
  },
  {
    id: 2,
    name: "gimbap",
    image:
      "https://image.shutterstock.com/image-photo/korean-roll-gimbapkimbob-made-steamed-600w-1380145823.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "bibimbap",
    image:
      "https://image.shutterstock.com/image-photo/bibimbap-rice-stone-bowlstoneroasted-600w-749800315.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "bulgogi",
    image:
      "https://image.shutterstock.com/image-photo/delicious-bulgogi-hot-pot-600w-1132452740.jpg",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>
        I like {name}
      </h2>
      <h3>
        {rating}/5.0
      </h3>
      <img src={picture} alt={name} />
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      )}
    </div>
  );
}

export default App;

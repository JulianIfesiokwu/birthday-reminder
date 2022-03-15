import React from 'react';
import Person from './Person.component';

const List = ( {people} ) => {
  return (
    <>
      {people.map((person) => {
        const {id, name, age, image} = person
        return (
          <Person key={id} image={image} age={age} name={name}/>
        )
      })}
    </>
  );
};

export default List;

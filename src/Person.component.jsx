import React from "react";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { PersonContext } from "./App";

const Person = ({ id, name, age, image }) => {
    const { removePerson } = useContext(PersonContext)

    return (
      <article className='person' >
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          <button className='btn' onClick={() => removePerson(id)}>remove</button>
        </div>
      </article>
  )
}

Person.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
Person.defaultProps = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Person;
import React from 'react';

function Pet({ pet, onAdoptPet }) {
  function handleClick() {
    onAdoptPet(pet.id);
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === 'male' ? '♂ ' : '♀ '}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button onClick={handleClick} className="ui primary button">
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;

import React from 'react';

function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <p>Espécie: {pet.species}</p>
      <p>Idade: {pet.age} anos</p>
    </div>
  );
}

export default PetCard;

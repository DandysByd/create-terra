import React, { useState, useEffect } from 'react'
import './styles/species.css'

const Species = (props) => {

    const [specie, setSpecie] = useState(0)

    const animals = [
        {
            id: 1,
            name: 'Snake',
            text: 'Lorem ipsum dolor sit ahmed. Kentaur has died due to covid.',
            image: require('../images/python.jpg')
        },
        {
            id: 2,
            name: 'Tortoise',
            text: 'Lorem ipsum dolor sit ahmed. Kentaur has died due to covid.',
            image: require('../images/tortoise-big.jpg')
        },
       
        
        {
            id: 3,
            name: 'Chinese water dragon',
            text: 'Lorem ipsum dolor sit ahmed. Kentaur has died due to covid.',
            image: require('../images/chinesewaterdragon.png')
        },
        {
            id: 4,
            name: 'Bearded dragon',
            text: 'Lorem ipsum dolor sit ahmed. Kentaur has died due to covid.',
            image: require('../images/beardeddragon.jpg')
        },
        {
            id: 5,
            name: 'Creseted gecko',
            text: 'Lorem ipsum dolor sit ahmed. Kentaur has died due to covid.',
            image: require('../images/gecko.jpg')
        },
        {
            id: 6,
            name: 'Chameleon',
            text: 'Lorem ipsum dolor sit ahmed. Kentaur has died due to covid.',
            image: require('../images/chameleon.jpg')
        }
    ]

    const setAnimalType = (name) => {
        props.onSaveSpecies(name);
    }

    const showedAnimal = (species) => {
        setSpecie(species)
    }

    useEffect(() => {
    }, [specie])
    
    
    
    return (
        
        <div className='animal-selection'>
            {animals.map(animal => {
            
                return (
                    <div key={animal.name}
                        onMouseEnter={() => showedAnimal(animal.id)}
                        onMouseOut={() => showedAnimal(0)}
                        onClick={() => setAnimalType(animal.name)}
                        style={{ backgroundImage: "url(" + animal.image + ")" }}
                        className={specie === animal.id ? 'animal-button show-card' : (specie === 0 ? 'animal-button' : 'animal-button hide-card')}>
                       
                            <h1 className={specie === 0 ? 'hide-info-text' : 'show-info-text'} onMouseEnter={() => showedAnimal(animal.id)}
                        onMouseOut={() => showedAnimal(0)}>{animal.name}</h1>
                            <p className={specie === 0 ? 'hide-info-text' : 'show-info-text'}  onMouseEnter={() => showedAnimal(animal.id)}
                        onMouseOut={() => showedAnimal(0)}>{animal.text}</p>
                     
                    </div>
                )
            })}
        </div>
    )

}

export default Species
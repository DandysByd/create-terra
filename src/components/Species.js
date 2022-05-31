import React, { useState, useEffect } from 'react'
import './styles/species.css'

const Species = (props) => {

    const [specie, setSpecie] = useState(0)


    const animals = [
        {
            id: 1,
            name: 'Python / Snake',
            text: 'Pythons are oviparous. This sets them apart from the family Boidae (boas), most of which bear live young (ovoviviparous). After they lay their eggs, females typically incubate them until they hatch. This is achieved by causing the muscles to "shiver", which raises the temperature of the body to a certain degree, and thus that of the eggs. Keeping the eggs at a constant temperature is essential for healthy embryo development. During the incubation period, females do not eat and leave only to bask to raise their body temperature. Most species in this family are available in the exotic pet trade. However, caution must be exercised with the larger species, as they can be dangerous; rare cases of large specimens killing their owners have been documented.',
            image: require('../images/python.jpg'),
           
        },
        {
            id: 2,
            name: 'Tortoise',
            text: 'Most species of tortoises lay small clutch sizes, seldom exceeding 20 eggs, and many species have clutch sizes of only 1–2 eggs. Incubation is characteristically long in most species, the average incubation period are between 100 and 160.0 days. Egg-laying typically occurs at night, after which the mother tortoise covers her clutch with sand, soil, and organic material. The eggs are left unattended, and depending on the species, take from 60 to 120 days to incubate. The size of the egg depends on the size of the mother and can be estimated by examining the width of the cloacal opening between the carapace and plastron. The plastron of a female tortoise often has a noticeable V-shaped notch below the tail which facilitates passing the eggs. Upon completion of the incubation period, a fully formed hatchling uses an egg tooth to break out of its shell.',
            image: require('../images/tortoise-big.jpg')
        },
        {
            id: 3,
            name: 'Chinese water dragon',
            text: 'Chinese water dragons can grow up to 36" (0.9m) in total length, including tail, and can live from 10 to 15 years. Coloration ranges from dark to light green, or sometimes purple with an orange stomach. Diagonal stripes of green or turquoise are found on the body, while the tail is banded from the middle to the end with green and white. Their undersides range from white, off white, very pale green, or pale yellow. But their throats are considered to be more attractive, which can be quite colorful (blue and purple, or peach), some with a single color, some with stripes. Adult males have larger, more triangular heads than females, and develop larger crests on the head, neck and tail, and are larger in general. The tail, slightly over two-thirds of the entire body length, can be used as a weapon, for balance, and to assist swimming.',
            image: require('../images/chinesewaterdragon.png')
        },
        {
            id: 4,
            name: 'Bearded dragon',
            text: 'Pogona is a genus of reptiles containing six lizard species which are often known by the common name bearded dragons. The name "bearded dragon" refers to the underside of the throat (or "beard") of the lizard, which can turn pink and gain weight for a number of reasons, most often as a result of stress, or if they feel threatened. They are a semi-arboreal species, spending significant amounts of time on branches, in bushes, and near human habitation. Pogona species bask on rocks and exposed branches in the mornings and afternoons. Their diet consists primarily of insects, vegetation, and occasionally small rodents. They are found throughout much of Australia and inhabit a wide range of environments, such as deserts, shrublands and Eucalyptus woodlands.',
            image: require('../images/beardeddragon.jpg')
        },
        {
            id: 5,
            name: 'Creseted gecko',
            text: 'Crested geckos typically range from 6–10 inches (15–25 cm) in length, including 4–6 inches (10–15 cm) of tail length. Among the most distinctive features of these geckos are the hair-like projections found above the eyes, which greatly resemble eyelashes. This projections continue as two rows of spines that run from the eyes to the sides of their wedge-shaped head and continue to the base of their tail. Crested geckos do not have eyelids. Instead, a transparent scale, or spectacle, keeps each eye moist, and the geckos use their tongues to clear away debris. These geckos possess a semi-prehensile tail which they use to assist in climbing. The tail can be dropped (via caudal autotomy) to distract predators. Crested geckos do not regenerate their tails once lost; most adults in the wild lack tails. The toes and the tip of the semi-prehensile tail are covered in small hairs called setae. Each seta is divided into hundreds of smaller (approximately 200 nanometres in diameter) hairs called spatulae. It is believed these structures exploit the weak van der Waals force to help the gecko climb on most solid surfaces, most easily on flatter, smoother surfaces such as glass or wood. The toes have small claws which aid in climbing surfaces to which their toes cannot cling.',
            image: require('../images/gecko.jpg')
        },
        {
            id: 6,
            name: 'Chameleon',
            text: 'Chameleons or chamaeleons (family Chamaeleonidae) are a distinctive and highly specialized clade of Old World lizards with 202 species described as of June 2015. The members of this family are most known for their distinct range of colors as they are able to shift in different hues and brightness. Because of the large number of species in their family, there is a large variability in their ability to change color. For some, it is more of a shift of brightness (shades of brown) whereas others it is a plethora of combinations of colors (reds, yellows, greens, and blues).Chameleons are distinguished by their zygodactylous feet, their prehensile tail, their laterally compressed bodies, their head casques, their projectile tongues, their swaying gait, and crests or horns on their brow and snout. Chameleons eyes are independently mobile, and because of this there are two separate, individual images that the brain is analyzing of the chameleon’s environment. When hunting prey, they focus forward in coordination, affording the animal stereoscopic vision. The eyes are able to move laterally 180° and vertically 160°.',
            image: require('../images/chameleon.jpg')
        }
    ]

    const setAnimalType = (name) => {
        props.onSaveSpecies(name);
    }

    const showedAnimal = (species) => {
        setSpecie(species)
    }


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
                        <div className='div-div' onMouseEnter={() => showedAnimal(animal.id)} onMouseOut={() => showedAnimal(0)} >
                            <h1 className={specie === 0 ? 'hide-info-text' : 'show-info-text'} onMouseEnter={() => showedAnimal(animal.id)} onMouseOut={() => showedAnimal(0)}  >{animal.name}</h1>
                            <p className={specie === 0 ? 'hide-info-text' : 'show-info-text'} onMouseEnter={() => showedAnimal(animal.id)} onMouseOut={() => showedAnimal(0)} >{animal.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default Species
import { useEffect, useState } from 'react'
import Select from 'react-select'
import Card from './layout/Card'
import Ressource from './Ressource'

import defaultRessources from '../data/ressources.json'

export default function Ressources() {
  // Construit une liste avec tous les tags présent dans les ressources par défaut
  let allTags
  allTags = defaultRessources.reduce((accumulator, currentValue) => {
    return accumulator.concat(
      currentValue.tags.filter((item) => accumulator.indexOf(item) < 0)
    )
  }, [])

  allTags = allTags.sort((a, b) => {
    //! Code magique qui marche sans que je sache pourquoi ????
    return (
      String.fromCharCode(parseInt(a, 16)) <
      String.fromCharCode(parseInt(b, 16))
    )
  })

  allTags = ['Toutes les ressources'].concat(allTags)

  const [selectedTags, setSelectedTags] = useState(allTags)
  const [filteredRessources, setFilteredRessources] = useState(
    defaultRessources
  )

  // Re-filtre les ressources en fonction des tags sélectionnés
  useEffect(() => {
    setFilteredRessources(
      defaultRessources.filter((ressource) => {
        return (
          selectedTags.includes('Toutes les ressources') ||
          ressource.tags.some((tag) => selectedTags.includes(tag))
        )
      })
    )
  }, [selectedTags])

  return (
    <section id="ressources">
      <Card
        title="Ressources externes"
        description="Une liste des ressources complémentaires aux cours OpenClassrooms"
        withContentPadding={false}
        button={{
          text: 'Ajouter une ressource',
          onClick: () => {
            window.location.href = 'mailto:mathis.barre@live.fr'
          },
        }}
      >
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          isSearchable={true}
          options={allTags.map((tag) => ({ value: tag, label: tag }))}
          onChange={(change) => {
            setSelectedTags(change.value)
          }}
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-full mt-4">
          {filteredRessources.map((ressource, index) => (
            <Ressource key={index} {...ressource} />
          ))}
        </div>
      </Card>
    </section>
  )
}

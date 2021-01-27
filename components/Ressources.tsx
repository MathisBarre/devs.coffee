import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Select from 'react-select'
import { ressourcesToTags } from '../utils/main'
import Card from 'components/layout/Card'
import Ressource from 'components/Ressource'

import defaultRessources from '../data/ressources.json'

export default function Ressources() {
  // Construit une liste avec tous les tags présent dans les ressources par défaut
  const allRessourcesTags = ressourcesToTags(defaultRessources)

  const [selectedTags, setSelectedTags] = useState(allRessourcesTags)
  const [filteredRessources, setFilteredRessources] = useState(
    defaultRessources
  )

  // Re-filtre les ressources en fonction des tags sélectionnés
  useEffect(() => {
    const newFilteredRessources = defaultRessources.filter((ressource) => {
      return (
        selectedTags.includes('Toutes les ressources') ||
        ressource.tags.some((tag) => selectedTags.includes(tag))
      )
    })

    setFilteredRessources(newFilteredRessources)
  }, [selectedTags])

  const router = useRouter()

  function onBtnClick() {
    router.push("contact")
  }

  return (
    <section id="ressources">
      <Card
        title="Ressources externes"
        description="Une liste des ressources complémentaires aux cours OpenClassrooms"
        withContentPadding={false}
        button={{
          text: 'Ajouter une ressource',
          onClick: onBtnClick
        }}
      >
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          isSearchable={true}
          options={allRessourcesTags.map((tag) => ({ value: tag, label: tag }))}
          onChange={(change) => {
            setSelectedTags(change.value)
          }}
          instanceId="a98sd79sd87c"
        />
        <div className="my-grid">
          {filteredRessources.map((ressource, index) => (
            <Ressource key={index} {...ressource} />
          ))}
        </div>
      </Card>
    </section>
  )
}

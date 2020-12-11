import { useEffect, useState } from "react"
import Image from "next/image"
import Select from 'react-select'
import Card from "./layout/Card";

export default function Ressources() {

  const defaultRessources = [
    {
      title:"CSS Diner",
      description:"Un jeu très amusant pour apprendre les sélecteurs CSS !",
      img:"/images/css-diner.png",
      href:"https://flukeout.github.io/",
      tags: ["DevWeb P2", "DevWeb P3", "CSS"]
    },
    {
      title:"Flexbox Froggy",
      description:"Des couleurs, des grenouilles et des flexbox",
      img:"/images/flexbox-froggy.jpg",
      href:"https://flexboxfroggy.com/#fr",
      tags: ["DevWeb P2", "DevWeb P3", "CSS"]
    },
    {
      title:"Grid garden",
      description:"Gérez votre jardin grâce aux grilles css !",
      img:"/images/grid-garden.png",
      href:"https://cssgridgarden.com/#fr",
      tags: ["DevWeb P2", "DevWeb P3", "CSS"]
    },
    {
      title:"Learn Git Branching",
      description:"Une façon interactive de se familiariser avec Git et Github",
      img:"/images/git-branching.png",
      href:"https://learngitbranching.js.org/?locale=fr_FR",
      tags: ["DevWeb P2", "DevWeb P3", "Versionning"]
    },
    {
      title:"Can I use ?",
      description:"Table de support par navigateur pour HTML, CSS Javascript et autre",
      img:"/images/caniuse.png",
      href:"https://caniuse.com/",
      tags: ["DevWeb P2", "DevWeb P3", "Compatibilité navigateur"]
    },
    {
      title:"Animista",
      description:"Des animations CSS déjà toutes faites !",
      img:"/images/animista.gif",
      href:"https://animista.net",
      tags: ["DevWeb P3", "CSS"]
    },
    {
      title:"La base de Sass",
      description:"Tout le fonctionnement de base de Sass, dans une page",
      img:"/images/sass.png",
      href:"https://sass-lang.com/guide",
      tags: ["DevWeb P3", "CSS"]
    },
    {
      title:"La checklist des développeurs web",
      description:"Vérifiez que votre site est prêt à être mis en ligne grâce à cette checklist",
      img:"/images/webdev-checklist.png",
      href:"https://www.toptal.com/developers/webdevchecklist",
      tags: ["DevWeb P4"]
    },
    {
      title:"GTmetrix propulsé par Google Lighthouse",
      description:"Calculez les performances de votre site internet.",
      img:"/images/gtmetrix.png",
      href:"https://gtmetrix.com/",
      tags: ["DevWeb P4", "Optimisation"]
    },
    {
      title:"Squoosh",
      description:"Optimiser vos images facilement.",
      img:"/images/squoosh.png",
      href:"https://squoosh.app/",
      tags: ["DevWeb P4", "Optimisation"]
    },
    {
      title:"Metatag.io",
      description:"Visualisez facilement le résultats de vos balises SEO",
      img:"/images/metatags.png",
      href:"https://metatags.io/",
      tags: ["DevWeb P4", "SEO"]
    },
    {
      title:"Javascript.info",
      description:"Tutoriels Javascript extrêmement bien expliqués pour les débutants mais très approfondis",
      img:"/images/javascript-info.png",
      href:"https://javascript.info/",
      tags: ["DevWeb P5", "DevWeb P6", "DevWeb P7", "Javascript"]
    },
    {
      title:"WarriorJs",
      description:"Un jeu passionnant de programmation et d'intelligence artificielle",
      img:"/images/warrior-js.png",
      href:"https://warrior.js.org/fr/",
      tags: ["DevWeb P5", "DevWeb P6", "DevWeb P7", "Javascript"]
    },
    {
      title:"freeCodeCamp",
      description:"Des parcours complets en HTML, CSS, Javascript, MongoDB, express etc...uniquement par l'exemple.",
      img:"/images/freecodecamp.png",
      href:"https://www.freecodecamp.org/learn/",
      tags: ["Parcours complet"]
    },
  ]

  // Construit une liste avec tous les tags présent dans les ressources par défaut
  let allTags
  allTags = defaultRessources.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue.tags.filter((item) => accumulator.indexOf(item) < 0))
  }, [])
  allTags = allTags.sort((a,b) => {
    //! Code magique qui marche sans que je sache pourquoi ????
    return String.fromCharCode(parseInt(a,16)) < String.fromCharCode(parseInt(b,16))
  })
  allTags = ["Toutes les ressources"].concat(allTags)

  const [selectedTags, setSelectedTags] = useState(allTags)
  const [filteredRessources, setFilteredRessources] = useState(defaultRessources)

  // Re-filtre les ressources en fonction des tags sélectionnés
  useEffect(() => {
    setFilteredRessources(defaultRessources.filter(ressource => {
      return selectedTags.includes("Toutes les ressources") || ressource.tags.some((tag) => selectedTags.includes(tag))
    }))
  }, [selectedTags])

  return (
    <section id="ressources">
      <Card
        title="Ressources externes"
        description="Une liste des ressources complémentaires aux cours OpenClassrooms"
        withContentPadding={false}
        button={{
            text: "Ajouter une ressource",
            onClick: () => {window.location.href = "mailto:mathis.barre@live.fr"}
          }}
      >
        <Select
          options={allTags.map((tag) => (
            {value:tag, label:tag}
          ))}
          isSearchable={true}
          onChange={(change) => {
            setSelectedTags(change.value)
          }}
          className="react-select-container"
          classNamePrefix="react-select"
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

function Ressource({title, description, img, href}) {
  return (
      <a
        className="border border-gray-200 dark:border-gray-1000 rounded box-border hover:bg-gray-50  dark:bg-gray-1000 dark:hover:bg-gray-1100"
        href={href}
        target="_blank" rel="noopener noreferrer"
      >
        <Image
          className="rounded-t border-b border-gray-200 dark:border-gray-1000"
          src={img}
          height="1080"
          width="1920"
          objectFit="cover"
        />
        <div className="pt-2 px-3 pb-3">
          <h3 className="font-semibold text-md text-indigo-600 dark:text-indigo-500 mb-1">{title}</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </a>
  )
}
import { useRouter } from 'next/router'
import Card from 'components/layout/Card'
import defaultRessources from '../data/ressources.json'
import Ressource from './Ressource'

export default function Ressources() {
  return (
    <section id="ressources" className="mt-32 mb-16">
      <h2 className="mt-16 font-semibold dark:text-white">Style : CSS, SASS, animations</h2>
      <div className="my-ressource-grid">
        {defaultRessources.filter((ressource) => {
          return ressource.tags.includes('CSS')
        }).map((ressource) => {
          return <Ressource key={ressource.title} {...ressource} />
        })}
      </div>

      <h2 className="mt-16 font-semibold dark:text-white">Qualité : SEO, compatibilité, optimisation</h2>
      <div className="my-ressource-grid">
        {defaultRessources.filter((ressource) => {
          return ressource.tags.includes('quality-and-optimization') || ressource.tags.includes('Compatibilité navigateur')
        }).map((ressource) => {
          return <Ressource key={ressource.title} {...ressource} />
        })}
      </div>

      <h2 className="mt-16 font-semibold dark:text-white">Javascript</h2>
      <div className="my-ressource-grid">
        {defaultRessources.filter((ressource) => {
          return ressource.tags.includes('Javascript')
        }).map((ressource) => {
          return <Ressource key={ressource.title} {...ressource} />
        })}
      </div>

      <h2 className="mt-16 font-semibold dark:text-white">Git</h2>
      <div className="my-ressource-grid">
        {defaultRessources.filter((ressource) => {
          return ressource.tags.includes('Versionning')
        }).map((ressource) => {
          return <Ressource key={ressource.title} {...ressource} />
        })}
      </div>
    </section>
  )
}

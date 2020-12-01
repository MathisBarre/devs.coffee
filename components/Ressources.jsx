import Image from "next/image"
import Card from "./layout/Card";

export default function Ressources() {

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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-full mt-4">
          <Ressource
            title="CSS Diner"
            description="Un jeu très amusant pour apprendre les sélecteurs CSS !"
            img="/images/css-diner.png"
            href="https://flukeout.github.io/"
          />
          <Ressource
            title="Flexbox Froggy"
            description="Des couleurs, des grenouilles et des flexbox"
            img="/images/flexbox-froggy.jpg"
            href="https://flexboxfroggy.com/#fr"
          />
          <Ressource
            title="Grid garden"
            description="Gérez votre jardin grâce aux grilles css !"
            img="/images/grid-garden.png"
            href="https://cssgridgarden.com/#fr"
          />
          <Ressource
            title="Learn Git Branching"
            description="Une façon interactive de se familiariser avec Git et Github"
            img="/images/git-branching.png"
            href="https://learngitbranching.js.org/?locale=fr_FR"
          />
          <Ressource
            title="Javascript.info"
            description="How it's done now. From the basics to advanced topics with simple, but detailed explanations."
            img="/images/javascript-info.png"
            href="https://javascript.info/"
          />
          <Ressource
            title="WarriorJs"
            description="Un jeu passionnant de programmation et d'intelligence artificielle"
            img="/images/warrior-js.png"
            href="https://warrior.js.org/fr/"
          />
        </div>
      </Card>
    </section>
  )
}

function Ressource({title, description, img, href}) {
  return (
      <a
        className="border border-gray-200 rounded box-border"
        href={href}
      >
        <Image
          className="rounded-t"
          src={img}
          height="1080"
          width="1920"
        />
        <div className="pt-2 px-3 pb-3">
          <h3 className="font-semibold text-sm text-indigo-600 mb-1">{title}</h3>
          <p className="text-gray-500 text-xs">{description}</p>
        </div>
      </a>
  )
}
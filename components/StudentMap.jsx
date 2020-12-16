import Card from "./layout/Card";

export default function Map() {
  return (
    <section id="map">
      <Card
        title="Carte des étudiants"
        description="Découvrez les étudiants qui travailllent à côté de chez vous !"
        button={{
          text: "S'ajouter à la carte",
          onClick: () => {{window.location.href = "mailto:mathis.barre@live.fr"}}
        }}
        withContentPadding={false}
      >
      <div className="w-full max-w-full h-144 mt-4 relative">
        <div className="rounded-md animate-pulse bg-gray-200 dark:bg-gray-1100 absolute h-full w-full"></div>
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=137K62Pc-8FSmvznlKPAap4USgP8Wz0ob" 
          className="absolute w-full h-full rounded-md animate-none"
        />
      </div>
      </Card>
    </section>
  );
}

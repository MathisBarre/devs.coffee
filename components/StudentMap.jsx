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
      <iframe 
        src="https://www.google.com/maps/d/embed?mid=137K62Pc-8FSmvznlKPAap4USgP8Wz0ob" 
        className="w-full max-w-full h-144 mt-4 rounded-md"
      />
      </Card>
    </section>
  );
}

import Card from "./layout/Card";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet/dist/images/marker-icon.png";
// import "leaflet/dist/images/marker-icon-2x.png";

export default function Map() {

  const markers = [
    {

    }
  ]

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
        <MapContainer
          center={[46.807580, 2.622823]}
          zoom={6}
          scrollWheelZoom={false}
          className="w-full max-w-full h-144"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[46.807580, 2.622823]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Card>
    </section>
  );
}

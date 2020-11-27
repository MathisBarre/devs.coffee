import Card from "./layout/Card";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <section>
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
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Card>
    </section>
  );
}

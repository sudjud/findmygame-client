import React from "react";
import { Placemark } from "@pbe/react-yandex-maps";
import card from "./card.module.sass";

const MapBaloonn = ({ name, point, address, photos, id }) => {
  console.log(point);
  const [point_, point_2] = point.split(" ");
  const point_1 = point_.slice(0, point_.length - 1);

  function myFunction(id) {
    return `http://localhost:3000/playground/${id}`;
  }
  const login = myFunction(id);
  return (
    <div>
      <Placemark
        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        options={{ iconColor: "red" }}
        geometry={[+point_1, +point_2]}
        preset="islands#redSportIcon"
        properties={{
          balloonContent: `
                      <div class=${card.s}>
                      <div class=${card.s__image}>
                        <img src='http://localhost:3030/${photos[0].name}' alt="" />
                      </div>
                      <div class=${card.s__name}>
                        ${name}
                      </div>
                      <div style='flex: none' class=${card.s__area}>
                        ${address}
                      </div>
                      <div class=${card.s__buttons}>
                        <button onclick='location.href="${login}"' class=${card.s__viewAll}>Подробнее</button>
                      </div>
                    </div>`,
        }}
      />
    </div>
  );
};

export default MapBaloonn;

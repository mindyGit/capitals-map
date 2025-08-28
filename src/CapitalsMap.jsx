import React, { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/assets/esri/themes/light/main.css";

export default function CapitalsMap() {
  const mapDiv = useRef(null);

  useEffect(() => {
    const map = new Map({ basemap: "arcgis-topographic" });

    const capitalsLayer = new FeatureLayer({
      portalItem: { id: "d9677f2ef1d547c29fc30e628596f0c0" },
      outFields: ["*"],
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
          style: "circle",
          size: 8,
          color: "red",
          outline: { color: "white", width: 1 }
        }
      },
      popupTemplate: {
        title: "{CITY_NAME}",
        content: "<b>Population:</b> {POP}"
      }
    });

    map.add(capitalsLayer);

    const view = new MapView({
      container: mapDiv.current,
      map,
      center: [35, 31.5], // Israel
      zoom: 12
    });

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);
      

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <h2 style={{ textAlign: "center" }}>
                World Capitals • ArcGIS JS • Israel Focus
            </h2>
            <div
                ref={mapDiv}
                id="mapDiv"
                style={{
                    width: "80%",
                    height: "80vh",
                    border: "1px solid #ccc",
                }}
            ></div>
        </div>

    );
}

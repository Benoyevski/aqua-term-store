import React from "react";
import { Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import cls from "./ContactsMap.module.scss";
const ContactsMap = React.memo(() => {
    return (
        <Map
            instanceRef={(ref) => {
                ref && ref.behaviors.disable("scrollZoom");
            }}
            className={cls.myMap}
            defaultState={{
                center: [43.139684, 45.558856],
                zoom: 14,
                controls: ["fullscreenControl"],
            }}
            modules={["control.FullscreenControl"]}
        >
            <ZoomControl options={{}} />
            <Placemark defaultGeometry={[43.139684, 45.558856]} />
        </Map>
    );
});

export default ContactsMap;

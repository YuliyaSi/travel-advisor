import React from "react";
import GoogleMapReact from "google-map-react"
import {Paper, Typography, useMediaQuery} from "@mui/material";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import {Rating} from "@material-ui/lab";

import useStyles from "./styles"

const Map = ({coordinates, setCoordinates, setBounds}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBgQEipa6ThFQ0AovRxLmtNDtS0-pEwLGU' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={''}

                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne})
                }}
                // onChildClick={}
            >

            </GoogleMapReact>
        </div>
    )
};
export default Map;
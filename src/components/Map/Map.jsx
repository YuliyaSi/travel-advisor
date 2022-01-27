import React from "react";
import GoogleMapReact from "google-map-react"
import {Paper, Typography, useMediaQuery} from "@mui/material";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import {Rating} from "@material-ui/lab";

import useStyles from "./styles"

const Map = (props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDihpHmZ5ikDNe48w6s4PkpFXeT1w2ZF-4' }}
                defaultCenter={props.coordinates}
                center={props.coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={''}

                onChange={(e) => {
                    console.log(e)
                    props.setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                // onChildClick={}
            >

            </GoogleMapReact>
        </div>
    )
};
export default Map;
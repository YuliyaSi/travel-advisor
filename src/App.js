import React, { useEffect, useState } from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map"
import {createTheme, ThemeProvider} from "@mui/material";
import { getPlacesData } from "./api/index"


const App = () => {
    const theme = createTheme();

    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({})

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
          setCoordinates({lat: latitude, lng: longitude});
          // setBounds({
          //     sw: {
          //         lat: latitude,
          //         lng: longitude,
          //     },
          //     ne: {
          //         lat: latitude,
          //         lng: longitude,
          //     }
          // })
      })
    }, []);

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
            setPlaces(data)
        } )
    }, [coordinates, bounds])

  return (
      <>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Header/>
              <Grid container spacing={3} style={{ width: '100%' }}>
                  <Grid item xs={12} md={4}>
                      <List places={places}/>
                  </Grid>
                  <Grid item xs={12} md={8}>
                      <Map setCoordinates={setCoordinates}
                           setBounds={setBounds}
                           coordinates={coordinates}
                      />
                  </Grid>
              </Grid>
          </ThemeProvider>
      </>
  )
}
export default App;
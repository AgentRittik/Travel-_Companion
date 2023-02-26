import React, {useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
const App = () => {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(() => {      // to automatically get the current location of the user in the starting. so we don't need to manually change the coordinates
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);

    useEffect(() => {
        console.log(coordinates, bounds);
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
            })
    }, [coordinates, bounds]);  // the empty array means that this useEffect will only run once at the start of application
                                // if we want to change the coordinates and bounds every time we change map , we need to add them to the array
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} styles={{ width: '100%' }}>
                <Grid item xs={12} md={4} >
                    <List places={places}/>
                </Grid>
                <Grid item xs={12} md={8} >
                    <Map
                        setCoordinates={setCoordinates} 
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
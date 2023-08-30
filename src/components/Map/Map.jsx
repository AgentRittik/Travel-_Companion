import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import  { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked,childClicked}) => {
    const classes = useStyles();
    useEffect(() => {
        console.log("sharma", coordinates);
    }, []);
    const isDesktop = useMediaQuery('(min-width:600px)'); // if the screen is bigger than 600px, then isMobile is true
    /// for matching clicked child to the card we are using lifting the state up
    console.log(childClicked,"jreij");
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} 
                defaultCenter={coordinates} 
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                    console.log("rittik",e.marginBounds.ne , e.marginBounds.sw);
                }}
                onChildClick = {(child) => setChildClicked(child)} /// when click on the marker --> child is send as a parameter --> which card or child is clicked
            >
                {places?.map((place,i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}       // use Number() to convert string to number
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ?(
                                <LocationOnOutlinedIcon color="primary" fontSize='large' />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                        
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
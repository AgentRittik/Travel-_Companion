import React ,{ useState, useEffect, createRef} from 'react';

import { CircularProgress, Grid, Typography, InputLabel, MenuItem , FormControl, Select } from '@mui/material';
import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, ChildClicked, isLoading,type,setType, rating, setRating}) => {
    const classes = useStyles();
    const [elrefs, setElrefs] = useState([]);
    // useEffect(() => {
    //     console.log(ChildClicked);
    // }, [ChildClicked])
    // const fun  = () => {
    //     console.log(ChildClicked);
    // };


    useEffect(() => {
        const refs = Array(places?.length).fill().map((_,i) => elrefs[i] || createRef());
        setElrefs(refs);
    }, [places]);

    return (
        <div className={classes.container}>
            {/* <button onClick={fun}>ghgh</button> */}
            <Typography varient="h4">Restaurants, Hotels and Attractions around you</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>    
            ) : (
                <>
            <FormControl variant="standard" className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select variant="standard" value={type} onChange={(e)=> setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>

                </Select>
            </FormControl>
            <FormControl variant="standard" className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select
                    variant="standard"
                    value={rating}
                    onChange={(e)=> setRating(e.target.value)}>
                    <MenuItem value={0}>ALL</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails 
                            place={place}
                            selected = {Number(ChildClicked) === i}
                            refProp = {elrefs[i]}
                        />
                    </Grid>    
                ))}
            </Grid>
            </>
            )}
        </div>
    );
}

export default List;
import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import classes from "./styles.module.css"

const List = () => {

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant={'h5'}>Restaurants, Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)} style={{ minWidth: '120px' }}>
                    <MenuItem value={'restaurants'}>Restaurants</MenuItem>
                    <MenuItem value={'hotels'}>Hotels</MenuItem>
                    <MenuItem value={'attractions'}>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)} style={{ minWidth: '120px' }}>
                    <MenuItem value={''}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};
export default List;
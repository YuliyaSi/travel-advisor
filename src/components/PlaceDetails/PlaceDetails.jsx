import React from "react";
import {
    Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip
} from "@mui/material";
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import {Rating} from "@mui/material/Rating";
import useStyles from "./styles"


const PlaceDetails = ({place}) => {
    const classes = useStyles()
    return (
        <Card elevation={6}>
            <CardMedia
                style={{height: 350}}
                image={place.photo ? place.photo.images.large.url : 'https://en.pimg.jp/046/216/476/1/46216476.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant={'h5'}>{place.name}</Typography>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant={'subtitle1'}>Price</Typography>
                    <Typography gutterBottom variant={'subtitle1'}>{place.price_level}</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant={'subtitle1'}>Ranking</Typography>
                    <Typography gutterBottom variant={'subtitle1'}>{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant={'subtitle2'} color={'textSecondary'}>{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({name}) => (
                    <Chip key={name} size={"small"} label={name} className={classes.chip}/>
                ))}
            </CardContent>
        </Card>
    )
};
export default PlaceDetails;
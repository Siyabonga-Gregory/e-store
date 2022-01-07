import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import shoppingImg from "../../assets/images/template.svg";
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="Card">
            <Card>
                <CardMedia
                    component="img"
                    height="auto"
                    image={shoppingImg}
                    alt="shopping"
                />
                <CardContent className='CardContent'>
                    <Typography gutterBottom variant="h5" component="div">
                    Lorem Ipsum
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
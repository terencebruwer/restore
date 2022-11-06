import { Product } from '../../app/models/product';
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import ListItemText from "@mui/material/ListItemText"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { Box, ThemeProvider, createTheme } from '@mui/system';

interface Props {
    product: Product;
}
export default function ProductCard({ product }: Props) {
    return (
        <>
            <Card>
                <CardHeader avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                } 
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
                />
                <CardMedia
                    component="img"
                    sx={{height: 140, backgroundSize: "contain"}}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography color='secondary' gutterBottom variant="h5">
                        R {(product.price/100).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
        </>
    )
}
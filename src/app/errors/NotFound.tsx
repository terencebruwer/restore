import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useHistory, useLocation, Link } from "react-router-dom";

export default function NotFound(){
    
    const history = useHistory();
    const {state} = useLocation<any>();

    return (
            <Container component={Paper} sx={{height:400}}> 
            <Typography variant='h3' gutterBottom>Oops - We could not find what you looking for!</Typography>
            <Divider/>
            <Button fullWidth component={Link} to={'/catalog'}>Go back to Catalog</Button>
            </Container>
    )
}
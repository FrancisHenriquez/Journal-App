import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        <Grid item >
        <Typography fontSize={ 39 } fontWeight='light'> 7 de julio, 2022</Typography>
        <Grid item>
            <Button>
                <SaveOutlined sx ={{ fontSize: 30, mr : 1}} />
                Guardar
            </Button>
        </Grid>
        <Grid contairner>
            <TextField type='text' variant="filled" fullWidth label = "Titulo" placeholder="Titulo" sx={{ border: 'none', mb: 1 }}/>
            <TextField type='text' variant="filled" fullWidth label = "Suceso" placeholder="Que sucedio hoy?" minRows= { 5 }  sx={{ border: 'none', mb: 1 }}/>
        </Grid>
        </Grid>
        <ImageGallery />
    </Grid>
  )
}

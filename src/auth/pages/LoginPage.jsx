
import { Google } from "@mui/icons-material"
import { Typography, Grid, TextField, Button, Link } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
export const LoginPage = () => {
  return (
   <>
   <Grid container 
      spacing={0}
      direction = 'colum'
      alignItems= 'center'
      justifyContent = ' center '
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 1 } }
      >
    <Grid item
        className="box-shadow"
        xs={ 3 }
        sx = {{ backgroundColor: 'white', padding: 3, borderRadius: 2}}>
          <Typography variant="h5" sx = {{ mb: 1}}>Login</Typography>

          {/* form for all the page */}
          <form>
            <Grid container>
              {/* email textbox */}
                <Grid item sm={ 12 } >
                  <TextField
                    type = " Email"
                    placeholder="LordConfle@GMS.com"
                    fullWidth
                  />
                </Grid>
                {/* password textbox */}
                <Grid item sm={ 12 }>
                  <TextField
                    
                    type = " password"
                    placeholder="Password"
                    fullWidth
                  />
                </Grid>
                <Grid container spacing={ 4 } sx = {{ mb: 2, mt: 0.2 }} >
                  {/* Login Button */}
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button variant="contained" fullWidth>
                      Login
                    </Button>
                  </Grid>
                  {/* Register button */}
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button variant="contained" fullWidth>
                     <Google />
                        <Typography sx = {{ ml: 1}}> Google</Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid container direction= ' row ' justifyContent=' end '>
                  <Link component={ RouterLink } color= 'inherit' to = '/register'>
                  Crear Cuenta
                  </Link>
                </Grid>
            </Grid>
          </form>

    </Grid>
     
   </Grid>
 
   </>
  )
}

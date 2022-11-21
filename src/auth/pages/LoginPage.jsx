
import { Google } from "@mui/icons-material"
import { Typography, Grid, TextField, Button, Link } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
export const LoginPage = () => {
  return (
   <>
      <AuthLayout title="Login">
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
      </AuthLayout> 
   </>
  )
}

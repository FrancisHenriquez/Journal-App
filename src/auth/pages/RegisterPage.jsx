import { Button, Grid, Link as RouterLink, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
export const RegisterPage = () => {
  return (
    <>
    <AuthLayout title="Register">
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
                <Grid item sm={ 12 }>
                  <TextField
                    type = " password"
                    placeholder=" re-enter Password"
                    fullWidth
                  />
                </Grid>
                <Grid container spacing={ 4 } sx = {{ mb: 2, mt: 0.2 }} >
                  {/* Login Button */}
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button variant="contained" fullWidth>
                      Register
                    </Button>
                  </Grid>
                  {/* Back button */}
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button variant="contained" fullWidth>
                        <Typography sx = {{ ml: 1}}> Back </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid container direction= ' row ' justifyContent=' end '>
                  <Typography sx={{ mr: 1}}>Have an account already?</Typography>
                  <Link component={ RouterLink } color= 'inherit' to = '/login'>
                  Login
                  </Link>
                </Grid>
            </Grid>
          </form>
    </AuthLayout>
    </>
  )
  }

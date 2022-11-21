import { Button, Grid, TextField, Typography } from "@mui/material"
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
            </Grid>
          </form>
    </AuthLayout>
    </>
  )
  }

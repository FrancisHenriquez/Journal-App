import { Box } from "@mui/system"
import Drawer from '@mui/material/Drawer'
import { Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"

export const SideBar = ({ drawerWith = 240}) => {
  return (
   <Box component = 'nav' sx={{ width: {sm: drawerWith}, flexShrink: { sm: 0} }} >
        <Drawer variant="permanent" open = { true } sx = {{ display: { xs: 'block ' }, '& .MuiDrawer-paper': { boxSizing: 'box-border', width: drawerWith } }}>
          <Toolbar>
            <Typography variant="h6" color="initial">Francis Henriquez</Typography>
          </Toolbar>
          <Divider>
            <List>
                {
                    ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'].map ( text => ( <ListItem key= { text } disablePadding>
                            <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                            <ListItemText primary ={ text } />
                                            <ListItemText secundary = { ' Sophies World     '} />
                                    </Grid>
                            </ListItemButton>
                    </ListItem>))
                }
            </List>
          </Divider>
        </Drawer>

   </Box>
  )
}

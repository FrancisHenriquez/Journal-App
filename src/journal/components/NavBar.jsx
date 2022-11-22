import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Toolbar, IconButton } from "@mui/material"

export const NavBar = ({ drawerWith = 240}) => {
  return (
   <AppBar positio='fixed' sx={{ width:{ sm: `calc( 100% - ${ drawerWith }px)`}, ml: {sm: `${ drawerWith}px`} }}>
       <Toolbar>
            <IconButton color = ' enherit' edge = 'start' sx = {{ mr: 2, diplay: { sm: 'none'} }} >  
                 <MenuOutlined>

                 </MenuOutlined>

            </IconButton>
       </Toolbar>
   </AppBar>
  )
}

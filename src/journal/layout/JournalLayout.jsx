import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";
 
const drawerWith = 240;
export const JournalLayout = ({ children }) => {
  return (
    <Box sx = {{ diplay: 'flex'}}>

        {/* Navbar */}
        <NavBar drawerWith = { drawerWith } />
        {/* Sidebar */}
        <SideBar drawerWith={ drawerWith } />
        <Box component='main' sx = {{ flexGrow: 1, p:3}} >
            {/* Toolbar */}
            { children }

        </Box>

    </Box>
  )
}

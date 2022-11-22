import { Box } from "@mui/system";
 
const drawerWith = 240;
export const JournalLayout = () => {
  return (
    <Box sx = {{ diplay: 'flex'}}>

        {/* Navbar */}

        {/* Sidebar */}

        <Box component='main' sx = {{ flexGrow: 1, p:3}} >
            {/* Toolbar */}
            { children }

        </Box>

    </Box>
  )
}

import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
   <JournalLayout>
    {/* <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus repellat omnis culpa ipsum suscipit quam repellendus et rerum, odio possimus delectus voluptas rem, quo nam repudiandae dolor vero. Voluptate?</Typography>
     */}
     {/* <NothingSelectedView /> */}
     <NoteView />

     <IconButton size="large" sx={{ color: 'white', backgroundColor: 'error.main', ':hover':{ backgroundColor: 'error.main', opacity: 50 },
        position: 'fixed', right: 45, bot: 40 }}>
          <AddOutlined sx={{ fontSize: 30 }}/>
     </IconButton>
   </JournalLayout>
  )
}

import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
   <JournalLayout>
    {/* <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus repellat omnis culpa ipsum suscipit quam repellendus et rerum, odio possimus delectus voluptas rem, quo nam repudiandae dolor vero. Voluptate?</Typography>
     */}
     <NothingSelectedView />
     
   </JournalLayout>
  )
}

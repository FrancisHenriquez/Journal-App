import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette:{
        primary:{
            main: '#33CDFF'
        },
        secondary:{
            main: '#00FFCF'
        },
        error: {
            main: red.A400
        }
    }
})
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

export const homeStyles = (theme: Theme) => createStyles({
    home: {
        width: "100% !important",
        margin: "0 !important",
        position: "relative",
        paddingBottom: 64
    },
    home_title: {
        fontSize: 24,
        fontWeight: 900,
        textAlign: "center",
        textTransform: "uppercase"
    },
    headerContainer: {
        position: "sticky",
        top: 0,
        padding: "0 !important"
    },
    addButton:{
        position: "fixed",
        right: "6%",
        bottom: "10%"
    }
})
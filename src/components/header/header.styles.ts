import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

export const headerStyles = (theme: Theme) => createStyles({
    header: {
        width: "100%",
        position: "sticky",
        top: 0,
        padding: 16,
        backgroundColor: "#4e1c73d1",
        color: "#ffe227"
    },
    header_left: {
        fontWeight: 900,
        fontFamily: 'Open Sans, sans-serif'
    }
})
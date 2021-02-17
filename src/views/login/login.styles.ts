import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

export const loginStyles = (theme: Theme) => createStyles({
    main: {
        width: "100% !important",
        margin: "0 !important",
        paddingTop: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: "#480355",
        textAlign: "center",
        textTransform: "uppercase"
    }
})
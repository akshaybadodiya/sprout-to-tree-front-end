import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

export const loginStyles = (theme: Theme) => createStyles({
    main: {
        backgroundColor: "#480355",
        maxWidth: 600,
        margin: "auto",
        borderRadius: 12,
        padding: 8,
        width: "100% !important"
    },
    card_img: {
        width: "100%",
        display: "flex",
        "& img": {
            width: "80%",
            margin: "auto"
        }
    },
    login_button: {
        width: "100%",
        borderRadius: 8,
        backgroundColor: "#90FCF9",
        color: "#480355",
        fontSize: 18
    },
    card_description: {
        fontFamily: 'Montserrat, sans-serif',
        textAlign: "center",
        color: "#90FCF9",
        fontWeight: 900,
        letterSpacing: 0.5
    }
})
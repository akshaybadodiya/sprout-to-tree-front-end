import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

export const founderCardStyles = (theme: Theme) => createStyles({
    main: {
        maxWidth: 450,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 12,
        margin: "auto",
        display: "flex",
        justifyContent: "center"
    },
    description: {
        textAlign: "center",
        lineHeight: 1.5
    },
    title: {
        fontWeight: 900,
        fontSize: 20,
        textAlign: "center"
    },
    userImg: {
        borderRadius: "50%",
        height: 250,
        width: 250,
        display: "flex",
        justifyContent: "center",
        padding: 8,
        "& img": {
            height: 240,
            width: 240,
            border: "1px solid black",
            borderRadius: "50%"
        }
    }
})
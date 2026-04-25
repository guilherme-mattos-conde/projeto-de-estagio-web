import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
    typography: {
        fontFamily: `
            "Segoe UI",
            -apple-system,
            BlinkMacSystemFont,
            Roboto,
            "Helvetica Neue",
            Arial,
            sans-serif
        `,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 8,
                },
            },
        },
    },
});

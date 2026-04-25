import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "./mui-theme";

export const ThemeProviderApp = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

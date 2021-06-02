import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

const theme = createMuiTheme({
	typography: {
		fontFamily:
			"var(--font-family-base); /* or var(--font-family-highlight) token. */",
		h6: {
			fontWeight: 100,
		},
	},
	palette: {
		type: "light",
		primary: {
			main: "#e3262e",
		},
		secondary: {
			main: "#fcbc4b",
		},
	},
});

export { theme };

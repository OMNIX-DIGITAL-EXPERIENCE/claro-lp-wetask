import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();

import { Switch, BrowserRouter, Route as Router } from "react-router-dom";
import Login from "./features/login";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Router component={Login} path="/" exact />
			</Switch>
		</BrowserRouter>
	);
}

export default App;

import { makeStyles, Theme } from "@material-ui/core";
import bgClaroBigger from "../../assets/bg-onde-tem-claro.jpg";
import bgClaroMobile from "../../assets/bg-verao-mobile.jpg";
export const LoginPageStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "95vh",
		minHeight: window.innerHeight - 2,
		background:
			"linear-gradient(140deg, rgb(231, 48, 40) 50%, rgb(152, 30, 26) 70%, rgb(152, 30, 26) 100%)",
	},
	image: {
		backgroundImage: `url(${bgClaroBigger})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
	imageMobile: {
		backgroundImage: `url(${bgClaroMobile})`,
		backgroundRepeat: "no-repeat",

		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	paper: {
		color: "#ffff",
		margin: theme.spacing(8, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
		right: "40px",
		top: "40px",
		position: "absolute",
		width: "30%",
		[theme.breakpoints.down("sm")]: {
			top: "0px",
			width: "auto",
			right: "0px!important",
			left: 0,
		},
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	textField: {
		borderRadius: "17px",
		fontSize: "25px",
		textAlign: "center",
		background: "#ffff",
		"& label.Mui-focused": {
			color: "#ffff",
			borderRadius: "17px",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#ffff",
			borderRadius: "17px",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "white",
				borderRadius: "17px",
			},
			"&:hover fieldset": {
				borderColor: "white",
				borderRadius: "17px",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#ffff",
			},
		},
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		padding: theme.spacing(1.5, 0, 2),

		borderRadius: "25.2px",
		// eslint-disable-next-line no-useless-computed-key
		["&:hover"]: {
			borderColor: "yellow",
			backgroundColor: "#f09905",
		},
		// eslint-disable-next-line no-useless-computed-key
		["&.Mui-focused"]: {
			borderColor: "yellow",
			backgroundColor: "#f09905",
		},
	},
}));

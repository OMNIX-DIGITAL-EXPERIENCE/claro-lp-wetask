import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Controller, useForm } from "react-hook-form";
import { LoginPageStyles } from "./styles";
import Hidden from "@material-ui/core/Hidden";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { celularRegEx } from "../../utils/regex";
import NumberFormat from "react-number-format";

export default function Login() {
	const classes = LoginPageStyles();
	// const { setValues } = useData();
	const schema = yup.object().shape({
		tel: yup
			.string()
			.min(15, "Por favor, digite o seu telefone com DDD p/ continuar")
			.test(
				"verify-phone",
				"Por favor, digite o seu telefone com DDD p/ continuar",
				function (value) {
					value = value ? value : "";
					value = value.replace(/\D/g, "");
					if (value.length !== 11) {
						return false;
					} else if (!value.match(celularRegEx)) {
						return false;
					} else {
						return true;
					}
				}
			)
			.required("Campo obrigatório"),
	});
	const {
		control,

		//formState,
		handleSubmit,
	} = useForm<any>({
		defaultValues: {
			tel: "",
		},
		resolver: yupResolver(schema),
		mode: "all",
	});
	// const history = useHistory();

	const onSubmit = (values: any) => {
		// setValues(values);
		// setTimeout(() => {
		// 	setValues({ currentRouter: 2 });
		// 	history.push("/oferta");
		// }, 600);
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Hidden mdUp>
				<Grid
					item
					xs={12}
					sm={false}
					md={false}
					className={classes.imageMobile}
				/>
			</Hidden>
			<Grid item xs={false} sm={false} md={12} className={classes.image}>
				<div className={classes.paper}>
					{/* <img src={LogoClaro} style={{ maxWidth: "200px" }} alt="claro logo" /> */}
					<br />
					<Typography style={{ color: "#faa10a" }} variant="h6">
						APPS PARA NAVEGAR ILIMITADO
					</Typography>
					<br />
					<Typography variant="subtitle1">
						A Claro preparou uma oferta especial para você. Quer ver? É só
						inserir abaixo o nº do seu telefone.
					</Typography>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={classes.form}
						noValidate
					>
						<Controller
							name="msisdn"
							control={control}
							render={({ field: { ref, ...rest } }) => (
								<NumberFormat
									format="(##) ####-#####"
									mask="_"
									customInput={TextField}
									type="tel"
									className={classes.textField}
									fullWidth
									required
									variant="outlined"
									inputRef={ref}
									{...rest}
									inputProps={{
										min: 0,
										style: { textAlign: "center" },
									}}
									{...rest}
								/>
							)}
						/>

						{/* {errors.tel?.message ? <p>{errors.tel?.message}</p> : undefined} */}

						<Button
							type="submit"
							className={classes.submit}
							fullWidth
							variant="contained"
							// disabled={!formState.isValid}
							color="secondary"
						>
							Continuar
						</Button>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}

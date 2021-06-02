export default function LoadingGif() {
	return (
		<div
			style={{
				position: "absolute",
				maxWidth: "45%",
				maxHeight: "45%",
				top: "50%",
				left: "50%",
				overflow: "visible",
			}}
		>
			<img
				src="assets/loadingClaro.gif"
				alt="Carregando..."
				id="loading__animationImage"
				style={{
					position: "relative",
					maxWidth: "100%",
					maxHeight: "100%",
					marginTop: "-50%",
					marginLeft: "-50%",
				}}
			/>
		</div>
	);
}

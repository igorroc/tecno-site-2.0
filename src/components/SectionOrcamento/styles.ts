import { styled } from "../../stitches.config"

export const Wrapper = styled("div", {
	display: "flex",
	gap: "50px",
	flexWrap: "wrap",
})

export const Group = styled("div", {
	backgroundColor: "#232323",
	padding: "50px",
	display: "flex",
	flex: "1",
	flexDirection: "column",
	gap: "2em",
	borderRadius: "10px",
	width: "60%",
	minWidth: "300px",

	"& > h2": {
		fontSize: "2em",
		maxWidth: "300px",

		"& strong": {
			fontSize: "1em",
			color: "#FF71E0",
		},
	},

	"@small": {
		minWidth: "unset",
	},
})

export const GroupMail = styled("div", {
	background: "linear-gradient(135deg, #B348EE, #71A0FB)",
	display: "flex",
	flex: "1",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "center",
	borderRadius: "15px",

	"& h2": {
		position: "relative",
		fontSize: "2em",
		margin: "auto",
		marginLeft: "1em",
		padding: "30px 0px",

		"&::after": {
			content: "",
			position: "absolute",
			bottom: "10px",
			left: "0",
			width: "130px",
			height: "3px",
			backgroundColor: "white",
		},
	},

	"& .bottomWrapper": {
		display: "flex",
		flexDirection: "column",
		gap: "3em",
		justifyContent: "center",
		padding: "50px 30px",
		backgroundColor: "#232323",
		borderRadius: "0px 100px 10px 10px",

		"& p": {
			maxWidth: "85%",
		},
	},
})

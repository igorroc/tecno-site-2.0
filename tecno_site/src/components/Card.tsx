import { styled } from "@stitches/react"

const Wrapper = styled("div", {
	display: "flex",
	gap: "20px",
	flexWrap: "wrap",

	justifyContent: "center",
})

const CardStyle = styled("div", {
	backgroundColor: "#28293e",
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	flexWrap: "wrap",
	maxWidth: "300px",
	borderRadius: "10px",
	overflow: "hidden",

	"& .image": {
		position: "relative",
		width: "100%",
		maxHeight: "250px",

		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},

		"& .link": {
			position: "absolute",
			top: "0",
			left: "0",
			bottom: "0",
			right: "0",
			backgroundColor: "#232323df",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			opacity: "0",
			transition: "all 300ms ease-in-out",

			"& a": {
				padding: "10px 20px",
				backgroundColor: "#f7f7f710",
				border: "1px solid #fff3",
				borderRadius: "10px",
				fontSize: "1.2em",
				fontWeight: "bold",
				color: "white",
				transition: "all 300ms ease-in-out",

				"&:hover": {
					backgroundColor: "#f7f7f720",
				},
			},

			"&:hover": {
				opacity: "1",
			},
		},
	},

	"& .content": {
		padding: "20px",
		paddingTop: "5px",
		display: "flex",
		flexDirection: "column",
		gap: "10px",

		"& h3": {
			fontSize: "1.5em",
		},

		"& p": {
			color: "#fffa",
			fontSize: "1.2em",
		},
	},
})

type CardProps = {
	title: string
	description: string
	link: string
}

export function Card(props: CardProps) {
	return (
		<CardStyle>
			<div className="image">
				<img
					src="https://blog.megajogos.com.br/wp-content/uploads/2018/07/no-image.jpg"
					alt="Image PlaceHolder"
				/>
				<div className="link">
					<a href={props.link}>Saiba mais</a>
				</div>
			</div>
			<div className="content">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</CardStyle>
	)
}

type WrapperProps = {
	children: React.ReactNode
}

function CardsWrapper(props: WrapperProps) {
	return <Wrapper>{props.children}</Wrapper>
}

export default CardsWrapper

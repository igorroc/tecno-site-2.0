import { Wrapper, CardStyle } from "./styles"

type CardProps = {
	title: string
	description: string
	link: string
	img: string
}

export function Card(props: CardProps) {
	return (
		<CardStyle>
			<div className="image">
				<img src={props.img} alt="Image" />
				{props.link ? (
					<div className="link">
						<a href={props.link} target="_blank">
							Saiba mais
						</a>
					</div>
				) : (
					<></>
				)}
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

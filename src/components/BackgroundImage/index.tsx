import { Wrapper } from './styles'

type BGProps = {
	image: string
	fullHeight?: boolean
}

export function BackgroundImage(props: BGProps) {
	return (
		<Wrapper fullHeight={props.fullHeight}>
			<img src={props.image} alt="Imagem" />
		</Wrapper>
	)
}

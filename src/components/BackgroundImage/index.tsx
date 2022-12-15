import { Wrapper } from "./styles"
import { Blurhash } from "react-blurhash"
import { useState } from "react"

type BGProps = {
	image: string
	fullHeight?: boolean
	blurHash: string
}

export function BackgroundImage(props: BGProps) {
	const [loaded, setLoaded] = useState(false)

	return (
		<Wrapper fullHeight={props.fullHeight}>
			{!loaded && (
				<Blurhash
					hash={props.blurHash}
					width={window.innerWidth}
					height={window.innerHeight}
					resolutionX={32}
					resolutionY={32}
					punch={1}
				/>
			)}
			<img
				src={props.image}
				alt="Imagem de Fundo"
				onLoad={() => setLoaded(true)}
			/>
		</Wrapper>
	)
}

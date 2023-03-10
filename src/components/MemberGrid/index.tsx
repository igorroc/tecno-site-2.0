import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"
import { Icon } from "../Icon"
import { Grid, Card, ImgWrapper, Box, LinksRow } from "./styles"
import { Blurhash } from "react-blurhash"
import { useState } from "react"

type CardProps = {
	children?: React.ReactNode
	show?: boolean
}

type hasChildren = {
	children?: React.ReactNode
}

type ImageProps = {
	img: string
	blur?: any
}

type LinkProps = {
	icon: IconName
	prefix: IconPrefix
	url: string
}

export function MemberGrid(props: hasChildren) {
	return <Grid>{props.children}</Grid>
}

export function MemberCard(props: CardProps) {
	return <Card>{props.children}</Card>
}

export function MemberImage(props: ImageProps) {
	const [loaded, setLoaded] = useState(false)

	return (
		<ImgWrapper className="imgWrapper">
			{props.blur && !loaded && (
				<div>
					<Blurhash
						hash={props.blur}
						width={300}
						height={300}
						resolutionX={32}
						resolutionY={32}
						punch={1}
					/>
				</div>
			)}

			<img
				src={props.img}
				onError={(e) => {
					let el = e.target as HTMLImageElement
					el.src = "/members/photo.png"
				}}
				className={loaded ? "loaded" : ""}
				onLoad={() => setLoaded(true)}
			/>
		</ImgWrapper>
	)
}

export function MemberBox(props: hasChildren) {
	return <Box className="box">{props.children}</Box>
}

export function MemberName(props: hasChildren) {
	return <h1 className="memberName">{props.children}</h1>
}

export function MemberRole(props: hasChildren) {
	return <h2 className="memberRole">{props.children}</h2>
}

export function MemberLinksRow(props: hasChildren) {
	return <LinksRow>{props.children}</LinksRow>
}

export function MemberLink(props: LinkProps) {
	return (
		<a href={props.url} className="memberLink" target="_blank">
			<Icon iconName={props.icon} prefix={props.prefix} />
		</a>
	)
}

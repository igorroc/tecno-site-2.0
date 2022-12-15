import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"
import { Icon } from "../Icon"
import { Grid, Card, ImgWrapper, Box, LinksRow } from "./styles"

type CardProps = {
	children?: React.ReactNode
	show?: boolean
}

type hasChildren = {
	children?: React.ReactNode
}

type ImageProps = {
	img: string
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
	return (
		<Card>{props.children}</Card>
	)
}

export function MemberImage(props: ImageProps) {
	return (
		<ImgWrapper>
			<img
				src={props.img}
				onError={(e) => {
					let el = e.target as HTMLImageElement
					el.src = "/members/photo.png"
				}}
			/>
		</ImgWrapper>
	)
}

export function MemberBox(props: hasChildren) {
	return <Box>{props.children}</Box>
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

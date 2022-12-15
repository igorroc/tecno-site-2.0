import { useEffect, useState } from "react"
import Logo from "../../assets/icons/favicon.svg?component"
import rickRoll from "../../assets/video/rick-roll.gif"
import { Icon } from "../../components/Icon"
import { GlobalDiv } from "./styles"

export default function WpAdmin() {
	// window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
	const [volume, setVolume] = useState(0.5)
	const [opacity, setOpacity] = useState(0.001)

	useEffect(() => {
		const timer = setTimeout(() => {
			let x = 0
			const interval = setInterval(() => {
				x += 1
				setOpacity((prev) => {
					console.log(prev)
					if (prev > 1) {
						clearInterval(interval)
					}
					return Math.pow(1.02, x) - 1
				})

				setVolume((prevVol) => {
					if (prevVol > 0.4) {
						return prevVol
					}
					return prevVol + 0.01
				})
			}, 100)
			return () => clearInterval(interval)
		}, 1000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<GlobalDiv>
			<img
				src={rickRoll}
				className="video"
				style={{ opacity: opacity }}
			/>
			<main className="main">
				<Logo style={{ width: "84px", height: "auto" }} />
				<div className="form">
					<label>
						Nome de usuário ou endereço de e-mail
						<input type="text" />
					</label>

					<label>
						Senha
						<input type="password" />
					</label>

					<div className="buttons">
						<label>
							<input type="checkbox" />
							Lembrar-me
						</label>
						<a href="/" style={{ cursor: "pointer" }}>
							<button style={{ cursor: "pointer" }}>
								Acessar
							</button>
						</a>
					</div>
				</div>

				<div className="lower">
					<div className="lowerBG" style={{ opacity: opacity }}></div>
					<p>Perdeu a senha?</p>
					<a href="./">← Ir para TecnoJr</a>
					<div className="idioma">
						<Icon prefix="fas" iconName="language"></Icon>
						<select name="" id="">
							<option value="">Never</option>
							<option value="">Gonna</option>
							<option value="">Give</option>
							<option value="">You</option>
							<option value="">Up</option>
						</select>
						<button className="alt">Alterar</button>
					</div>
				</div>
			</main>
		</GlobalDiv>
	)
}

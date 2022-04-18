import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { styled } from "../stitches.config"
import { useState } from "react"

const MyForm = styled("form", {
	width: "60%",
	display: "flex",
	flexDirection: "column",
	gap: "3em",

	"& > div": {
		display: "flex",
		gap: "1em",
		alignContent: "flex-end",
		flexWrap: "wrap",

		"& > label": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-end",
			flex: "1",
			fontSize: "1.4em",
			fontWeight: "bold",

			"& > input": {
				background: "none",
				outline: "none",
				border: "none",
				borderBottom: "2px solid #fff4",
				color: "white",
				lineHeight: "2em",

				transition: "border 200ms ease",

				"&:focus": {
					borderBottom: "2px solid #fff",
				},
				"&:invalid": {
					borderBottom: "2px solid #d04638",
				},
			},

			"& > select": {
				background: "none",
				color: "white",
				outline: "none",
				border: "none",
				borderBottom: "2px solid #fff4",
				lineHeight: "2em",
				height: "34px",

				"& > option": {
					backgroundColor: "#232323",
					padding: "10px 0",
				},
				"&:focus": {
					borderBottom: "2px solid #fff",
				},
			},

			"& > textarea": {
				background: "none",
				color: "white",
				outline: "none",
				border: "none",
				borderBottom: "2px solid #fff4",
				lineHeight: "2em",
				height: "4em",
				minHeight: "2em",
				maxHeight: "400px",
				resize: "vertical",

				"&:focus": {
					borderBottom: "2px solid #fff",
				},
			},
		},
	},

	"& > button": {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "1em",
		fontSize: "1.2em",
		fontWeight: "bold",
		width: "max-content",
		height: "fit-content",
		color: "white",
		padding: "0.6em 1.5em",
		border: "none",
		outline: "none",
		borderRadius: "5em",
		background:
			"linear-gradient(to right, #5A7BE7, #9256EB, #5A7BE7) repeat",
		backgroundSize: "200% 100%",
		backgroundRepeat: "repeat",
		cursor: "pointer",
		letterSpacing: "1px",

		transition:
			"transform 256ms ease-in-out, background-position 256ms ease-in-out",
		"&:hover": {
			transform: "scale(1.068)",
			backgroundPosition: "100% 0%",
		},

		"& svg": {
			fontSize: "1.2em",
		},
	},

	"@large": {
		width: "95%",
	},
})

export function Form(this: any) {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		phone: "",
		findAboutUs: "",
		subject: "",
		message: "",
	})

	const handleInputChange = (event: any) => {
		event.persist()
		setInputs((inp: any) => ({
			...inp,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSubmit = (event: any) => {
		console.log(inputs)
		event.preventDefault()
	}

	return (
		<MyForm onSubmit={handleSubmit}>
			<div>
				<label>
					Nome Completo
					<input
						type="text"
						name="name"
						placeholder="Igor Rocha"
						value={inputs.name}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						name="email"
						placeholder="igor@tecnojr.com.br"
						value={inputs.email}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Telefone
					<input
						type="tel"
						name="phone"
						placeholder="(73) 9 8765-4321"
						value={inputs.phone}
						// pattern="([0-9]{2}) 9 [0-9]{4}-[0-9]{4}"
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Como nos conheceu
					<select
						name="findAboutUs"
						value={inputs.findAboutUs}
						onChange={handleInputChange}
						placeholder="Selecione uma opção"
					>
						<option value="default">Selecione uma opção</option>
						<option value="uesc">UESC</option>
						<option value="ej">Outra EJ</option>
						<option value="instagram">Instagram</option>
						<option value="outro">Outro</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					Assunto
					<input
						type="text"
						name="subject"
						placeholder="Título do email"
						value={inputs.subject}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Mensagem
					<textarea
						value={inputs.message}
						name="message"
						placeholder="Fale mais sobre o que você quer nesse contato!"
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<button onClick={handleSubmit}>
				<FontAwesomeIcon icon="envelope" />
				Enviar
			</button>
			{/* <input type="submit" value="Enviar" /> */}
		</MyForm>
	)
}

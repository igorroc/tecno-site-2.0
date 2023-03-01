import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import emailjs from "emailjs-com"
import { MyForm, CustomTextField, CustomFormControl } from "./styles"
import { InputLabel, MenuItem, Select } from "@mui/material"

export function Form(this: any, props: any) {
	const { setStatus } = props

	const [inputs, setInputs] = useState({
		sender_name: "",
		sender_email: "",
		sender_phone: "",
		sender_findAboutUs: "",
		email_subject: "",
		email_message: "",
	})

	const handleInputChange = (event: any) => {
		// event.persist()
		setInputs((inp: any) => ({
			...inp,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSubmit = (event: any) => {
		console.log(inputs)
		event.preventDefault()

		if (
			inputs.sender_name == "" ||
			inputs.sender_email == "" ||
			inputs.sender_findAboutUs == "" ||
			inputs.email_subject == "" ||
			inputs.email_message == ""
		) {
			setStatus("erro")
			console.log("erro")
			alert("Ocorreu um erro ao enviar sua mensagem.")
			return
		}

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				"#form",
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text)
					setStatus("ok")
					// window.location.reload() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
				},
				(error) => {
					setStatus("erro")
					console.log(error.text)
				}
			)
	}

	return (
		<MyForm onSubmit={handleSubmit} id="form">
			<div>
				<CustomTextField
					label="Nome completo"
					placeholder="Igor Rocha"
					variant="standard"
					value={inputs.sender_name}
					onChange={handleInputChange}
					type="text"
					name="sender_name"
					id="sender_name"
					required
				/>
				<CustomTextField
					label="Email"
					placeholder="igor@tecnojr.com.br"
					variant="standard"
					value={inputs.sender_email}
					onChange={handleInputChange}
					type="email"
					name="sender_email"
					id="sender_email"
					required
				/>
			</div>
			<div>
				<CustomTextField
					label="Telefone"
					placeholder="(XX) X XXXX-XXXX"
					variant="standard"
					value={inputs.sender_phone}
					onChange={handleInputChange}
					type="tel"
					name="sender_phone"
					id="sender_phone"
					required
				/>
				<CustomFormControl variant="standard" sx={{ flex: 1 }}>
					<InputLabel id="sender_findAboutUs_label">
						Como nos conheceu?
					</InputLabel>
					<Select
						id="sender_findAboutUs"
						name="sender_findAboutUs"
						labelId="sender_findAboutUs_label"
						value={inputs.sender_findAboutUs}
						onChange={handleInputChange}
						required
					>
						<MenuItem value="" disabled>
							Escolha uma opção
						</MenuItem>
						<MenuItem value="uesc">UESC</MenuItem>
						<MenuItem value="ej">Outra EJ</MenuItem>
						<MenuItem value="insta">Instagram</MenuItem>
						<MenuItem value="outro">Outro</MenuItem>
					</Select>
				</CustomFormControl>
			</div>
			<div>
				<CustomTextField
					label="Assunto"
					placeholder="Título do email"
					variant="standard"
					value={inputs.email_subject}
					onChange={handleInputChange}
					type="text"
					name="email_subject"
					id="email_subject"
					required
				/>
			</div>
			<div>
				<CustomTextField
					label="Mensagem"
					placeholder="Fale mais sobre o que você quer nesse contato!"
					variant="standard"
					value={inputs.email_message}
					onChange={handleInputChange}
					type="text"
					multiline
					name="email_message"
					id="email_message"
					required
				/>
			</div>
			<button>
				<FontAwesomeIcon icon="envelope" />
				Enviar
			</button>
		</MyForm>
	)
}

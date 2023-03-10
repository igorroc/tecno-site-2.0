import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import emailjs from "emailjs-com"
import { MyForm } from "./styles"

export function Form(this: any, props: any) {
	const { n, setN } = props

	const [inputs, setInputs] = useState({
		sender_name: "",
		sender_email: "",
		sender_phone: "",
		sender_findAboutUs: "",
		email_subject: "",
		email_message: "",
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

		if (
			inputs.sender_name == "" ||
			inputs.sender_email == "" ||
			inputs.sender_findAboutUs == "" ||
			inputs.email_subject == "" ||
			inputs.email_message == ""
		) {
			setN("erro")
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
					setN("ok")
					// window.location.reload() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
				},
				(error) => {
					setN("erro")
					console.log(error.text)
				}
			)
	}

	return (
		<MyForm onSubmit={handleSubmit} id="form">
			<div>
				<label>
					Nome Completo
					<input
						type="text"
						name="sender_name"
						id="sender_name"
						placeholder="Seu nome"
						value={inputs.sender_name}
						onChange={handleInputChange}
						required
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						name="sender_email"
						id="sender_email"
						placeholder="seu@email.com"
						value={inputs.sender_email}
						onChange={handleInputChange}
						required
					/>
				</label>
			</div>
			<div>
				<label>
					Telefone
					<input
						type="tel"
						name="sender_phone"
						id="sender_phone"
						placeholder="(XX) X XXXX-XXXX"
						value={inputs.sender_phone}
						// pattern="([0-9]{2}) 9 [0-9]{4}-[0-9]{4}"
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Como nos conheceu
					<select
						name="sender_findAboutUs"
						id="sender_findAboutUs"
						value={inputs.sender_findAboutUs}
						onChange={handleInputChange}
						placeholder="Selecione uma opção"
						required
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
						name="email_subject"
						id="email_subject"
						placeholder="Título do email"
						value={inputs.email_subject}
						onChange={handleInputChange}
						required
					/>
				</label>
			</div>
			<div>
				<label>
					Mensagem
					<textarea
						value={inputs.email_message}
						name="email_message"
						id="email_message"
						placeholder="Fale mais sobre o que você quer nesse contato!"
						onChange={handleInputChange}
						required
					/>
				</label>
			</div>
			<button>
				<FontAwesomeIcon icon="envelope" />
				Enviar
			</button>
			{/* <input type="submit" value="Enviar" /> */}
		</MyForm>
	)
}

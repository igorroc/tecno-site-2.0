import mainBg from "../../assets/img/backgroundHome.png"
import MEJ from "../../assets/img/mej.jpeg"
import proselImage from "../../assets/img/prosel.png"
import clientImage from "../../assets/img/client.jpg"
import frontImage from "../../assets/img/front.jpg"
import backImage from "../../assets/img/back.jpg"
import designImage from "../../assets/img/design.png"
import calendarImage from "../../assets/img/calendar.webp"

import { MainText } from "../../components/MainText"
import { Button } from "../../components/Buttons/Button"
import { MaxWidthWrapper } from "../../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../../components/BackgroundImage"
import { ScrollIndicator } from "../../components/ScrollIndicator"
import { WrapperMainContent } from "../../components/WrapperMainContent"
import { SectionTitle } from "../../components/SectionTitle"
import { Footer } from "../../components/Footer"
import GlobalDiv from "../../components/Global/GlobalDiv"

import { motion } from "framer-motion"
import { CustomSection } from "./styles"

const animations = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -50 },
}

export default function Prosel() {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.3 }}
		>
			<GlobalDiv>
				<BackgroundImage
					image={mainBg}
					blurHash="oNB2jb0]-at6NXssRWX3V_WVafj]X2xIotjJocaxRlWnRlbaWDj[t3n,t6aeofaxRkbHRkkCWBj]"
				></BackgroundImage>

				<MaxWidthWrapper>
					{/* Main Section */}
					<WrapperMainContent>
						<h1>
							Queremos os
							<MainText>Melhores</MainText>
						</h1>
						<p>
							Acreditamos que nossa equipe é o motor do nosso
							sucesso, por isso procuramos os{" "}
							<b>melhores talentos</b> para se juntar a nós.
							Queremos pessoas <b>apaixonadas por tecnologia</b>,
							com vontade de <b>aprender</b> e <b>crescer</b>{" "}
							profissionalmente.
						</p>
						<Button url="https://forms.gle/oszxPVXE55sANa71A">
							Inscreva-se
							<i className="fa-solid fa-arrow-right"></i>
						</Button>
						<ScrollIndicator />
					</WrapperMainContent>
					{/* Sections */}
					<SectionTitle title="MEJ" color="blue">
						Movimento Empresa <strong>Júnior</strong>
					</SectionTitle>
					<CustomSection>
						<div className="twoColumns">
							<div className="content">
								<p>
									Sabe aquela vibe de colocar a{" "}
									<b>mão na massa</b> e{" "}
									<b>aprender na prática</b>? Então, é isso
									que a gente faz. Somos uma empresa júnior,
									formada e gerenciada por estudantes
									universitários, que oferece serviços
									profissionais de qualidade a preços
									acessíveis.
								</p>
								<p>
									Além de nos divertirmos, também levamos
									nosso <b>trabalho muito a sério</b>.
									Acreditamos que a iniciativa de empresas
									juniores é uma forma de contribuir com o{" "}
									<b>
										desenvolvimento profissional dos
										estudantes
									</b>
									. Aqui, você tem a oportunidade de aplicar
									seus conhecimentos acadêmicos{" "}
									<i>
										(e até mesmo o que você aprende por
										fora!)
									</i>{" "}
									na prática, desenvolvendo habilidades e
									competências fundamentais para sua carreira.
								</p>
								<p>
									Mas não para por aí! Nós também ajudamos a
									promover o <b>empreendedorismo</b> e o{" "}
									<b>desenvolvimento regional</b>. É isso
									mesmo, estamos sempre em parceria com
									empresas locais e empreendedores,
									ajudando-os a desenvolver e implementar{" "}
									<b>ideias inovadoras</b>.
								</p>
								<p>
									Resumindo, ser uma empresa júnior é uma
									oportunidade incrível para estudantes
									universitários aprenderem sobre negócios,
									desenvolverem habilidades práticas e
									ajudarem a comunidade local. E a{" "}
									<b>Tecno</b> é uma dessas empresas, que
									busca sempre oferecer serviços de alta
									qualidade em desenvolvimento de software,
									aplicativos e sites. Tá esperando o que para
									vir com a gente?
								</p>
							</div>
							<div className="imagem">
								<img src={MEJ} alt="" />
							</div>
						</div>
					</CustomSection>
					<SectionTitle title="Processo" color="purple">
						O <strong>Processo</strong> Seletivo
					</SectionTitle>
					<CustomSection>
						<div className="twoColumns reverse">
							<div className="content">
								<p>
									Estamos super empolgados em saber que vocês
									estão interessados em fazer parte da nossa
									equipe aqui na <b>Tecno</b>! O nosso
									processo seletivo é bem <b>simples</b> e foi
									criado para que todos tenham uma{" "}
									<b>chance justa</b> e igual de entrar na
									empresa.
								</p>
								<h3>Primeira Etapa</h3>
								<p>
									Você precisa{" "}
									<b>preencher nosso formulário</b> com
									algumas informações básicas sobre você. Isso
									vai nos ajudar a entender melhor quem você é
									e como podemos trabalhar juntos.
								</p>
							</div>
							<div className="imagem">
								<img src={proselImage} alt="" />
							</div>
						</div>
						<div className="twoColumns">
							<div className="content">
								<h3>Segunda Etapa</h3>
								<p>
									Depois, vem a parte <b>mais legal</b>! Você
									vai <b>desenvolver um projeto</b>, como se
									fosse para um <b>cliente fictício</b>, na
									área que você escolheu:{" "}
									<a href="#front">Front</a>,{" "}
									<a href="#back">Back</a> ou{" "}
									<a href="#design">Design</a>. É a hora de
									colocar a mão na massa e mostrar o{" "}
									<b>seu potencial</b>!
								</p>
								<h3>Terceira Etapa</h3>
								<p>
									Se você se sair bem na etapa 2, é hora de
									partir para a última etapa:{" "}
									<b>as entrevistas</b>. Aqui, nós vamos
									conversar melhor com você, entender suas{" "}
									<b>ideias e expectativas</b>, além de
									esclarecer todas as <b>dúvidas</b> que você
									possa ter.
								</p>
							</div>
							<div className="imagem">
								<img src={clientImage} alt="" />
							</div>
						</div>
						<div className="center">
							<p>
								Ah, e você pode ficar tranquilo(a) em relação à
								sua escolha de área, pois as etapas 2 e 3 são
								específicas para cada uma delas. Ou seja, se
								você escolheu <a href="#front">Front</a>, vai
								desenvolver um projeto de{" "}
								<a href="#front">Front</a> e ser entrevistado
								por quem entende de <a href="#front">Front</a>.
								O mesmo vale para <a href="#back">Back</a> e{" "}
								<a href="#design">Design</a>.
							</p>
							<p>
								<b>Bora participar</b>? Preencha o formulário
								agora mesmo e vem com a gente!
							</p>
							<Button url="https://forms.gle/oszxPVXE55sANa71A">
								Preencher formulário
							</Button>
						</div>
					</CustomSection>
					<SectionTitle title="Areas" color="blue">
						As 3 <strong>Áreas</strong>
					</SectionTitle>
					<CustomSection>
						<p>
							Na <b>Tecno</b>, temos três áreas principais para
							nossos projetos: <a href="#front">Front-end</a>,{" "}
							<a href="#back">Back-end</a> e{" "}
							<a href="#design">Design</a>.
						</p>
						<div className="twoColumns">
							<div className="content">
								<h2 id="front">Front</h2>
								<p>
									Se você tem interesse em{" "}
									<b>desenvolver interfaces</b>, a área de
									Front é ideal para você. Nela, você será
									responsável por{" "}
									<b>transformar os designs</b> criados pela
									equipe de <a href="#design">Design</a> em
									código, utilizando principalmente{" "}
									<a
										href="https://react.dev/"
										target="_blank"
									>
										React
									</a>
									.
								</p>
							</div>
							<div className="imagem">
								<img src={frontImage} alt="" />
							</div>
						</div>
						<div className="twoColumns reverse">
							<div className="content">
								<h2 id="back">Back</h2>
								<p>
									Se você prefere trabalhar com a parte mais
									técnica do desenvolvimento, a área de{" "}
									<b>Back</b> é a sua escolha. Nessa área,
									você trabalhará com a criação de <b>APIs</b>
									, <b>bancos de dados</b> e outras
									ferramentas necessárias para o funcionamento
									de um software, utilizando{" "}
									<a
										href="https://nodejs.org/"
										target="_blank"
									>
										Node
									</a>{" "}
									ou{" "}
									<a
										href="https://www.djangoproject.com/"
										target="_blank"
									>
										Django
									</a>
									.
								</p>
							</div>
							<div className="imagem">
								<img src={backImage} alt="" />
							</div>
						</div>
						<div className="twoColumns">
							<div className="content">
								<h2 id="design">Design</h2>
								<p>
									Por fim, se você tem uma veia mais{" "}
									<b>criativa</b> e gosta de trabalhar com
									prototipação e <b>criação de interfaces</b>,
									a área de <b>Design</b> é a opção certa para
									você. Nessa área, você será responsável por{" "}
									<b>criar interfaces</b> intuitivas e
									prototipadas, utilizando principalmente a
									ferramenta{" "}
									<a
										href="https://www.figma.com/"
										target="_blank"
									>
										Figma
									</a>
									.
								</p>
							</div>
							<div className="imagem">
								<img src={designImage} alt="" />
							</div>
						</div>
					</CustomSection>
					<SectionTitle title="Requisitos" color="purple">
						Pré <strong>Requisitos</strong>
					</SectionTitle>
					<CustomSection>
						<p>
							Antes de se candidatar a uma das vagas da TecnoJr, é
							importante verificar se você atende aos seguintes
							pré-requisitos:
						</p>
						<ul>
							<li>
								Estar regularmente <b>matriculado</b> em um
								curso de ensino superior em alguma das áreas
								relacionadas à tecnologia, como{" "}
								<b>ciência da computação</b>,{" "}
								<b>sistemas de informação</b> ou <b>design</b>.
							</li>
							<li>
								Ter disponibilidade para dedicar pelo menos{" "}
								<b>6 horas semanais</b> às atividades da empresa
								júnior, que incluem <b>reuniões</b>,{" "}
								<b>treinamentos</b> e o{" "}
								<b>desenvolvimento de projetos</b> para
								clientes.
							</li>
							<li>
								Estar disposto a <b>aprender</b> e a se{" "}
								<b>desenvolver profissionalmente</b>, colocando
								em prática os conhecimentos adquiridos.
							</li>
							<li>
								Submeter-se às etapas do{" "}
								<b>processo seletivo</b>, que incluem{" "}
								<b>responder a um formulário</b>,{" "}
								<b>desenvolver um projeto</b> em sua área de
								interesse e participar de <b>entrevistas</b> com
								os membros da equipe.
							</li>
						</ul>
						<p>
							Se você se identifica com a nossa proposta e atende
							aos pré-requisitos acima, não perca a oportunidade
							de fazer parte da TecnoJr e desenvolver suas
							habilidades em uma empresa júnior de qualidade.
						</p>
						<Button url="https://forms.gle/oszxPVXE55sANa71A">
							Inscreva-se
						</Button>
					</CustomSection>
					<SectionTitle title="Prazo" color="blue">
						Os <strong>Prazos</strong>
					</SectionTitle>
					<CustomSection>
						<div className="twoColumns">
							<div className="content">
								<p>
									A <b>Tecno</b> está sempre atenta aos prazos
									e, por isso, estabelecemos{" "}
									<b>datas específicas</b> para{" "}
									<b>cada etapa</b> do processo seletivo.
									Fique atento ao nosso <b>site</b> e{" "}
									<b>redes sociais</b> para não perder nenhuma
									informação importante.
								</p>
								<p>
									Lembre-se de que estamos procurando os{" "}
									<b>melhores talentos</b> para compor nossa
									equipe, e, por isso, cada etapa é muito
									importante para nós. Não deixe de se
									inscrever dentro do prazo e <b>boa sorte</b>
									!
								</p>
							</div>
							<div className="imagem">
								<img src={calendarImage} alt="" />
							</div>
						</div>
						<table>
							<thead>
								<tr>
									<th>Etapa</th>
									<th>Data</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Inscrições</td>
									<td>31/03/2023 → 08/04/2023</td>
								</tr>
								<tr>
									<td>Projeto</td>
									<td>10/04/2023 → 23/04/2023</td>
								</tr>
								<tr>
									<td>Avaliações Internas</td>
									<td>24/04/2023 → 30/04/2023</td>
								</tr>
								<tr>
									<td>
										Anúncio dos aprovados
										<br />
										<i>(primeira etapa)</i>
									</td>
									<td>01/05/2023</td>
								</tr>
								<tr>
									<td>Entrevistas</td>
									<td>02/05/2023 → 05/05/2023</td>
								</tr>
								<tr>
									<td>Anúncio dos Efetivados</td>
									<td>08/05/2023</td>
								</tr>
							</tbody>
						</table>
						<p>
							E ai? Tudo pronto? <b>Vem com a gente</b>!
						</p>

						<Button url="https://forms.gle/oszxPVXE55sANa71A">
							Inscreva-se
						</Button>
					</CustomSection>
				</MaxWidthWrapper>
				<Footer />
			</GlobalDiv>
		</motion.div>
	)
}

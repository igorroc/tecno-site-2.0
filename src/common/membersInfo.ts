import { encodeImageToBlurhash } from "../hooks/handleBlurHash"

enum ROLE_ID {
	"Trainee" = 0,
	"Assessor" = 1,
	"Diretor" = 2,
	"Conselheiro" = 3,
	"Coordenador" = 4,
}

export const memberList = [
	{
		name: "Hélder Almeida",
		roleId: ROLE_ID.Coordenador,
		role: "Coordenador",
		blurhash:
			"yiN9OG9F~3?axYWAS5V?NMoJaeoyxXj?IoxZogWBR+Rlt5xVWEt6j?R+kCWBofs,R+t6fhR*xa%1WCoJbIWCbHf6oLoeNHoJt7WBay",
		img: "helder.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/h%C3%A9lder-almeida-75407a34",
			},
		],
	},
	{
		name: "Elinaldo Goes",
		roleId: ROLE_ID.Coordenador,
		role: "Coordenador",
		blurhash:
			"yiMkFgM{*0xvR4RjWCjEa#NcWVs:j[aeOZa#VsWBj[j[ogkVj[s:ayWAaxkDkXfkV@WBWXfkofWBays.j[kCj[f7kCj[aeaybIa}jZ",
		img: "elinaldo.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/elinaldojr",
			},
		],
	},
	{
		name: "Katia Vaskys",
		roleId: ROLE_ID.Conselheiro,
		role: "Conselheira Executiva",
		blurhash:
			"yFC?vCD%%%b_$z-pD*.A-VE3bbskV@WBD%R*rpWANHR*xaRlR.%1xFNyaet8OZxDbHoeV?NHjEnhS5s8aybIayogbcniWXoIf,ozRj",
		img: "katia.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/katia-vaskys",
			},
		],
	},
	{
		name: "Igor Rocha",
		roleId: ROLE_ID.Diretor,
		role: "Diretor Presidente",
		blurhash:
			"y8D]9,D$00^+}s00E1*Is,}[I=0La0xa0ef9}tt79ZRj%M=|D*4.%1%MX5%1RPofR*Ioxu%MRjnhxuS5In-pxuE1D%s:xuD*og%MIU",
		img: "igor_rocha.png",
		links: [
			{
				icon: "globe",
				prefix: "fas",
				url: "https://ilrocha.com/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/igorroc/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:ilrocha.cic@uesc.br",
			},
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/igorroc",
			},
		],
	},
	{
		name: "Isaac Lima",
		roleId: ROLE_ID.Diretor,
		role: "Diretor de Projetos",
		blurhash:
			"yWHmfEX9=voJxZ$%s.}=WXI;f6NdS4azf6s.R+WDj@WWoeI=WWs.j[j?jsayR*WVs.s.ayWCWWs.j@WWjtWVWVoLjZayj[j[WWR+az",
		img: "isaac_lima.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/inlima11",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/inlima",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/i.n.lima/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:inlima@hotmail.com",
			},
		],
	},
	{
		name: "João Rupp",
		roleId: ROLE_ID.Diretor,
		role: "Diretor de Vendas",
		blurhash:
			"ygJkQ100?^r=ofRkRPE1t7t6NGxujYR*IoofsoR*j?kCoLW:aes:bHWBayays:kCR*jZbGj@WVWBWBoLaza}oeWVkCofoLa{WBj[ay",
		img: "joao_rupp.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/joao-victor-r-20aa34122/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/jvrupp",
			},
		],
	},
	{
		name: "Beatriz Pereira",
		roleId: ROLE_ID.Diretor,
		role: "Diretora de RH",
		blurhash:
			"yID+Vl9t57xa-9j?I;~VI:Ri%2Rjj[R+57Rj=xxuELt7soX8M{xGS5WUxaR+%MWBaxW=aes.WpShs:n$j]j[WBWBt6RkNGkCxaaeR*",
		img: "beatriz.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/beatriz-pereira-81467317b/",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/beatriz.aragao.355?r=nametag",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:beatrizpereira.ar@gmail.com",
			},
		],
	},
	{
		name: "Daniel Oliveira",
		roleId: ROLE_ID.Diretor,
		role: "Diretor Financeiro",
		blurhash:
			"yBKme4%hCSxt.8xC~W004ni[56?GtRj?0KtS={%14:Rj4o-;4:?boJV[nhRkNGIUxa-oEMNd-V^*tRRkIoM|NFt7-:soWXNGs;I;%1",
		img: "daniel_oliveira.png",
		links: [
			{
				icon: "sheet-plastic",
				prefix: "fas",
				url: "http://lattes.cnpq.br/8179726948969845",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/oliveira4552/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/DanielOliveiradaSilva",
			},
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/daniel-oliveira-da-silva-436276238/",
			},
		],
	},
	{
		name: "Gabriella Oliveira",
		roleId: ROLE_ID.Diretor,
		role: "Diretoria de Marketing",
		blurhash:
			"oEC$1S?a0~nj-At6~W%MOYsAWBNupItR-poyS1a#%g%M%MxaxZW;-;xvxusmjskC%MxuxuR*WBoL",
		img: "gabriella_oliveira.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/gabriella-oliveira-00832a183",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/Gabriella0Oliveira",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:maria0gabriella@gmail.com",
			},
		],
	},
	{
		name: "Gabriela Zerbone",
		roleId: ROLE_ID.Conselheiro,
		role: "Conselheira",
		blurhash:
			"yCDbc*,HEf9[oyWXI:~oIV={azNHWVayFv5R-U^QoLayxa%1t7ELoexaxas:xaxaNHRjofoeWCxtofSgsoxGoKoL%1$*t6I:Rks:oK",
		img: "gabi_zerbone.png",
		links: [
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/gzerbone_",
			},
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/gabriela-zerbone-17651962/",
			},
		],
	},
	{
		name: "Thalles Cerqueira",
		roleId: ROLE_ID.Conselheiro,
		role: "Conselheiro",
		blurhash:
			"yEE.@ZD*DgM_xwIBcFWODiO]xuxURPo#I7RP_4R*tSWEr:pLxurpIUS%WCnis=NFsAM_NsROt8tSSixZM_s8Rjj]jCRPS%t7X9oLM{",
		img: "thalles_cerqueira.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/thalles-cerqueira-b43a571a1/",
			},
		],
	},
	{
		name: "Bruno Felipe",
		roleId: ROLE_ID.Assessor,
		role: "Assessor de RH",
		blurhash:
			"yWKd-[jXpyaxDiM{D%.9WBnhxtR*RjbIELWBVYxukCayt8-;ofRjt7WCRjWBoLWARkWBxuayoLxuayRjj[niayR*nhofR*WBt7j@f5",
		img: "bruno_felipe.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/brunofelipecoder",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/BrunoFelipeCoder",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/bruno.cic/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:bfspereira.cic@uesc.br",
			},
		],
	},
	{
		name: "Joabe Andrade",
		roleId: ROLE_ID.Assessor,
		role: "Assessor de Projetos",
		blurhash:
			"yBHdNxDh1Q0}}XxaNGxuMx-pNxX8xZn%7MEL}s={IUsmNdM|bbNGs:aejGoJI;t7$gn$JUE2xaR*W=xG$iR*I:WCJnWqwIjZW=s:oL",
		img: "joabe_andrade.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/joabeandrade/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://www.github.com/JoabeAndrade/",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/j0abeandrade/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:joabeandrade2k01@gmail.com",
			},
		],
	},
	{
		name: "Joabe Ferreira",
		roleId: ROLE_ID.Assessor,
		role: "Assessor de Presidência",
		blurhash:
			"yrPFo-W;.mnirqRkRPb^f6smbHbboeayXSofniWBWBa{j[o~fPs9WVIooft7s:ayRjayj[j[j[t7j[V[fkbHj[off+f6V@fQs:ayWX",
		img: "joabe_ferreira.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/joabe-ferreira-156b07215/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/GannJobs",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/jobs.017/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:linksyamato@gmail.com",
			},
		],
	},
	{
		name: "João P. Norberto",
		roleId: ROLE_ID.Assessor,
		role: "Assessor de Projetos",
		blurhash:
			"y5FXL^OG]NT0JV$zNd}6xC%gM{IoxaRkKjV@RPT0t7xZof^ixuX9ELEL%1-9M_E2R*^5$%f+Nw^kR+E2%1xuNbI;-9ogJVjYV@Rj$$",
		img: "joão_pedro_noberto.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/jo%C3%A3o-pedro-correia-da-silva-noberto-028940236/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/oJorta",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/jorta___/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:jpcsnoberto@gmail.com",
			},
		],
	},
	{
		name: "Larissa de Brito",
		roleId: ROLE_ID.Assessor,
		role: "Assessora de Vendas",
		blurhash:
			"ybJactIn~qxasobINH_4ofR+t7RPR*jFW:t7RONGWqWAo#tRoLaeR*kCj[o0xakCRjfkWVofofa{jZWBWBofofofbHj[axWVofj[ay",
		img: "larissa_brito.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/larissa-brit0/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/laribrito",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/tnlaris/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:lary.29.ds@gmail.com",
			},
		],
	},
	{
		name: "Luiz Rosário",
		roleId: ROLE_ID.Assessor,
		role: "Assessor de Presidência",
		blurhash:
			"yDCP9V-p00D%~V-;R+$LjEa_ofbIWBae0MNH^*xuM{M{WCV?jrs:WCj=oejZIVWV%2ofNHWCoextofNHRjjYs:s:Iojs%1WXNGoLt7",
		img: "luiz_rosario.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/luizzrosario/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/luizzrosario/",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/luizzrosario/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:luizfeliper57@gmail.com",
			},
		],
	},
	{
		name: "Murilo Maia",
		roleId: ROLE_ID.Assessor,
		role: "Assessor de Marketing",
		blurhash:
			"yXJHUE-A.TOYxa%MRjR+NHRjxZoKofofS~R*xat7Rje.n%a#t7j[aeaeV@WBR+jZxZs:RkRjofR*WBs:ofWBWBR*W=bHoeofWBWBj@",
		img: "murilo_maia.png",
		links: [
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/murilo.maiia/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:murilo.maiia@outlook.com",
			},
		],
	},
	{
		name: "Thompson Raul",
		roleId: ROLE_ID.Assessor,
		role: "Assessor Financeiro",
		blurhash:
			"yGE2OcSN00%L~BRONGD%WUt7NINJxus:Nvxu-pRit3s.RkE1RjkCt7WYR,WBxbogxtxYWAbHxZE2R+%1xZIpR*flNHof%2j?aykCoe",
		img: "thompson.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/thompson-raul-dos-santos-vieira-8a1a391aa",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/ThompsonRaul",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/thomps_off/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:thompson.vieira@outlook.com",
			},
		],
	},
	{
		name: "Valcírio III",
		roleId: ROLE_ID.Assessor,
		role: "Assessor de Vendas",
		blurhash:
			"qEGbbfIB00_N$LMx.8M_00oz%$M{n*WBIoWX00RPsoM_xutRjsWV%gRjRPRjW=t7oJae%$xujv%ME1oKjZbIM{ozs:t7bHRjxuf6",
		img: "valcirio.png",
		links: [
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:vfsvsilva.cic@uesc.br",
			},
		],
	},
	{
		name: "Davi Roriz",
		roleId: ROLE_ID.Trainee,
		role: "Trainee",
		// blurhash:
		// 	"qEGbbfIB00_N$LMx.8M_00oz%$M{n*WBIoWX00RPsoM_xutRjsWV%gRjRPRjW=t7oJae%$xujv%ME1oKjZbIM{ozs:t7bHRjxuf6",
		// img: "valcirio.png",
		links: [
			// {
			// 	icon: "envelope",
			// 	prefix: "fas",
			// 	url: "mailto:vfsvsilva.cic@uesc.br",
			// },
		],
	},
	{
		name: "Matheus Santos Silva",
		roleId: ROLE_ID.Trainee,
		role: "Trainee",
		blurhash:
			":UKTuax@?vIVM{xut3kB_NaIxuV@M|ogRkoeM{b0RikCxaayWBWCr:W?M{RktRoIoya#ozogWBayflWAj[WBWXRjWBt7fPWXofays,a$aeofaxWBj[fPaej]a#fPofaea#ay",
		img: "matheus_silva.png",
		links: [
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:mssilva.cic@uesc.br",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/matheusssilva991",
			},
		],
	},
]

export const roles = {
	coordenadores: memberList.filter(
		(member) => member.roleId == ROLE_ID.Coordenador
	).length,
	conselheiros: memberList.filter(
		(member) => member.roleId == ROLE_ID.Conselheiro
	).length,
	diretores: memberList.filter((member) => member.roleId == ROLE_ID.Diretor)
		.length,
	assessores: memberList.filter((member) => member.roleId == ROLE_ID.Assessor)
		.length,
	trainees: memberList.filter((member) => member.roleId == ROLE_ID.Trainee)
		.length,
	total: memberList.length,
}

function makeBlurHash() {
	let i = 0
	let nemMembers = memberList.map(async (member) => {
		if (member.blurhash != "") return
		member.blurhash = await encodeImageToBlurhash(
			"/img/members/" + member.img
		)
		console.log(i++)
		return member
	})
	Promise.all(nemMembers).then((members) => {
		console.log(members)
	})
}

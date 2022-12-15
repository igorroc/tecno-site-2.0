import { Blurhash } from "react-blurhash"
import { encodeImageToBlurhash } from "../hooks/handleBlurHash"

export const memberList = [
	{
		name: "Hélder Almeida",
		role: "Coordenação",
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
		role: "Coordenação",
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
		role: "Conselho Executivo",
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
		name: "Isabelle Cruz",
		role: "Diretoria Presidente",
		blurhash:
			"yHH-Pzrq0~D%9Z0LNb00tmD$?a%2nhsSKk0K~CjFWBxut700-poJIpkDt6js-:smbbIoRj%2R*M{oft7IokDoJWBoyxuRjbbRjofRj",
		img: "isabelle.png",
		links: [
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://instagram.com/iamisabellec",
			},
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/isabellesscruz",
			},
		],
	},
	{
		name: "Igor Rocha",
		role: "Diretoria de Projetos",
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
		name: "Thalles Cerqueira",
		role: "Diretoria de Vendas",
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
		name: "Gabriela Zerbone",
		role: "Diretoria de RH",
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
		name: "Mateus Lisboa",
		role: "Diretoria Financeira",
		blurhash:
			"yPG[ThD%ysIVs9j?MxIoWBsmfkt7kCWCI=ofw^ofM{aebIofWBoLf6R*WBoft7ofaeofNGWBt7NHWBs:o0WVWBbIbIofj@fkaeaykC",
		img: "matheus.png",
		links: [],
	},
	{
		name: "Evelyn Santos",
		role: "Conselho",
		blurhash:
			"yQG[Wj00t-M{^+IUo}KPi^%2V?NGj@V@~pE1-pxuIUogaz%MaKNHNGs:jFR*-:ofM{xuRPWCoLofkCjZoLWAoKRkofxaM{ofjtRjof",
		img: "evelyn.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/evelyn-santos-3569881b7/",
			},
		],
	},
	{
		name: "Marcus Vinicius",
		role: "Conselho",
		blurhash:
			"yHFX^:4T.T9F-;M|X8L1Myx]V@%LNGxu0LpIiwozs:e.xu%LaLozoLNbfloKg3t7s,W=fPkVR*NIoexZj[s:xGbHX9e.xan%S2W;jZ",
		img: "marcus.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/marcus-vinicius-bitencourt-do-carmo-86bb2415b/",
			},
		],
	},
	{
		name: "Alanis Rodrigues",
		role: "Gerência de Marketing",
		blurhash:
			"ynIO5}ROyDEL%2xat7~qWBxuofWBofayo~tRs9%LM{WVayxufRRjWVWBRjoLxua}RjaefjRkazf+ofRje.kCayj[t6oLWBRkofoLof",
		img: "alanis.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/alanis-rodrigues-aaba4220b/",
			},
		],
	},
	{
		name: "Beatriz Pereira",
		role: "Gerência de Projetos",
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
		name: "Bruno Felipe",
		role: "Gerência de Projetos",
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
		name: "Gabriella Oliveira",
		role: "Gerência de RH",
		links: [],
	},
	{
		name: "Samuel Vasconcelos",
		role: "Gerência de Projetos",
		blurhash:
			"yMHxTq9FyXoz-pt7xa~V9FNHIA?HD*of00IoniIUxuRjRjJ9%M^*%fE1%MM|E1%MadR*NGM{xuIUWBRPM{WWRj%2NHoz%2xtWVa}t7",
		img: "samuel.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/samuel-vasconcelos-b196001ba/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/smvasconcelos",
			},
		],
	},
	{
		name: "Alice Valero",
		role: "Membro",
		blurhash:
			"yWHx?IVC5cMx~VxtNF9*oLx^bJIpogR,tmSjt2ozRORjxZ9GWWs,V?M|ngahogn%xBs-oeWBofxua}RjWVR-R*ozNGn~t4oebIkDWY",
		img: "alice.png",
		links: [
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/Alimva",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/lili__valero/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:alicia.mar.val@gmail.com",
			},
		],
	},
	{
		name: "Breno Vitório",
		role: "Membro",
		blurhash:
			"ycK0{KNy_Nt7x]xaNG-;-pozozoLWVV@E2R*nOoLRja|s:S#V@s:aye:ofa#xukCWVs:WBRkaexabHjtsmS2Rjoea{ayaeoLWCR+j[",
		img: "breno.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/therealbrenu/",
			},
		],
	},
	{
		name: "Bruno Silva",
		role: "Membro",
		blurhash:
			"yaGTs:8{?^yEt6s8V?yXxsN0tmWCMxaKIUocV[RQoga$WAR:R-s+jFfltRofX9kCadocj[WCbHozbIWEaejrWBWBozkBjXafa$oej[",
		img: "bruno_silva.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/bruno-s-araujo/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/BrunoSilva96",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:brunosilvabrait@gmail.com",
			},
		],
	},
	{
		name: "Daniel Oliveira",
		role: "Membro",
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
		],
	},
	{
		name: "Eric Soares",
		role: "Membro",
		blurhash:
			"ypMZjr%#~pkXMzxZIU?Go}t8R+afbHRjIpV@V@aKodayt7-.WXt7ofM|oLt6RkoeRkWBWVofoes.R*oeWqWVkBoef+ofoLoeR*WCoe",
		img: "eric.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/eric-soares-130b441ab/",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/ssilva.eric/",
			},
		],
	},
	{
		name: "Guilherme Almeida",
		role: "Membro",
		links: [],
	},
	{
		name: "Igor Nascimento",
		role: "Membro",
		blurhash:
			"yPFrSD-=u6S4xbRiROs;ozxvs:kDRjay9Zf6MxWAofWAkCxvayt8oMV@j[o0oMj[WAWBWBj@WBV?ayayWVogaxogogofofWVWBkCWU",
		img: "igor_nascimento.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/mr-igor-nascimento/",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/mr-nascimento",
			},
		],
	},
	{
		name: "Isaac Lima",
		role: "Membro",
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
		name: "Jefferson Ferreira",
		role: "Membro",
		blurhash:
			"y9KKA,ui00009b_2?vNN9G00$%?bpIxbTd?G%NV@%2s.oy008{R-W;-;-:xt9t.7?bEMRPMxM{00rr-=S5rrV@W.00xD?v%#E1R5Rj",
		img: "jefferson.png",
		links: [],
	},
	{
		name: "Joabe Andrade",
		role: "Membro",
		blurhash:
			"yBHdNxDh1Q0}}XxaNGxuMx-pNxX8xZn%7MEL}s={IUsmNdM|bbNGs:aejGoJI;t7$gn$JUE2xaR*W=xG$iR*I:WCJnWqwIjZW=s:oL",
		img: "joabe_andrade.png",
		links: [],
	},
	{
		name: "Joabe Ferreira",
		role: "Membro",
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
				url: "linksyamato@gmail.com",
			},
		],
	},
	{
		name: "João P. Del Rey",
		role: "Membro",
		links: [],
	},
	{
		name: "João P. Norberto",
		role: "Membro",
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
		name: "João Rupp",
		role: "Membro",
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
		name: "João V. Leite",
		role: "Membro",
		blurhash:
			"yAHUqT9D0Mj]$Rbxtk03InRhbc-prqS5IExv-Oxbx^R~V[_L%3DPaxJ:M~xCEkR*V?S5jvr?n$N2%MxAoztQxsR*tlbcVrxuWFR.RP",
		img: "joao_victor_leite.png",
		links: [
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/Joao-Victor-Leite",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/jv_milk/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:jvldsa10@hotmail.com",
			},
		],
	},
	{
		name: "Larissa de Brito",
		role: "Membro",
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
		role: "Membro",
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
		name: "Maria Eduarda",
		role: "Membro",
		blurhash:
			"yND,ZX$NUH%1?bxuRP?^yDS$x]nONHV@OYo}sTR*IURPofR*s:xZWBV?t6ozt7aeRiRjV@ozozozt7oKR*j[t7t7X8bIjFR*fks:Wq",
		img: "maria_guedes.png",
		links: [
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/mdudag",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://www.instagram.com/dudaa.guedess/",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:mariaguedes44.me@gmail.com",
			},
		],
	},
	{
		name: "Murilo Maia",
		role: "Membro",
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
		name: "Pedro Elias",
		role: "Membro",
		blurhash:
			"yUE{CF_4x]o}%g.8%g={j]oej[WYW=kCRiV@ofoLWAV@aes+oJWXj]jsWBWBV[WBWWofayRjaet7ofWBWBjZoLj]j?ayWVj[ofj[WC",
		img: "pedro_elias.png",
		links: [],
	},
	{
		name: "Solana Ametista",
		role: "Membro",
		blurhash:
			"ySEyMdJB?wkWxa%LD*KR$$OFV@adM|n$NGRkxDjZM|WXt7WBX8n$oyRjs:kCa~s.RkWBt5WCbHxuV[R+jZj[kBj[aej[f5j[WBj@j]",
		img: "solana.png",
		links: [],
	},
	{
		name: "Thompson Raul",
		role: "Membro",
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
		role: "Membro",
		links: [],
	},
	{
		name: "Victor José",
		role: "Membro",
		blurhash:
			"yRJ[05b^.R9aIAn,n#_4o|tRt7M{-:WCI^%gIVjF-:RkR*D%Iqaet7o#j[t7xsW-RQt7WERkf5NHt6xZa~WBRjWBM|RQWBoyj[s.ax",
		img: "victor.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://www.linkedin.com/in/victor-martins-02946610b/",
			},
		],
	},
	{
		name: "Yan Costa",
		role: "Membro",
		blurhash:
			"yuNAVOs:?vRjs-t7NG~qj]ofjsRQayWBRkayMxf6f+azxu%Mayf6j[WBj[ofWCayV@ofj]juayjtf6WVaztRoLj@ogj[jsofRkR*WB",
		img: "yan.png",
		links: [
			{
				icon: "linkedin",
				prefix: "fab",
				url: "https://linkedin.com/in/yan-macedo-485015251",
			},
			{
				icon: "github",
				prefix: "fab",
				url: "https://github.com/KiritoKi",
			},
			{
				icon: "instagram",
				prefix: "fab",
				url: "https://instagram.com/kiritokkazuto",
			},
			{
				icon: "envelope",
				prefix: "fas",
				url: "mailto:yanc.macedo@hotmail.com",
			},
		],
	},
]

export const roles = {
	coordenadores: memberList.filter((member) =>
		member.role.includes("Coordenação")
	).length,
	conselheiros: memberList.filter((member) =>
		member.role.includes("Conselho")
	).length,
	diretores: memberList.filter((member) => member.role.includes("Diretoria"))
		.length,
	gerentes: memberList.filter((member) => member.role.includes("Gerência"))
		.length,
	membros: memberList.filter((member) => member.role.includes("Membro"))
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

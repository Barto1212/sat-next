import Layout from "../components/layout"
import Revues from '../components/cotisation/Revues'
import EcoEmballages from "../components/cotisation/EcoEmballages"
import Assurance from '../components/cotisation/Assurance'
import RucherEcole from '../components/cotisation/RucherEcole'
import Image from "next/image"
import grid from '../styles/articles.module.scss'

interface articleProp {
	children: JSX.Element
	title?: string | JSX.Element
}

const ArticleLi: React.FC<articleProp> = ({children, title}) => {
	const newTitle: string = title ? title : children.type.name.replace(/([A-Z])/g, " $1")
return (
	<li className={grid.list__item}>
		<h2 className={grid.list__item__title}>{newTitle}</h2>
		<div className={grid.list__item__body}>{children}</div>
	</li>
)
}

export default function Adhesion () {
	return (
		<Layout>
			<h1 className={grid.title}>Votre cotisation 2022</h1>
				<table className={grid.article}>
					<tbody>
						<tr>
							<td>Cotisation avec un abonnement à une revue:</td>
							<td>51€ ou 53€</td>
						</tr>
						<tr>
							<td>Cotisation avec un abonnement à une revue:</td>
							<td>51€ ou 53€</td>
						</tr>
					</tbody>
				</table>
			<ul className={grid.list}>
				<ArticleLi>
					<Revues />
				</ArticleLi>
				<ArticleLi title={
					<Image
						src="/img/eco-emballages.png"
						alt="Eco emballages"
						width={200}
						height={50}
					/>
				} >
					<EcoEmballages />
				</ArticleLi>
				<ArticleLi>
					<RucherEcole />
				</ArticleLi>
				<ArticleLi>
					<Assurance />
				</ArticleLi>
			</ul>
			
			<Image
				src="/img/abeilles-entree-1920-1080.jpg"
				width={800}
				height={450}
				alt="Abeilles entrée ruche"
			/>
			
		</Layout>
	)
}
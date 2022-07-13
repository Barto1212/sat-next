import Layout from "../components/layout"
import Revues from '../components/cotisation/Revues'
import EcoEmballages from "../components/cotisation/EcoEmballages"
import Assurance from '../components/cotisation/Assurance'
import RucherEcole from '../components/cotisation/RucherEcole'
import Image from "next/image"
import articles from '../styles/articles.module.scss'

export default function Adhesion () {
	return (
		<Layout>
			<ul className={articles.list}>
				<li className={articles.list__item}>
					<h2 className={articles.list__item__title}>Votre cotisation 2022</h2>
					<div className={articles.list__item__body}>
						<table>
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
					</div>
				</li>
				<li className={articles.list__item}>
					<h2 className={articles.list__item__title}>Vos revues syndicales</h2>
					<div className={articles.list__item__body}><Revues /></div>
				</li>
				<li className={articles.list__item}>
					<h2 className={articles.list__item__title}>Eco emballages</h2>
					<div className={articles.list__item__body}><EcoEmballages /></div>
				</li>
				<li className={articles.list__item}>
					<h2 className={articles.list__item__title}>Rucher école</h2>
					<div className={articles.list__item__body}><RucherEcole /></div>
				</li>
				<li className={articles.list__item}>
					<h2 className={articles.list__item__title}>Assurance</h2>
					<div className={articles.list__item__body}><Assurance /></div>
				</li>
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
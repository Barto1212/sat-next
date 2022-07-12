import Layout from "../components/layout"
import Revues from '../components/cotisation/Revues'
import EcoEmballages from "../components/cotisation/EcoEmballages"
import Assurance from '../components/cotisation/Assurance'
import RucherEcole from '../components/cotisation/RucherEcole'

export default function Adhesion () {
	return (
		<Layout>
			<h2>Votre cotisation 2022</h2>
			<table>
				<tr>
					<td>Cotisation avec un abonnement à une revue:</td>
					<td>51€ ou 53€</td>
				</tr>
				<tr>
					<td>Cotisation avec un abonnement à une revue:</td>
					<td>51€ ou 53€</td>
				</tr>
			</table>
			<h2>Vos revues syndicales</h2>
			<Revues />
			<EcoEmballages />
			<RucherEcole />
			<Assurance />
		</Layout>
	)
}
import Image from "next/image"

const EcoEmballages = () => {
	
	return (
		<div>
				<Image
					src="/img/eco-emballages.png"
					alt="Eco emballages"
					width={200}
					height={50}
				/>
			<div>
				Tout apiculteur qui utilise des emballages se doit de participer à leur recyclage. Nous avons l'obligation
				de déclarer ceux-ci annuellement aux services de l'organisme Eco-emballages. Par l'intermédiaire d'un
				contrat proposé par l'UNAF, nos démarches sont simplifiées.
			</div>
			<div>
				L'apiculture Tourangelle collecte les redevances pour UNAF / Eco-emballages et vous délivre en retour
				un certificat. La redevance annuelle est fixée à 0.05€ par ruche.
			</div>
		</div>
	)
}

export default EcoEmballages
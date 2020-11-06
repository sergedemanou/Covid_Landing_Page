(document).ready(function() {
	// Code précédent
	// […]
	// Actions de navigation
		// Initialisation du compteur
		Cpt = 0;
		// Clic sur le bouton "Suivant"
		$(".carrousel-next button").click(function() {
			// Ajout +1 au compteur (nous allons sur la diapositive suivante)
			Cpt++;
			// Mouvement du carrousel en arrière-plan
			$(".carrousel").animate({
				marginLeft : - (Reference.width() * Cpt)
			});
		});
		// Clic sur le bouton "Précédent"
		$(".carrousel-prev button").click(function() {
			// Soustraction -1 au compteur (nous allons sur la diapositive précédente)
			Cpt--;
			// Mouvement du carrousel en arrière-plan
			$(".carrousel").animate({
				marginLeft : - (Reference.width() * Cpt)
			});
		});
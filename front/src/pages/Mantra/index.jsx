import { React } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Mantra = () => {
	return (
		<Container>
			<h2>Mantra du jour</h2>
			<figure>
				<p>
					Fais-toi confiance. N’attends pas que les autres le fassent.
					Rappelle-toi que tout part de toi. De tes perceptions, de tes valeurs,
					de ton travail. Ne laisse pas les autres décider qui tu es. Fais-toi
					confiance, suis ton intuition. Vis chaque journée selon tes propres
					termes. Comme l’équilibre, la confiance en soi te demandera peut-être
					du travail, de la persévérance et de la patience. Mais cela vaudra
					tellement le coup, le coût, et les quelques sacrifices de ton temps.
				</p>
			</figure>
			<Link to="/home">
				<li>Accueil</li>
			</Link>
		</Container>
	);
};
export default Mantra;

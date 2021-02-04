import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

const AudioList = () => {
	return (
		<Container>
			<h2>Vos audios journaliers</h2>
			<figure>
				<h3>Votre audio du lundi:</h3>
				<audio controls src="/audio/day1.mp3">
					Your browser does not support the
					<code>audio</code> element.
				</audio>
				<h3>Votre audio du mardi:</h3>
				<audio controls src="/audio/day2.mp3">
					Your browser does not support the
					<code>audio</code> element.
				</audio>
				<h3>Votre audio du mercredi:</h3>
				<audio controls src="/audio/day3.mp3">
					Your browser does not support the
					<code>audio</code> element.
				</audio>
				<h3>Votre audio du jeudi:</h3>
				<audio controls src="/audio/day4.mp3">
					Your browser does not support the
					<code>audio</code> element.
				</audio>
				<h3>Votre audio du vendredi:</h3>
				<audio controls src="/audio/day5.mp3">
					Your browser does not support the
					<code>audio</code> element.
				</audio>
				<h3>Votre audio du samedi:</h3>
				<audio controls src="/audio/day6.mp3">
					Your browser does not support the
					<code>audio</code> element.
				</audio>
				<h3>Votre audio du dimanche:</h3>
				<audio controls src="/audio/day7.mp3">
					Your browser does not support the
					<code>audio</code> element.
				</audio>
			</figure>
			<Link to="/home">
				<li>Accueil</li>
			</Link>
		</Container>
	);
};

export default AudioList;

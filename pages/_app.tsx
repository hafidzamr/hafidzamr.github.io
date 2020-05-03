import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "normalize.css";
import "@/static/assets/css/style.css";
import SEO from "../utils/seo";
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<React.Fragment>
		<SEO
			title="hafidzamr - Personal Website"
			description="this is my personal website"
			keywords={[
				"Hafidz Amrulloh",
				"Personal Web",
				"Front End Engineer",
				"Front-End Engineer",
				"Front End Developer",
				"Front-End Developer",
				"Javascript",
				"React.Js"
			]}
			og={[
				{ property: "og:title", content: "Hafidz Amrulloh" },
				{
					property: "og:description",
					content: "this is my personal website"
				},
				{ property: "og:type", content: "Website" }
			]}
		/>
		<Component {...pageProps} />
	</React.Fragment>
);

export default App;

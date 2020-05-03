import Head from "next/head";
import { ISEO } from "../interface";

export default function SEO({
	charSet = "UTF-8",
	title = "",
	description = "",
	keywords = [],
	og = []
}: ISEO): JSX.Element {
	return (
		<Head>
			<meta charSet={charSet} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.concat().toString()} />
			{og.map((og, index) => (
				<meta property={og.property} content={og.content} key={index} />
			))}
		</Head>
	);
}

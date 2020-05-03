import { Fragment } from "react";
import { ITemplate } from "~/interface";
import Header from "./Header";

import { Content } from "./styles";

export default function DefaultLayout({ children, header }: ITemplate) {
	return (
		<Fragment>
			{header ? <Header /> : ""}
			<Content>{children}</Content>
		</Fragment>
	);
}

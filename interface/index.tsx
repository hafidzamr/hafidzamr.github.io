import * as React from "react";

export type ISEO = {
	charSet?: string;
	title?: string;
	description?: string;
	og?: Array<{ property?: string; content?: string }>;
	keywords?: Array<string>;
};

export type ITemplate = {
	children: React.ReactNode;
	header?: boolean;
	footer?: boolean;
};

import Link from "next/link";
import DefaultLayout from "~/components/general/layout/default";

import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoLinkedin,
	IoLogoGithub
} from "react-icons/io";
import { SocialMedia, IconSocialMedia } from "./styles";

const socialMedia = [
	{
		type: "facebook",
		url: "https://www.facebook.com/kyzryu",
		icons: <IoLogoFacebook />
	},
	{
		type: "github",
		url: "https://github.com/hafidzamr",
		icons: <IoLogoGithub />
	},
	{
		type: "instagram",
		url: "https://www.instagram.com/hafidzamr_/",
		icons: <IoLogoInstagram />
	},
	{
		type: "linkedin",
		url: "https://linkedin.com/in/hafidzamr/",
		icons: <IoLogoLinkedin />
	}
];

export default function Index(): JSX.Element {
	return (
		<DefaultLayout header={false}>
			<h4 className="title">Hello World!, I'm Hafidz Amrulloh</h4>
			<label>I'm Hooooooman!!!</label>
			<SocialMedia>
				<h5>Social Media</h5>
				<IconSocialMedia>
					{socialMedia.map((socialAccount, id) => (
						<Link href={socialAccount.url} key={id} prefetch={false}>
							<a target="_blank">{socialAccount.icons}</a>
						</Link>
					))}
				</IconSocialMedia>
			</SocialMedia>
		</DefaultLayout>
	);
}

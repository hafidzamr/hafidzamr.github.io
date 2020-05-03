import DefaultLayout from "~/components/general/layout/default";
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoLinkedin,
	IoLogoTwitter,
	IoLogoGithub
} from "react-icons/io";
import {
	SocialMedia,
	IconSocialMedia,
	PortofolioSection,
	Footer
} from "./styles";

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
		type: "twitter",
		url: "https://twitter.com/hafidzamr_/",
		icons: <IoLogoTwitter />
	},
	{
		type: "linkedin",
		url: "https://linkedin.com/in/hafidzamr/",
		icons: <IoLogoLinkedin />
	}
];

export default function Index() {
	return (
		<DefaultLayout header={false}>
			<h4 className="title">Hello World!, I'm Hafidz Amrulloh</h4>
			<label>I'm Hooooooman!!!</label>
			<SocialMedia>
				<h5>Social Media</h5>
				<IconSocialMedia>
					{socialMedia.map((socialAccount, id) => (
						<a
							key={id}
							href={socialAccount.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{socialAccount.icons}
						</a>
					))}
				</IconSocialMedia>
			</SocialMedia>
		</DefaultLayout>
	);
}

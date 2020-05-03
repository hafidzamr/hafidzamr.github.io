import styled from "styled-components";

export const SocialMedia = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const IconSocialMedia = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 40vh;
	a {
		text-decoration: none;
		color: unset;
	}
`;

export const PortofolioSection = styled.div`
	margin-top: 1vh;
	.card {
		display: flex;
		justify-content: space-between;
	}
	.title_portofolio:after {
		content: "";
		display: flex;
		border: 1px solid black;
		width: 75px;
		transform: translateX(210px);
	}
`;

export const Footer = styled.div`
	display: flex;
	justify-content: center;
	font-size: 25px;
	height: 50px;
	a {
		text-decoration: none;
		color: unset;
	}
	@media (max-width: 1024px) {
		font-size: 15px;
		margin: 0 0 10px 0;
	}
`;

import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	min-height: 94vh;
	.title {
		font-size: 50px;
		margin: 0;
		@media (max-width: 1024px) {
			font-size: 25px;
			margin: 0 0 10px 0;
		}
	}
`;

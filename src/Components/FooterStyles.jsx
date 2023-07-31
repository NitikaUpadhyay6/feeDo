import styled from 'styled-components';
// @import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');


export const Box = styled.div`
padding: 80px 60px;
background: teal;
position: absolute;
/* bottom: 0; */
width: 100%;
margin-top: 50px;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* max-width: 1000px; */
	margin: 0 auto;
	/* background: yellow; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
text-align: center;
/* padding-left: 60px; */
/* background-color: lime; */
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: white;
margin-bottom: 20px;
font-size: 1.25rem;
font-family: 'Yeon Sung', cursive;
text-decoration: none;

&:hover {
	color: yellow;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 1.55rem;
color: yellow;
margin-bottom: 30px;
font-weight: bold;
font-family: 'Yeon Sung', cursive;;
`;



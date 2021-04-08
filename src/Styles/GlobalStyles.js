import { createGlobalStyle } from "styled-components";
import robslabbold from './Fonts/RobotoSlab/RobotoSlab-Black.ttf';
import robslabmed from './Fonts/RobotoSlab/RobotoSlab-Medium.ttf';

const GlobalStyles = createGlobalStyle`
	:root {
		--body-margin: 2.4rem;
		--body-bg: transparent;
	}
	
	@font-face {
		font-family: RobotoSlab;
		src: url(${robslabmed});
		font-weight: normal;
		font-style: normal
	}
	@font-face {
		font-family: RobotoSlab;
		src: url(${robslabbold});
		font-weight: bold;
		font-style: normal
	}
	
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin; 0;
		padding: 0;
	}
	
	
	html {
		background-color: #eeeeee;
		font-size: 10px;
		font-family: 'RobotoSlab';
		height: 100vh;
		width: 100vw;
	}
	
	body {
		background-color: var(--body-bg);
		margin: 0 auto;
		width: calc(100vw - (var(--body-margin) * 2));
		height: 100vh;
	}
	
	.welcome {
		font-family: 'RobotoSlab';
		font-size: 4.8rem;
	}
	
	.welcome2 {
		font-family: 'Lato';
		font-size: 4.8rem;
	}
	
	.welcome3 {
		font-family: 'Arial';
		font-size: 4.8rem;
	}
`;

export default GlobalStyles;

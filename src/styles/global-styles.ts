import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {margin:0;padding:0}
h1, h2, h3, h4, h5, h6 {font-size:100%;font-weight:400}
ul {list-style:none}
button, input, select {margin:0}
html {box-sizing:border-box}
*, :after, :before {box-sizing:inherit}
img, video {height:auto;max-width:100%}
iframe {border:0}
table {border-collapse:collapse;border-spacing:0}
td, th {padding:0}

/* Custom Styles */
body{
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.5s ease-in-out;
}
h1,h2,h3,h4,h5,h6,p,span,a{
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.5s ease-in-out;
}
::selection {
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.text};
}

::-webkit-scrollbar{
  width: 12px;
  background: ${({ theme }) => theme.colors.background};
}
::-webkit-scrollbar-thumb{
  background: ${({ theme }) => theme.colors.text};
}
`;

export default GlobalStyles;

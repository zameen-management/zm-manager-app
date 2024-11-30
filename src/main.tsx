import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./features/styles/Theme.styled.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</BrowserRouter>
);

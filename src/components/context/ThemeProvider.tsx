// // TODO : 1 Creer un contexte

// import { createContext, useState } from "react";
// import type { ReactNode } from "react";

// export const ThemeContext = createContext(null);

// // 2 Creer un provider

// export default function ThemeProvider({ children }: { children: ReactNode }) {
// 	const [theme, setTheme] = useState(false);

// 	return (
// 		<ThemeContext.Provider value={{ theme, setTheme }}>
// 			{children}
// 		</ThemeContext.Provider>
// 	);
// }

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

type DarkModeContextData = {
  theme: string;

  handleThemeSwitch: () => void;
};

interface Props {
  children: ReactNode;
}

export const DarkMode = createContext({} as DarkModeContextData);

// -------------------------------------------------------------------------

export function DarkModeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>("");

  // THEMA INICIAL
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    const valuesLocal = localStorage.getItem("DARK_MODE");

    if (valuesLocal) {
        setTheme(valuesLocal);
    } else {
      if (hour >= 12) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  // ALTERANDO O THEMA
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    localStorage.setItem("DARK_MODE", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <DarkMode.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </DarkMode.Provider>
  );
}

export const useDarkMode = () => {
  return useContext(DarkMode);
};

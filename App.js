import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import react from 'react';
import { RestaurantScreen } from './src/features/restaurants/screens/RestaurantScreen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from "./src/infrastructure/theme"
import { useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";

//test

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if(!oswaldLoaded || !latoLoaded ){
    return null; 
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen /> 
        <ExpoStatusBar style='auto'/>
      </ThemeProvider>
    </>
  );
}

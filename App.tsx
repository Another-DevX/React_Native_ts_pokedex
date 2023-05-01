import { NavigationContainer } from "@react-navigation/native";
import Navigations from "./src/navigation/Navigations";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
        <Navigations />
    </NavigationContainer>
  );
}

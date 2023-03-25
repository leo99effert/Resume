import "./App.css";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import Summary from "./components/Summary";
import { Divider, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex flexDirection="column" gap={1}>
      <Profile/>
      <Expertise/>
      <Summary/>
      <Experience/>
      <Divider marginTop={5}/>
      <Technologies/>
    </Flex>
  );
}
export default App;

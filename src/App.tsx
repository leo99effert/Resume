import "./App.css";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import Summary from "./components/Summary";
import { Divider, Flex } from "@chakra-ui/react";
import Download from "./components/Download";

function App() {
  return (
    <Flex flexDirection="column" gap={3}>
      <Profile/>
      <Expertise/>
      <Summary/>
      <Experience/>
      <Download/>
      <Divider/>
      <Technologies/>
    </Flex>
  );
}
export default App;

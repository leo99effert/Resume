import { Flex, Heading, Hide, Show } from "@chakra-ui/react";
import EsCard from "./EsCard";
import IthsCard from "./IthsCard";
import JustValueCard from "./JustValueCard";

const Experience = () => {
  return (
    <>
      <Show above="md">
        <Flex justifyContent="space-evenly" gap={2}>
          <JustValueCard />
          <EsCard />
          <IthsCard />
        </Flex>
      </Show>
      <Hide above="md">
        <Flex
          justifyContent="space-evenly"
          alignItems="center"
          gap={2}
          flexDirection="column"
        >
          <JustValueCard />
          <EsCard />
          <IthsCard />
        </Flex>
      </Hide>
    </>
  );
};

export default Experience;

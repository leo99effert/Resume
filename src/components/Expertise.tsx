import { Flex, Heading, Hide, Image, Show } from "@chakra-ui/react";
import c from "../assets/c.png";
import net from "../assets/net.png";
import react from "../assets/react.png";

const Expertise = () => {
  return (
    <>
      <Show above="lg">
        <Flex justifyContent="center" gap={10} marginBottom={5}>
          <Image src={c} borderRadius="50%" boxSize="180px" objectFit="cover" />
          <Image src={net} borderRadius="50%" boxSize="180px" objectFit="cover" />
          <Image src={react} borderRadius="50%" boxSize="180px" objectFit="cover" />
        </Flex>
      </Show>
      <Hide above="lg">
        <Flex justifyContent="space-evenly" marginBottom={5}>
          <Image src={c} borderRadius="50%" boxSize="120px" objectFit="cover" />
          <Image src={net} borderRadius="50%" boxSize="120px" objectFit="cover" />
          <Image src={react} borderRadius="50%" boxSize="120px" objectFit="cover" />
        </Flex>
      </Hide>
      
    </>
  );
};

export default Expertise;

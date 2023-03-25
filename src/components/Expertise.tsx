import { Flex, Heading, Hide, Image, Show } from "@chakra-ui/react";
import c from "../assets/c.png";
import net from "../assets/net.png";
import react from "../assets/react.jpg";

const Expertise = () => {
  return (
    <>
      <Show above="lg">
        <Flex justifyContent="center" gap={10}>
          <Image
            src={c}
            borderRadius="50%"
            boxSize="180px"
            objectFit="cover"
            position="relative"
            top="-80px"
            left="50px"
          />
          <Image
            src={net}
            borderRadius="50%"
            boxSize="180px"
            objectFit="cover"
            position="relative"
            top="-5px"
          />
          <Image
            src={react}
            borderRadius="50%"
            boxSize="180px"
            objectFit="cover"
            position="relative"
            top="-80px"
            left="-50px"
          />
        </Flex>
      </Show>
      <Hide above="lg">
        <Flex justifyContent="center" gap={1}>
          <Image
            src={c}
            borderRadius="50%"
            boxSize="120px"
            objectFit="cover"
            // position="relative"
            // top="-50px"
            // left="25px"
          />
          <Image
            src={net}
            borderRadius="50%"
            boxSize="120px"
            objectFit="cover"
            // position="relative"
            // top="-5px"
          />
          <Image
            src={react}
            borderRadius="50%"
            boxSize="120px"
            objectFit="cover"
            // position="relative"
            // top="-50px"
            // left="-25px"
          />
        </Flex>
      </Hide>
    </>
  );
};

export default Expertise;

import { Flex, Heading, Image } from "@chakra-ui/react";
import me from "../assets/me.jpg";

const Profile = () => {
  return (
    <Flex flexDirection="column" alignItems="center" marginBottom={5}>
      <Heading>Leo Effert</Heading>
      <Heading>.NET Developer</Heading>
      <Image src={me} borderRadius="50%" boxSize="250px" objectFit="cover" />
    </Flex>
  );
};

export default Profile;

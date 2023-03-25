import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import justvalue from "../assets/justvalue.png";

const JustValueCard = () => {
  return (
    <Card width="300px">
      <CardHeader padding="0 0.6em">
        <Flex flexDirection="column" alignItems="center">
          <Heading fontSize={25}>Full Stack Developer</Heading>
          <Heading fontSize={15}>Just Value · Internship</Heading>
          <Image
            src={justvalue}
            borderRadius="5%"
            objectFit="cover"
            marginTop={1}
            boxSize={220}
          />
        </Flex>
      </CardHeader>
      <CardBody padding={0}>
        <Box fontSize={12}>
          <Text>Jan 2023 - Present</Text>
          <Text>Stockholm · On-site</Text>
        </Box>
        <Divider width="80%" marginLeft="10%" />
        <Box fontSize={20}>
          <Text>React</Text>
          <Text>Docker</Text>
          <Text>GitHub</Text>
          <Text>DigitalOcean</Text>
          <Text>WordPress</Text>
        </Box>
      </CardBody>
    </Card>
  );
};
export default JustValueCard;

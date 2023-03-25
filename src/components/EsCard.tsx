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
import es from "../assets/es.jpg";

const EsCard = () => {
  return (
    <Card width="300px">
      <CardHeader padding="0 0.6em">
        <Flex flexDirection="column" alignItems="center">
          <Heading fontSize={25}>Full Stack Developer</Heading>
          <Heading fontSize={15}>Enablers of Sweden · Internship</Heading>
          <Image
            src={es}
            borderRadius="5%"
            objectFit="cover"
            marginTop={1}
            boxSize={220}
          />
        </Flex>
      </CardHeader>
      <CardBody padding={0}>
        <Box fontSize={12}>
          <Text>Aug 2022 - Nov 2022</Text>
          <Text>Stockholm · Hybrid</Text>
        </Box>
        <Divider width="80%" marginLeft="10%" />
        <Box fontSize={20}>
          <Text>.NET</Text>
          <Text>MSQL Server</Text>
          <Text>GitHub</Text>
          <Text>REST API</Text>
          <Text>React</Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default EsCard;

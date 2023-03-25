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
import iths from "../assets/iths.png";

const IthsCard = () => {
  return (
    <Card width="300px">
      <CardHeader padding="0 0.6em">
        <Flex flexDirection="column" alignItems="center">
          <Heading fontSize={25}>.NET Developer</Heading>
          <Heading fontSize={15}>IT Högskolan · YH Utbildning</Heading>
          <Image
            src={iths}
            borderRadius="5%"
            objectFit="cover"
            marginTop={1}
            boxSize={220}
          />
        </Flex>
      </CardHeader>
      <CardBody padding={0}>
        <Box fontSize={12}>
          <Text>Aug 2021 - Present</Text>
          <Text>Stockholm · Hybrid</Text>
        </Box>
        <Divider width="80%" marginLeft="10%" />
        <Box fontSize={20}>
          <Text>.NET</Text>
          <Text>GitHub</Text>
          <Text>REST API</Text>
          <Text>SQL</Text>
          <Text>SCRUM</Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default IthsCard;

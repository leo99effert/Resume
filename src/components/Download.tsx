import { Link, Icon, Flex, Text, Box } from "@chakra-ui/react";
import { MdCloudDownload } from "react-icons/md";
import resume from "../assets/Leo Effert - CV.pdf";

const DownloadLink = () => {
  return (
    <Flex justifyContent="center">
      <Link
        href={resume}
        download
        textDecoration="none"
        _focus={{ textDecoration: "none" }}
        _hover={{ color: "darkgrey" }}
      >
        <Icon as={MdCloudDownload} mx="2px" fontSize={30} />
        <Text
          display="inline"
          position="relative"
          top="-9px"
          fontSize={11}
          margin="0 5px"
        >
          Click here to download a traditional resume document
        </Text>
        <Icon as={MdCloudDownload} mx="2px" fontSize={30} />
      </Link>
    </Flex>
  );
};
export default DownloadLink;

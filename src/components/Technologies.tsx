import { Flex, Heading, Image } from "@chakra-ui/react"
import css from "../assets/css.png";
import docker from "../assets/docker.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import java from "../assets/java.jpg";
import js from "../assets/js.svg";
import mysql from "../assets/mysql.png";
import php from "../assets/php.jpg";
import python from "../assets/python.png";
import sql from "../assets/sql.svg";
import ts from "../assets/ts.png";
import vercel from "../assets/vercel.png"
import vs from "../assets/vs.png";
import vsc from "../assets/vsc.png";
import wp from "../assets/wp.png"

const Technologies = () => {
  return (
    <>
    <Heading>Additional Technologies</Heading>
      <Flex justifyContent="space-evenly" flexWrap="wrap" gap={3}>
        <Image src={css} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={docker} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={github} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={html} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={java} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={js} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={mysql} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={php} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={python} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={sql} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={ts} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={vercel} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={vs} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={vsc} borderRadius="50%" boxSize="100px" objectFit="cover" />
        <Image src={wp} borderRadius="50%" boxSize="100px" objectFit="cover" />
      </Flex>
    </>
  )
}

export default Technologies

import { Box, HStack, Text, Button, Link } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import characters from "../../public/CHARACTERS--.png";

import image1 from "../../public/1.png";
import image2 from "../../public/2.png";
import image3 from "../../public/3.png";
import image4 from "../../public/4.png";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>LIVE365</title>
        <meta name="description" content="LIVE365 " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDir={"column"}
        h="80vh"
      >
        <Box
          // alignSelf={"flex-start"}
          borderRadius={"5px"}
          bg="#577561"
          w="35%"
          px="2rem"
          pt="2rem"
          pb="10rem"
          mr={"20rem"}
          position={"relative"}
        >
          <Text
            fontFamily={"poppins"}
            color={"white"}
            pb="1.5rem"
            fontWeight={600}
            fontSize={"1.5rem"}
          >
            Welcome LIVE DISTILLATE <br /> Catridge User
          </Text>

          <HStack justifyContent={"space-between"}>
            <Button
              h={"max-content"}
              py=".4rem"
              color={"#1e8f2b"}
              className="shop_now"
              as={Link}
              href="https://lifestyle.live/"
              isExternal
              _hover={{textDecoration:"none"}}
            >
              Shop Now!
            </Button>
            <Button
              _hover={{ transform: "scale(1.1)" }}
              h={"max-content"}
              py=".4rem"
              color={"#1e8f2b"}
            >
              Earn CannaCoins
            </Button>
          </HStack>
        </Box>

        <Box
          position={"absolute"}
          bottom="5%"
          flexDir={{ base: "column", md: "row" }}
          display={"flex"}
          gap={"1.5rem"}
          zIndex={99}
          pr={{ base: "0rem", md: "9rem" }}
          w={"65%"}
        >
          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.01)" }}
            as={Link}
            isExternal
            href="https://lifestyle.live/collections/all"
          >
            <Image src={image1} alt="image 1" />
          </Box>

          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.01)" }}
            as={Link}
            isExternal
            href="https://lifestyle.live/collections/all"
          >
            <Image src={image2} alt="image 1" />
          </Box>

          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.01)" }}
            as={Link}
            isExternal
            href="https://lifestyle.live/collections/all"
          >
            <Image src={image3} alt="image 1" />
          </Box>
          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.01)" }}
            as={Link}
            isExternal
            href="https://lifestyle.live/collections/all"
          >
            <Image src={image4} alt="image 1" />
          </Box>
        </Box>

        <Box
          display={{ base: "none", lg: "block" }}
          position={"absolute"}
          right={"0rem"}
          top={"1rem"}
          maxW={"45%"}
        >
          <Image src={characters} alt="character" />
        </Box>
      </Box>
    </>
  );
}

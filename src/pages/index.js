import { Box, HStack, Text, Button } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import image1 from "../../public/1.png";
import image2 from "../../public/2.png";
import image3 from "../../public/3.png";
import image4 from "../../public/4.png";

export default function Home() {
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
          alignSelf={"flex-start"}
          borderRadius={"5px"}
          bg="#577561"
          w="35%"
          px="2rem"
          pt="2rem"
          pb="10rem"
          ml={"20rem"}
        >
          <Text
            color={"white"}
            pb="1.5rem"
            fontFamily={"poppins"}
            fontWeight={600}
          >
            Welcome LIVE DISTILLATE <br /> Catridge User
          </Text>

          <HStack justifyContent={"space-between"}>
            <Button
              // _hover={{ transform: "scale(1.1)" }}
              h={"max-content"}
              py=".4rem"
              color={"#1e8f2b"}
              className="shop_now"
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

        <HStack zIndex={99} pr="10rem" w={"65%"} mt="-8rem" gap="1.5rem">
          <Box cursor={"pointer"}>
            <Image src={image1} alt="image 1" />
          </Box>

          <Box cursor={"pointer"}>
            <Image src={image2} alt="image 1" />
          </Box>

          <Box cursor={"pointer"}>
            <Image src={image3} alt="image 1" />
          </Box>
          <Box cursor={"pointer"}>
            <Image src={image4} alt="image 1" />
          </Box>
        </HStack>
      </Box>
    </>
  );
}

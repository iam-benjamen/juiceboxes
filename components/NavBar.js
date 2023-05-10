import { Box, Text } from "@chakra-ui/react";
import logo from "../public/logo.webp";
import Image from "next/image";

const NavBar = () => {
  return (
    <Box
      borderTop={"5px solid white"}
      borderRight={"5px solid white"}
      borderLeft={"5px solid white"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      height={"7.2rem"}
      py="5rem"
      w="100vw"
      bg="#1e8f2b"
    >
      <Box>
        <Image src={logo} alt="logo" />
      </Box>
    </Box>
  );
};

export default NavBar;

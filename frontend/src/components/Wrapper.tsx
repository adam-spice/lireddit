import { Box } from "@chakra-ui/react";
import React from "react";

interface registerProps {
  variant?: "small" | "regular";
}

const Wrapper: React.FC<registerProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;

import { Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface MenuItemProps {
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link mr={2} color="white">
        {children}
      </Link>
    </NextLink>
  );
};

export default MenuItem;

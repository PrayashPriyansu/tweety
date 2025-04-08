"use client";

import { motion } from "motion/react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

function UserProfile({ isOpen }: Readonly<{ isOpen: boolean }>) {
  const [isClient, setIsClient] = useState<boolean>(false);

  const { user } = useUser();

  useEffect(function () {
    setIsClient(true);
  }, []);

  if (!isClient) return;

  return (
    <div className="flex items-center gap-4 transition-colors duration-200 rounded-lg  ">
      <UserButton />
      {isOpen && (
        <motion.span
          layout
          className="font-light text-white text-md "
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.125 }}
        >
          {user?.firstName}
        </motion.span>
      )}
    </div>
  );
}
export default UserProfile;

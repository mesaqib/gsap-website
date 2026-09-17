"use client";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import FullScreenNav from "./FullScreenNav";
import { usePathname } from "next/navigation";

const NavigationController = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <>
      <NavigationBar onMenuClick={() => setIsNavOpen(true)} />
      <FullScreenNav
        isNavOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
      />
    </>
  );
};

export default NavigationController;

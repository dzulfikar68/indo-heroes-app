import { useRouter } from "next/router";
// import Navbar from "../Navbar";
import HeaderView from "@/views/Home/Header";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = [
    "/auth/login", 
    "/auth/register", 
    // "/about",
];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  // console.log(router)
  return (
    <main>
      {!disableNavbar.includes(pathname) && <HeaderView/> }
      {/* <Navbar /> */}
      {children}
      {/* <>footer</> */}
    </main>
  );
};

export default AppShell;

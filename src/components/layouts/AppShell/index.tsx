import { useRouter } from "next/router";
import Navbar from "../Navbar";

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
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {/* <>footer</> */}
    </main>
  );
};

export default AppShell;

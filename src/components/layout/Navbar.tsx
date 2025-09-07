import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/assets/Logo";
import { role } from "@/constants/role";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/pricing", label: "Pricing", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/agent", label: "Dashboard", role: role.agent },
  { href: "/user", label: "Dashboard", role: role.user },
];

export default function Navbar() {
  const { data } = useUserInfoQuery(undefined);
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState());
      toast.success("Logout successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="size-8 md:hidden cursor-pointer"
                variant="ghost"
                size="icon"
              >
                {/* Hamburger icon */}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-6">
              <nav className="flex flex-col gap-4">
                {navigationLinks.map((link, index) => (
                  <>
                    {link.role === "PUBLIC" && (
                      <Link
                        key={index}
                        to={link.href}
                        className="text-gray-700 font-medium hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.role === data?.data?.role && (
                      <Link
                        key={index}
                        to={link.href}
                        className="text-gray-700 font-medium hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </>
                ))}
                {data?.data?.email ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="mt-4"
                  >
                    Logout
                  </Button>
                ) : (
                  <Button asChild className="mt-4">
                    <Link to="/login">Login</Link>
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            {/* Desktop nav */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <>
                    {link.role === "PUBLIC" && (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                    {link.role === data?.data?.role && (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                  </>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          {data?.data?.email && (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-sm cursor-pointer"
            >
              Logout
            </Button>
          )}
          {!data?.data?.email && (
            <Button asChild className="text-sm cursor-pointer">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

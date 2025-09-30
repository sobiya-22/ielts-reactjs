import { useState } from "react";
import logo from "./assets/logo.png";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="IELTS Logo" className="h-10 w-auto" />
                    <span className="text-lg sm:text-xl font-bold text-blue-800">IELTS Prep.</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <NavigationMenu>
                        <NavigationMenuList className="flex space-x-6">
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">
                                    Courses
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">
                                    Tests
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:block">
                    <Button className="bg-blue-800 hover:bg-green-600 text-white px-6">
                        Get Started
                    </Button>
                </div>
                {/* for mobile view  */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
                    </button>
                </div>
            </div>

            {/* Mobile veiw  */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col space-y-3">
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">
                                    Courses
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">
                                    Tests
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button className="w-full bg-blue-800 hover:bg-green-600 text-white mt-3">
                        Get Started
                    </Button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

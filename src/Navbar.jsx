import logo from './assets/logo.png';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';


function Navbar() {
    return (
        <nav className='bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 max-w-7xl mx-auto px-2'>
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="IELTS Logo" className="h-12 w-auto" />
                    <span className="text-xl font-bold text-blue-800">IELTS Prep</span>
                </div>

                <div className="flex items-center space-x-8">
                    <NavigationMenu>
                        <NavigationMenuList className="flex space-x-6">
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">Home</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">Courses</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">Tests</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-blue-900 hover:underline">Contact</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <Button className="bg-blue-800 hover:bg-green-600 text-white px-6">
                    Get Started
                </Button>
            </div>

        </nav>
    )
}

export default Navbar
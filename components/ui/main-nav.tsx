"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function MainNav() {
    const linkClassName = cn(
        navigationMenuTriggerStyle(),
        "h-12 w-full rounded-none bg-transparent px-2 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ring lg:h-11 lg:rounded-md lg:px-3"
    )

    return (
        <NavigationMenu aria-label="Main" className="w-full max-w-none flex-none lg:w-auto">
            <NavigationMenuList className="grid w-full grid-cols-4 gap-0 lg:flex lg:w-auto lg:gap-1">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#projects">Projects</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#skills">Skills</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#referrals">Referrals</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

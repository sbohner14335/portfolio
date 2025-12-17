"use client"

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function MainNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem key="about">
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem key="skills">
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#skills">Skills</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem key="referrals">
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#referrals">Referrals</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

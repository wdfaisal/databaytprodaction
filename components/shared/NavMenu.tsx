"use client"

import * as React from "react"
import Link from "next/link"


import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Get start ",
    href: "/store",
    description:
      "you can start now for free take the road end enplemant in your company",
  },
  {
    title: "Doc",
    href: "/print",
    description:
      "you can start now for free take the road end enplemant in your company",
  },
  {
    title: "خدمات التصوير",
    href: "/docs",
    description:
    "you can start now for free take the road end enplemant in your company",
  },
  {
    title: "خدمات التسويق",
    href: "/docs/primitives/scroll-area",
    description: "you can start now for free take the road end enplemant in your company",
  },
  {
    title: "خدمات التصميم",
    href: "/docs/primitives/tabs",
    description:
    "you can start now for free take the road end enplemant in your company",
  },
  {
    title: "الاعلان مع المشاهير",
    href: "/docs/primitives/tooltip",
    description:
    "you can start now for free take the road end enplemant in your company",
  },
]

export function NavMenu() {
  return (
    <NavigationMenu className=" gap-0" >
      <NavigationMenuList >
      <NavigationMenuItem className=" bg-transparent text-sm">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink  className={navigationMenuTriggerStyle()}>
            Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-transparent text-sm text-gray-500" >Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted backimg p-6 no-underline outline-none focus:shadow-md"
                    href="/Docs"
                  >
                    {/*<Icons.logo className="h-6 w-6" />*/}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Docs
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     Read the system documentation 
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Get start">
              you can start now for free take the road end enplemant in your company
              </ListItem>
              <ListItem href="/docs/installation" title="صمم اعلانك ">
              you can start now for free take the road end enplemant in your company
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="تصوير منتجاتك">
              you can start now for free take the road end enplemant in your company
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-transparent text-sm text-gray-500">Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" text-sm text-gray-500" >
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Suport
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default NavMenu;
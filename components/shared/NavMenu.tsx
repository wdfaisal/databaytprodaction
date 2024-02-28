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
    title: "متجر الخدمات",
    href: "/store",
    description:
      "متجر يحتوي على اكثر من 100 خدمه مختلفه تلبي جميع متطلباتك في مكان واحد ",
  },
  {
    title: "خدمات الطباعه",
    href: "/print",
    description:
      "ألان يمكنك طباعة كل احتياجات مشروعك عبر سوق ميديا طباعة كروت منشورات كروت تسويق",
  },
  {
    title: "خدمات التصوير",
    href: "/docs",
    description:
    "ألان يمكنك طباعة كل احتياجات مشروعك عبر سوق ميديا طباعة كروت منشورات كروت تسويق",
  },
  {
    title: "خدمات التسويق",
    href: "/docs/primitives/scroll-area",
    description: "ألان يمكنك طباعة كل احتياجات مشروعك عبر سوق ميديا طباعة كروت منشورات كروت تسويق",
  },
  {
    title: "خدمات التصميم",
    href: "/docs/primitives/tabs",
    description:
    "ألان يمكنك طباعة كل احتياجات مشروعك عبر سوق ميديا طباعة كروت منشورات كروت تسويق",
  },
  {
    title: "الاعلان مع المشاهير",
    href: "/docs/primitives/tooltip",
    description:
    "ألان يمكنك طباعة كل احتياجات مشروعك عبر سوق ميديا طباعة كروت منشورات كروت تسويق",
  },
]

export function NavMenu() {
  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList>
      <NavigationMenuItem className=" bg-transparent">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink  className={navigationMenuTriggerStyle()}>
             الرئيسيه
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-transparent" >حملات تسويقيه</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted backimg p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/*<Icons.logo className="h-6 w-6" />*/}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      إدارة حسابات 
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     خدمت ادارة الحساب من الالف الى الياء بباقات مختلفة يمكنك تصميمها .
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="أطلق خملتك التسويقيه">
                باقات مخصصه لتلبي جميع متطلباتك واحتياجاتك 
              </ListItem>
              <ListItem href="/docs/installation" title="صمم اعلانك ">
                تصميم اعلان مخصص للوصول الى جمهورك المستهدف بطريقه ابداعيه
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="تصوير منتجاتك">
                تصوير احترافي يظهر منتجك على اكمل وجه
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-transparent">متجر الخدمات</NavigationMenuTrigger>
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
        <NavigationMenuItem >
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              تواصل معنا
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
          <div className="text-md font-medium leading-none">{title}</div>
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
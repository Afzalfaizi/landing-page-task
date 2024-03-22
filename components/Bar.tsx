"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Description } from "@radix-ui/react-dialog";
import Logo from "./Logo";

const components: { title: string; description: string }[] = [
  {
    title: "Components",
    description: `React UI components that are used by the frontend. They can be imported and used in any project using Radix UI.`,
  },
  {
    title: "Form elements",
    description: "Inputs and buttons for user interaction.",
  },
  {
    title: "Layout",
    description: "The layout of the application.",
  },
  {
    title: "Typography",
    description: "The typography of the application.",
  },
  {
    title: "Colors",
    description: "The colors of the application.",
  },
  {
    title: "Icons",
    description: "The icons of the application.",
  },
];

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList
      className=" hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      faizi tech
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      eCommerce platform for selling digital products.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Introduction">
                Learn about  Faizi tech, our eCommerce platform and how to use it.
              </ListItem>
              <ListItem title="Demo">
                How to bulit a store in 60 Seconds with React, Next.js, and
                Faizi  Tech?
              </ListItem>
              <ListItem title="Community">
                Join our community and stay Update
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className=" font-medium">Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className=" font-medium">Pricing</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      
    </NavigationMenu>
  );
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
  );
});
ListItem.displayName = "ListItem";

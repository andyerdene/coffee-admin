"use client";
import { Home, Package, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
              pathName !== "/dashboard"
                ? "text-muted-foreground"
                : "text-primary bg-muted"
            } text-muted-foreground transition-all hover:text-primary`}
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/orders"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
              pathName !== "/orders"
                ? "text-muted-foreground"
                : "text-primary bg-muted"
            } text-muted-foreground transition-all hover:text-primary`}
          >
            <ShoppingCart className="h-4 w-4" />
            Orders
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              6
            </Badge>
          </Link>
          <Link
            href="/products"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
              pathName !== "/products"
                ? "text-muted-foreground"
                : "text-primary bg-muted"
            } text-muted-foreground transition-all hover:text-primary`}
          >
            <Package className="h-4 w-4" />
            Products
          </Link>
          <Link
            href="/users"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
              pathName !== "/users"
                ? "text-muted-foreground"
                : "text-primary bg-muted"
            } text-muted-foreground transition-all hover:text-primary`}
          >
            <Users className="h-4 w-4" />
            Customers
          </Link>
        </nav>
      </div>
    </div>
  );
};

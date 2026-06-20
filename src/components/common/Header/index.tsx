"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { NAV_DATA } from "@/constant/navData";
import useIsMobile from "@/hooks/use-mobile";
import { ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [headerClass, setHeaderClass] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 1) {
        setIsVisible(true);
        setHeaderClass(false);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setHeaderClass(false);
      } else {
        setIsVisible(true);
        setHeaderClass(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "-mt-5 fixed top-0 left-0 right-0 z-999 transition-all duration-500",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container mx-auto px-8 xl:px-16">
        <div className="relative flex items-center justify-between py-6">
          <div
            className={cn(
              "transition-all duration-300",
              headerClass
                ? "opacity-0 pointer-events-none -translate-y-5 scale-95"
                : "opacity-100 translate-y-0 scale-100",
            )}
          >
            <Link href="/">
              <Image
                src="/image/logo/HSBLCO-LLC-New-(2).png"
                width={220}
                height={50}
                alt="logo"
                className="h-auto max-w-40 md:max-w-44 xl:max-w-52"
              />
            </Link>
          </div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
              <NavigationMenu viewport={false} className="relative z-1000">
                <NavigationMenuList
                  className={cn(
                    "nav-bg relative flex items-center h-9 text-sm font-medium w-max mx-auto overflow-visible",
                    "2xl:gap-6 xl:py-8 py-7 2xl:px-16 xl:px-14 px-10",
                  )}
                >
                  {/* Bottom Border */}
                  <div
                    className="
          absolute
          -bottom-px
          left-10
          right-10
          h-px
          bg-linear-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
                    style={{
                      boxShadow: "0 0 12px rgba(34,211,238,.6)",
                    }}
                  />

                  {NAV_DATA.map((item, index) => (
                    <NavigationMenuItem
                      key={index}
                      className="relative z-1001"
                    >
                      {item.child ? (
                        <>
                          <NavigationMenuTrigger
                            onMouseEnter={() => setActiveTab(0)}
                            className="
                  bg-transparent
                  text-white
                  hover:text-cyan-400
                  xl:px-4
                  xl:py-2
                  px-2
                  py-1
                  cursor-pointer
                  hover:bg-transparent
                  focus:bg-transparent
                  data-active:bg-transparent
                  data-[state=open]:bg-transparent
                "
                          >
                            {item.title}               
                          </NavigationMenuTrigger>

                          <NavigationMenuContent
                            className={cn(
                              "z-9999 top-full mt-5 overflow-hidden rounded-[24px] border bg-[#07101f]/95 shadow-2xl backdrop-blur-xl text-white",
                              item.isMegaMenu
                                ? "fixed left-1/2 -translate-x-1/2 w-225! max-w-[92vw]!"
                                : "left-0 min-w-60",
                            )}
                          >
                            {item.isMegaMenu ? (
                              <div className="flex h-107.5 w-full overflow-hidden rounded-[24px]">
                                <div className="w-62.5 shrink-0 border-r border-white/10 bg-[#08152b]/80 p-5">
                                  <p className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                                    Categories
                                  </p>

                                  <div className="flex flex-col gap-1.5">
                                    {item.child.map((cat, idx) => (
                                      <Button
                                        key={cat.id}
                                        onMouseEnter={() => setActiveTab(idx)}
                                        className={cn(
                                          "h-auto w-full justify-between rounded-2xl px-4 py-3 text-left text-[14px] font-semibold transition-all",
                                          activeTab === idx
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-950/40"
                                            : "bg-transparent text-white/65 hover:bg-white/10 hover:text-white",
                                        )}
                                      >
                                        <span className="truncate">
                                          {cat.categoryTitle}
                                        </span>

                                        <ChevronRight
                                          className={cn(
                                            "h-4 w-4 shrink-0 transition-all",
                                            activeTab === idx
                                              ? "translate-x-0 opacity-100"
                                              : "-translate-x-1 opacity-0",
                                          )}
                                        />
                                      </Button>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex-1 min-w-0 bg-[#07101f] p-7">
                                  <div className="mb-6 flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white">
                                      {item.child[activeTab]?.categoryTitle}
                                    </h3>
           
                                    <Link
                                      href="#"
                                      className="flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                                    >
                                      View All <ChevronRight size={16} />
                                    </Link>
                                  </div>

                                  <div className="grid max-h-78.75 grid-cols-3 gap-3 overflow-y-auto pr-2 custom-scroll">
                                    {item.child[activeTab]?.products?.map(
                                      (product) => (
                                        <Link
                                          key={product.id}
                                          href={product.url}
                                          className="group flex min-h-23 items-center gap-3 rounded-2xl border  bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-500/10"
                                        >
                                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-[#0b1736] ring-1 ring-white/10">
                                            <Image
                                              src={product.image}
                                              alt={product.title}
                                              fill
                                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                          </div>

                                          <div className="min-w-0 flex-1">
                                            <h4 className="text-[13px] font-bold leading-4 text-white">
                                              {product.title}
                                            </h4>

                                            <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-white/55">
                                              {product.description}
                                            </p>
                                          </div>

                                          <ChevronRight className="h-4 w-4 shrink-0 text-white/35 transition-all group-hover:translate-x-1 group-hover:text-cyan-300" />
                                        </Link>
                                      ),
                                    )}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <ul className="min-w-60 rounded-2xl bg-[#081120] p-3 shadow-2xl">
                                {item.child.map((child, idx) => (
                                  <li key={idx}>
                                    <Link
                                      href={child.url ?? ""}
                                      className="mb-1 block rounded-xl border border-white/10 bg-[#0b1736] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-cyan-500"
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link
                          href={item.url ?? "/"}
                          className="xl:px-4 xl:py-2 px-2 py-1 text-white hover:text-cyan-400 transition-colors"
                        >
                          {item.title}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}

          <div
            className={cn(
              "transition-all duration-300",
              headerClass
                ? "opacity-0 pointer-events-none translate-y-5 scale-95"
                : "opacity-100 translate-y-0 scale-100",
            )}
          >
            {!isMobile && (
              <Link
                href="/"
                className="mr-5 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-500 hover:bg-cyan-500"
              >
                Get Started
              </Link>
            )}

            {isMobile && (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="rounded-xl border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl">
                  <Menu size={24} />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="flex w-[85vw] flex-col border-l border-white/10 bg-[#081120] p-0"
                >
                  <div className="flex items-center justify-between border-b border-white/10 p-4">
                    <Image
                      src="/image/logo/main-logo.webp"
                      width={220}
                      height={64}
                      alt="logo"
                    />

                    <VisuallyHidden>
                      <SheetTitle>Mobile Navigation</SheetTitle>
                    </VisuallyHidden>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import addScrollspy from "@/utlis/addScrollSpy";
import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function OnePageNav({ links, animateY = false }) {
  const [openItem, setOpenItem] = useState(-1);
  useEffect(() => {
    if (!links || !links.length) return;
    const isOnePage =
      links[0].href?.startsWith("#") || links[0].href?.startsWith("/#");
    if (isOnePage) {
      setTimeout(() => {
        scrollToElement();
      }, 1000);
      window.addEventListener("scroll", addScrollspy);
    }
    init_classic_menu_resize();

    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      if (isOnePage) {
        window.removeEventListener("scroll", addScrollspy);
      }
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, [links]);
  const pathname = usePathname();

  if (!links || !links.length) {
    return null;
  }
  return (
    <>
      {links[0].href?.includes("/") &&
        links.map((link, index) => (
          <li
            key={index}
            className={
              link.subMenu ? (openItem == index ? "js-opened" : "") : ""
            }
          >
            {link.subMenu ? (
              <>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenItem(openItem == index ? -1 : index);
                  }}
                  className={`mn-has-sub ${
                    pathname.split("/")[1] == link.href.split("/")[1] ||
                    link.subMenu.some(
                      (sub) => pathname.split("/")[1] == sub.href.split("/")[1]
                    )
                      ? "active"
                      : ""
                  }`}
                >
                  {link.text} <i className="mi-chevron-down" />
                </a>
                <ul
                  className={`mn-sub ${
                    openItem == index ? "mobile-sub-active" : ""
                  }`}
                >
                  {link.subMenu.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subLink.href}
                        className={
                          pathname.split("/")[1] == subLink.href.split("/")[1]
                            ? "active"
                            : ""
                        }
                      >
                        {subLink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                className={
                  pathname.split("/")[1] == link.href.split("/")[1]
                    ? "active"
                    : ""
                }
                href={link.href}
              >
                {animateY ? (
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{link.text}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {link.text}
                    </span>
                  </span>
                ) : (
                  link.text
                )}
              </Link>
            )}
          </li>
        ))}
      {!links[0].href?.includes("/") &&
        links.map((link, index) => (
          <li className="scrollspy-link" key={index}>
            <a onClick={() => closeMobileMenu()} className="" href={link.href}>
              {animateY ? (
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">{link.text}</span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    {link.text}
                  </span>
                </span>
              ) : (
                link.text
              )}
            </a>
          </li>
        ))}
    </>
  );
}

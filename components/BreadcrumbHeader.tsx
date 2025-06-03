"use client";

import { usePathname } from "next/navigation";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbHeader = () => {
  const pathname = usePathname();
  const path = pathname === "/" ? [""] : pathname.split("/");
  return (
    <div className="flex-start flex items-center">
      <Breadcrumb>
        <BreadcrumbList>
          {path.map((pathSegment, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={path.slice(0, index + 1).join("/") || "/"}
                  className="capitalize"
                >
                  {pathSegment === "" ? "Home" : pathSegment}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < path.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
export default BreadcrumbHeader;

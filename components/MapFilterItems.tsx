"use client";

import { categoryItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";
import { useCallback } from "react";

export const MapFilterItems = () => {
  const filteredItems = categoryItems.map((item) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const search = searchParams.get("filter");

    console.log("search", search);

    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(
          searchParams.toString()
        );
        params.set(name, value);

        return params.toString();
      },
      [searchParams]
    );

    return (
      <Link
        className={cn(
          "flex flex-col justify-start items-center gap-2 flex-shrink-0",
          search !== item.name
            ? "opacity-70"
            : "border-b-2 border-black pb-2 "
        )}
        key={item.id}
        href={`/?${createQueryString("filter", item.name)}`}
      >
        <div className='relative w-6 h-6'>
          <Image
            src={item.imageUrl}
            alt={item.description}
            width={24}
            height={24}
          />
        </div>
        <p className='text-xs font-medium'>{item.title}</p>
      </Link>
    );
  });
  return (
    <div className='flex gap-x-10 gap-y-5 mt-5 w-full overflow-x-scroll no-scrollbar'>
      {filteredItems}
    </div>
  );
};

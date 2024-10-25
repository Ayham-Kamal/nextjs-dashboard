"use client";
//import { fetchServices } from "@/app/lib/data"; //WITHOUT SUSPENSE
import List from "@/app/dashboard/services/list";
import { Suspense } from "react";
import Link from "next/link";
import { CardSkeleton } from "@/app/ui/skeletons";
import { useSearchParams } from "next/navigation"; // Update URL

export default async function Page() {
  // const Services = await fetchServices(); //WITHOUT SUSPENSE
  // console.log(Services);

  const searchParams = useSearchParams(); // Update URL
  console.log(searchParams); // Update URL
  const row = searchParams.get("row"); // Update URL
  console.log(row); // Update URL
  const rowNum = Number(row) || 1; // To display first if not defined

  //const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      <Suspense fallback={<CardSkeleton />}>
        <List rowNum={rowNum} />
      </Suspense>
      {/* WITHOUT SUSPENSE */}
      {/* <ul>
        {Services.map((Service) => (
          <li key={Service.id}>
            <h2>
              {" "}
              <strong>{Service.id}</strong> {Service.name}{" "}
            </h2>
          </li>
        ))}
      </ul> */}
    </main>
  );
}

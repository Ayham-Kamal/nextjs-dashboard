//import { fetchServices } from "@/app/lib/data"; //WITHOUT SUSPENSE
import List from "@/app/dashboard/allServices/list";
import { Suspense } from "react";
import Link from "next/link";
import { CardSkeleton } from "@/app/ui/skeletons";
import { useSearchParams } from "next/navigation"; // Update URL
import { PlusIcon } from "@heroicons/react/24/outline";

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<CardSkeleton />}>
        <List />
        <Link
          href="/dashboard/allServices/create"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {/* <span className="hidden md:block">Create Invoice</span>{" "} */}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
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

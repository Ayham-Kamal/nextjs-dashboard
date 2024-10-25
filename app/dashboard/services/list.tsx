"use client"; // Update URL
import { fetchServices } from "@/app/lib/data";
import { useSearchParams } from "next/navigation"; // Update URL

export default async function List({ rowNum }: { rowNum: number }) {
  // const searchParams = useSearchParams(); // Update URL
  // console.log(searchParams); // Update URL
  // const row = searchParams.get("row"); // Update URL
  // console.log(row); // Update URL
  // const rowNum = Number(row);
  const Services = await fetchServices(rowNum); // wasn't

  if (!Services || Services.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <ul>
      {Services.map((Service) => (
        <li key={Service.id}>
          <h2>
            {" "}
            <strong>{Service.id}</strong> {Service.name}{" "}
          </h2>
        </li>
      ))}
    </ul>
  );
}

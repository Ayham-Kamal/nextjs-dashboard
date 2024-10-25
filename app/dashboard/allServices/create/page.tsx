import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Button } from "@/app/ui/button";
import { AddService } from "@/app/lib/actions";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "allServices", href: "/dashboard/allSerivces" },
          {
            label: "Add Service",
            href: "/dashboard/allSrevices/create",
            active: true,
          },
        ]}
      />
      <form action={AddService}>
        <div className="mb-4">
          <label htmlFor="id" className="mb-2 block text-sm font-medium">
            Add id
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="id"
                name="id"
                type="number"
                placeholder="Enter id number of Service"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="service" className="mb-2 block text-sm font-medium">
            Add a service
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                placeholder="Enter Name of Service"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <Button type="submit">Add Service</Button>
      </form>
    </main>
  );
}

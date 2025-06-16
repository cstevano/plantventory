import InventoryTable from "@/components/InventoryTable";
import { stackServerApp } from "@/stack";
import { SignUp } from "@stackframe/stack";
import React from "react";

async function Page() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;

  return (
    <>
      {user ? (
        <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-full">
            <InventoryTable />
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-20">
          <SignUp />
        </div>
      )}
    </>
  );
}

export default Page;

import { fetchLatestInvoices, fetchRevenue } from "../lib/data";
import { lusitana } from "../ui/fonts";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { Suspense } from "react";
import {
  CardSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "../ui/skeletons";
import CardWrapper from "../ui/dashboard/cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
};
export default async function DashboardPage() {
  return (
    <main>
      <h1
        className={`${lusitana.className} mb-4 pt-4 md:pt-0 text-xl md:text-2xl text-white`}
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={CardSkeleton()}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-8">
        <Suspense fallback={RevenueChartSkeleton()}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={LatestInvoicesSkeleton()}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

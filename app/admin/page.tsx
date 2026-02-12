import RequestTable from "@/components/admin/RequestTable";

export default function AdminPage() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-8">
        Admin Dashboard
      </h1>

      <RequestTable />
    </main>
  );
}

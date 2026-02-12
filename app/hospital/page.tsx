import HospitalRequestList from "@/components/hospital/HospitalRequestList";

export default function HospitalPage() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-8">
        Hospital Dashboard
      </h1>

      <HospitalRequestList />
    </main>
  );
}

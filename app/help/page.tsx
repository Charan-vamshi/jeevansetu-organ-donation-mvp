export default function HelpPage() {
  return (
    <main className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-8">
        Help & Contact
      </h1>

      {/* Info Section */}
      <div className="glass p-6 mb-8">
        <h2 className="text-xl text-white font-semibold mb-3">
          About JeevanSetu
        </h2>

        <p className="text-gray-400 leading-relaxed">
          JeevanSetu is a conceptual platform designed to demonstrate how
          organ donation systems can be digitized for better coordination
          between donors, hospitals, and patients. This project focuses on
          awareness, request management, and hospital assignment workflows
          in a simplified environment.
        </p>
      </div>

      {/* Contact Section */}
      <div className="glass p-6">
        <h2 className="text-xl text-white font-semibold mb-4">
          Contact Information
        </h2>

        <div className="space-y-3 text-gray-300">
          <p>
            <span className="text-gray-400">Organization:</span>{" "}
            JeevanSetu Organ Donation Network
          </p>

          <p>
            <span className="text-gray-400">Phone:</span>{" "}
            +91 98765 43210
          </p>

          <p>
            <span className="text-gray-400">Email:</span>{" "}
            support@jeevansetu.org
          </p>

          <p>
            <span className="text-gray-400">Location:</span>{" "}
            Bengaluru, Karnataka, India
          </p>

          <p>
            <span className="text-gray-400">Support Hours:</span>{" "}
            Mon – Sat, 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-gray-500 text-sm mt-8">
        This project is created for demonstration and educational purposes only.
        It does not represent a real organ donation system or medical service.
      </p>
    </main>
  );
}
export default function HelpPage() {
  return (
    <main className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-8">
        Help & Contact
      </h1>

      {/* Information */}
      <div className="glass p-6 mb-8">
        <h2 className="text-xl text-white font-semibold mb-3">
          About JeevanSetu
        </h2>

        <p className="text-gray-400 leading-relaxed">
          JeevanSetu is a demo platform created for awareness and academic
          purposes. This system demonstrates how organ donation requests,
          hospital assignments, and approvals work in a simplified environment.
          No real organ transactions or medical data are used.
        </p>
      </div>

      {/* Contact Details */}
      <div className="glass p-6">
        <h2 className="text-xl text-white font-semibold mb-4">
          Contact Information
        </h2>

        <div className="space-y-3 text-gray-300">
          <p>
            <span className="text-gray-400">Organization:</span>{" "}
            Reddy Network
          </p>

          <p>
            <span className="text-gray-400">Phone:</span>{" "}
            +91 6364701263
          </p>

          <p>
            <span className="text-gray-400">Email:</span>{" "}
            reddy@gmail.com
          </p>

          <p>
            <span className="text-gray-400">Location:</span>{" "}
            Yamalokam near Dharidhralokam
          </p>

          <p>
            <span className="text-gray-400">Support Hours:</span>{" "}
            Mon – Sat, 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-8">
        This project is created for demonstration purposes only and does not
        represent a real organ donation system.
      </p>
    </main>
  );
}

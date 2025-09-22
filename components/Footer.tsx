import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F9F6F1] mt-10 border-t">
      {/* Tricolor stripe */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-green-700"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>

      <div className="container mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-gray-700">
        {/* Brand + mission */}
        <div>
          <h2 className="text-2xl font-bold text-green-900">Resinaro</h2>
          <p className="mt-2 text-sm">
            Italian roots, inclusive support for all people in the UK.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col space-y-2">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/volunteer">Volunteer</Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-2">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </div>

      <div className="bg-green-900 text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Resinaro · All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

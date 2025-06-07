import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-2xl mb-2">Filters</h3>
          <ul className="flex gap-4 text-medium">
            <li><a href="#" className="hover:underline">All</a></li>
            <li><a href="#" className="hover:underline">Electronics</a></li>
          </ul>
          <p className="mt-6 text-medium text-white">© 2024 American</p>
        </div>

        <div>
          <h3 className="font-semibold text-2xl mb-2">About Us</h3>
          <ul className="space-y-1 text-medium">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div className="">
          <h3 className="font-semibold text-2xl mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-1">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-10 h-10 text-white border-none bg-blue-500 rounded-full px-2 py-2" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-10 h-10 text-white border-none bg-blue-500 rounded-full px-2 py-2" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-10 h-10 text-white border-none bg-blue-500 rounded-full px-2 py-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

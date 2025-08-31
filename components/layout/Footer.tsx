import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1">
            <li>How Airbnb Clone works</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Airbnb Plus</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">Community</h3>
          <ul className="space-y-1">
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            <li>Guest Referrals</li>
            <li>Gift cards</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2">Hosting</h3>
          <ul className="space-y-1">
            <li>Try hosting</li>
            <li>AirCover for Hosts</li>
            <li>Responsible hosting</li>
            <li>Resource Center</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Cancellation options</li>
            <li>Safety information</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Airbnb Clone — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

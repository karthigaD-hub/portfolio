export function Footer() {
  return (
    <footer className="w-full px-6 py-12 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm font-light">
            © {new Date().getFullYear()} Karthiga D. All rights reserved.
          </div>
          <div className="text-gray-500 text-sm font-light">
            Frontend / UI Developer
          </div>
        </div>
      </div>
    </footer>
  );
}
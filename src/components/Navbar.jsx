import { Menu, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-amber-400 to-yellow-500 grid place-items-center shadow-md">
              <span className="text-white font-black">H</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">Hexa Tech</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#products" className="hover:text-slate-900 transition-colors">Products</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#support" className="hover:text-slate-900 transition-colors">Support</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:border-slate-300 hover:bg-white/60 transition-colors">
              <Search size={16} />
              <span className="hidden md:inline">Search</span>
            </button>
            <button className="relative rounded-full bg-slate-900 text-white p-2 hover:bg-slate-800 transition-colors">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 h-5 w-5 text-[10px] grid place-items-center rounded-full bg-amber-500 text-white font-bold">2</span>
            </button>
            <button className="md:hidden rounded-full p-2 hover:bg-white/70">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

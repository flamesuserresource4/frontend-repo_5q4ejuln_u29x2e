import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xa5cMvp2ipgnnda2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Smart Home, Smarter Living
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Hexa Tech
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-700">
            Elevate your home with beautifully designed, AI-powered devices that work together out of the box. Control lighting, climate, and security with a single tap.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white font-medium shadow hover:bg-slate-800 transition-colors">
              Shop products
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-slate-900 font-medium ring-1 ring-inset ring-slate-200 hover:bg-white transition-colors">
              Explore features
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

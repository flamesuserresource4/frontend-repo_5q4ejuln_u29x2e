const products = [
  {
    name: "Hexa Glow Bulb",
    desc: "Color‑adaptive smart bulb with ultra‑low latency.",
    price: "$29",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Hexa Sense Hub",
    desc: "Matter + Thread gateway with on‑device AI automations.",
    price: "$149",
    image: "https://images.unsplash.com/photo-1709285671881-93a7db95f56b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZXhhJTIwU2Vuc2UlMjBIdWJ8ZW58MHwwfHx8MTc2MzM5Nzg5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "Hexa Guard Cam",
    desc: "End‑to‑end encrypted outdoor security camera.",
    price: "$199",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Featured products</h2>
            <p className="mt-2 text-slate-600">Curated best‑sellers engineered for every room.</p>
          </div>
          <a href="#" className="hidden sm:inline rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-amber-600 font-semibold">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 flex gap-3">
                  <button className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Add to cart</button>
                  <button className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

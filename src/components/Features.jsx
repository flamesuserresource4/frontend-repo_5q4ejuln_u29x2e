import { Shield, Lightbulb, Wifi, Thermometer, Zap } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Private by design",
    desc: "Local-first processing keeps your data safe. Encrypted sync across devices.",
  },
  {
    icon: Lightbulb,
    title: "Adaptive lighting",
    desc: "Circadian-aware light scenes that adjust to your schedule automatically.",
  },
  { icon: Thermometer, title: "Climate control", desc: "Room-level zoning with energy savings up to 30%." },
  { icon: Wifi, title: "Seamless connectivity", desc: "Matter + Thread + Wi‑Fi for rock‑solid reliability." },
  { icon: Zap, title: "Power automation", desc: "Create routines that react to presence, weather, and more." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Designed for comfort and control
          </h2>
          <p className="mt-3 text-slate-600">
            Everything works together — lights, sensors, thermostats, and locks — so your home just feels effortless.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white grid place-items-center shadow-md">
                <it.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

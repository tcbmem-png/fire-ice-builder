import SaunaBuilder from './components/SaunaBuilder';
import PlungeBuilder from './components/PlungeBuilder';
import DIYGuides from './components/DIYGuides';

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 ${className}`}>
    {children}
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full border border-stone-500/60 bg-stone-800/40 px-3 py-1 text-sm tracking-wide text-stone-200">
    {children}
  </span>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-semibold text-stone-100">{value}</div>
    <div className="text-stone-300/80 text-sm mt-1">{label}</div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100">
      <div className="h-1.5 w-full bg-[linear-gradient(135deg,_#3e2f22_0%,_#523f2f_50%,_#2f241b_100%)] shadow-lg" />

      <header className="sticky top-0 z-40 backdrop-blur bg-stone-950/70 border-b border-stone-800/70">
        <Section id="nav" className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-amber-700 via-amber-800 to-stone-800 flex items-center justify-center shadow-inner ring-1 ring-stone-700">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4 L18 14 L6 14 Z" fill="#fb923c" opacity="0.9" />
                <path d="M12 20 L18 10 L6 10 Z" fill="#60a5fa" opacity="0.85" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-lg sm:text-xl font-semibold tracking-wide">Fire & Ice</div>
              <div className="text-[11px] sm:text-xs text-stone-300/80 uppercase tracking-[0.22em]">Saunas + Plunges</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-amber-300 transition">
              Home
            </a>
            <a href="#service-area" className="hover:text-amber-300 transition">
              Service Area
            </a>
            <a href="#philosophy" className="hover:text-amber-300 transition">
              The Science
            </a>
            <a href="#sauna-builder" className="hover:text-amber-300 transition">
              Build Your Sauna
            </a>
            <a href="#plunge-builder" className="hover:text-amber-300 transition">
              Build Your Plunge
            </a>
            <a href="#diy" className="hover:text-amber-300 transition">
              DIY Guides
            </a>
            <a href="#custom" className="hover:text-amber-300 transition">
              Custom Builds
            </a>
            <a href="#maintenance" className="hover:text-amber-300 transition">
              Maintenance
            </a>
            <a href="#commercial" className="hover:text-amber-300 transition">
              Commercial
            </a>
            <a href="#gallery" className="hover:text-amber-300 transition">
              Gallery
            </a>
            <a href="#contact" className="hover:text-amber-300 transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-amber-700/90 hover:bg-amber-600 px-4 py-2 text-sm font-medium shadow ring-1 ring-amber-500/30 transition"
          >
            <span>Start Your Build</span>
          </a>
        </Section>
      </header>

      <div id="home" className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(1200px_600px_at_0%_0%,_rgba(180,83,9,.25),transparent_60%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(1200px_600px_at_100%_100%,_rgba(59,130,246,.12),transparent_60%)]" />
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='%232d241b'/%3E%3Cpath d='M0 59h60v1H0z' fill='%23362b21' opacity='.35'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <Section className="relative py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Pill>LOCAL MID-SOUTH BUILDS · INSTALLED IN WEEKS</Pill>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Custom Saunas & Cold Plunges</h1>
            <p className="mt-4 text-lg text-stone-300 max-w-2xl leading-relaxed">
              <span className="font-semibold">Built to fit your space. Installed in 4 weeks.</span> We design, build, and install premium saunas and cold plunges across the Mid-South. Custom engineering, local service, guaranteed quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#sauna-builder"
                className="rounded-xl bg-amber-700/90 hover:bg-amber-600 px-5 py-3 font-medium shadow ring-1 ring-amber-500/30 transition"
              >
                Build Your Sauna
              </a>
              <a
                href="#plunge-builder"
                className="rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-3 font-medium shadow ring-1 ring-blue-500/30 transition"
              >
                Build Your Plunge
              </a>
              <a
                href="#gallery"
                className="rounded-xl border border-stone-700 hover:border-stone-600 px-5 py-3 font-medium text-stone-200/90 transition"
              >
                See Our Work
              </a>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Typical Install Time" value="4 Weeks" />
            <Stat label="Plunge Install" value="Hours" />
            <Stat label="Sauna Install" value="2 Days" />
            <Stat label="Service Area" value="Mid-South" />
          </div>
        </Section>
      </div>

      <Section id="sauna-builder" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Build Your Custom Sauna</h2>
          <p className="mt-3 text-stone-300/95 max-w-3xl">
            Design your perfect sauna in minutes. Select your size, materials, heating system, and features to get an instant price estimate. Save your configuration and we'll reach out with a detailed quote.
          </p>
        </div>
        <SaunaBuilder />
      </Section>

      <Section id="plunge-builder" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Build Your Custom Cold Plunge</h2>
          <p className="mt-3 text-stone-300/95 max-w-3xl">
            Configure your ideal cold plunge with premium insulation, powerful chiller systems, and professional features. Get instant pricing and save your build for a detailed quote.
          </p>
        </div>
        <PlungeBuilder />
      </Section>

      <Section id="diy" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">DIY Guides</h2>
          <p className="mt-3 text-stone-300/95">
            Want to build your own? We respect that. Here's what you need to know to build a basic sauna or cold plunge yourself. We're mission-focused—more people using contrast therapy is good for everyone.
          </p>
        </div>
        <DIYGuides />
      </Section>

      <Section id="service-area" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Proudly Serving the Mid-South</h2>
          <p className="mt-4 text-lg text-stone-300/95">
            Memphis • Oxford • Jackson • Little Rock • Huntsville
          </p>
          <p className="mt-4 text-stone-300/95 leading-relaxed">
            We're local. That means faster turnarounds, hands-on installation, and same-week service when you need it. No shipping delays, no third-party installers—just us building it right the first time.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6 text-left">
            <div className="rounded-xl border border-stone-700 bg-stone-900/60 p-6">
              <div className="text-3xl font-semibold text-amber-400">4 Weeks</div>
              <div className="mt-2 text-sm text-stone-300/90 leading-relaxed">Typical project timeline from consultation to completion</div>
            </div>
            <div className="rounded-xl border border-stone-700 bg-stone-900/60 p-6">
              <div className="text-3xl font-semibold text-blue-400">Hours</div>
              <div className="mt-2 text-sm text-stone-300/90 leading-relaxed">Cold plunge installation—in and out the same day</div>
            </div>
            <div className="rounded-xl border border-stone-700 bg-stone-900/60 p-6">
              <div className="text-3xl font-semibold text-amber-400">2 Days</div>
              <div className="mt-2 text-sm text-stone-300/90 leading-relaxed">Sauna installation—complete and ready to use</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="philosophy" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">The Science of Heat & Cold</h2>
          <p className="mt-4 text-stone-300/95 leading-relaxed">
            Contrast therapy isn't new—it's been used for centuries. But modern research now proves what athletes and wellness experts have known: deliberate heat and cold exposure dramatically improves performance, recovery, and mental health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl border border-amber-700/30 bg-gradient-to-br from-amber-900/20 to-stone-900/40 p-8">
            <div className="text-2xl font-semibold text-amber-300 mb-4">Heat Exposure (Sauna)</div>
            <div className="space-y-3 text-stone-300/95">
              <div>
                <h4 className="font-semibold text-amber-200 mb-1">Cardiovascular Benefits</h4>
                <p className="text-sm">Increases heart rate similar to moderate exercise, improving cardiovascular function and blood flow. Regular use associated with reduced risk of cardiovascular disease.</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-200 mb-1">Heat Shock Proteins</h4>
                <p className="text-sm">Triggers production of heat shock proteins that protect cells, reduce inflammation, and may extend longevity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-200 mb-1">Growth Hormone Release</h4>
                <p className="text-sm">Intense heat exposure can increase growth hormone levels, supporting muscle growth and recovery.</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-200 mb-1">Mental Health</h4>
                <p className="text-sm">Promotes relaxation, reduces cortisol, and activates the parasympathetic nervous system for stress relief.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-700/30 bg-gradient-to-br from-blue-900/20 to-stone-900/40 p-8">
            <div className="text-2xl font-semibold text-blue-300 mb-4">Cold Exposure (Plunge)</div>
            <div className="space-y-3 text-stone-300/95">
              <div>
                <h4 className="font-semibold text-blue-200 mb-1">Dopamine Surge</h4>
                <p className="text-sm">Cold water immersion increases dopamine by 250% for hours after, improving mood, focus, and motivation without the crash.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200 mb-1">Inflammation & Recovery</h4>
                <p className="text-sm">Reduces inflammation and muscle soreness. Constricts blood vessels, then causes rapid rewarming and nutrient delivery.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200 mb-1">Metabolism & Fat Loss</h4>
                <p className="text-sm">Activates brown fat and increases metabolic rate. Regular cold exposure can shift white fat to metabolically active beige fat.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200 mb-1">Resilience & Mental Toughness</h4>
                <p className="text-sm">Builds stress resilience by teaching the body to remain calm under physiological stress. Improves vagal tone and stress response.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-700 bg-stone-900/60 p-8">
          <h3 className="text-2xl font-semibold mb-4">Science-Backed Protocol (Huberman Lab)</h3>
          <div className="space-y-4 text-stone-300/95">
            <div>
              <h4 className="font-semibold text-stone-200 mb-2">Recommended Weekly Exposure</h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>Sauna:</strong> 57 minutes total per week (split into 2-3 sessions) at 175-200°F</li>
                <li>• <strong>Cold Plunge:</strong> 11 minutes total per week (split into 2-4 sessions) at 39-59°F</li>
                <li>• Both protocols shown to produce significant health benefits</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-200 mb-2">Session Structure</h4>
              <ul className="text-sm space-y-1">
                <li>• Start with 2-3 minute sessions and build tolerance over weeks</li>
                <li>• Focus on steady breathing—controlled breath keeps you calm</li>
                <li>• For contrast therapy: sauna first, then cold plunge last</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-200 mb-2">Why End with Cold?</h4>
              <p className="text-sm">
                Ending with cold triggers a massive release of norepinephrine and dopamine, providing sustained energy, focus, and mood elevation for hours. Heat causes relaxation and sleepiness—save that for evenings or when you want to unwind. Cold provides the energy and mental clarity boost.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-stone-700">
              <h4 className="font-semibold text-stone-200 mb-2">Learn More from Dr. Andrew Huberman</h4>
              <div className="space-y-2">
                <a href="https://www.hubermanlab.com/episode/the-science-and-use-of-cold-exposure-for-health-and-performance" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:text-blue-300 underline">
                  → The Science & Use of Cold Exposure for Health & Performance
                </a>
                <a href="https://www.hubermanlab.com/episode/using-deliberate-cold-exposure-for-health-and-performance" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:text-blue-300 underline">
                  → Using Deliberate Cold Exposure for Health & Performance
                </a>
                <a href="https://www.hubermanlab.com/episode/effects-of-heat-and-cold-on-health" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:text-blue-300 underline">
                  → Effects of Heat & Cold on Health
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="custom" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-semibold">Custom Builds, Made for You</h2>
            <p className="mt-4 text-stone-300/95">
              We build saunas and plunges to fit <em>your</em> space—not the other way around. Closet conversions, garage builds, new construction, or existing rooms. We handle design, fabrication, installation, and guarantee parts and labor.
            </p>
            <ul className="mt-6 space-y-3 text-stone-300/95">
              <li>• Custom-fit for closets, garages, basements, or studios</li>
              <li>• Traditional Finnish, infrared, or hybrid saunas</li>
              <li>• Premium cedar, hemlock, or tile finishes</li>
              <li>• Professional-grade chillers and filtration</li>
              <li>• Smart controls, LED lighting, and audio integration</li>
              <li>• Complete electrical and plumbing coordination</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-xl bg-stone-800 hover:bg-stone-700 px-5 py-3 ring-1 ring-stone-600 transition"
            >
              Request a Quote
            </a>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl ring-1 ring-stone-700 bg-gradient-to-b from-stone-800 to-stone-900 p-1">
              <div className="h-56 rounded-xl bg-[radial-gradient(500px_280px_at_40%_20%,_rgba(245,158,11,.18),transparent_65%)]" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Saunas that Get Hot</h3>
                <p className="mt-2 text-sm text-stone-300/90 leading-relaxed">Engineered for real performance. No lukewarm prefab compromises—just sustained, even heat.</p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 ring-stone-700 bg-gradient-to-b from-stone-800 to-stone-900 p-1">
              <div className="h-56 rounded-xl bg-[radial-gradient(500px_280px_at_60%_80%,_rgba(59,130,246,.18),transparent_65%)]" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Plunges that Stay Cold</h3>
                <p className="mt-2 text-sm text-stone-300/90 leading-relaxed">Dialed‑in chillers, serious insulation, and crystal‑clear filtration for dependable daily use.</p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 ring-stone-700 bg-gradient-to-b from-stone-800 to-stone-900 p-1">
              <div className="h-56 rounded-xl bg-[radial-gradient(450px_260px_at_50%_50%,_rgba(120,113,108,.35),transparent_65%)]" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Materials that Wear Beautifully</h3>
                <p className="mt-2 text-sm text-stone-300/90 leading-relaxed">From aromatic cedar to tiled steam rooms—select a finish that suits your space and budget.</p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 ring-stone-700 bg-gradient-to-b from-stone-800 to-stone-900 p-1">
              <div className="h-56 rounded-xl bg-[radial-gradient(500px_280px_at_50%_50%,_rgba(15,23,42,.35),transparent_65%)]" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Built Fast. Built Right.</h3>
                <p className="mt-2 text-sm text-stone-300/90 leading-relaxed">Local fabrication and install for quicker timelines and tighter quality control.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="maintenance" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Maintenance & Service</h2>
            <p className="mt-4 text-stone-300/95 leading-relaxed">
              Keep performance dialed year‑round. Our optional maintenance plans include cleaning, water testing, and system checks—customized to your usage and budget.
            </p>
            <ul className="mt-6 space-y-3 text-stone-300/95">
              <li>• Scheduled service visits</li>
              <li>• Filter & water chemistry checks</li>
              <li>• Chiller calibration & diagnostics</li>
              <li>• Priority repair support</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-xl bg-amber-700/90 hover:bg-amber-600 px-5 py-3 ring-1 ring-amber-500/30 transition"
            >
              Explore Plans
            </a>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl ring-1 ring-stone-700 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-1">
              <div className="h-full w-full rounded-xl grid grid-cols-3 gap-2 p-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-[radial-gradient(160px_120px_at_50%_50%,_rgba(245,158,11,.12),transparent_65%)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="commercial" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Commercial Solutions</h2>
            <p className="mt-4 text-lg text-stone-300/95 font-medium">
              Transform Your Facility with Contrast Therapy
            </p>
            <p className="mt-3 text-stone-300/95">
              Gyms, yoga studios, HIIT facilities, CrossFit boxes, physical therapy clinics—contrast therapy is the competitive edge. Attract new members, increase retention, and create a new revenue stream by offering premium recovery amenities.
            </p>
            <div className="mt-8 space-y-5">
              <div className="rounded-xl border border-stone-700 p-5 bg-stone-900/60">
                <div className="text-xl font-semibold text-amber-300">New Revenue Opportunities</div>
                <p className="mt-2 text-sm text-stone-300/90">Add premium memberships, pay-per-use sessions, or recovery packages. Many studios generate $2,000-5,000/month in additional revenue from contrast therapy amenities alone.</p>
              </div>
              <div className="rounded-xl border border-stone-700 p-5 bg-stone-900/60">
                <div className="text-xl font-semibold text-blue-300">Member Retention & Attraction</div>
                <p className="mt-2 text-sm text-stone-300/90">Recovery facilities differentiate your space from competitors. Members stay longer when you offer comprehensive wellness—not just workouts.</p>
              </div>
              <div className="rounded-xl border border-stone-700 p-5 bg-stone-900/60">
                <div className="text-xl font-semibold">Built for High-Volume Use</div>
                <p className="mt-2 text-sm text-stone-300/90">Commercial-grade systems designed for daily use by multiple members. Durable materials, powerful chillers, and low-maintenance operation.</p>
              </div>
              <div className="rounded-xl border border-stone-700 p-5 bg-stone-900/60">
                <div className="text-xl font-semibold">Fast Installation, Minimal Downtime</div>
                <p className="mt-2 text-sm text-stone-300/90">We work around your schedule. Plunges installed in hours, saunas in 2 days. Local team means we're responsive when you need support.</p>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-xl bg-amber-700/90 hover:bg-amber-600 px-5 py-3 font-medium ring-1 ring-amber-500/30 transition"
            >
              Schedule a Commercial Consultation
            </a>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl ring-1 ring-stone-700 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 p-1">
              <div className="h-full w-full rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl">🏋️‍♀️🧖‍♂️❄️</div>
                  <img src="https://1265e45972129e57b370e91b3bb32f62675a3e8053f7be7429bd15f889bb888f/0945CA38-3176-4B63-8C23-9021378D550D_1750082229.png" alt="Cold plunge installation" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="gallery" className="py-20 lg:py-28 border-t border-stone-800/70">
        <h2 className="text-3xl md:text-4xl font-semibold">Recent Work & Concepts</h2>
        <p className="mt-3 text-stone-300/95">A quick look at textures, tones, and layouts—replace with your own project shots.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-stone-700 bg-stone-900">
            <img
              src="https://images.pexels.com/photos/3801427/pexels-photo-3801427.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern sauna interior with wooden benches"
              className="aspect-[4/3] object-cover w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption className="p-4 text-sm text-stone-300/90">Custom Cedar Sauna</figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-stone-700 bg-stone-900">
            <img
              src="https://images.pexels.com/photos/6975464/pexels-photo-6975464.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cold plunge tub setup"
              className="aspect-[4/3] object-cover w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption className="p-4 text-sm text-stone-300/90">Outdoor Cold Plunge</figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-stone-700 bg-stone-900">
            <img
              src="https://images.pexels.com/photos/6975418/pexels-photo-6975418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Contrast therapy setup"
              className="aspect-[4/3] object-cover w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption className="p-4 text-sm text-stone-300/90">Sauna & Plunge Combo</figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-stone-700 bg-stone-900">
            <img
              src="https://images.pexels.com/photos/3659690/pexels-photo-3659690.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Spa wellness area"
              className="aspect-[4/3] object-cover w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption className="p-4 text-sm text-stone-300/90">Wellness Studio Install</figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-stone-700 bg-stone-900">
            <img
              src="https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern spa interior"
              className="aspect-[4/3] object-cover w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption className="p-4 text-sm text-stone-300/90">Commercial Project</figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-stone-700 bg-stone-900">
            <img
              src="https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sauna detail shot"
              className="aspect-[4/3] object-cover w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption className="p-4 text-sm text-stone-300/90">Detail & Craftsmanship</figcaption>
          </figure>
        </div>
      </Section>

      <Section id="contact" className="py-20 lg:py-28 border-t border-stone-800/70">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-semibold">Start Your Build</h2>
            <p className="mt-3 text-stone-300/95 max-w-2xl">
              Call or email us to discuss your project. We'll schedule a consultation, review your space, and provide a detailed quote. Serving Memphis, Oxford, Jackson, Little Rock, Huntsville, and surrounding areas.
            </p>
            <div className="mt-4 text-lg font-medium text-amber-400">
              📞 (901) 580-7488
            </div>
            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-xl bg-stone-900/70 ring-1 ring-stone-700 px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-amber-600"
                placeholder="Name"
              />
              <input
                className="rounded-xl bg-stone-900/70 ring-1 ring-stone-700 px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-amber-600"
                placeholder="Email"
              />
              <input
                className="rounded-xl bg-stone-900/70 ring-1 ring-stone-700 px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-amber-600 sm:col-span-2"
                placeholder="City / Neighborhood"
              />
              <textarea
                rows={4}
                className="rounded-xl bg-stone-900/70 ring-1 ring-stone-700 px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-amber-600 sm:col-span-2"
                placeholder="Tell us about your space (closet, garage, studio) and what you want to build."
              />
              <button
                type="button"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-amber-700/90 hover:bg-amber-600 px-5 py-3 font-medium shadow ring-1 ring-amber-500/30 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-stone-700 bg-stone-900/60 p-6">
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="mt-2 text-stone-300/90">Oxford • Memphis • Nashville</p>
              <div className="mt-4 space-y-2 text-stone-300/90">
                <div className="text-lg font-medium">📞 (901) 580-7488</div>
                <div>✉️ tcbmem@gmail.com</div>
              </div>
              <div className="mt-6 text-sm text-stone-400">
                We also provide delivery & installs (box truck) and offer optional maintenance plans for plunges and saunas.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="mt-10 border-t border-stone-800/70">
        <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-stone-400">
          <div>© {new Date().getFullYear()} Fire & Ice Saunas + Plunges. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#philosophy" className="hover:text-stone-200">
              Philosophy
            </a>
            <a href="#custom" className="hover:text-stone-200">
              Custom Builds
            </a>
            <a href="#commercial" className="hover:text-stone-200">
              Commercial
            </a>
            <a href="#contact" className="hover:text-stone-200">
              Contact
            </a>
            <div className="flex items-center gap-4 ml-2 pl-6 border-l border-stone-700">
              <a href="#" className="hover:text-amber-300 transition" title="Instagram (Coming Soon)" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-amber-300 transition" title="Google Business (Coming Soon)" aria-label="Google Business">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>
        </Section>
      </footer>

      <div className="h-1.5 w-full bg-[linear-gradient(135deg,_#2f241b_0%,_#523f2f_50%,_#3e2f22_100%)] shadow-inner" />
    </div>
  );
}

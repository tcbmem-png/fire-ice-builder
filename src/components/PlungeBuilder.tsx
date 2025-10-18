import { useState } from 'react';
import { createClient } from '@supabase/Bolt Database-js';

const Bolt Database = createClient(
  import.meta.env.VITE_Bolt Database_URL,
  import.meta.env.VITE_Bolt Database_ANON_KEY
);

export default function PlungeBuilder() {
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [chillerPower, setChillerPower] = useState<'standard' | 'pro' | 'commercial'>('standard');
  const [insulation, setInsulation] = useState<'standard' | 'premium'>('standard');
  const [features, setFeatures] = useState({
    ozonator: false,
    uvSanitizer: false,
    ledLighting: false,
    coverLifter: false,
    steps: false
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const sizePrices = {
    small: 4500,
    medium: 6000,
    large: 8500
  };

  const chillerPrices = {
    standard: 0,
    pro: 1500,
    commercial: 3000
  };

  const insulationPrices = {
    standard: 0,
    premium: 800
  };

  const featurePrices = {
    ozonator: 400,
    uvSanitizer: 600,
    ledLighting: 300,
    coverLifter: 500,
    steps: 400
  };

  let totalPrice = sizePrices[size];
  totalPrice += chillerPrices[chillerPower];
  totalPrice += insulationPrices[insulation];

  Object.entries(features).forEach(([key, enabled]) => {
    if (enabled) {
      totalPrice += featurePrices[key as keyof typeof featurePrices];
    }
  });

  const handleSave = async () => {
    if (!name || !email || !location) {
      alert('Please fill in your name, email, and location');
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase.from('cold_plunge_configurations').insert({
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        location,
        size,
        chiller_power: chillerPower,
        insulation_level: insulation,
        ozonator: features.ozonator,
        uv_sanitizer: features.uvSanitizer,
        led_lighting: features.ledLighting,
        cover_lifter: features.coverLifter,
        steps: features.steps,
        estimated_price: Math.round(totalPrice)
      });

      if (error) throw error;

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving configuration:', error);
      alert('Failed to save configuration. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const sizeDescriptions = {
    small: '4\' x 3\' x 3\' - Perfect for 1 person',
    medium: '6\' x 4\' x 3.5\' - Fits 1-2 people comfortably',
    large: '8\' x 5\' x 4\' - Spacious for 2-3 people'
  };

  return (
    <div className="rounded-2xl border border-stone-700 bg-stone-900/60 p-6 lg:p-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3">Size</label>
            <div className="space-y-2">
              {(['small', 'medium', 'large'] as const).map((s) => (
                <label key={s} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={size === s}
                    onChange={() => setSize(s)}
                    className="w-4 h-4 mt-0.5 text-blue-600 focus:ring-blue-600"
                  />
                  <div className="flex-1">
                    <div className="text-sm capitalize font-medium">{s} - ${sizePrices[s].toLocaleString()}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{sizeDescriptions[s]}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Chiller Power</label>
            <div className="space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={chillerPower === 'standard'}
                  onChange={() => setChillerPower('standard')}
                  className="w-4 h-4 mt-0.5 text-blue-600 focus:ring-blue-600"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Standard - Included</div>
                  <div className="text-xs text-stone-400 mt-0.5">1/4 HP - Cools to 39°F, maintains temp</div>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={chillerPower === 'pro'}
                  onChange={() => setChillerPower('pro')}
                  className="w-4 h-4 mt-0.5 text-blue-600 focus:ring-blue-600"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Pro - +$1,500</div>
                  <div className="text-xs text-stone-400 mt-0.5">1/2 HP - Faster cooling, better for frequent use</div>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={chillerPower === 'commercial'}
                  onChange={() => setChillerPower('commercial')}
                  className="w-4 h-4 mt-0.5 text-blue-600 focus:ring-blue-600"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Commercial - +$3,000</div>
                  <div className="text-xs text-stone-400 mt-0.5">1 HP - High-volume use, rapid recovery</div>
                </div>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Insulation</label>
            <div className="space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={insulation === 'standard'}
                  onChange={() => setInsulation('standard')}
                  className="w-4 h-4 mt-0.5 text-blue-600 focus:ring-blue-600"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Standard - Included</div>
                  <div className="text-xs text-stone-400 mt-0.5">2" foam insulation</div>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={insulation === 'premium'}
                  onChange={() => setInsulation('premium')}
                  className="w-4 h-4 mt-0.5 text-blue-600 focus:ring-blue-600"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Premium - +$800</div>
                  <div className="text-xs text-stone-400 mt-0.5">4" spray foam - Better temp retention, lower operating costs</div>
                </div>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Features</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.ozonator}
                  onChange={(e) => setFeatures({ ...features, ozonator: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                />
                <span className="text-sm">
                  Ozonator <span className="text-stone-400">(+$400) - Natural water sanitization</span>
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.uvSanitizer}
                  onChange={(e) => setFeatures({ ...features, uvSanitizer: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                />
                <span className="text-sm">
                  UV Sanitizer <span className="text-stone-400">(+$600) - Hospital-grade water purification</span>
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.ledLighting}
                  onChange={(e) => setFeatures({ ...features, ledLighting: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                />
                <span className="text-sm">
                  LED Lighting <span className="text-stone-400">(+$300) - Color-changing ambient lights</span>
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.coverLifter}
                  onChange={(e) => setFeatures({ ...features, coverLifter: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                />
                <span className="text-sm">
                  Cover Lifter <span className="text-stone-400">(+$500) - Easy cover removal</span>
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.steps}
                  onChange={(e) => setFeatures({ ...features, steps: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                />
                <span className="text-sm">
                  Custom Steps <span className="text-stone-400">(+$400) - Matching cedar steps</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl bg-stone-800/60 border border-stone-700 p-6">
            <div className="text-sm text-stone-400 mb-2">Estimated Price</div>
            <div className="text-4xl font-bold text-blue-400">${Math.round(totalPrice).toLocaleString()}</div>
            <div className="mt-4 text-xs text-stone-400 leading-relaxed">
              Price includes tub, chiller, filtration system, and installation. Electrical work quoted separately.
            </div>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="City / Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed px-5 py-3 font-medium shadow ring-1 ring-blue-500/30 transition"
          >
            {saving ? 'Saving...' : saved ? 'Configuration Saved!' : 'Save Configuration & Get Quote'}
          </button>
        </div>
      </div>
    </div>
  );
}

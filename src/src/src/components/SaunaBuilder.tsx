import { useState } from 'react';
import { createClient } from '@supabase/Bolt Database-js';

const Bolt Database = createClient(
  import.meta.env.VITE_Bolt Database_URL,
  import.meta.env.VITE_Bolt Database_ANON_KEY
);

export default function SaunaBuilder() {
  const [dimensions, setDimensions] = useState({ width: 6, depth: 6, height: 7 });
  const [heaterType, setHeaterType] = useState<'electric' | 'wood' | 'infrared'>('electric');
  const [woodType, setWoodType] = useState<'cedar' | 'hemlock' | 'pine'>('cedar');
  const [features, setFeatures] = useState({
    lighting: false,
    soundSystem: false,
    glassPanel: false,
    premiumBenches: false
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const basePrice = 8000;
  const heaterPrices = { electric: 1500, wood: 2000, infrared: 2500 };
  const woodPrices = { cedar: 0, hemlock: -500, pine: -1000 };
  const featurePrices = {
    lighting: 300,
    soundSystem: 500,
    glassPanel: 1200,
    premiumBenches: 800
  };

  const volume = dimensions.width * dimensions.depth * dimensions.height;
  const sizeMultiplier = volume / 252;

  let totalPrice = basePrice * sizeMultiplier;
  totalPrice += heaterPrices[heaterType];
  totalPrice += woodPrices[woodType];

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
      const { error } = await supabase.from('sauna_configurations').insert({
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        location,
        width: dimensions.width,
        depth: dimensions.depth,
        height: dimensions.height,
        heater_type: heaterType,
        wood_type: woodType,
        led_lighting: features.lighting,
        sound_system: features.soundSystem,
        glass_panel: features.glassPanel,
        premium_benches: features.premiumBenches,
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

  return (
    <div className="rounded-2xl border border-stone-700 bg-stone-900/60 p-6 lg:p-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3">Dimensions (feet)</label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-stone-400 block mb-1">Width</label>
                <input
                  type="number"
                  min="4"
                  max="12"
                  value={dimensions.width}
                  onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) })}
                  className="w-full rounded-lg bg-stone-800 border border-stone-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="text-xs text-stone-400 block mb-1">Depth</label>
                <input
                  type="number"
                  min="4"
                  max="12"
                  value={dimensions.depth}
                  onChange={(e) => setDimensions({ ...dimensions, depth: Number(e.target.value) })}
                  className="w-full rounded-lg bg-stone-800 border border-stone-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="text-xs text-stone-400 block mb-1">Height</label>
                <input
                  type="number"
                  min="6"
                  max="9"
                  value={dimensions.height}
                  onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })}
                  className="w-full rounded-lg bg-stone-800 border border-stone-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Heater Type</label>
            <div className="space-y-2">
              {(['electric', 'wood', 'infrared'] as const).map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={heaterType === type}
                    onChange={() => setHeaterType(type)}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-600"
                  />
                  <span className="text-sm capitalize">{type} (+${heaterPrices[type]})</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Wood Type</label>
            <div className="space-y-2">
              {(['cedar', 'hemlock', 'pine'] as const).map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={woodType === type}
                    onChange={() => setWoodType(type)}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-600"
                  />
                  <span className="text-sm capitalize">
                    {type} {woodPrices[type] !== 0 && `(${woodPrices[type] > 0 ? '+' : ''}$${Math.abs(woodPrices[type])})`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Features</label>
            <div className="space-y-2">
              {Object.entries(features).map(([key, enabled]) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => setFeatures({ ...features, [key]: e.target.checked })}
                    className="w-4 h-4 text-amber-600 rounded focus:ring-amber-600"
                  />
                  <span className="text-sm">
                    {key === 'lighting' && 'LED Lighting'}
                    {key === 'soundSystem' && 'Sound System'}
                    {key === 'glassPanel' && 'Glass Panel Door'}
                    {key === 'premiumBenches' && 'Premium Benches'}
                    <span className="text-stone-400 ml-2">
                      (+${featurePrices[key as keyof typeof featurePrices]})
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl bg-stone-800/60 border border-stone-700 p-6">
            <div className="text-sm text-stone-400 mb-2">Estimated Price</div>
            <div className="text-4xl font-bold text-amber-400">${Math.round(totalPrice).toLocaleString()}</div>
            <div className="mt-4 text-xs text-stone-400 leading-relaxed">
              Price includes materials, fabrication, and installation. Final quote may vary based on site conditions and electrical requirements.
            </div>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="text"
              placeholder="City / Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full rounded-xl bg-amber-700/90 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed px-5 py-3 font-medium shadow ring-1 ring-amber-500/30 transition"
          >
            {saving ? 'Saving...' : saved ? 'Configuration Saved!' : 'Save Configuration & Get Quote'}
          </button>
        </div>
      </div>
    </div>
  );
}

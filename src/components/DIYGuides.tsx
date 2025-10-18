export default function DIYGuides() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl border border-amber-700/30 bg-gradient-to-br from-amber-900/20 to-stone-900/40 p-8">
        <h3 className="text-2xl font-semibold text-amber-300 mb-4">DIY Sauna Build</h3>
        <div className="space-y-4 text-stone-300/95">
          <div>
            <h4 className="font-semibold text-amber-200 mb-2">Basic Requirements</h4>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Minimum 4' x 4' x 7' space</li>
              <li>• 240V electrical circuit (30-60 amp depending on heater)</li>
              <li>• Proper ventilation (intake + exhaust)</li>
              <li>• Heat-resistant materials only</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-200 mb-2">Materials Needed</h4>
            <ul className="text-sm space-y-1 ml-4">
              <li>• 2x4 framing lumber</li>
              <li>• Foil-backed insulation (R-13 minimum)</li>
              <li>• Cedar or hemlock tongue-and-groove boards</li>
              <li>• Sauna heater (size based on cubic feet)</li>
              <li>• Heat-resistant door with glass panel</li>
              <li>• Bench lumber (cedar recommended)</li>
              <li>• Ventilation grilles</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-200 mb-2">Critical Steps</h4>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Frame with 2x4s on 16" centers</li>
              <li>• Insulate walls and ceiling thoroughly</li>
              <li>• Install vapor barrier (foil side in)</li>
              <li>• Mount tongue-and-groove horizontally</li>
              <li>• Leave 1-2" air gap behind back wall for heater circulation</li>
              <li>• Install benches at 18" and 36" heights</li>
              <li>• Position heater per manufacturer specs</li>
              <li>• Add intake vent low, exhaust vent high opposite wall</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-200 mb-2">Cost Estimate</h4>
            <p className="text-sm">
              Basic 4' x 6' DIY sauna: $2,000-4,000 in materials. Add $1,500-3,000 for a quality heater. Does not include electrical work.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-amber-700/30">
            <p className="text-xs text-stone-400 leading-relaxed">
              <strong>Note:</strong> Electrical work MUST be done by a licensed electrician. Improper wiring is a fire hazard. Check local building codes—some areas require permits for saunas.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-700/30 bg-gradient-to-br from-blue-900/20 to-stone-900/40 p-8">
        <h3 className="text-2xl font-semibold text-blue-300 mb-4">DIY Cold Plunge Build</h3>
        <div className="space-y-4 text-stone-300/95">
          <div>
            <h4 className="font-semibold text-blue-200 mb-2">Basic Requirements</h4>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Insulated container (stock tank, chest freezer, or custom)</li>
              <li>• Chiller unit rated for water volume</li>
              <li>• Filtration pump and filter</li>
              <li>• 120V or 240V power (depending on chiller)</li>
              <li>• Drain system</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-200 mb-2">Easiest DIY Method: Chest Freezer</h4>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Use 7-10 cu ft chest freezer ($200-400)</li>
              <li>• Line interior with pond liner for waterproofing</li>
              <li>• Set thermostat to 39-50°F</li>
              <li>• Add small pump for circulation (prevents ice buildup)</li>
              <li>• Build simple wood step/platform for entry</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-200 mb-2">Better DIY Method: Stock Tank + Chiller</h4>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Rubbermaid or galvanized stock tank (100-300 gallons)</li>
              <li>• Dedicated water chiller unit ($500-2,000)</li>
              <li>• Small pool pump and filter</li>
              <li>• Insulate exterior with spray foam</li>
              <li>• Build wooden surround for aesthetics</li>
              <li>• Install drain valve at bottom</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-200 mb-2">Water Maintenance</h4>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Change water every 1-2 weeks (no filtration)</li>
              <li>• With filtration: monthly water changes</li>
              <li>• Use bromine or chlorine tablets for sanitation</li>
              <li>• Clean filter weekly</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-200 mb-2">Cost Estimate</h4>
            <p className="text-sm">
              <strong>Chest freezer method:</strong> $300-600 total<br />
              <strong>Stock tank + chiller:</strong> $1,500-3,500 total
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-700/30">
            <p className="text-xs text-stone-400 leading-relaxed">
              <strong>Note:</strong> DIY cold plunges work, but temperature consistency and water quality are harder to maintain than professional systems. Budget chillers may struggle in hot climates.
            </p>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 rounded-2xl border border-stone-700 bg-stone-900/60 p-8">
        <h3 className="text-xl font-semibold mb-4">Why Go Pro Instead?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold text-stone-200 mb-2">Proper Engineering</div>
            <p className="text-stone-400 leading-relaxed">
              We size heaters and chillers correctly, ensure proper ventilation, and design for longevity. DIY builds often overheat, underperform, or fail within a year.
            </p>
          </div>
          <div>
            <div className="font-semibold text-stone-200 mb-2">Warranty & Support</div>
            <p className="text-stone-400 leading-relaxed">
              Our builds include parts and labor warranty. If something breaks, we fix it. DIY troubleshooting can cost more than hiring us from the start.
            </p>
          </div>
          <div>
            <div className="font-semibold text-stone-200 mb-2">Speed & Convenience</div>
            <p className="text-stone-400 leading-relaxed">
              DIY projects take weeks or months. We install plunges in hours and saunas in 2 days. You'll be using contrast therapy while others are still shopping for lumber.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

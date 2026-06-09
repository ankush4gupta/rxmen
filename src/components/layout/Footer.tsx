export default function Footer() {
  return (
    <footer id="contacts" className="bg-navy text-cream/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-bright flex items-center justify-center text-white font-serif font-bold text-xl">
                ₿
              </div>
              <span className="font-serif text-cream text-xl font-semibold">RxMen</span>
            </div>
            <p className="font-sans text-sm leading-relaxed max-w-xs">
              Financing of global chain supply could be challenging. We are your reliable partner from the first step to your big day.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-cream text-sm font-semibold mb-4 uppercase tracking-widest">Product</h4>
            <ul className="space-y-2">
              {["Supply chain finance", "Financial products", "Shipment tracking", "Analytics"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-sans text-sm hover:text-cream transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-cream text-sm font-semibold mb-4 uppercase tracking-widest">Company</h4>
            <ul className="space-y-2">
              {["About us", "Our contacts", "Careers", "Press"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-sans text-sm hover:text-cream transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs">© 2024 RxMen. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="font-sans text-xs hover:text-cream transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

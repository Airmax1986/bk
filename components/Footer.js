export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold mb-8">
            BrandKernel
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-8">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/manifesto" className="hover:text-white transition-colors">Manifesto</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500">
            © 2024 BrandKernel.io
          </div>

        </div>
      </div>
    </footer>
  )
}

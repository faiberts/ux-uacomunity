'use client'

export default function Header() {
  return (
    <header className="bg-white shadow-lg border-b border-neutral-seasalt sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold text-neutral-jet">Academy</span>
          </div>
        </div>
      </div>
    </header>
  )
}

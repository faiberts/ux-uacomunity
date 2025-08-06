import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import EventCard from '../components/event-card'
import { Brain, Users, TrendingUp, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-seasalt to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-jet mb-6 animate-fade-in">
            Bienvenido a{' '}
            <span className="bg-gradient-to-r from-primary-orange to-primary-orange-peel bg-clip-text text-transparent">
              Academy
            </span>
          </h1>
          <p className="text-xl text-neutral-davys-gray max-w-3xl mx-auto mb-12 animate-slide-up">
            Descubre el futuro del aprendizaje con IA, conecta con expertos y mantente a la vanguardia de la tecnología
          </p>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <nav className="bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <div className="flex space-x-8">
                {['Home', 'Events', 'Content', 'Communities'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-neutral-davys-gray hover:text-neutral-jet font-medium transition-colors duration-200 relative group px-4 py-2"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-primary-orange transition-all duration-200 group-hover:w-8"></span>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain size={24} />}
              title="Expert & Community-Led Learning"
              description="Explora aplicaciones de IA del mundo real y las últimas tendencias de la industria con contenido curado por expertos."
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Connections & Collaboration"
              description="Construye relaciones significativas a través de discusiones, aprendizaje compartido y proyectos colaborativos."
            />
            <FeatureCard
              icon={<TrendingUp size={24} />}
              title="Stay Ahead with AI"
              description="Mantente actualizado sobre nuevos productos y soluciones de vanguardia directamente de los expertos de la industria."
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neutral-seasalt/50 to-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="text-primary-orange" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-jet">
                Próximos Events
              </h2>
              <Sparkles className="text-primary-orange-peel" size={32} />
            </div>
            <p className="text-xl text-neutral-davys-gray">
              No te pierdas nuestras sesiones exclusivas de aprendizaje
            </p>
          </div>
          
          <EventCard
            time="7:00 PM – 8:00 PM"
            title="Introduction to Machine Learning"
            description="Únete a nosotros para una introducción completa al aprendizaje automático, desde conceptos básicos hasta aplicaciones prácticas en la industria."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-jet text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold">Academy</span>
          </div>
          <p className="text-gray-400 mb-6">
            Transformando el futuro del aprendizaje con inteligencia artificial
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500">
              © 2024 Academy. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

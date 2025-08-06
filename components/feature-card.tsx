interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up">
      {icon && (
        <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-peel rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold text-neutral-jet mb-4 group-hover:text-primary-orange transition-colors duration-300">
        {title}
      </h3>
      <p className="text-neutral-davys-gray leading-relaxed">
        {description}
      </p>
    </div>
  )
}

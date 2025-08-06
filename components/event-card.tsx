import { Calendar, Clock, Bookmark } from 'lucide-react'

interface EventCardProps {
  time: string
  title: string
  description?: string
}

export default function EventCard({ time, title, description }: EventCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto animate-fade-in">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 text-neutral-davys-gray mb-6">
          <Clock size={18} />
          <span className="font-medium">{time}</span>
        </div>
        
        <h3 className="text-3xl font-bold text-neutral-jet mb-8">
          {title}
        </h3>
        
        {description && (
          <p className="text-neutral-davys-gray mb-8 leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-primary-orange to-primary-orange-peel text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <Calendar size={18} />
            <span>Learn More</span>
          </button>
          <button className="border-2 border-neutral-davys-gray text-neutral-davys-gray px-8 py-3 rounded-xl font-semibold hover:bg-neutral-davys-gray hover:text-white transition-all duration-300 flex items-center space-x-2">
            <Bookmark size={18} />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
              <span className="text-xl font-semibold text-gray-900">Academy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-white rounded-full px-8 py-3 shadow-sm">
              <div className="flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Events</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Content</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Communities</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Expert & Community-Led Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Explore real-world AI applications and the latest industry trends.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Connections & Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Build relationships through discussions, shared learning, and projects.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Stay Ahead with AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Learn about new products and cutting-edge solutions from experts.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Events</h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-4">7:00 PM – 8:00 PM</p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Introduction to</h3>
                  
                  <div className="flex justify-center space-x-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2">
                      Save
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

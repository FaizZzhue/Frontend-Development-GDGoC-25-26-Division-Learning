import "./App.css"
import Navbar from "./components/Navbar"
import AppRouter from "./router/AppRouter"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <AppRouter />
      </div>
    </div>
  )
}
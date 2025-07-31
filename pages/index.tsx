import dynamic from 'next/dynamic'

// Import App dynamically to avoid SSR issues with localStorage/window
const App = dynamic(() => import('../App'), { ssr: false })

export default function Home() {
  return <App />
}
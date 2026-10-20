import { Experience } from '@/sections/Experience'
import { AboutMe } from '../sections/AboutMe'
import { Hero } from '../sections/Hero'
import { ThemeProvider } from '../shared/providers/ThemeProvider'
import { Proyects } from '@/sections/Proyects'
import { ContactMe } from '@/sections/ContactMe'
import { Footer } from '@/sections/Footer'

function App() {
  return (
    <ThemeProvider>
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Proyects />
        <ContactMe />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App

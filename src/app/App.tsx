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
      <div className=" [background-image:var(--bg-image)] bg-cover bg-center bg-no-repeat">
        <Hero />
        <AboutMe />
        <Experience />
        <Proyects />
        <ContactMe />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

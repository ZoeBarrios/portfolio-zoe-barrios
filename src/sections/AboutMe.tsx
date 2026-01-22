import { TechList } from '../shared/components/TechList'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex items-center mb-3">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold tracking-tight">Sobre mí</h2>

            <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
              Soy Técnica Universitaria en Programación, egresada de la UTN, y estudiante de
              Ingeniería en Sistemas. Trabajo como desarrolladora en sistemas de gestión web y
              mobile, participando tanto en frontend como en backend. Me enfoco en construir
              soluciones claras, mantenibles y pensadas para entornos reales de uso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <Card>
                <CardHeader className="gap-2">
                  <CardTitle className="text-base">Sistemas reales</CardTitle>
                  <CardDescription>
                    Desarrollo aplicaciones utilizadas por empresas, priorizando estabilidad,
                    claridad y mantenimiento.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="gap-2">
                  <CardTitle className="text-base">Base sólida</CardTitle>
                  <CardDescription>
                    Mi formación académica refuerza un enfoque estructurado en lógica, análisis y
                    diseño de soluciones.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="flex items-start p-3">
            <TechList />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ListOfCourses } from '@/shared/components/ListOfCourses'

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-4 gap-8 py-20"
    >
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-semibold tracking-tight">Experiencia Profesional</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Roles en los que apliqué desarrollo frontend y backend, tanto en productos reales como
            en formación técnica.
          </p>
        </div>

        {/* Cards de perfil movidas desde AboutMe */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="gap-2">
              <CardTitle className="text-base">Sistemas reales</CardTitle>
              <CardDescription>
                Aplicaciones usadas en producción por empresas reales, priorizando estabilidad y
                mantenimiento.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="gap-2">
              <CardTitle className="text-base">Formación UTN</CardTitle>
              <CardDescription>
                Base estructurada en lógica, análisis y diseño de soluciones de software.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="gap-2">
              <CardTitle className="text-base">Full-stack</CardTitle>
              <CardDescription>
                Frontend y backend: puedo entender y colaborar en todas las capas de una aplicación.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="transition-all hover:shadow-md bg-secondary-own">
            <CardHeader className="space-y-3">
              <CardTitle className="text-lg flex flex-col">
                Desarrolladora Full Stack
                <span className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                  Leandro Dapello | 2024 - actualidad
                </span>
              </CardTitle>
              <CardDescription>
                <ul className="list-disc list-inside space-y-2 text-sm dark:text-white">
                  <li>Sistemas de gestión para empresas</li>
                  <li>Aplicaciones móviles</li>
                  <li>Desarrollo frontend y backend</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="transition-all hover:shadow-md bg-secondary-own">
            <CardHeader className="space-y-3">
              <CardTitle className="text-lg flex flex-col">
                Tutora
                <span className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                  Universidad Tecnológica Nacional | 2022 - actualidad
                </span>
              </CardTitle>
              <CardDescription>
                <ul className="list-disc list-inside space-y-2 text-sm dark:text-white">
                  <li>Cursillo de Ingreso – Programación (UTN)</li>
                  <li>Ofimática</li>
                  <li>React – Argentina Programa</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-2 opacity-70">
        <p className="text-base text-muted-foreground text-center mb-4">
          Formación complementaria y aprendizaje continuo
        </p>
        <ListOfCourses />
      </div>
    </section>
  )
}

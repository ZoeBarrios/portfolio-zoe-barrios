import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import dashboardImg from '/src/assets/work-related-proyects/dashboard.png'
import logoWeplay from '/src/assets/weplay/logo.png'
import { Proyect } from '@/shared/components/Proyect'

export const Proyects = () => {
  return (
    <section id="proyects" className="flex items-center justify-center px-4">
      <div className="w-full max-w-6xl flex flex-col gap-10 mt-18">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-semibold tracking-tight">Proyectos</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Una selección de proyectos personales y profesionales que reflejan mi forma de trabajar
            y las tecnologías que utilizo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Proyect
            id="work"
            img={dashboardImg}
            imgStyles="max-h-90"
            title="Proyectos laborales"
            description="Desarrollo de sistemas de gestión web para empresas, con foco en entornos
                multiempresa, multisucursal y flujos de negocio reales."
            classStyles="md:row-span-2"
          />

          <Proyect
            id="weplay"
            img={logoWeplay}
            title="Weplay"
            description=" Aplicación mobile desarrollada con React Native y NestJS, orientada a juegos de
                cartas sociales en tiempo real."
            imgStyles="h-32 w-full object-cover object-scale-down"
          />

          <Card className="flex items-center justify-center border-dashed">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-base text-muted-foreground">Próximo proyecto</CardTitle>
              <CardDescription>En desarrollo. Disponible próximamente.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

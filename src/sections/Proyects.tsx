import dashboardImg from '/work-related-proyects/dashboard.png'
import logoWeplay from '/weplay/logo.png'
import logoStudyu from '/studyu/logo.png'
import { Proyect } from '@/shared/components/Proyect'
import { SectionHeader } from '@/shared/components/SectionHeader'

export const Proyects = () => {
  return (
    <section id="proyects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="03"
          title="Proyectos"
          description="Una selección de proyectos personales y profesionales que reflejan mi forma de trabajar y las tecnologías que utilizo."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Proyect
            id="work"
            img={dashboardImg}
            title="Proyectos laborales"
            description="Sistemas de gestión web para empresas, con foco en entornos multiempresa, multisucursal y flujos de negocio reales."
            classStyles="md:col-span-2"
            mediaStyles="aspect-[16/9] md:aspect-[21/9]"
            imgStyles="h-full w-full object-cover object-top"
          />

          <Proyect
            id="weplay"
            img={logoWeplay}
            title="Weplay"
            description="Aplicación mobile con React Native y NestJS, orientada a juegos de cartas sociales en tiempo real."
            imgStyles="h-28 w-28 object-contain"
          />

          <Proyect
            id="studyu"
            img={logoStudyu}
            title="Studyu"
            description="Aplicación web con React y NestJS para organizar y planificar tus estudios."
            imgStyles="h-28 w-28 object-contain"
          />
        </div>
      </div>
    </section>
  )
}

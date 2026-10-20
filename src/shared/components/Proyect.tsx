import { ArrowUpRight } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { PROJECTS } from '../utils/proyects'
import { ProjectInfo } from './ProjectInfo'

export const Proyect = ({
  id,
  img,
  title,
  description,
  classStyles = '',
  imgStyles = '',
  mediaStyles = 'aspect-[16/10]',
}: {
  id: string
  img: string
  title: string
  description: string
  classStyles?: string
  imgStyles?: string
  mediaStyles?: string
}) => {
  const projectInfo = PROJECTS.find((p) => p.id === id)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-foreground/5 ${classStyles}`}
        >
          <div
            className={`flex w-full items-center justify-center overflow-hidden border-b border-border bg-muted ${mediaStyles}`}
          >
            <img src={img} alt={title} className={imgStyles} loading="lazy" />
          </div>

          <div className="flex flex-1 flex-col gap-3 p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display font-semibold text-2xl tracking-tight">{title}</h3>
              <ArrowUpRight
                size={20}
                className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        </button>
      </DialogTrigger>

      <ProjectInfo projectInfo={projectInfo} />
    </Dialog>
  )
}

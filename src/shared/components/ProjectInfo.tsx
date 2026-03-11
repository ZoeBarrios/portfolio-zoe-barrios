import { DialogContent, DialogTitle, DialogDescription, Dialog } from '@/components/ui/dialog'
import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { DialogClose } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export const ProjectInfo = ({
  projectInfo,
}: {
  projectInfo?: {
    id: string
    title: string
    longDescription: string
    mainImgPath: string
    imgs: string[]
    tech: string[]
  }
}) => {
  const [openImage, setOpenImage] = useState<string | null>(null)

  return (
    <DialogContent className="max-w-4xl w-full">
      <div className="flex flex-col gap-6">
        <div className="space-y-4">
          <DialogTitle className="text-xl">{projectInfo?.title}</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            {projectInfo?.longDescription}
          </DialogDescription>
          <div className="flex flex-wrap gap-2">
            {projectInfo?.tech.map((t) => (
              <span key={t} className="text-sm px-2 py-1 rounded bg-muted text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {projectInfo?.imgs.map((imgProject) => {
              const src = `${projectInfo.mainImgPath}${imgProject}`
              return (
                <CarouselItem key={imgProject}>
                  <img
                    src={src}
                    alt={imgProject}
                    loading="lazy"
                    onClick={() => setOpenImage(src)}
                    className="rounded-md object-contain w-full max-h-[50vh] mx-auto cursor-zoom-in hover:opacity-90 transition"
                  />
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
        <DialogContent className="max-w-5xl w-full bg-foreground/90 p-4" showCloseButton={false}>
          <DialogClose className="flex justify-end text-white hover:text-white/70 transition">
            <X size={20} />
            <span className="sr-only">Cerrar</span>
          </DialogClose>
          {openImage && (
            <img
              src={openImage}
              className="max-h-[80vh] w-full object-contain mx-auto rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </DialogContent>
  )
}

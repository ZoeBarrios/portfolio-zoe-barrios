import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  Dialog,
  DialogFooter,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
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
    <DialogContent className="max-w-7xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <DialogTitle className="text-xl">{projectInfo?.title}</DialogTitle>
          <DialogDescription className="text-md">{projectInfo?.longDescription}</DialogDescription>

          <div className="flex flex-wrap gap-2">
            {projectInfo?.tech.map((t) => (
              <span key={t} className="text-sm px-2 py-1 rounded bg-muted text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        <Carousel opts={{ loop: true }} className="w-full mr-6">
          <CarouselContent className="p-2">
            {projectInfo?.imgs.map((imgProject) => {
              const src = `${projectInfo.mainImgPath}${imgProject}`

              return (
                <CarouselItem key={imgProject}>
                  <img
                    src={src}
                    onClick={() => setOpenImage(src)}
                    className="rounded-md object-contain max-h-80 mx-auto cursor-zoom-in hover:opacity-90 transition"
                  />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>

        <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
          <DialogContent className="max-w-5xl w-full bg-foreground/90 p-4">
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button">x</Button>
              </DialogClose>
            </DialogFooter>
            {openImage && (
              <img
                src={openImage}
                className="max-h-[80vh] w-full object-contain mx-auto rounded-md"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DialogContent>
  )
}

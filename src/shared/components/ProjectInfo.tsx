import { DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
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
  return (
    <DialogContent className="max-w-7xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <DialogTitle>{projectInfo?.title}</DialogTitle>
          <DialogDescription>{projectInfo?.longDescription}</DialogDescription>

          <div className="flex flex-wrap gap-2">
            {projectInfo?.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        <Carousel opts={{ loop: true }} className="w-full mr-6">
          <CarouselContent className="p-2">
            {projectInfo?.imgs.map((imgProject) => (
              <CarouselItem key={imgProject}>
                <img
                  src={`${projectInfo.mainImgPath}${imgProject}`}
                  className="rounded-md object-contain max-h-80 mx-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </DialogContent>
  )
}

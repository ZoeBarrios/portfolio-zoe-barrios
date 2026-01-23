import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { PROJECTS } from '../utils/proyects'
import { ProjectInfo } from './ProjectInfo'

export const Proyect = ({
  id,
  img,
  title,
  description,
  classStyles,
  imgStyles,
}: {
  id: string
  img: string
  title: string
  description: string
  classStyles?: string
  imgStyles?: string
}) => {
  const projectInfo = PROJECTS.find((p) => p.id === id)

  return (
    <Dialog>
      <Card className={`overflow-hidden transition-all hover:shadow-md ${classStyles}`}>
        <img src={img} alt={title} className={imgStyles} />

        <CardHeader className="space-y-3">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-md">{description}</CardDescription>

          <CardAction>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="mt-3">
                Ver proyecto
              </Button>
            </DialogTrigger>
          </CardAction>
        </CardContent>
      </Card>

      <ProjectInfo projectInfo={projectInfo} />
    </Dialog>
  )
}

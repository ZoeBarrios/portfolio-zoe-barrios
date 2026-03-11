import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
        <img src={img} alt={title} className={imgStyles} loading="lazy" />

        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardContent>

        <CardFooter>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              Ver proyecto
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <ProjectInfo projectInfo={projectInfo} />
    </Dialog>
  )
}

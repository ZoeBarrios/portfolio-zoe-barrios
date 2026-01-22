import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { loadCourseImages } from '../utils/loadCoursesImages'

export function ListOfCourses() {
  const images = loadCourseImages()

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center"
          >
            <img
              src={src}
              alt={`Course ${index + 1}`}
              className="
                h-28
                object-contain
                opacity-60
                grayscale
                transition-all
                duration-100
                hover:opacity-90
                hover:grayscale-0
                hover:border border-secondary-own
                hover:border-2 rounded
              "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

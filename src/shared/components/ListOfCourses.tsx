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
                rounded-md
                border
                shadow-sm
                transition-transform
                duration-200
                hover:scale-105
              "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

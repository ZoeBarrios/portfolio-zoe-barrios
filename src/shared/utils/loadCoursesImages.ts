export const loadCourseImages = () => {
  const images = import.meta.glob('/src/assets/courses/*.{png,jpg,jpeg,webp}', { eager: true })

  return Object.values(images).map((img: any) => img.default)
}

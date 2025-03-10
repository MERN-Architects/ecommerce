import Hero from '@/app/components/home/Hero'
import FeaturedProducts from '@/app/components/home/FeaturedProducts'
import Categories from '@/app/components/home/Categories'
import Newsletter from '@/app/components/home/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </main>
  )
}

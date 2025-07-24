import FeaturedCategories from "@/src/components/landing/featured-categories/featured-categories";
import Hero from "@/src/components/landing/hero/hero";
import HowItWorks from "@/src/components/landing/how-it-works/how-it-works";
import LatestAds from "@/src/components/landing/latest-ads/latest-ads";
import Container from "@/src/components/layout/container/container";


const HomePage = () => {
  return (
    <Container>
      <Hero />
      <FeaturedCategories />
      <LatestAds />
      <HowItWorks />
    </Container>
  )
}

export default HomePage

import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { Link } from 'react-router-dom'
import Parallax from '../../components/parallax/Parallax'
import ImageGrid from '../../components/imagegrid/Imagegrid'
import SingleImage from '../../components/singleImage/SingleImage'
import HelpSection from '../../components/help/Help'
import ProductSpecificationsTable from '../../components/productSpecifications/ProductSpecifications'
import SlidingText from '../../components/bestcase/Bestcase'
import BigText from '../../components/bigcomponent/Bigcomponent'
import SareeCases from '../sareecases/SareeCases'
import products from '../../components/products/products'

function Home() {
  return (
    <Layout>
      
      <HeroSection />

      <ImageGrid />
      <SlidingText />
      {/* <Track /> */}
      <Parallax />
      <ProductCard />
     <BigText />
     <SingleImage />
      <ProductSpecificationsTable />
      <HelpSection />

   
      {/* <Testimonial /> */}
    </Layout>
  )
}

export default Home
import { aboutData } from '@/app/data/aboutData'
import AboutHero from '@/components/AboutHero/AboutHero'
import Advantages from '@/components/advantages/Advantages'
import Customers from '@/components/Customers/Customers'
import Welcome from '@/components/Welcome/Welcome'
import React from 'react'


function about() {
  return (
    <div className="font-open_Sans">
    <AboutHero/>
    <Welcome imgSrc={aboutData[0].img} title={aboutData[0].title} disc={aboutData[0].disc} stats={aboutData[0].stats}/>
    <Advantages/>
    <Customers/>
    </div>
  )
}

export default about

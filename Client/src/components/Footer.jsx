import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer=()=> {
  return (
   <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
  <div className="flex flex-col md:flex-row justify-between items-start gap-10 py-10 border-b border-gray-500/30 text-gray-500">
    
    {/* Left Column: Logo + description */}
    <div className="flex-1 min-w-[250px]">
      <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
      <p className="mt-6 max-w-[410px] text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore blanditiis, voluptate molestias vel ab libero natus iusto dolorem corrupti laboriosam incidunt nam
         fugit ex tempora repellendus asperiores quasi. Voluptatum, consequatur.
      </p>
    </div>

    {/* Right Column: Footer links */}
    <div className="flex flex-wrap flex-1 justify-between gap-10 min-w-[250px]">
      {footer_data.map((section, index) => (
        <div key={index} className="min-w-[150px]">
          <h3 className="text-base font-semibold text-gray-900 mb-2 md:mb-5">
            {section.title}
          </h3>
          <ul className="flex flex-wrap text-sm gap-4">
            {section.links.map((link, i) => (
              <li key={i}>
                <a href="#" className="transition hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  </div>

  {/* Final copyright line */}
  <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
    © QuickBlog 2025 — All Rights Reserved
  </p>
</div>

  )
}

export default Footer
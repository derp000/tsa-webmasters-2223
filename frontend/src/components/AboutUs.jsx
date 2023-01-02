import React from 'react'
import Navbar from './Navbar'
import HorizontalLargeCard from './HorizontalLargeCard'

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <br />
      <div class="p-8">
        <HorizontalLargeCard
          title="Hoc est valde efficax fragmen codice."
          body="Lorem ipsum dolor sit amet."
        />
      </div>
      <div class="grid grid-cols-2 px-8 place-items-center gap-2">
        <div class = "bg-purple-50 p-4 rounded-md text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium enim ante, ac dictum tellus aliquam porttitor. Morbi pellentesque tristique placerat. Ut porta imperdiet tellus eget blandit. Nulla ullamcorper nisl dui. Nulla dignissim leo ut velit pretium volutpat. Mauris ut felis libero. Morbi quis suscipit purus. Aliquam at sagittis velit, at mattis nibh. Nulla vitae tellus accumsan, luctus augue vel, eleifend risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet dapibus nisl. Nullam pretium justo id eros efficitur faucibus. Nam tempor ipsum et risus placerat rhoncus. Donec nibh lorem, egestas eu nibh vel, bibendum aliquam sapien. Duis nec urna augue.
        </div>
        <div class = "bg-purple-50 p-4 rounded-md text-slate-400">
        Ut pharetra auctor ante. Nulla mollis molestie felis ac viverra. Nulla eleifend metus non diam ornare vestibulum. Nunc sodales dolor urna, nec laoreet libero auctor ut. Nulla tincidunt vulputate turpis, ac tincidunt dui blandit in. In id nisl non lorem sollicitudin vulputate et sed enim. Nunc accumsan mollis neque non cursus. Sed malesuada sagittis fermentum. Aliquam a tempor tellus. Donec at augue auctor, rutrum metus nec, consequat est. Ut quam orci, venenatis id lobortis id, dignissim vitae est. Sed dignissim interdum tellus vitae venenatis. Praesent volutpat in eros at varius.
        </div>
      </div>
    </>
  )
}

export default AboutUs
import React from "react";

import HorizontalLargeCard from "./HorizontalLargeCard";
import Smallcard from "./Smallcard";

const AboutUs = () => {
  return (
    <>
      <div className="p-8">
        <HorizontalLargeCard
          title="Welcome to Helios."
          body="Helios’ mission is to make space training more accessible to an international audience thus uniting nations through space and to further scientific research in spaceflight. 
          "
        />
      </div>
      <div className="grid grid-cols-2 px-8 place-items-center gap-2">
        {/* <div className="bg-purple-50 p-4 rounded-md text-slate-400">
          Helios was founded in 2023 by New Jersey high school sophomores Gali Avni, Chris Cao, Shreyas Nair, and Gavin Andrade.
        </div> */}
        <Smallcard body="Helios was founded in 2023 by New Jersey high school sophomores Gali Avni, Chris Cao, Shreyas Nair, and Gavin Andrade" />
        {/* <div className="bg-purple-50 p-4 rounded-md text-slate-400">
        Helios is an international, English-speaking astronaut training program that includes vetting candidates, two-year long formal astronaut training, and a crewed lunar mission in partnership with NASA and ESA. 
        </div> */}
        <Smallcard body="Helios is an international, English-speaking astronaut training program that includes vetting candidates, two-year long formal astronaut training, and a crewed lunar mission in partnership with NASA and ESA." />
      </div>
    </>
  );
};

export default AboutUs;

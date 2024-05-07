import React from "react";
function Vaccination() {
  return (
    <>
      {/*<div className="flex items-center justify-center uppercase gap-[10px] min-[600px]:gap-[15px] text-center px-4 text-[20px] min-[600px]:text-[30px] min-[1400px]:text-[55px] min-[1400px]:leading-[77px] mt-[75px]">*/}
      {/*  <h1>În Curând și</h1>*/}
      {/*  <div className="bg-[#00AAF1] px-[10px] min-[600px]:px-[27px] text-white rounded-[66px]">*/}
      {/*    la KinderMed!*/}
      {/*  </div>*/}
      {/*</div>*/}
        <div className="container !max-w-[1000px] !mt-[42px] !mb-[75px] min-[768px]:!mb-[125px] grid grid-cols-2 gap-[20px]">
            <img src="/Vaccinare1.jpg" className="w-full rounded-[25px]" alt=""/>
            <img src="/Vaccinare2.jpg" className="w-full rounded-[25px]" alt=""/>
            {/* <img src="/Vaccinare3.jpg" className="w-full rounded-[25px]" alt=""/> */}
        </div>

      <div className="overflow-auto min-[1400px]:flex min-[1400px]:items-center min-[1400px]:justify-center !mt-[42px] !mb-[125px]">
        <div className="leading-[77px] relative shrink-0 h-[743px] w-[1350px]">
          <img alt="vaccinare" src="/Vaccination.svg" className=" w-full" />
        </div>
      </div>
    </>
  );
}

export default Vaccination;

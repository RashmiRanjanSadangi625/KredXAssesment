import Image from 'next/image'
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram,FaYoutube,FaLinkedinIn,FaArrowRight  } from 'react-icons/fa';
import { IoIosArrowDropright } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-color">

    {/*--------------- Navbar and Banner Image---------------------- */}
    <div className="min-h-screen min-w-screen bg-img bg-center bg-cover relative">
      <nav>
        <Image
            className="ml-40 mt-3 p-2"
            src="/LOGO CMS 1.png"
            alt="Logo"
            width={180}
            height={45}
            priority
          />
      </nav>
      <div className="text-white mt-40 ml-40 max-w-sm">
        <h1 className="text-4xl leading-normal font-bold">Automate Your Finance Function</h1>
        <h1 className="text-2xl mt-4 font-bold">WITHOUT Reworking Your ERP</h1>
        <div className="mt-10">
          <a href="#" className ="btn-color rounded px-8 py-3 font-bold">Learn More</a> 
        </div>
      </div>
      <Image
            className="w-full xl:w-1/2 xl:absolute bottom-20 p-5 right-20"
            src="/Frame.svg"
            alt="Frame"
            width={350}
            height={400}
            priority
          />    

    </div>

    {/* --------------------Label Section------------------------- */}
    

    <div className="grid grid-row-3 grid-flow-col m-8">
      <Image
          className="p-3 ml-auto"
          src="/Group 3741.png"
          alt="Frame"
          width={66}
          height={109}
          priority
        /> 
        <h3 className="max-w-xl m-auto text-center">Only KredX’s AP Solution lets you automate and streamline your entire PO-to-Pay process without messing up your existing processes.
      That’s becaKredX AP Automation Capabilitiesuse we support all native functionality for 40+ ERPs</h3>
      <Image
          className="p-3 mr-auto"
          src="/Group 3740.png"
          alt="Frame"
          width={66}
          height={109}
          priority
        />
    </div>





    {/*------------------ KredX AP Automation Capabilities----------------- */}

    <div className ="service bg-img2 bg-center">
      <h1 className="text-center font-bold text-4xl  mt-10 ml-auto mr-auto mb-10 max-w-lg heading-color ">KredX AP Automation Capabilities</h1>
        <div className="grid grid-row-4 grid-flow-col">
          <div className="w-40 h-40 text-center m-auto">
            <Image
                  className="m-auto p-5"
                  src="/Group 3716.png"
                  alt="Frame"
                  width={66}
                  height={109}
                  priority
                />
            <h3 className = "font-bold text-color p-1 text-m">Invoice Digitization </h3>
            <div className="max-w-xl">
              <p className="text-xs">Automate all formats of invoices received across any channel into a centralized repository in a single format to reduce error & increase team efficiency</p>
            </div>
          </div>
          <div className="w-40 h-40 text-center m-auto">
            <Image
                  className="m-auto p-5"
                  src="/Group 3682.png"
                  alt="Frame"
                  width={66}
                  height={109}
                  priority
                />
            <h3 className = "font-bold text-color">Invoice Processing</h3>
            <p className="max-w-sm text-xs">Automate invoice capturing, invoice exchange with vendors & approval workflows. Centralized vendor portal for tracking all PO’s</p></div>
          <div className="w-40 h-40 text-center m-auto">
            <Image
                  className="m-auto p-5"
                  src="/Group 3683.png"
                  alt="Frame"
                  width={66}
                  height={109}
                  priority
                />
            <h3 className = "font-bold text-color">Centralized access and collaboration</h3>
            <p className="max-w-sm text-xs">
            Collaboration, interaction and documentation is centered at each invoice level making approval workflows efficient, seamless and audit ready
            </p>
          </div>
          <div className="w-40 h-40 text-center m-auto">
            <Image
                  className="m-auto p-5"
                  src="/Group 3681.png"
                  alt="Frame"
                  width={66}
                  height={109}
                  priority
                />
            <h3 className = "font-bold text-color">Advanced & Quick customizable workflows</h3>
            <p className="max-w-sm text-xs">Advanced AI that adapts to AP processes unique to your organization within the shortest amount of time</p>
          </div>
        </div>
        <div className="grid grid-row-4 grid-flow-col mt-10">
          <div className="w-40 h-40 text-center  m-auto">
            <Image
                  className="m-auto p-5"
                  src="/Group.png"
                  alt="Frame"
                  width={66}
                  height={109}
                  priority
                />
            <h3 className = "font-bold text-color">Invoice Matching</h3>
            <p className="max-w-sm text-xs">Effortless 2 and 3 way matching with easy to understand ‘reason’ coding for users increasing efficiency & protect against fraud and duplication</p>
          </div>
          <div className="w-40 h-40 text-center m-auto">
            <Image
                  className="m-auto p-5"
                  src="/Group 3684.png"
                  alt="Frame"
                  width={66}
                  height={109}
                  priority
                />
            <h3 className = "font-bold text-color">Integrated Vendor Management</h3>
            <p className="max-w-sm text-xs">Manage vendor onboarding, documentation and payment from one place</p>
          </div>
          <div className="w-40 h-40 text-center m-auto">
            <Image
                  className="m-auto p-5"
                  src="/Vector.png"
                  alt="Frame"
                  width={66}
                  height={109}
                  priority
                />
            <h3 className = "font-bold text-color">Strengthen treasury & your supply chain</h3>
            <p className="max-w-sm text-xs">Increase treasury income through early payments via dynamic discounting. Earn more from each spend via KredX’s AP card program</p>
          </div>
          <div className="w-40 h-40 text-center m-auto">
            <Image
                  className="m-auto p-5"
                  src="/Group 3686.png"
                  alt="Frame"
                  width={66}
                  height={109}
                  priority
                />
            <h3 className = "font-bold text-color">Audit ready</h3>
            <p className="max-w-sm text-xs">One-click access to all conversations and notes at each invoice level. Data available on cloud archived after 7 years for full audit trail wherever required.</p>
          </div>
        </div>

        <div className="flex mt-20">
          <button className="btn-color p-1 text-center mb-10 ml-auto mr-auto text-white font-bold px-8 py-3 rounded">Request Demo</button>
        </div>
    </div>


      {/* --------------------The KredX CMS Advantage------------------ */}
      <div className="advantage w-full mb-20 mt-10">
        <h1 className="text-center font-bold text-4xl m-auto max-w-lg heading-color ">The KredX CMS Advantage</h1>
        <div class="">
          <div class="grid grid-row-2 grid-flow-col group relative">
            <div class="left-divs max-w-xl ml-20">
              <div className ="acc-divs grid grid-row-2 grid-flow-col w-100 p-4 mt-10 ml-5 mr-0 mb-2 rounded-l-lg">
                <p>Increase bottom line by reducing costs and increasing efficiency</p>
                <div className="m-2">
                 <p className="text-grey-500"><FaArrowRight size={20}/></p>
                </div>
              </div>
            </div>
            <div className ="right-divs max-w-xl mt-10 mb-auto absolute ab-right">
              <div className=" max-w-xl bg-color3 p-8 rounded w-90  b-height">
                <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>Automations to increase the efficiency in both AP and AR sides.</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>On time follow-ups with customers enables quicker realization of revenues</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>Tools divke dynamic discounting to increase bottom line</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 "><div><IoIosArrowDropright size={25} /></div>Tools divke dynamic discounting to increase bottom line</div>
                </div>
              </div>
          </div>
          <div className ="right-divs max-w-xl mt-10 mb-auto hidden group-hover:block absolute ab-right">
              <div className=" max-w-xl bg-color3 p-8 rounded w-90  b-height">
                <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>Automations to increase the efficiency in both AP and AR sides.</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>On time follow-ups with customers enables quicker realization of revenues</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>Tools divke dynamic discounting to increase bottom line</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 "><div><IoIosArrowDropright size={25} /></div>Tools divke dynamic discounting to increase bottom line</div>
                </div>
              </div>
          </div>
          <div class="grid grid-row-2 grid-flow-col group relative">
            <div class="left-divs max-w-xl  ml-20">
              <div className ="acc-divs grid grid-row-2 grid-flow-col w-100 p-4 mt-10 ml-5 mr-0 mb-2 rounded-l-lg">
                <p>Increase bottom line by reducing costs and increasing efficiency</p>
                <div className="m-2">
                 <p className="text-grey-500"><FaArrowRight size={20}/></p>
                </div>
              </div>
            </div>
            <div className ="right-divs max-w-xl mr-auto mt-10 mb-auto hidden group-hover:block absolute ab-right ab-top-minus">
              <div className=" max-w-xl bg-color3 p-8 rounded w-90 b-height">
                <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>Quisque fermentum luctus nunc ultricies lobortis. Integer eu pretium mi.</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>On time follow-ups with customers enables quicker realization of revenues</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>On time follow-ups with customers enables quicker realization of revenues</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 "><div><IoIosArrowDropright size={25} /></div>Reduced human effort can be utilized to focus on increasing revenues</div>
                </div>
              </div>
          </div>
          <div class="grid grid-row-2 grid-flow-col group relative">
            <div class="left-divs max-w-xl  ml-20">
              <div className ="acc-divs grid grid-row-2 grid-flow-col w-100 p-4 mt-10 ml-5 mr-0 mb-2 rounded-l-lg">
                <p>Increase bottom line by reducing costs and increasing efficiency</p>
                <div className="m-2">
                 <p className="text-grey-500"><FaArrowRight size={20}/></p>
                </div>
              </div>
            </div>
            <div className ="right-divs max-w-xl mr-auto mt-10 mb-auto hidden group-hover:block absolute ab-right ab-top-minus2">
              <div className=" max-w-xl bg-color3 p-8 rounded w-90 b-height">
                <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis.</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>Quisque fermentum luctus nunc ultricies lobortis. Integer eu pretium mi.</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 leading-9"><div><IoIosArrowDropright size={25} /></div>Tools divke dynamic discounting to increase bottom line</div>
                  <div className="text-white font-semibold max-w-lg grid grid-row-2 grid-flow-col gap-3 m-3 "><div><IoIosArrowDropright size={25} /></div>Reduced human effort can be utilized to focus on increasing revenues</div>
                </div>
              </div>
            </div>
      </div>                  
                                
      {/*--------------- Footer ----------------------*/}
      <div className="footer grid grid-row-2 grid-flow-col place-content-between">
        <div className="footer-logo">
          <Image
              className="p-5"
              src="/Group 3540.png"
              alt="Frame"
              width={120}
              height={137}
              priority
            />
        </div>
        <div className ="social-icons grid grid-row-5 grid-flow-col gap-2 mt-5 mr-20 mb-5 ml-5">
          <FaInstagram size={20} color="lightgrey" />
          <FaLinkedinIn size={20} color="lightgrey" />
          <FaFacebook size={20} color="lightgrey" />
          <FaTwitter size={20} color="lightgrey" />
          <FaYoutube size={20} color="lightgrey" />
        </div>
        
      </div>

    </main>
  )
}

export const SITE_NAME = 'Emirates Aluminium Shutter LLC';
export const SITE_URL = 'https://emiratesaluminiumshutter.com';
export const PHONE = '+971552052347';
export const PHONE_DISPLAY = '+971 55 205 2347';
export const WHATSAPP = 'https://wa.me/971552052347';
export const EMAIL = 'emiratesaluminiumshutter@gmail.com';
export const ADDRESS = '43 Al Nakhal Rd, Naif, Deira, Dubai, United Arab Emirates';
export const MAP_URL = 'https://maps.app.goo.gl/oaDi8fWAdLaz3X1f9?g_st=awb';
export const COORDINATES = '25.271996, 55.304935';

const img = (name:string) => `/wp-content/uploads/2026/10/${name}`;

export const services = [
  {slug:'shutter', title:'Rolling Shutters', eyebrow:'SECURITY & ACCESS', short:'Manual and motorized rolling shutters for shops, warehouses, showrooms, villas and commercial entrances.', image:img('13503-1-1.jpg'), accent:'01', tags:['Fabrication','Automation','Security']},
  {slug:'canopy', title:'Canopy Solutions', eyebrow:'SHADE & WEATHER', short:'Custom canopies for entrances, parking, walkways, terraces and commercial outdoor spaces.', image:img('2277-1.jpg'), accent:'02', tags:['Parking','Entrance','Custom Design']},
  {slug:'garage', title:'Garage Doors', eyebrow:'AUTOMATIC GARAGE', short:'Supply, installation, automation and repair for villa, residential and commercial garage doors.', image:img('2149207752-1-1.jpg'), accent:'03', tags:['Supply','Installation','Automation']},
  {slug:'awning', title:'Awning Solutions', eyebrow:'OUTDOOR COMFORT', short:'Fixed, retractable and motorized awnings for villas, balconies, terraces, cafés and shops.', image:img('Patio-Folding-Wind-Vertical-Retractable-Awning-1.avif'), accent:'04', tags:['Retractable','Motorized','Sunshade Parda']},
  {slug:'motor', title:'Gate Motors', eyebrow:'ACCESS AUTOMATION', short:'Sliding and swing gate motors, remotes, photocells, control boards and safety accessories.', image:img('1921-1-1-1.jpg'), accent:'05', tags:['Motors','Remotes','Sensors']},
  {slug:'repair', title:'Repair & Maintenance', eyebrow:'FAST SUPPORT', short:'Fault diagnosis, emergency repair and preventive maintenance for doors, shutters, gates and motors.', image:img('13602-1.jpg'), accent:'06', tags:['Emergency','Diagnosis','Maintenance']},
  {slug:'aluminium-works', title:'Aluminium Works', eyebrow:'CUSTOM FABRICATION', short:'Custom aluminium doors, windows, partitions, cladding and project-specific fabrication.', image:img('WhatsApp-Image-2026-07-28-at-1.07.11-AM-2.jpeg'), accent:'07', tags:['Doors','Windows','Partitions']},
  {slug:'steel-work', title:'Steel Works', eyebrow:'STRUCTURAL FABRICATION', short:'Steel gates, pergolas, canopy frames, parking structures and customised metal fabrication.', image:img('photo-1504917595217-d4dc5ebe6122.avif'), accent:'08', tags:['Steel Gates','Pergolas','Welding']},
  {slug:'polycarbonate', title:'Polycarbonate Shutters', eyebrow:'TRANSPARENT SHUTTER SYSTEMS', short:'Clear polycarbonate roller shutters for shopfronts, showrooms and retail spaces that need visibility with an enclosed frontage.', image:img('polycarbonate-roller-shutters-premium.webp'), accent:'09', tags:['Clear Slats','Shopfronts','Visibility']},
] as const;

export const serviceDetails: Record<string, {
  eyebrow:string; title:string; intro:string; image:string; bullets:string[];
  sections:{kicker?:string;title:string;text:string;items?:string[]}[];
  gallery:string[]; faqs:{q:string;a:string}[];
}> = {
  shutter:{
    eyebrow:'AUTOMATIC ROLLING SHUTTER SYSTEMS',
    title:'Rolling Shutters for Shops, Warehouses & Villas',
    intro:'Supply, installation, automation and repair of secure rolling shutters across Dubai and the UAE. Choose your preferred shutter type, send the opening details and receive a clear quotation after site review.',
    image:img('13503-1-1.jpg'),
    bullets:['Security-focused systems','Manual & motorised options','Service across the UAE','Fabrication & installation','Remote and push-button controls','Repair and motor replacement'],
    sections:[
      {kicker:'COMPARE BEFORE YOU CHOOSE',title:'Four Shutter Types. One Clear Choice for Your Property.',text:'Compare practical, insulated, transparent and window-shutter systems. Select an option to review suitable applications, features and recommended use.',items:['Single-Skin Shutter — practical everyday security','Double-Insulated Shutter — heat and noise control','Vision Polycarbonate — security with visibility','Window Roller Shutter — privacy, shade and protection']},
      {kicker:'PRACTICAL CONFIGURATION',title:'Configure Your Shutter',text:'Choose the shutter type, approximate opening size, preferred operation and optional features. Review the selection and send the project details for a confirmed quotation after site measurements.',items:['Opening width and height','Manual or automatic operation','Motor and control preference','Material / finish selection']},
      {kicker:'CLEAR SCOPE',title:'Straight Answers on Your Rolling Shutter Quote',text:'Your quotation is prepared from the opening size, selected shutter system, motor, controls and installation conditions. Every confirmed item is listed before work begins.',items:['Opening size sets the scope','Motor and controls match the door','Schedule depends on the project','Everything is confirmed first','An engineer review may be needed']},
      {kicker:'FROM PHOTOS TO HANDOVER',title:'From Opening Photos to an Installed Rolling Shutter',text:'A simple four-step process covering the initial request, quotation, shutter preparation and professional installation.',items:['Send photos and opening details','Receive a clear written quote','Fabrication and project preparation','Install, test and handover']},
      {kicker:'AFTER INSTALLATION',title:'Support That Continues After Installation Day',text:'Warranty coverage and after-sales support depend on the selected shutter, motor and approved package. Applicable terms are confirmed in writing before installation.',items:['Written door and motor warranty','Finish and colour options','Local after-sales support','Maintenance and extended support']},
    ],
    gallery:[img('13503-1-1.jpg'),img('13602-1.jpg'),img('2149207752-1-1.jpg')],
    faqs:[
      {q:'How is a rolling shutter quotation prepared?',a:'Pricing is based on opening size, shutter system, motor, controls, installation conditions and the approved scope.'},
      {q:'Which rolling shutter type is right for my opening?',a:'The right type depends on security, insulation, visibility, opening size and how frequently the shutter will operate.'},
      {q:'Do you supply aluminium and galvanised steel shutters?',a:'Yes. Suitable material options are discussed according to the project and approved specification.'},
      {q:'Can you provide manual and automatic operation?',a:'Yes. Manual and motorised options are available depending on the system and opening.'},
      {q:'Can you repair an existing rolling shutter?',a:'Yes. The curtain, guides, barrel, bearings, motor and controls can be reviewed before repair.'},
      {q:'Can a manual shutter be converted to automatic?',a:'Some existing shutters can be upgraded, subject to frame, size, mechanism and condition.'},
      {q:'What safety and control options are available?',a:'Options may include remotes, switches, receivers and suitable safety accessories.'},
    ]
  },
  polycarbonate:{
    eyebrow:'TRANSPARENT POLYCARBONATE SHUTTERS',
    title:'Polycarbonate Roller Shutters for Retail & Commercial Frontages',
    intro:'Clear polycarbonate roller shutters help keep shopfronts and display windows visible while enclosing the opening after hours. We review the opening size, supporting profiles, operating method and site conditions before recommending a suitable configuration.',
    image:img('polycarbonate-roller-shutters-premium.webp'),
    bullets:['Transparent slats for display visibility','Suitable for selected shops and showrooms','Profile and guide options reviewed by opening size','Manual or motorised operation subject to specification','Custom measurement and installation planning','Cleaning and maintenance guidance'],
    sections:[
      {kicker:'VISIBILITY FIRST',title:'Keep Displays Visible When the Shop Is Closed',text:'Polycarbonate sections allow light and sightlines through the shutter curtain, making this system useful for selected retail fronts, showrooms and commercial displays.',items:['Retail shopfronts','Showrooms and display areas','Shopping-centre units','Other openings where visibility matters']},
      {kicker:'SYSTEM SPECIFICATION',title:'Choose the Right Configuration for the Opening',text:'The shutter width and height, guide arrangement, supporting profiles, operating frequency and surrounding structure affect the final specification. These points are confirmed before the quote is approved.',items:['Opening width and height','Slat and profile specification','Side guides and supporting frame','Manual or motorised operation']},
      {kicker:'SITE REVIEW',title:'A Clear Quote Based on the Actual Site',text:'Share photos, approximate measurements and the property location. The team can review the opening and confirm which options are practical before preparing the detailed quotation.',items:['Send current frontage photos','Share approximate opening size','Confirm project location and access','Receive scope and pricing for approval']},
      {kicker:'INSTALLATION & CARE',title:'Professional Fitting and Practical Aftercare',text:'Installation conditions, surface alignment and the selected operating system are checked as part of the planned work. Cleaning and care guidance depends on the final material and manufacturer instructions.',items:['Site measurement and planning','Frame and guide alignment','Operation and safety checks','Care advice for the installed system']},
    ],
    gallery:[img('polycarbonate-roller-shutters-premium.webp'),img('13503-1-1.jpg'),img('2149207752-1-1.jpg')],
    faqs:[
      {q:'What is a polycarbonate roller shutter?',a:'It is a roller-shutter system that uses transparent polycarbonate sections to preserve visibility through the closed curtain.'},
      {q:'Where can polycarbonate shutters be used?',a:'They may suit selected retail shopfronts, showrooms and display areas where visibility matters. Final suitability depends on the opening and site conditions.'},
      {q:'Can the shutter be motorised?',a:'Motorised operation may be available depending on the selected system, opening size and approved specification.'},
      {q:'How do I get an accurate quote?',a:'Send photos, approximate width and height, your location and whether you need a new installation or a replacement. Final scope is confirmed after review.'},
      {q:'How should the transparent slats be cleaned?',a:'Care depends on the manufacturer and material specification. Use the cleaning guidance supplied for the approved system and avoid unapproved abrasive products.'},
    ]
  },
  garage:{
    eyebrow:'AUTOMATIC GARAGE DOORS',
    title:'Automatic Garage Doors Supplied & Installed Across the UAE',
    intro:'Configure your garage door by size, panel finish and motor system. Compare practical and premium options before requesting a confirmed site quotation.',
    image:img('2149207752-1-1.jpg'),
    bullets:['Insulated overhead panels','European premium and standard options','Reliable motor systems','Remote controls and wall button','Engineer measurement','Installation, testing & handover'],
    sections:[
      {kicker:'COMPARE PACKAGES',title:'Choose the Right System for Your Property',text:'Both options include insulated overhead panels, motorised operation and professional installation. Compare the internal components, warranty and starting price before configuring your garage door.',items:['European Premium — AED 8,500 + 5% VAT','Smart Standard — AED 7,350 + 5% VAT','Motor and installation included according to the selected package','Final pricing depends on size, site condition, motor and accessories']},
      {kicker:'SPECIFICATION',title:'Choose Your System, Colour and Options',text:'Select the preferred garage door specification and send the complete configuration for an exact quotation after measurement and site review.',items:['One-car villa starting reference: 3 × 2.4 m','Panel finish and colour','Motor and controls','Optional accessories']},
      {kicker:'CERTIFICATES & SITE CHECK',title:'Ask for Clear Product Certificates & Specifications',text:'For selected premium garage door systems, available product documentation can help confirm the panel, hardware and motor specification included in the approved quotation.',items:['Specification confirmed before installation','Panel specification','Hardware specification','Motor specification']},
      {kicker:'MEASUREMENT FIRST',title:'Book an Exact Measurement',text:'Our engineer can inspect the opening, assess installation conditions and confirm the correct garage door specification before a final quotation is approved.',items:['Opening dimensions','Headroom and side clearance','Structural condition','Access and wiring']},
      {kicker:'INSTALLATION',title:'From Your Selection to a Professionally Installed Door',text:'A clear four-step process covering your preferred specification, exact measurement, fabrication and final installation.',items:['Choose your door','Confirm exact site size','Fabrication & project preparation','Installation, testing & handover']},
    ],
    gallery:[img('2149207752-1-1.jpg'),img('images-9.jpg'),img('13503-1-1.jpg')],
    faqs:[
      {q:'How is the garage-door price confirmed?',a:'The final price depends on exact size, selected system, panel finish, motor, accessories, site conditions and installation scope.'},
      {q:'Can you install a new door in my existing opening?',a:'Yes, after checking the opening, headroom, side clearance, floor level and installation conditions.'},
      {q:'What is included in the garage-door quotation?',a:'The approved quotation identifies the selected door, motor, controls, accessories, installation scope and applicable warranty.'},
      {q:'How long does installation take?',a:'Timing depends on the door specification, fabrication schedule, site access and installation conditions.'},
      {q:'Is online payment required to request a quote?',a:'No. The website is designed around enquiry, measurement and confirmed quotation; payment follows the approved project terms.'},
      {q:'Can I send photos instead of filling out a form?',a:'Yes. Photos, approximate dimensions and a short video are useful for the initial review.'},
    ]
  },
  awning:{
    eyebrow:'PROFESSIONAL AWNING SOLUTIONS',
    title:'Premium Awning Solutions for Comfortable Outdoor Spaces',
    intro:'Custom fixed, retractable and motorized awnings planned around your property, projection, operating preference and UAE outdoor conditions.',
    image:img('Patio-Folding-Wind-Vertical-Retractable-Awning-1.avif'),
    bullets:['Weather-resistant materials','Manual and motorized options','Custom sizes and projection','Residential & commercial installation','UV and heat protection','Repair & fabric replacement','Automatic Sunshade Parda','Pergola & outdoor shade systems'],
    sections:[
      {kicker:'DESIGNED AROUND YOUR SPACE',title:'Premium Shade Solutions',text:'Every awning starts with the available area, required shade, preferred operation and appearance of the property. We supply and install fixed, retractable and motorized systems.',items:['Custom sizes & designs','Manual operating options','Motorized remote-control systems']},
      {kicker:'AUTOMATIC AWNING',title:'Do You Need an Automatic Motorized Awning?',text:'Open and close smoothly using a remote control or compatible wall switch. Suitable for villas, balconies, terraces, patios, cafés, restaurants and shops.',items:['Smooth remote operation','Custom sizes & projection','Weather-ready materials','Professional installation']},
      {kicker:'PERGOLA & SHADE',title:'Create More Comfortable Outdoor Spaces',text:'Choose a shade structure suited to the property, preferred design and required coverage.',items:['Steel & MS Pergolas','Aluminium Pergolas','Bioclimatic Pergolas','Villa Pergolas','Wooden Pergolas','Retractable Pergolas','Commercial Pergolas','Car Parking & Shade Structures','Custom Pergola Systems']},
      {kicker:'REPAIR & MAINTENANCE',title:'Reliable Repair Support for Manual & Motorized Awnings',text:'A damaged awning can become difficult to operate, provide poor shade coverage and affect the appearance of the property. The system is inspected before repair.',items:['Awning fabric replacement','Awning motor repair','Arm & frame adjustment','Remote control issues','Opening & closing problems','Preventive maintenance']},
      {kicker:'WHY OUR SYSTEMS',title:'Designed for Your Property',text:'A professionally designed awning creates practical shade, improves outdoor comfort and enhances the appearance of residential and commercial properties.',items:['Better outdoor comfort','Sun & UV protection','Improved property appearance','Flexible shade control','Convenient motorized operation','Custom-made installation']},
      {kicker:'APPLICATIONS',title:'Awning Solutions for Residential & Commercial Properties',text:'Systems can be customized for different spaces, property styles and shade requirements across Dubai and the UAE.',items:['Villas & private homes','Balconies & terraces','Shops & retail outlets','Cafés & restaurants','Hotels & leisure spaces','Offices & commercial buildings']},
    ],
    gallery:[img('Patio-Folding-Wind-Vertical-Retractable-Awning-1.avif'),img('Patio-Folding-Wind-Vertical-Retractable-Awning-2.avif'),img('46047-1-1.jpg')],
    faqs:[
      {q:'Which awning type is best for my property?',a:'It depends on the available space, required coverage, property style and preferred operating method.'},
      {q:'Are motorized awnings available?',a:'Yes. Motorized systems can be operated using a remote control or compatible wall switch.'},
      {q:'Can you replace old or damaged awning fabric?',a:'Yes. Fabric replacement and related repair support are available after reviewing the existing system.'},
      {q:'Are awnings suitable for UAE weather?',a:'Materials and mounting arrangements should be selected according to location, exposure and intended use.'},
      {q:'How long does awning installation take?',a:'Timing depends on awning type, size, mounting conditions and site access.'},
      {q:'Do you provide awning repair services?',a:'Yes. Support includes fabric, motor, arms, frame, controls and preventive maintenance.'},
      {q:'Can an existing manual awning be motorized?',a:'Some systems can be upgraded depending on frame, mechanism, size and condition.'},
    ]
  },
  canopy:{
    eyebrow:'CUSTOM CANOPY SOLUTIONS',title:'Built for Shade, Protection & Style',intro:'Custom-designed canopies for entrances, parking areas, villas, walkways, terraces and commercial outdoor spaces across Dubai and the UAE.',image:img('2277-1.jpg'),
    bullets:['Car parking canopies','Entrance and walkway canopies','Fabric canopy systems','Steel and aluminium structures','Site measurement & planning','Custom design and fabrication'],
    sections:[
      {kicker:'PRACTICAL COVERAGE',title:'Premium Canopy Solutions Designed Around Your Space',text:'We plan canopy size, structure, access and practical coverage around the actual space instead of forcing a standard size.',items:['Parking shade','Entrance canopy','Walkway and terrace coverage','Commercial outdoor spaces']},
      {kicker:'STRUCTURE',title:'Material & Finish Options',text:'Choose a structure that fits the property, required coverage and desired visual finish.',items:['Steel structures','Aluminium structures','Fabric canopy systems','Custom dimensions and finishing']},
      {kicker:'PROCESS',title:'From Measurement to Installation',text:'Site review, material selection, fabrication, installation and final checks are coordinated as one process.',items:['Measure','Plan','Fabricate','Install & inspect']},
    ],
    gallery:[img('2277-1.jpg'),img('3372-1.jpg'),img('pexels-photo-34277689.avif')],
    faqs:[
      {q:'Can a canopy be made to a custom size?',a:'Yes. Canopies are planned around the available footprint, required coverage and fixing conditions.'},
      {q:'Do you provide parking shade?',a:'Yes. Car parking and shade structures are part of the canopy and outdoor-shade offering.'},
      {q:'Do you work on commercial projects?',a:'Yes. Solutions can be planned for shops, restaurants, offices, villas and other commercial properties.'},
      {q:'Can you handle fabrication and installation?',a:'Yes. The process can cover measurement, fabrication, installation and final checks.'},
    ]
  },
  motor:{
    eyebrow:'ACCESS AUTOMATION',title:'Automation for Gates & Doors',intro:'Sliding and swing gate motors, garage motors, remotes, photocells, control boards and wiring for residential and commercial access.',image:img('1921-1-1-1.jpg'),
    bullets:['Sliding gate motors','Swing gate motors','Garage door motors','Remote controls','Photocells and sensors','Control board and wiring support'],
    sections:[
      {kicker:'SELECT BY DUTY',title:'Pick the Right Motor for Your Gate or Door',text:'Motor selection should match gate weight, width, opening frequency, power and the required safety accessories.',items:['01 Select gate duty level','02 Choose installation or repair','03 Select controls and safety options','04 Confirm preferred schedule','05 Share project details']},
      {kicker:'SYSTEM OPTIONS',title:'Trusted Motor Systems Matched to Your Gate or Door',text:'Choose the system around the job requirement rather than the brand name alone.',items:['European motor systems','Premium automation','Heavy-duty operators','Parking access systems','Value motor options']},
      {kicker:'PROCESS',title:'From Technical Selection to a Fully Tested System',text:'A clear process keeps the motor, controls and installation scope aligned.',items:['Send gate photos and details','Motor and controls are selected','Installation and programming','Testing, setup and handover']},
    ],
    gallery:[img('1921-1-1-1.jpg'),img('2149207752-1-1.jpg'),img('13503-1-1.jpg')],
    faqs:[
      {q:'How do you choose the correct motor for my gate?',a:'The selection depends on gate weight, width, duty cycle, movement type and required controls and safety accessories.'},
      {q:'What is the difference between sliding and swing gate motors?',a:'Sliding motors drive a gate along a track; swing motors operate hinged leaves. The correct system depends on the gate design.'},
      {q:'Can you automate my existing manual gate?',a:'Often yes, after checking the gate structure, movement, clearances and condition.'},
      {q:'Can you replace a faulty motor without replacing the gate?',a:'In many cases yes, if the existing gate and mechanical system are suitable for the replacement motor.'},
      {q:'What safety accessories can be added?',a:'Options may include photocells, receivers, remotes, control boards and related safety accessories.'},
      {q:'Do you offer maintenance and repair support?',a:'Yes. Existing motors, remotes, sensors and control systems can be inspected and serviced.'},
    ]
  },
  repair:{
    eyebrow:'REPAIR & MAINTENANCE',title:'Fast Repair for Doors, Shutters, Gates and Motors',intro:'Send a short fault video and your location. The team reviews the issue and confirms the repair scope before work starts.',image:img('13602-1.jpg'),
    bullets:['Urgent repair support','Fault video review','Motor and receiver faults','Remote and sensor problems','Preventive maintenance','Test and service report'],
    sections:[
      {kicker:'FAULT REVIEW',title:'What Is Your System Doing?',text:'Choose the system and the closest symptom. The starting point helps you prepare useful photos or a short video before contacting the repair team.',items:['Garage door','Rolling shutter','Gate motor','Parking barrier','Stuck / noisy / uneven movement','Motor / remote / sensor issue']},
      {kicker:'PREVENTIVE CARE',title:'Prevent Small Faults Before They Stop Your System',text:'Scheduled maintenance for villas, shops, warehouses and commercial facilities helps reduce unexpected breakdowns and keeps systems operating safely.',items:['Garage door maintenance','Rolling shutter maintenance','Facility maintenance plan']},
      {kicker:'RELIABLE FIX',title:'From Fault Video to a Reliable Fix',text:'The repair process reviews the fault first, confirms the scope and tests the system before handover.',items:['Send a short fault video','Initial fault review','Repair and adjustment','Test and service report']},
      {kicker:'CLEAR SCOPE',title:'Clear Repair Scope. No Unexpected Work.',text:'The team checks the fault, explains the proposed repair and confirms the scope before additional work begins.',items:['Fault video reviewed first','Scope confirmed before work','Support for major systems','Tested before handover']},
    ],
    gallery:[img('13602-1.jpg'),img('13503-1-1.jpg'),img('1921-1-1-1.jpg')],
    faqs:[
      {q:'My garage-door spring broke. Can I still use the door?',a:'Stop repeated operation and send a clear video or call for guidance. A broken spring can make the system unsafe to operate.'},
      {q:'Do you repair doors, shutters or motors you did not install?',a:'Yes. Existing systems can be inspected subject to condition, access and availability of compatible parts.'},
      {q:'What does a maintenance plan normally include?',a:'Inspection and adjustment can cover tracks, rollers, springs, cables, motors, limits, remotes and safety sensors depending on the system.'},
      {q:'How do you decide whether to repair or replace the motor?',a:'The decision is based on fault symptoms, motor condition, compatibility, parts availability and overall system condition.'},
      {q:'Will the repair scope be confirmed before work starts?',a:'Yes. The approved repair scope and any additional work are confirmed before proceeding.'},
      {q:'Can you replace only remotes, receivers or sensors?',a:'Yes, where compatible replacement parts are available.'},
    ]
  },
  'aluminium-works':{
    eyebrow:'ALUMINIUM WORKS',title:'Clean Aluminium Solutions for Modern Properties',intro:'Custom aluminium doors, windows, partitions, cladding and fabrication for villas, offices, shops and commercial properties.',image:img('WhatsApp-Image-2026-07-28-at-1.07.11-AM-2.jpeg'),
    bullets:['Aluminium doors','Windows','Partitions','Cladding','Custom fabrication','Project-specific finishes'],
    sections:[
      {kicker:'MODERN FINISHES',title:'Practical Aluminium Fabrication',text:'Aluminium solutions can combine a clean appearance with practical everyday operation and low-maintenance use.',items:['Doors and windows','Partitions','Cladding','Custom fabrication']},
      {kicker:'PROJECT FIT',title:'Designed Around the Property',text:'Opening size, access, function and finish are considered so the final fabrication suits the property.',items:['Residential projects','Offices and shops','Commercial properties','Custom dimensions']},
      {kicker:'SUPPLY & INSTALLATION',title:'From Measurement to Fitting',text:'Each stage is coordinated around the site, from measurement and fabrication through installation and final checks.',items:['Site measurement','Material selection','Fabrication','Installation']},
    ],
    gallery:[img('WhatsApp-Image-2026-07-28-at-1.07.11-AM-2.jpeg'),img('WhatsApp-Image-2026-07-28-at-1.07.11-AM-1.jpeg'),img('photo-1497366811353-6870744d04b2.avif')],
    faqs:[
      {q:'What aluminium work do you provide?',a:'Services include doors, windows, partitions, cladding and project-specific fabrication.'},
      {q:'Can you make custom sizes?',a:'Yes. Dimensions are planned around the actual opening and project requirements.'},
      {q:'Do you provide installation?',a:'Yes. Supply, fabrication and fitting can be coordinated as one project.'},
    ]
  },
  'steel-work':{
    eyebrow:'CUSTOM STEEL WORK',title:'Strong Steel Structures and Fabrication for Your Project',intro:'Custom steel gates, pergola frames, canopy structures, parking systems and project-specific metal fabrication.',image:img('photo-1504917595217-d4dc5ebe6122.avif'),
    bullets:['Steel gates','Pergola structures','Canopy frames','Parking structures','Welding & fabrication','Custom dimensions'],
    sections:[
      {kicker:'BUILT TO THE REQUIREMENT',title:'Steelwork Planned Around the Property',text:'Steelwork is planned around dimensions, use, access, structure and the desired finish.',items:['Gates','Pergolas','Canopy frames','Parking structures']},
      {kicker:'RESIDENTIAL & COMMERCIAL',title:'Different Spaces. Different Priorities.',text:'Suitable for villas, gardens, parking areas, shops, offices and commercial projects.',items:['Villa and garden structures','Commercial entrances','Parking and shade','Custom fabrication']},
      {kicker:'FABRICATION & INSTALLATION',title:'From Measurement to Final Checks',text:'From measurement and fabrication through installation and final checks, the process stays coordinated.',items:['Measurement','Fabrication','Welding / finishing','Installation & inspection']},
    ],
    gallery:[img('photo-1504917595217-d4dc5ebe6122.avif'),img('1921-1-1-1.jpg'),img('2277-1.jpg')],
    faqs:[
      {q:'What steel structures can you fabricate?',a:'Steel gates, pergola frames, canopy structures, parking structures and custom metal work.'},
      {q:'Can the dimensions be customised?',a:'Yes. The structure is planned around the site and intended use.'},
      {q:'Do you provide installation?',a:'Yes. Fabrication and installation can be coordinated together.'},
    ]
  },
  'canopy-old':{
    eyebrow:'CUSTOM CANOPY SOLUTIONS',title:'Custom Canopy Solutions',intro:'Custom shade and weather protection for entrances, parking, walkways and commercial spaces.',image:img('2277-1.jpg'),bullets:[],sections:[],gallery:[],faqs:[]
  }
};

export const gallery = [img('13503-1-1.jpg'),img('261090bd-a4ce-4c1a-a7c3-f32563e2b372.jpg'),img('1921-1-1-1.jpg'),img('2149207752-1-1.jpg'),img('2277-1.jpg'),img('photo-1504917595217-d4dc5ebe6122.avif'),img('13602-1.jpg'),img('polycarbonate-roller-shutters-premium.webp')];

export const commonFaqs = [
  {q:'Can you repair my existing door or shutter?',a:'Yes. Send photos or a short video first. The current door, tracks, motor, springs, wiring, remotes and safety components can be reviewed before recommending repair, motor replacement or a complete new system.'},
  {q:'How is the final price calculated?',a:'Pricing depends on opening size, selected system, motor type, required accessories, wiring, site access and installation condition. The scope and final quotation are confirmed before work begins.'},
  {q:'Which areas do you serve?',a:'The service is positioned for Dubai and wider UAE enquiries, including Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah and Umm Al Quwain.'},
  {q:'How quickly can a technician visit?',a:'Visit timing depends on location, technician availability and urgency. For emergency faults, send a short video so the issue can be understood before dispatch.'},
  {q:'Do you offer standard and premium options?',a:'Yes. Practical standard and upgraded premium options can be compared depending on the system, motor, hardware, accessories, finishing and warranty.'},
  {q:'Which motors and components do you install?',a:'Compatible motors, remotes, receivers, sensors, tracks, panels and safety accessories are selected according to the system type and approved quotation.'},
  {q:'Do I need to pay before measurement?',a:'Any inspection or visit fee is confirmed clearly before dispatch. Product or installation payments follow the approved quotation and agreed project terms.'},
  {q:'What warranty will I receive?',a:'Warranty coverage depends on the selected product, motor, accessories and installation package. Applicable terms are included in the approved quotation.'},
  {q:'Can I send photos instead of filling out a form?',a:'Yes. Photos, approximate measurements and a short video can be sent directly through WhatsApp for an initial review.'},
];

export const reviews = [
  {initial:'A',name:'Abdullah M.',meta:'Residential Customer · Abu Dhabi',service:'Garage door installation',text:'The team handled our garage door work professionally. Communication was clear, the installation was neat and the system has been working smoothly since completion.'},
  {initial:'R',name:'Rajesh A.',meta:'Commercial Customer · Dubai',service:'Gate motor replacement',text:'Our gate motor was replaced after the old unit stopped working. The technician explained the problem clearly and completed the work without unnecessary delay.'},
  {initial:'G',name:'Ghanem A.',meta:'Business Customer · Sharjah',service:'Rolling shutter repair',text:'Very good service for our rolling shutter repair. The team arrived on time, checked the motor and sensor, and explained the repair cost before starting.'},
];

export const coverage = ['Dubai','Abu Dhabi','Sharjah','Ajman','Al Ain','Ras Al Khaimah','Fujairah','Umm Al Quwain'];

export function waLink(message='Hello, I would like to request a quotation.'){
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

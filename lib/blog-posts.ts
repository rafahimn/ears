export type BlogArticleSection = {
  heading: string;
  body: string;
  points: string[];
};

export type BlogPost = {
  slug: string;
  serviceSlug: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
  intro: string;
  sections: BlogArticleSection[];
  conclusion: string;
};

const upload = (name: string) => `/wp-content/uploads/2026/10/${name}`;

/** Original, service-specific guidance for the ASCA Insights section. */
export const blogPosts: BlogPost[] = [
  {
    slug: 'rolling-shutters-dubai-guide', serviceSlug: 'shutter',
    title: 'How to Choose Rolling Shutters for a Dubai Property',
    description: 'Compare shutter types, materials, motor options and installation details before choosing a rolling shutter for a shop, villa, warehouse or commercial entrance.',
    image: upload('home-service-rolling-shutter.webp'),
    keywords: ['rolling shutters Dubai', 'rolling shutter installation Dubai', 'shop shutters UAE', 'automatic roller shutter'],
    intro: 'A suitable rolling shutter should match the opening size, daily operating pattern, security needs and appearance of the property. In Dubai, heat, dust and frequent operation also make correct specification and routine care important. Use this guide to prepare the right questions before requesting a site assessment.',
    sections: [
      { heading: 'Start with the opening and its purpose', body: 'A shopfront, warehouse loading bay and residential garage do not have the same requirements. The opening dimensions, available headroom, side clearance and surrounding structure help determine which shutter arrangement will fit and operate correctly.', points: ['Measure the clear width and height of the opening.', 'Explain how often the shutter opens and closes each day.', 'Share photos of the opening, side guides and available space above it.'] },
      { heading: 'Compare shutter types and materials', body: 'Single-skin shutters are a practical option for many everyday openings. Insulated profiles can help with thermal and sound performance, while transparent polycarbonate systems suit selected retail spaces where display visibility matters. The final choice depends on the site and approved specification.', points: ['Compare security, insulation, visibility and appearance.', 'Confirm the proposed material, profile and finish in writing.', 'Check whether the existing frame can support the selected system.'] },
      { heading: 'Choose the right operating method', body: 'Manual operation may suit smaller or infrequently used openings. A motorised shutter can make repeated daily use easier, but the motor, controls and safety accessories must be matched to the shutter load and installation conditions.', points: ['Confirm motor capacity against the shutter size and weight.', 'Discuss remotes, wall switches and available safety devices.', 'Ask how manual release and power interruption are handled.'] },
      { heading: 'Plan installation and ongoing care', body: 'Accurate site measurements reduce the chance of clearance or alignment problems. After fitting, the curtain should travel smoothly in its guides and the controls should be tested. Keep the guides clear and arrange inspection if movement becomes noisy, uneven or strained.', points: ['Request a written scope covering supply, fitting and controls.', 'Test opening, closing and stopping functions at handover.', 'Do not force a jammed shutter; arrange a qualified inspection.'] },
    ],
    conclusion: 'A clear quotation starts with good site information. Send the opening photos, approximate dimensions, property location and preferred operating method to discuss a suitable rolling shutter configuration.',
  },
  {
    slug: 'canopy-solutions-dubai-guide', serviceSlug: 'canopy',
    title: 'Planning a Canopy for Parking, Entrances and Outdoor Areas',
    description: 'Learn how location, span, clearance, frame design and roofing materials affect a custom canopy for Dubai homes and commercial properties.',
    image: upload('home-service-canopy.webp'),
    keywords: ['car parking canopy Dubai', 'entrance canopy Dubai', 'custom canopy UAE', 'canopy fabrication Dubai'],
    intro: 'A canopy should provide useful shade while fitting the site, access route and building appearance. Planning the location and clearances before choosing the frame and roofing material helps avoid conflicts with vehicles, doors, walkways and services.',
    sections: [
      { heading: 'Define what the canopy needs to cover', body: 'Parking, a building entrance, a walkway and a terrace need different coverage and access. Think about the sun direction, vehicle movement, people passing below, drainage and how the structure will meet the existing building or ground.', points: ['Share the intended use and approximate coverage area.', 'Check vehicle height, turning space and pedestrian clearance.', 'Identify nearby walls, utilities, drains and existing structures.'] },
      { heading: 'Review the frame and roofing material', body: 'Steel and aluminium systems can be specified for different spans, finishes and maintenance needs. Roofing options also vary in light transmission, heat behaviour, appearance and weather protection. Material selection should follow the design and site requirements rather than appearance alone.', points: ['Ask for the proposed frame material and finish.', 'Compare solid, translucent and other suitable roof options.', 'Confirm the support points and installation method after assessment.'] },
      { heading: 'Consider drainage, wind and exposure', body: 'Outdoor structures in the UAE are exposed to strong sun, dust and seasonal weather. The canopy layout should account for water run-off, fixing details and exposure at the actual location. Structural requirements should be assessed by a competent professional for the project.', points: ['Confirm roof slope and where rainwater will drain.', 'Review anchoring and site exposure with the installer.', 'Check any building, community or authority approvals required.'] },
      { heading: 'Agree the scope before fabrication', body: 'Site measurements and an agreed drawing help the team confirm the final footprint and installation sequence. A written scope should make clear which materials, finishes, supports and finishing works are included.', points: ['Confirm dimensions, finish and coverage on the approved scope.', 'Agree access, installation timing and site preparation.', 'Inspect the finished structure and drainage at handover.'] },
    ],
    conclusion: 'For a useful canopy proposal, share site photos, approximate dimensions, what needs to be covered and the property location. A site review can then establish practical design options.',
  },
  {
    slug: 'garage-door-planning-dubai', serviceSlug: 'garage',
    title: 'A Practical Guide to Choosing an Automatic Garage Door',
    description: 'Understand garage opening measurements, door style, motor operation, safety features and maintenance before installing a garage door in Dubai.',
    image: upload('home-service-garage-door.webp'),
    keywords: ['automatic garage door Dubai', 'garage door installation Dubai', 'garage door repair Dubai', 'motorised garage door UAE'],
    intro: 'A garage door needs to fit the opening and the available space inside and above it. Usage frequency, vehicle access, electrical supply and security needs all affect the right configuration. A site assessment is the best way to confirm a suitable system before ordering.',
    sections: [
      { heading: 'Check the garage layout first', body: 'Door styles require different clearances. Headroom, side room, ceiling obstructions and driveway slope can influence which design is practical. If replacing an existing door, the condition of the frame and tracks should also be reviewed.', points: ['Measure opening width, height and available headroom.', 'Photograph the ceiling, tracks, side walls and driveway.', 'Mention any existing door problems or structural changes.'] },
      { heading: 'Match the door to daily use', body: 'The right design balances access, appearance, space and the level of insulation or visibility required. The selected panels, tracks, springs and hardware must be appropriate for the opening and door weight.', points: ['Discuss how many times the door is used each day.', 'Compare finish, panel style and practical insulation needs.', 'Confirm material, hardware and warranty terms in writing.'] },
      { heading: 'Treat automation and safety as one system', body: 'A motor should be selected for the door type and load, not simply by appearance or price. Controls and safety devices must be installed and tested according to the system requirements. Keep remotes secure and teach household users the safe operating procedure.', points: ['Confirm motor compatibility and available power supply.', 'Ask about obstruction detection and safety accessories.', 'Test the controls and emergency release at handover.'] },
      { heading: 'Maintain smooth and reliable movement', body: 'Unusual noise, uneven travel, delayed response or repeated reversal can indicate a mechanical or control issue. Springs and other loaded components can be dangerous, so repairs should be handled by a qualified technician rather than improvised.', points: ['Keep the door path and tracks clear of objects.', 'Arrange inspection if movement changes or noise increases.', 'Never adjust torsion springs or loaded hardware yourself.'] },
    ],
    conclusion: 'Before requesting a garage door quotation, send the opening measurements, photos of the garage interior and driveway, location, and whether you need a new installation or repair.',
  },
  {
    slug: 'awning-solutions-dubai-guide', serviceSlug: 'awning',
    title: 'How to Plan an Awning for a Villa, Balcony or Café',
    description: 'Compare fixed, retractable and motorised awnings, shade coverage, fabric choices and mounting conditions for outdoor spaces in the UAE.',
    image: upload('home-service-awning.webp'),
    keywords: ['retractable awning Dubai', 'motorised awning Dubai', 'villa awning UAE', 'shop awning Dubai'],
    intro: 'A well-planned awning can make a balcony, terrace, café frontage or villa outdoor area more usable. The important factors are where the sun falls, how much shade is needed, how the awning will be mounted and how it should be operated.',
    sections: [
      { heading: 'Map the shade area through the day', body: 'The useful projection and width depend on the opening, sun direction and intended seating or walking area. A quick site review can help check the coverage without obstructing doors, signs, walkways or neighbouring spaces.', points: ['Identify the area that needs shade and at what times.', 'Share photos from different angles and the mounting wall.', 'Check nearby windows, doors, lights, signs and walkways.'] },
      { heading: 'Choose fixed, retractable or motorised operation', body: 'Fixed systems provide permanent coverage, while retractable designs let the covered area change. Motorisation can make repeated operation more convenient, but the drive and controls must fit the selected awning and installation.', points: ['Decide whether you need permanent or adjustable shade.', 'Compare manual and motorised operation for the planned size.', 'Ask how the awning should be secured during strong winds.'] },
      { heading: 'Select fabric, frame and mounting details', body: 'Fabric colour and performance affect appearance and light beneath the awning. The wall or support structure must also be suitable for the mounting loads. Final hardware, fixing points and any weather-related limits should be confirmed for the particular installation.', points: ['Review sample colours and available fabric specifications.', 'Confirm the support surface and fixing method on site.', 'Follow the supplier’s operating and wind guidance.'] },
      { heading: 'Keep access and maintenance practical', body: 'An awning should be reachable for inspection and should not block normal access when retracted or extended. Cleaning and periodic inspection help identify loose fixings, fabric wear or changes in operation before they become more serious.', points: ['Confirm the retracted position and full projection.', 'Ask how to clean the selected fabric and frame.', 'Arrange a service check if movement becomes uneven.'] },
    ],
    conclusion: 'Share the location, approximate width and projection, a photo of the mounting area and whether you prefer fixed or retractable shade to begin planning an awning solution.',
  },
  {
    slug: 'gate-motor-selection-dubai', serviceSlug: 'motor',
    title: 'Choosing and Maintaining a Gate Motor in Dubai',
    description: 'Review gate weight, travel, usage frequency, controls and safety devices before choosing a sliding or swing gate automation system.',
    image: upload('home-service-gate-motor.webp'),
    keywords: ['gate motor Dubai', 'gate motor installation Dubai', 'gate motor repair Dubai', 'sliding gate automation UAE'],
    intro: 'Gate automation works best when the gate itself moves freely and the motor is matched to its mechanical load. Gate type, weight, travel distance, daily cycles and site exposure all influence the choice of motor and control system.',
    sections: [
      { heading: 'Check the gate before selecting a motor', body: 'A motor should not be used to compensate for a gate that binds, drags or has damaged hardware. Sliding gates need a suitable track and rollers; swing gates require appropriate hinges and geometry. The gate condition should be assessed first.', points: ['Identify whether the gate slides or swings.', 'Share a photo of the gate, track or hinges and motor area.', 'Report dragging, uneven gaps, noise or manual resistance.'] },
      { heading: 'Match the drive to the real workload', body: 'Motor capacity and duty rating should suit the gate size, weight, movement and frequency of operation. Choosing only by a headline capacity may overlook the gate’s condition, wind exposure or the number of daily cycles.', points: ['Estimate gate weight, travel and daily operating cycles.', 'Confirm the proposed motor model and duty specification.', 'Review power supply, backup and manual-release options.'] },
      { heading: 'Plan remotes and safety devices', body: 'Remote controls, keypads, photocells and other accessories should be compatible with the control board and the way people use the entrance. Safety equipment must be positioned and tested for the specific gate layout.', points: ['List the required remotes and access methods.', 'Ask about suitable photocells and other safety accessories.', 'Test stopping, reversal and release functions after installation.'] },
      { heading: 'Spot early signs of a fault', body: 'Intermittent response, repeated tripping, unusual motor noise or slower movement can point to a control, power or mechanical problem. Record what happens and avoid repeated forced operation, which may worsen the damage.', points: ['Note indicator lights, sounds and when the fault occurs.', 'Check only safe external items described in the manual.', 'Arrange a technician for electrical, gearbox or loaded-gate repairs.'] },
    ],
    conclusion: 'For a gate motor review, provide a short video of the gate moving, photos of the current motor and gate type, the fault symptoms if any, and your location.',
  },
  {
    slug: 'shutter-door-repair-maintenance-guide', serviceSlug: 'repair',
    title: 'Rolling Shutter and Automatic Door Repair: What to Check',
    description: 'Learn to recognise common warning signs, prepare useful photos for a technician and plan safe preventive maintenance for shutters and automatic doors.',
    image: upload('home-service-repair.webp'),
    keywords: ['rolling shutter repair Dubai', 'automatic door repair Dubai', 'shutter maintenance Dubai', 'garage door service UAE'],
    intro: 'A shutter or automatic door that slows down, becomes noisy or stops unexpectedly needs a careful diagnosis. Symptoms can come from the curtain, guides, rollers, motor, control board, power supply or safety devices. Recording the fault helps a technician narrow down the cause.',
    sections: [
      { heading: 'Recognise the warning signs', body: 'Uneven movement, scraping sounds, a door that stops partway, repeated motor trips or controls that respond intermittently can indicate a developing fault. The same symptom can have several causes, so it should not be treated as a definite diagnosis.', points: ['Record whether the problem occurs while opening or closing.', 'Note unusual sounds, movement and any indicator lights.', 'Take photos of visible damage without removing guards.'] },
      { heading: 'Keep people safe around a faulty door', body: 'A jammed shutter or door can contain heavy, tensioned or electrically powered components. Keep people clear of the moving area and do not bypass safety sensors or force the system to operate. Isolate power only when safe and according to the instructions.', points: ['Keep children and customers away from the opening.', 'Do not pull, push or force a jammed curtain or door.', 'Never open a motor, control panel or spring mechanism unless qualified.'] },
      { heading: 'Give the technician useful information', body: 'A clear description, photos and a short video can help the service team understand the setup before arrival. Include the site access details and whether the system is manual or automated so the visit can be planned properly.', points: ['Send a short video showing the symptom if safe to do so.', 'Share the system type, approximate age and location.', 'Explain recent repairs, power issues or changes in use.'] },
      { heading: 'Prevent avoidable breakdowns', body: 'Routine checks help identify dirt build-up, loose external parts or changes in movement. Service frequency depends on use and environment; heavily used commercial openings may need more regular attention than a low-use residential door.', points: ['Keep the surrounding area clear and observe normal travel.', 'Follow the manufacturer’s cleaning and service guidance.', 'Arrange inspection when noise, speed or alignment changes.'] },
    ],
    conclusion: 'For repair support, share photos or video, the type of door or shutter, the symptoms and the property location. A technician can then advise on assessment and next steps.',
  },
  {
    slug: 'aluminium-fabrication-dubai-guide', serviceSlug: 'aluminium-works',
    title: 'Planning Custom Aluminium Doors, Windows and Partitions',
    description: 'Prepare for aluminium fabrication by defining dimensions, use, finish, glass or panel requirements and the site conditions before approving a quote.',
    image: upload('home-service-aluminium.webp'),
    keywords: ['aluminium fabrication Dubai', 'aluminium doors Dubai', 'aluminium windows UAE', 'aluminium partitions Dubai'],
    intro: 'Custom aluminium work starts with the opening and the way the finished item needs to perform. Doors, windows, partitions and cladding each have different requirements for dimensions, hardware, finish and interface with the existing building.',
    sections: [
      { heading: 'Define the function and dimensions', body: 'The intended use helps determine the frame arrangement, opening method and panel requirements. Accurate site measurements are important because walls, floors and existing frames may not be perfectly square or level.', points: ['Describe where the item will be installed and how it will be used.', 'Provide approximate dimensions and clear photos of the opening.', 'Identify access, clearance and any existing-frame limitations.'] },
      { heading: 'Choose profiles, panels and finish', body: 'Frame profile, glazing or infill, colour and hardware affect appearance and function. The final specification should make clear what materials and finishes are included and whether any performance requirements need to be met.', points: ['Review frame/profile options and finish samples.', 'Confirm glass or panel type where applicable.', 'Agree handle, lock, hinge and other hardware details.'] },
      { heading: 'Plan the interface with the building', body: 'Water management, sealing, fixing points and access for installation depend on the specific opening. Existing surfaces and adjacent finishes should be checked so the proposed fabrication can be installed with a clear scope.', points: ['Check surrounding wall, sill and floor conditions.', 'Discuss sealing, drainage and weather exposure where relevant.', 'Confirm removal or making-good work in the quotation.'] },
      { heading: 'Review drawings and handover details', body: 'A clear drawing or written schedule reduces confusion before fabrication. Check the sizes, handing, finish, hardware and quantity before approval, then inspect operation and visible finishes after installation.', points: ['Approve dimensions and opening direction before fabrication.', 'Confirm lead time, access and installation responsibilities.', 'Test the finished doors or windows and record any agreed adjustments.'] },
    ],
    conclusion: 'To discuss aluminium fabrication, send photos, approximate dimensions, the intended use, preferred finish and your project location. Final details should be confirmed after measurement.',
  },
  {
    slug: 'steel-fabrication-dubai-guide', serviceSlug: 'steel-work',
    title: 'What to Plan Before Ordering Custom Steel Fabrication',
    description: 'A practical checklist for steel gates, pergolas, canopy frames and other custom metal work, from site dimensions to finish and installation access.',
    image: upload('home-service-steel.webp'),
    keywords: ['steel fabrication Dubai', 'steel gates Dubai', 'metal fabrication UAE', 'steel pergola Dubai'],
    intro: 'Custom steel fabrication should be designed around the intended use, loading requirements, dimensions and site conditions. Gates, pergolas and canopy frames are not interchangeable designs, so the scope should be specific before materials are cut or welded.',
    sections: [
      { heading: 'Describe the intended application', body: 'A decorative gate, a frequently operated entrance and a frame supporting a canopy have different functional and structural demands. The design brief should identify what the steelwork will carry, how it moves and who will use the area.', points: ['Name the structure and explain its day-to-day use.', 'Share the location, photos and approximate dimensions.', 'Flag any known loads, clearances or attachment constraints.'] },
      { heading: 'Confirm material and finish requirements', body: 'Section sizes, connection details and coatings should be selected for the actual application and exposure. Outdoor steelwork needs an appropriate corrosion-protection approach, and finish expectations should be agreed before fabrication.', points: ['Ask for the proposed steel sections and thicknesses.', 'Discuss the surface preparation and protective finish.', 'Confirm colour, visible weld quality and hardware expectations.'] },
      { heading: 'Measure the site and plan installation', body: 'Access routes, lifting needs, fixing surfaces and tolerances affect how fabricated pieces can be delivered and installed. Site measurements and an agreed drawing help coordinate dimensions and connection points.', points: ['Check delivery and installation access for large components.', 'Confirm foundation, fixing and attachment responsibilities.', 'Review any required engineering or authority approval with the project team.'] },
      { heading: 'Approve the scope before work begins', body: 'A written scope should list the main dimensions, materials, finish, hardware and work included. Reviewing these items before fabrication makes it easier to align the finished product with the project needs.', points: ['Check drawings, measurements and finish before approval.', 'Agree the sequence, site readiness and installation access.', 'Inspect alignment, operation and visible finish at handover.'] },
    ],
    conclusion: 'For a custom steelwork proposal, provide site photos, approximate size, use case, finish preference and location. Structural details should be confirmed by the responsible project professional where required.',
  },
  {
    slug: 'polycarbonate-shutters-retail-guide', serviceSlug: 'polycarbonate',
    title: 'Are Polycarbonate Roller Shutters Right for Your Shopfront?',
    description: 'Explore visibility, profile design, support frames, operation and care considerations for clear roller shutters in retail stores and showrooms.',
    image: upload('home-service-polycarbonate.webp'),
    keywords: ['polycarbonate roller shutters Dubai', 'clear shop shutters Dubai', 'transparent roller shutter UAE', 'shopfront shutters Dubai'],
    intro: 'Polycarbonate roller shutters are considered for selected retail frontages where visibility after closing is important. Their suitability depends on the opening dimensions, supporting profiles, operating frequency, local requirements and the specification of the proposed system.',
    sections: [
      { heading: 'Decide whether visibility is the priority', body: 'Clear shutter sections can keep displays and showroom products visible while the entrance is closed. They are not the right answer for every opening, so the security goals, exposure and required level of privacy should be discussed first.', points: ['Identify whether the display must remain visible after hours.', 'Consider privacy, lighting and the appearance of the frontage.', 'Check property or retail-centre rules for shopfront systems.'] },
      { heading: 'Review profiles and support requirements', body: 'The clear curtain works as part of a full system with guides, supporting profiles, barrel and operating mechanism. Opening width, height and the surrounding structure influence the final configuration.', points: ['Measure the opening and photograph the support frame.', 'Confirm the proposed profile and guide arrangement.', 'Ask which operating options are available for the selected size.'] },
      { heading: 'Choose a suitable operating setup', body: 'Frequent retail use may make powered operation convenient, but motor and control selection should suit the actual shutter. Safety, manual release and power interruption procedures need to be understood before handover.', points: ['Discuss daily opening and closing frequency.', 'Confirm motor, controls and safety accessories if motorised.', 'Test the full travel and controls during handover.'] },
      { heading: 'Keep the clear curtain in good condition', body: 'Suitable cleaning and careful operation help preserve visibility. Use cleaning products and methods approved for the material, and seek inspection if the curtain becomes misaligned, scratched, noisy or difficult to move.', points: ['Follow the supplier’s instructions for cleaning the clear sections.', 'Keep guides and the operating area free of debris.', 'Do not force the system if it catches or stops unexpectedly.'] },
    ],
    conclusion: 'Share a frontage photo, opening measurements, desired visibility and daily usage to check whether a polycarbonate shutter system is appropriate for your shop or showroom.',
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

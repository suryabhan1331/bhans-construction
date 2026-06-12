/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial, TeamMember, StatItem } from './types';

// Let's use the local premium generated images
export const IMAGES = {
  heroBg: '/src/assets/images/hero_architecture_1779365510338.png',
  residential: '/src/assets/images/residential_project_1779365531467.png',
  commercial: '/src/assets/images/commercial_project_1779365564483.png',
  interior: '/src/assets/images/interior_design_1779365603420.png',
  architecture: '/src/assets/images/architecture_planning_1779365640341.png',
  renovation: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
  consultation: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
};

export const SERVICES: Service[] = [
  {
    id: 'res-const',
    title: 'Residential Construction',
    description: 'We build custom modern villas, estates, and luxury homes tailored precisely to your family\'s style and functional needs.',
    longDescription: 'Our hallmark residential construction process combines premier architecture, eco-friendly materials, and state-of-the-art engineering. From foundation to final finishing, we guarantee structural excellence, luxury aesthetics, and long-term durability.',
    icon: 'Home',
    image: IMAGES.residential,
    features: [
      'Custom luxury villas & estates',
      'Structural engineering & foundation',
      'Green building & energy efficiency',
      'High-end interior finishes integration',
      'Post-construction warranties'
    ]
  },
  {
    id: 'comm-const',
    title: 'Commercial Construction',
    description: 'Engineering cutting-edge corporate offices, high-tech plazas, and high-rise commercial structures designed for maximum utility.',
    longDescription: 'Bhan’s Construction offers full-service commercial project delivery. We collaborate closely with developers and enterprise clients to construct workspaces that inspire collaboration, represent corporate identity, and comply with top tier safety and green certifications.',
    icon: 'Briefcase',
    image: IMAGES.commercial,
    features: [
      'Corporate offices & workspaces',
      'Retail plazas & showrooms',
      'LEED & green building compliance',
      'Advanced HVAC & layout engineering',
      'Phased scaling and fast timelines'
    ]
  },
  {
    id: 'int-design',
    title: 'Interior Design',
    description: 'Ultra-luxury interior styling, space planning, lighting design, and personalized bespoke furniture styling for executive properties.',
    longDescription: 'Our multi-award-winning interior designers create premium sensory environments. We specialize in sophisticated space optimization, selecting rich materials, pairing custom lighting setups, and crafting bespoke furnishings that establish a distinct mood of tranquil luxury.',
    icon: 'Palette',
    image: IMAGES.interior,
    features: [
      'Luxurious spatial layouts',
      'Custom furniture & upholstery',
      'Premium lighting & acoustic plan',
      'Material curation (marble, timber, brass)',
      '3D photo-realistic styling preview'
    ]
  },
  {
    id: 'arch-plan',
    title: 'Architecture Planning',
    description: 'Futuristic spatial planning, blueprinting, zoning compliance, and conceptual drawings that maximize light, space and structure.',
    longDescription: 'Great architecture is where imagination meets functional geometry. Our master planners draft micro-detailed blueprints that fuse aesthetics, environment layouts, sustainable zoning regulations, and innovative structural schemes into one seamless vision.',
    icon: 'Compass',
    image: IMAGES.architecture,
    features: [
      'Conceptual layout & sketches',
      '3D BIM modeling & visualization',
      'Zoning code & regulatory approvals',
      'Site analysis & sun-path orientation',
      'Structural load calculations'
    ]
  },
  {
    id: 'ren-serv',
    title: 'Renovation Services',
    description: 'Transform legacy structures into modern masterpieces. Comprehensive home additions, workspace updates, and historic facades.',
    longDescription: 'Breathe magnificent new life into older structures. We carefully reconstruct, upgrade, and optimize existing footprints, enhancing security systems, adding premium insulation, and styling contemporary aesthetics without losing the building\'s classic charm.',
    icon: 'Hammer',
    image: IMAGES.renovation,
    features: [
      'Full home & workspace refits',
      'Historical restoration & integrity',
      'Structural reinforcement',
      'Luxury kitchen & bath upgrades',
      'Asbestos mitigation & modern insulation'
    ]
  },
  {
    id: 're-consult',
    title: 'Real Estate Consultation',
    description: 'Strategic market intelligence, land evaluation, investment reviews, and feasibility checks for developers and property buyers.',
    longDescription: 'Navigating real estate requires rigorous risk mitigation and financial foresight. We provide comprehensive consultancies regarding soil strength, building appreciation values, zoning expansions, and return on investment forecasting for premium real estate projects.',
    icon: 'Shield',
    image: IMAGES.consultation,
    features: [
      'Feasibility studies & land surveys',
      'ROI & development forecasting',
      'Cost estimation & risk models',
      'Acquisitions & legal zoning checks',
      'Sustainable development guidelines'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'The Summit Corporate Tower',
    category: 'commercial',
    categoryLabel: 'Commercial',
    description: 'A 24-story glass marvel featuring a dynamic architectural double-skin facade and a zero-energy carbon footprint.',
    image: IMAGES.commercial,
    location: 'Global Financial District, Sec III',
    year: '2025',
    area: '124,000 sq ft',
    client: 'Summit Group Corp',
    details: [
      'Full glass exterior double glazing with solar-heat protection',
      'Smart building occupancy sensors saving 35% on AC load',
      'Premium triple-height marble atrium lobby with custom waterfall feature',
      'Multi-tier workspace configurations with soundproof acoustic micro-pods'
    ]
  },
  {
    id: 'proj-2',
    title: 'Aura Luxury Waterfront Villa',
    category: 'residential',
    categoryLabel: 'Residential',
    description: 'An elite dual-level residence blending premium poured-concrete, custom teak wood panels, and frameless slide-open viewports.',
    image: IMAGES.residential,
    location: 'Emerald Bay Shoreline',
    year: '2024',
    area: '7,400 sq ft',
    client: 'The Bhan Family Estate',
    details: [
      'Seismic-resistant steel reinforced skeleton structure',
      'Seamless transition to an outdoor infinity pool deck and outdoor flame lounge',
      'Imported high-performance Calacatta marble slab walls in living and wet rooms',
      'Fully automated Crestron smart home environment for climate & security'
    ]
  },
  {
    id: 'proj-3',
    title: 'Minimalist Charcoal Penthouse',
    category: 'interior',
    categoryLabel: 'Interior Design',
    description: 'An expansive design using dark wood textures, custom ambient gold accent rails, and modern architectural light troughs.',
    image: IMAGES.interior,
    location: 'Skyline Residence Boulevard',
    year: '2025',
    area: '3,800 sq ft',
    client: 'Avery & Claire Sterling',
    details: [
      'Custom fluted walnut wood wall wraps with integrated hidden doors',
      'Architectural lighting plan utilizing warm-dimming LED recess spots',
      'Handcrafted gold accents, premium copper hardware, and plush silk carpets',
      'Smart glass partition toggles between sheer opaque security and full transparent views'
    ]
  },
  {
    id: 'proj-4',
    title: 'The Emerald Sanctuary House',
    category: 'residential',
    categoryLabel: 'Construction & Architecture',
    description: 'A structural feat leveraging heavy steel cantilevers to create deep shaded verandas on a challenging sloping lot landscape.',
    image: IMAGES.heroBg,
    location: 'Hillside Reserve Sanctuary',
    year: '2024',
    area: '8,200 sq ft',
    client: 'Noveau Trust Holdings',
    details: [
      'Cantilever foundation pier engineering embedded 45 feet in solid rock',
      'Serrated glass roof panels allowing diffused natural morning sunlight to bathe the core',
      'Off-grid capability with integrated solar battery arrays and rainwater harvesting',
      'Award winner for Sustainable Architecture Excellence (2024)'
    ]
  },
  {
    id: 'proj-5',
    title: 'Elysium Executive Lounge',
    category: 'interior',
    categoryLabel: 'Interior Design',
    description: 'Premium redesign of an executive club including private cigar rooms, deep velour armchairs, and golden brass accenting.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    location: 'Grand Plaza Towers',
    year: '2025',
    area: '5,500 sq ft',
    client: 'Elysium Club Inc',
    details: [
      'Bespoke luxury bar clad in continuous rare goldvein black marble',
      'Custom acoustic felt ceiling panels molded to suppress excessive high frequencies',
      'Luxurious private booths with individual dimmable brass halo pendant lamps',
      'High-grade leather and suede panel wall trims with sound isolation properties'
    ]
  },
  {
    id: 'proj-6',
    title: 'Metro Center Retail Pavilion',
    category: 'commercial',
    categoryLabel: 'Commercial & Renovation',
    description: 'A gorgeous retrofit of a mid-century brick factory transformed into a premium, airy, multi-tenant luxury shopping space.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    location: 'Old Port Historic Mill',
    year: '2026',
    area: '32,000 sq ft',
    client: 'Millennium Retail Partners',
    details: [
      'Complete seismic steel reinforcement of historic red brick walls',
      'Installation of a massive central custom steel-framed glass atrium canopy',
      'Polished radiant concrete floor heating throughout all shop fronts',
      'Integrated indoor bio-philic vertical green living wall with automated drip feeds'
    ]
  }
];

export const STATS: StatItem[] = [
  {
    id: 'stat-projects',
    value: 280,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Masterfully built structures across commercial, retail, residential, and corporate sectors'
  },
  {
    id: 'stat-clients',
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Undivided dedication to precise timelines, premium finishes, and transparent pricing model'
  },
  {
    id: 'stat-experience',
    value: 18,
    suffix: ' Yrs',
    label: 'Years of Excellence',
    description: 'Delivering stellar architectural designs and reliable development experience since 2008'
  },
  {
    id: 'stat-team',
    value: 45,
    suffix: '+',
    label: 'Expert Craftsmen',
    description: 'A vetted coalition of visionary architects, structural engineers, and interior stylists'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajen Bhan',
    role: 'Managing Director',
    company: 'Prime Global Developments',
    comment: 'Working with Bhan’s Construction changed our business trajectory. They executed the Summit Corporate Tower precisely as planned. Total transparency, structural perfection, and outstanding elite aesthetics.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'test-2',
    name: 'Sophia Montgomery',
    role: 'Homeowner',
    company: 'Aura Waterfront Estate',
    comment: 'The architectural design team is simply matchless! They took my abstract mood boards and delivered our beachfront villa that genuinely feels like a five-star luxury retreat. Their attention to detail on steel framing and marble finishes is phenomenal.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'test-3',
    name: 'Marcus Wood',
    role: 'Investment Portfolio Officer',
    company: 'Bhan Properties Group',
    comment: 'Exceptional partners for real estate consultancy and design. They did complete site drillings, zoning reviews, and cost analytics that saved our investment group over $1.4M in potential regulatory fees.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Devraj Bhan',
    role: 'Chief Executive Architect',
    specialty: 'Contemporary Luxury Villas & Urban Planning',
    experience: '20 Years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Devraj founded Bhan’s Construction with a core belief: sustainable steel, wood, and glass can create high-vibe spaces of timeless elegance. He oversees structural design direction and land masterplans.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 'team-2',
    name: 'Aria Sengupta',
    role: 'Lead Interior Stylist',
    specialty: 'Bespoke Residential, Premium Material Curation',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Aria curates the visual mood, textured materials, and layout systems of our interiors. Her design signature relies on integrating warm natural light with bold marble and minimal gold hardware.',
    socials: {
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 'team-3',
    name: 'Vikram Grover',
    role: 'Senior Project Manager',
    specialty: 'Commercial Phased Build, Supply Optimization',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Vikram controls scheduling, safety management, materials supply, and client budgets. His rigorous adherence to milestones guarantees projects are handed over on time and on budget.',
    socials: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 'team-4',
    name: 'Kabir Thapar',
    role: 'Chief Structural Engineer',
    specialty: 'High-rise Framing, High-load Concrete Seismic Design',
    experience: '14 Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Kabir validates everything structurally. He ensures our complex cantilever villas and high-rise commercial structures stand safe under high-seismic active conditions and harsh coastal winds.',
    socials: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

// Central content for Khidma — On-Demand Home Services marketing site + ops console demo

export const stats = [
  { value: '2,400', em: '+', label: 'Service bookings fulfilled every month' },
  { value: '850', em: '+', label: 'Verified home professionals onboarded' },
  { value: '4.8', em: '★', label: 'Average customer rating across jobs' },
  { value: '94%', label: 'Jobs completed on schedule' },
]

export const challenges = [
  {
    icon: 'navigation',
    title: 'Real-time provider availability',
    text: 'Knowing which professionals were free across every category and area, at any moment, was error-prone and manual.',
  },
  {
    icon: 'calendar',
    title: 'Conflicts at peak demand',
    text: 'Overlapping requests on evenings and weekends led to double-bookings, delays, and frustrated customers.',
  },
  {
    icon: 'chat',
    title: 'Fragmented status updates',
    text: 'Customers and providers had no shared, live view of a job — from confirmation to completion.',
  },
  {
    icon: 'card',
    title: 'Payment reliability & security',
    text: 'Collecting and reconciling payments across thousands of small jobs strained trust on both sides.',
  },
  {
    icon: 'gauge',
    title: 'Performance under load',
    text: 'Rising request volumes slowed the platform exactly when demand — and expectations — peaked.',
  },
  {
    icon: 'layers',
    title: 'Expanding categories & regions',
    text: 'Every new service type and emirate multiplied operational and coordination complexity.',
  },
]

export const solutionPoints = [
  {
    title: 'Service-oriented architecture',
    text: 'Independent booking, provider, payment, and notification services — built to scale and simple to extend.',
  },
  {
    title: 'Real-time synchronization',
    text: 'Job status stays in sync across customers, providers, and operations, removing manual coordination.',
  },
  {
    title: 'Location-aware dispatch',
    text: 'Professionals assigned by proximity and availability, so customers get faster arrivals.',
  },
  {
    title: 'Engineered to scale',
    text: 'Reliable, maintainable foundations as the marketplace grows into new regions and categories.',
  },
]

export const workflowSteps = [
  { n: '1', title: 'Customer books a service', sub: 'Category, time slot, address & payment captured in seconds' },
  { n: '2', title: 'Smart provider matching', sub: 'Nearest available, top-rated professional assigned automatically' },
  { n: '3', title: 'Live job tracking', sub: 'Both sides follow status from en route to completed' },
  { n: '4', title: 'Payment & review', sub: 'Secure in-app payment, then a rating that feeds provider scores' },
]

export const features = [
  {
    icon: 'calendar',
    title: 'Real-Time Service Booking',
    text: 'Customers book any service — now or scheduled — with instant slot confirmation.',
  },
  {
    icon: 'navigation',
    title: 'Provider Availability',
    text: 'Live availability across categories, areas, and shifts keeps supply matched to demand.',
  },
  {
    icon: 'pin',
    title: 'GPS-Based Assignment',
    text: 'Jobs routed to the nearest qualified professional to minimise arrival time.',
  },
  {
    icon: 'gauge',
    title: 'Live Job Status Tracking',
    text: 'En route, in progress, completed — synced to every stakeholder in real time.',
  },
  {
    icon: 'card',
    title: 'Integrated Online Payments',
    text: 'Secure card and wallet payments with automatic reconciliation and payouts.',
  },
  {
    icon: 'chat',
    title: 'In-App Chat',
    text: 'Customers and providers coordinate directly — no personal numbers shared.',
  },
  {
    icon: 'star',
    title: 'Ratings & Reviews',
    text: 'Every completed job builds a trusted, transparent provider reputation.',
  },
  {
    icon: 'wallet',
    title: 'Earnings Dashboard',
    text: 'Professionals track jobs, earnings, and payouts — all in one place.',
  },
]

export const modules = [
  {
    key: 'booking',
    tab: 'Booking',
    icon: 'calendar',
    badge: 'Customer App',
    title: 'Booking that takes seconds',
    text: 'Customers pick a service, choose a slot, and confirm — with transparent pricing and instant confirmation for now or later.',
    points: [
      'Any service booked on-demand or scheduled',
      'Transparent, upfront pricing per category',
      'Saved addresses and one-tap rebooking',
      'Instant confirmation and reminders',
    ],
    visual: 'booking',
  },
  {
    key: 'providers',
    tab: 'Providers',
    icon: 'users',
    badge: 'Provider App',
    title: 'Availability, matched to demand',
    text: 'Professionals set their availability and receive nearby jobs that fit their skills — keeping supply balanced against real-time demand.',
    points: [
      'Set availability, shifts & service areas',
      'Skill-based, proximity-aware job offers',
      'Accept, navigate, and update in one app',
      'Live earnings and payout visibility',
    ],
    visual: 'providers',
  },
  {
    key: 'payments',
    tab: 'Payments',
    icon: 'card',
    badge: 'Payments',
    title: 'Secure payments, automatic payouts',
    text: 'Every job is paid in-app with automatic reconciliation, so customers pay with confidence and professionals get paid on time.',
    points: [
      'Card, Apple Pay & wallet checkout',
      'Automatic reconciliation per job',
      'Scheduled payouts to providers',
      'Refunds and disputes handled cleanly',
    ],
    visual: 'payments',
  },
  {
    key: 'tracking',
    tab: 'Live Tracking',
    icon: 'navigation',
    badge: 'Operations',
    title: 'Every job, tracked in real time',
    text: 'A single live view of each job — from dispatch to completion — synced across the customer, the provider, and the operations team.',
    points: [
      'Real-time status: en route → in progress → done',
      'Live location and accurate ETAs',
      'In-app chat between both sides',
      'Operations visibility across every active job',
    ],
    visual: 'tracking',
  },
]

// ============================================================
//  Operations console demo data
// ============================================================

export const dashNav = [
  { key: 'overview', label: 'Overview', icon: 'grid' },
  { key: 'bookings', label: 'Bookings', icon: 'calendar', badge: '14' },
  { key: 'dispatch', label: 'Live Dispatch', icon: 'navigation', badge: '5' },
  { key: 'providers', label: 'Providers', icon: 'users' },
  { key: 'payments', label: 'Payments', icon: 'card' },
  { key: 'reviews', label: 'Reviews', icon: 'star' },
  { key: 'analytics', label: 'Analytics', icon: 'chart' },
]

// Per-view KPI cards
export const kpisByView = {
  overview: [
    { label: 'Bookings Today', value: '168', trend: '+12%', up: true, icon: 'calendar', color: 'brand' },
    { label: 'Live Jobs', value: '42', trend: '5 dispatching', up: false, icon: 'navigation', color: 'coral' },
    { label: 'Providers Online', value: '214', trend: '+18', up: true, icon: 'users', color: 'teal' },
    { label: 'Revenue (Jul)', value: 'AED 486K', trend: '+9.4%', up: true, icon: 'card', color: 'violet' },
  ],
  bookings: [
    { label: 'Open Bookings', value: '14', trend: '3 urgent', up: false, icon: 'calendar', color: 'coral' },
    { label: 'Scheduled', value: '58', trend: 'This week', up: true, icon: 'clock', color: 'brand' },
    { label: 'Completed (Jul)', value: '1,240', trend: '+14%', up: true, icon: 'check', color: 'teal' },
    { label: 'Avg. Booking Value', value: 'AED 214', trend: '+6%', up: true, icon: 'card', color: 'violet' },
  ],
  dispatch: [
    { label: 'Awaiting Dispatch', value: '5', trend: '2 high priority', up: false, icon: 'navigation', color: 'coral' },
    { label: 'En Route', value: '11', trend: 'Live now', up: true, icon: 'truck', color: 'brand' },
    { label: 'In Progress', value: '19', trend: 'Active now', up: true, icon: 'wrench', color: 'teal' },
    { label: 'Avg. Dispatch Time', value: '24m', trend: '−31%', up: true, icon: 'clock', color: 'violet' },
  ],
  providers: [
    { label: 'Active Providers', value: '850', trend: '+9 new', up: true, icon: 'users', color: 'brand' },
    { label: 'Pending Onboarding', value: '12', trend: 'In review', up: false, icon: 'clock', color: 'coral' },
    { label: 'Avg. Rating', value: '4.8', trend: '+0.1', up: true, icon: 'star', color: 'teal' },
    { label: 'Categories', value: '8', trend: 'Covered', up: true, icon: 'layers', color: 'violet' },
  ],
  payments: [
    { label: 'Processed (Jul)', value: 'AED 486K', trend: '+9.4%', up: true, icon: 'card', color: 'brand' },
    { label: 'Pending Payouts', value: 'AED 62K', trend: 'To 84 pros', up: false, icon: 'wallet', color: 'coral' },
    { label: 'Refunds (Jul)', value: 'AED 3.1K', trend: '11 cases', up: false, icon: 'trending', color: 'teal' },
    { label: 'Success Rate', value: '98.6%', trend: '+0.4%', up: true, icon: 'gauge', color: 'violet' },
  ],
  reviews: [
    { label: 'Avg. Rating', value: '4.8', trend: '+0.1', up: true, icon: 'star', color: 'brand' },
    { label: '5-Star Jobs', value: '78%', trend: '+3%', up: true, icon: 'heart', color: 'coral' },
    { label: 'Reviews (Jul)', value: '1,120', trend: '+15%', up: true, icon: 'chat', color: 'teal' },
    { label: 'Response Rate', value: '92%', trend: 'To feedback', up: true, icon: 'check', color: 'violet' },
  ],
  analytics: [
    { label: 'Revenue (YTD)', value: 'AED 4.2M', trend: '+22%', up: true, icon: 'card', color: 'brand' },
    { label: 'Bookings (YTD)', value: '18.6K', trend: '+17%', up: true, icon: 'calendar', color: 'teal' },
    { label: 'Repeat Customers', value: '61%', trend: '+5%', up: true, icon: 'heart', color: 'coral' },
    { label: 'On-Time Rate', value: '94%', trend: '+3%', up: true, icon: 'gauge', color: 'violet' },
  ],
}

// Bookings — full table
export const dashBookings = [
  { id: 'BK-8041', service: 'Deep home cleaning (3BR)', cat: 'Deep Cleaning', area: 'Dubai Marina', customer: 'Aisha Rahman', provider: 'Sparkle Home Cleaning', slot: '15 Jul · 10:00', amount: 'AED 320', status: 'In Progress', s: 'warning' },
  { id: 'BK-8040', service: 'AC servicing — 4 units', cat: 'AC Service & Repair', area: 'Business Bay', customer: 'Omar Haddad', provider: 'CoolBreeze AC Experts', slot: '15 Jul · 11:30', amount: 'AED 260', status: 'En Route', s: 'info' },
  { id: 'BK-8039', service: 'Leaking kitchen sink repair', cat: 'Plumbing', area: 'JLT', customer: 'Sara Khan', provider: 'FlowFix Plumbing', slot: '15 Jul · 09:00', amount: 'AED 180', status: 'Completed', s: 'success' },
  { id: 'BK-8038', service: 'Light fixture installation', cat: 'Electrical', area: 'Al Barsha', customer: 'Yousef Idris', provider: 'BrightSpark Electric', slot: '15 Jul · 14:00', amount: 'AED 150', status: 'Scheduled', s: 'info' },
  { id: 'BK-8037', service: 'Full apartment painting', cat: 'Painting', area: 'Jumeirah', customer: 'Layla Nasser', provider: 'ProPaint UAE', slot: '16 Jul · 08:00', amount: 'AED 1,450', status: 'Scheduled', s: 'info' },
  { id: 'BK-8036', service: 'Furniture assembly', cat: 'Handyman', area: 'Downtown Dubai', customer: 'Khalid Rashed', provider: 'HandyHeroes', slot: '14 Jul · 16:30', amount: 'AED 120', status: 'Completed', s: 'success' },
  { id: 'BK-8035', service: 'Pest control — full unit', cat: 'Pest Control', area: 'Deira', customer: 'Fatima Zahra', provider: 'ShieldPest Control', slot: '14 Jul · 13:00', amount: 'AED 240', status: 'Completed', s: 'success' },
  { id: 'BK-8034', service: 'Bridal salon at home', cat: 'Salon at Home', area: 'Abu Dhabi', customer: 'Noura Ali', provider: 'GlamHome Salon', slot: '16 Jul · 15:00', amount: 'AED 560', status: 'Scheduled', s: 'info' },
  { id: 'BK-8033', service: 'Sofa & carpet shampoo', cat: 'Deep Cleaning', area: 'Dubai Marina', customer: 'Daniel Meyer', provider: 'Sparkle Home Cleaning', slot: '14 Jul · 12:00', amount: 'AED 290', status: 'Completed', s: 'success' },
  { id: 'BK-8032', service: 'AC gas top-up', cat: 'AC Service & Repair', area: 'Al Barsha', customer: 'Hassan Ali', provider: 'CoolBreeze AC Experts', slot: '13 Jul · 17:00', amount: 'AED 200', status: 'Cancelled', s: 'danger' },
  { id: 'BK-8031', service: 'Water heater replacement', cat: 'Plumbing', area: 'Business Bay', customer: 'Mariam Fouad', provider: 'FlowFix Plumbing', slot: '13 Jul · 10:30', amount: 'AED 640', status: 'Completed', s: 'success' },
  { id: 'BK-8030', service: 'DB board fault check', cat: 'Electrical', area: 'JLT', customer: 'Peter Novak', provider: 'BrightSpark Electric', slot: '13 Jul · 09:30', amount: 'AED 170', status: 'Completed', s: 'success' },
  { id: 'BK-8029', service: 'Wall touch-up & filling', cat: 'Painting', area: 'Jumeirah', customer: 'Reem Saleh', provider: 'ProPaint UAE', slot: '12 Jul · 11:00', amount: 'AED 380', status: 'Completed', s: 'success' },
  { id: 'BK-8028', service: 'TV wall mounting', cat: 'Handyman', area: 'Downtown Dubai', customer: 'Ahmed Mansoori', provider: 'HandyHeroes', slot: '12 Jul · 18:00', amount: 'AED 140', status: 'Completed', s: 'success' },
]

// Live dispatch queue — jobs awaiting a provider
export const dashDispatch = [
  { id: 'BK-8045', customer: 'Huda Kamal', service: 'Emergency AC not cooling', cat: 'AC Service & Repair', area: 'Dubai Marina', nearest: 'CoolBreeze AC Experts · 1.4 km', amount: 'AED 260', priority: 'High priority', color: '#5a3df0' },
  { id: 'BK-8046', customer: 'James Carter', service: 'Blocked bathroom drain', cat: 'Plumbing', area: 'Business Bay', nearest: 'FlowFix Plumbing · 2.1 km', amount: 'AED 190', priority: 'High priority', color: '#2f9e6f' },
  { id: 'BK-8047', customer: 'Salma Yousuf', service: 'Same-day deep cleaning', cat: 'Deep Cleaning', area: 'JLT', nearest: 'Sparkle Home Cleaning · 0.9 km', amount: 'AED 320', priority: 'Standard', color: '#17b9a6' },
  { id: 'BK-8048', customer: 'Rohan Mehta', service: 'Power socket sparking', cat: 'Electrical', area: 'Al Barsha', nearest: 'BrightSpark Electric · 3.0 km', amount: 'AED 150', priority: 'Standard', color: '#f5a623' },
  { id: 'BK-8049', customer: 'Amira Fahad', service: 'Cockroach treatment', cat: 'Pest Control', area: 'Deira', nearest: 'ShieldPest Control · 2.6 km', amount: 'AED 220', priority: 'Standard', color: '#0e9aa7' },
]

// Providers directory
export const dashProviders = [
  { name: 'Sparkle Home Cleaning', cat: 'Deep Cleaning', area: 'Dubai Marina', rating: 4.9, jobs: 320, earnings: 'AED 128K', status: 'Verified', s: 'success', color: '#17b9a6' },
  { name: 'CoolBreeze AC Experts', cat: 'AC Service & Repair', area: 'Business Bay', rating: 4.8, jobs: 245, earnings: 'AED 96K', status: 'Verified', s: 'success', color: '#5a3df0' },
  { name: 'FlowFix Plumbing', cat: 'Plumbing', area: 'JLT', rating: 4.8, jobs: 198, earnings: 'AED 74K', status: 'Verified', s: 'success', color: '#2f9e6f' },
  { name: 'BrightSpark Electric', cat: 'Electrical', area: 'Al Barsha', rating: 4.7, jobs: 176, earnings: 'AED 61K', status: 'Verified', s: 'success', color: '#f5a623' },
  { name: 'ProPaint UAE', cat: 'Painting', area: 'Jumeirah', rating: 4.7, jobs: 142, earnings: 'AED 88K', status: 'Verified', s: 'success', color: '#ee5da8' },
  { name: 'HandyHeroes', cat: 'Handyman', area: 'Downtown Dubai', rating: 4.6, jobs: 210, earnings: 'AED 52K', status: 'Verified', s: 'success', color: '#ff6a3d' },
  { name: 'ShieldPest Control', cat: 'Pest Control', area: 'Deira', rating: 4.8, jobs: 118, earnings: 'AED 44K', status: 'Verified', s: 'success', color: '#0e9aa7' },
  { name: 'GlamHome Salon', cat: 'Salon at Home', area: 'Abu Dhabi', rating: 4.9, jobs: 96, earnings: 'AED 71K', status: 'Verified', s: 'success', color: '#8a5cf6' },
  { name: 'FreshNest Cleaners', cat: 'Deep Cleaning', area: 'Sharjah', rating: 4.4, jobs: 61, earnings: 'AED 22K', status: 'Review', s: 'warning', color: '#5b6b88' },
  { name: 'Prime Cool Systems', cat: 'AC Service & Repair', area: 'Al Nahda', rating: 4.2, jobs: 18, earnings: 'AED 7K', status: 'Onboarding', s: 'info', color: '#e0a94a' },
]

// Payments / transactions
export const dashPayments = [
  { id: 'PAY-30871', booking: 'BK-8039', customer: 'Sara Khan', provider: 'FlowFix Plumbing', method: 'Apple Pay', date: '15 Jul 2026', amount: 'AED 180', status: 'Paid', s: 'success' },
  { id: 'PAY-30870', booking: 'BK-8036', customer: 'Khalid Rashed', provider: 'HandyHeroes', method: 'Card', date: '14 Jul 2026', amount: 'AED 120', status: 'Paid', s: 'success' },
  { id: 'PAY-30869', booking: 'BK-8035', customer: 'Fatima Zahra', provider: 'ShieldPest Control', method: 'Wallet', date: '14 Jul 2026', amount: 'AED 240', status: 'Payout Pending', s: 'warning' },
  { id: 'PAY-30868', booking: 'BK-8033', customer: 'Daniel Meyer', provider: 'Sparkle Home Cleaning', method: 'Card', date: '14 Jul 2026', amount: 'AED 290', status: 'Paid', s: 'success' },
  { id: 'PAY-30867', booking: 'BK-8032', customer: 'Hassan Ali', provider: 'CoolBreeze AC Experts', method: 'Card', date: '13 Jul 2026', amount: 'AED 200', status: 'Refunded', s: 'danger' },
  { id: 'PAY-30866', booking: 'BK-8031', customer: 'Mariam Fouad', provider: 'FlowFix Plumbing', method: 'Apple Pay', date: '13 Jul 2026', amount: 'AED 640', status: 'Paid', s: 'success' },
  { id: 'PAY-30865', booking: 'BK-8030', customer: 'Peter Novak', provider: 'BrightSpark Electric', method: 'Wallet', date: '13 Jul 2026', amount: 'AED 170', status: 'Paid', s: 'success' },
  { id: 'PAY-30864', booking: 'BK-8028', customer: 'Ahmed Mansoori', provider: 'HandyHeroes', method: 'Card', date: '12 Jul 2026', amount: 'AED 140', status: 'Processing', s: 'info' },
]

// Reviews
export const dashReviews = [
  { id: 'RV-471', customer: 'Sara Khan', service: 'Plumbing', provider: 'FlowFix Plumbing', rating: 5, date: '15 Jul 2026', comment: 'Arrived early, fixed the leak fast, spotless afterwards.' },
  { id: 'RV-470', customer: 'Khalid Rashed', service: 'Handyman', provider: 'HandyHeroes', rating: 5, date: '14 Jul 2026', comment: 'Assembled everything perfectly and cleaned up. Great value.' },
  { id: 'RV-469', customer: 'Fatima Zahra', service: 'Pest Control', provider: 'ShieldPest Control', rating: 4, date: '14 Jul 2026', comment: 'Thorough treatment, professional. Slight delay on arrival.' },
  { id: 'RV-468', customer: 'Daniel Meyer', service: 'Deep Cleaning', provider: 'Sparkle Home Cleaning', rating: 5, date: '14 Jul 2026', comment: 'The sofa looks brand new. Booking again next month.' },
  { id: 'RV-467', customer: 'Mariam Fouad', service: 'Plumbing', provider: 'FlowFix Plumbing', rating: 5, date: '13 Jul 2026', comment: 'Replaced the heater cleanly and explained everything.' },
  { id: 'RV-466', customer: 'Hassan Ali', service: 'AC Service', provider: 'CoolBreeze AC Experts', rating: 3, date: '13 Jul 2026', comment: 'Job was fine but had to reschedule once. Support helped.' },
  { id: 'RV-465', customer: 'Peter Novak', service: 'Electrical', provider: 'BrightSpark Electric', rating: 5, date: '13 Jul 2026', comment: 'Diagnosed the fault quickly and safely. Very reassuring.' },
  { id: 'RV-464', customer: 'Reem Saleh', service: 'Painting', provider: 'ProPaint UAE', rating: 4, date: '12 Jul 2026', comment: 'Neat finish and tidy. Would recommend for touch-ups.' },
]

export const bookingsByCategory = [
  { label: 'Cleaning', value: 34, color: '#17b9a6' },
  { label: 'AC & Cooling', value: 22, color: '#5a3df0' },
  { label: 'Plumbing', value: 16, color: '#2f9e6f' },
  { label: 'Electrical', value: 12, color: '#f5a623' },
  { label: 'Handyman', value: 9, color: '#ff6a3d' },
  { label: 'Other', value: 7, color: '#8493ad' },
]

export const topProviders = [
  { name: 'Sparkle Home Cleaning', cat: 'Deep Cleaning', rating: 4.9, jobs: 320, earnings: 'AED 128K', color: '#17b9a6' },
  { name: 'GlamHome Salon', cat: 'Salon at Home', rating: 4.9, jobs: 96, earnings: 'AED 71K', color: '#8a5cf6' },
  { name: 'CoolBreeze AC Experts', cat: 'AC Service & Repair', rating: 4.8, jobs: 245, earnings: 'AED 96K', color: '#5a3df0' },
  { name: 'FlowFix Plumbing', cat: 'Plumbing', rating: 4.8, jobs: 198, earnings: 'AED 74K', color: '#2f9e6f' },
]

// Revenue trend — rolling 6 months (AED thousands)
export const revenueTrend = [
  { m: 'Feb', v: 312 },
  { m: 'Mar', v: 358 },
  { m: 'Apr', v: 341 },
  { m: 'May', v: 402 },
  { m: 'Jun', v: 448 },
  { m: 'Jul', v: 486 },
]

// Options for the "New Booking" form
export const serviceCategories = [
  'Deep Cleaning', 'AC Service & Repair', 'Plumbing', 'Electrical',
  'Painting', 'Handyman', 'Pest Control', 'Salon at Home',
]
export const serviceAreas = [
  'Dubai Marina', 'Downtown Dubai', 'Business Bay', 'JLT',
  'Al Barsha', 'Jumeirah', 'Deira', 'Abu Dhabi',
]
export const providersList = [
  'Auto-match nearest', 'Sparkle Home Cleaning', 'CoolBreeze AC Experts', 'FlowFix Plumbing',
  'BrightSpark Electric', 'ProPaint UAE', 'HandyHeroes', 'ShieldPest Control', 'GlamHome Salon',
]

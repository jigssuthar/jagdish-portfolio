import SectionTitle from './SectionTitle'

const roles = [
	{
		title: 'Software Engineer | Freelancer',
		date: 'October 2025 - Present',
		projects: [
			{
				name: 'DineCentral - Hospitality Management SaaS',
				link: 'lightsteelblue-okapi-465977.hostingersite.com',
				details: ['Developed a centralized SaaS platform for restaurants, hotels, cafés, and other hospitality businesses to manage daily operations, orders, reservations, staff, inventory, QR ordering, and customer relationships.', 'Built POS and billing, table QR ordering, kitchen display and waiter service tools, menu and inventory management, analytics, multi-branch operations, subscription plans, and role-based access.']
			},
			{
				name: 'Kunj Creation - E-commerce Platform',
				link: 'kunjcreation.co.in',
				details: ['Developed a responsive e-commerce website for Laddu Gol Darsses and devotional accessories, including product catalog, categories, collections, cart, wishlist, checkout, and order workflows.', 'Implemented a mobile-first storefront, admin management features, payment/order handling, SEO-ready pages, and production deployment.']
			},
			{
				name: 'Speed24News - Digital News Portal',
				link: 'speed24news.in',
				details: ['Built and launched a responsive Hindi news portal with category-based publishing, breaking news, trending content, advertisements, search, and SEO-friendly article pages.', 'Implemented content-management workflows, media handling, social sharing, performance optimization, and ongoing production support.']
			}
		]
	},
	{
		title: 'Software Engineer | Crenship Technology, Ahmedabad',
		date: 'January 2025 - September 2025',
		projects: [{
			name: 'Shipping & Customs Management Platform',
			details: ['Developed and maintained a Laravel 12 shipping and customs web application using Blade, reusable modules, validation, and secure role-based workflows.', 'Created and documented REST APIs for a mobile application, maintained Postman collections, and integrated third-party services.', 'Improved application reliability through debugging, query optimization, testing, and production issue resolution.']
		}]
	},
	{
		title: 'Laravel Developer | Work 24, Ahmedabad',
		date: 'August 2022 - January 2025',
		projects: [
			{ name: 'ERP Software', details: ['Contributed to modular ERP workflows for business operations, including role-based access, customer and employee records, reporting, dashboards, and reusable administration features.'] },
			{ name: 'E-commerce Platform', details: ['Developed product, category, cart, order, payment, customer, and admin modules; integrated REST APIs and third-party payment services for smooth transactions and data flow.'] },
			{ name: 'Hospital Management System', details: ['Worked on patient registration, appointment, doctor, billing, and administrative workflows with validation, secure access, database integration, testing, and production support.'] }
		]
	},
	{
		title: 'Laravel/PHP Intern | Tech Astha, Ahmedabad',
		date: 'April 2022 - August 2022',
		projects: [{ name: 'Professional Development', details: ['Gained practical experience in Laravel and PHP development, database-driven modules, API integrations, payment workflows, Git, testing, and deployment.'] }]
	}
]

export default function Experience() {
	return <section id="experience" className="section"><div className="container"><SectionTitle tag="Experience" title="Four years of building for the web."/><div className="resume-experience">{roles.map(role => <article className="resume-role" key={role.title}><header><h3>{role.title}</h3><span>{role.date}</span></header>{role.projects.map(project => <div className="resume-project" key={project.name}><h4>{project.link ? <a href={`https://${project.link}`} target="_blank" rel="noreferrer">{project.name}</a> : project.name}</h4><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>)}</article>)}</div></div></section>
}

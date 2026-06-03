import { FormEvent, useEffect, useState } from 'react';

const navigation = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

const skills = [
  { title: 'Frontend', details: 'React, TypeScript, Tailwind, responsive UI, polished interactions' },
  { title: 'Backend', details: 'Node.js, Express, PHP, REST APIs, authentication, microservices' },
  { title: 'Databases', details: 'MySQL, PostgreSQL, MongoDB, data modeling, optimized queries' },
  { title: 'Programming', details: 'Java, Python, C, JavaScript, clean architecture and scalable systems' }
];

const projects = [
  {
    title: 'Interactive Calculator',
    summary: 'A polished calculator experience designed for clarity, speed, and responsiveness.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://b-a-d-tech.github.io/Calculatrice/',
    status: 'Updated recently'
  },
  {
    title: 'Salon Booking Website',
    summary: 'A high-conversion website built for appointment flow and visual appeal.',
    tags: ['HTML', 'CSS'],
    link: 'https://github.com/B-A-D-TECH/mini-projet',
    status: 'Designed for clients'
  },
  {
    title: 'Poetry + Book Platform',
    summary: 'A creative publishing platform that combines content storytelling with library structure.',
    tags: ['HTML', 'CSS', 'PHP'],
    link: 'https://b-a-d-tech.github.io/Po-me/',
    status: 'Creatively built'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageSent(true);
    event.currentTarget.reset();
    window.setTimeout(() => setMessageSent(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_28%),var(--tw-bg-opacity)] bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <header className="sticky top-0 z-30 rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-soft dark:border-slate-700/50 dark:bg-slate-950/95">
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
            <div className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Badra Aliou Diarra</div>
            <nav className={`flex items-center gap-6 transition-all ${menuOpen ? 'block' : 'hidden'} w-full md:inline-flex md:w-auto`}>
              {navigation.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-soft transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(open => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-soft transition hover:-translate-y-0.5 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                aria-label="Toggle navigation"
              >
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'translate-y-px rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : 'my-1'}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? '-translate-y-px -rotate-45' : ''}`} />
              </button>
            </div>
          </div>
        </header>

        <main className="space-y-20 pt-8 lg:pt-12">
          <section id="hero" className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                Full-Stack Developer • Modern web apps • Clean architecture
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                I build scalable web applications that help teams ship reliably.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I deliver high-impact frontend and backend solutions using React, Node.js, Java, and MySQL. My focus is polished UI, strong architecture, and production-ready performance.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-1 hover:bg-sky-800">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-soft backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90">
              <div className="mb-6 inline-flex rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                Featured Skill
              </div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">React + Node.js</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Building end-to-end experiences with modern frontend interfaces, robust APIs, and maintainable data systems.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-5 text-center dark:bg-slate-800">
                  <p className="text-3xl font-semibold text-slate-900 dark:text-white">2+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Years</p>
                </div>
                <div className="rounded-3xl bg-slate-100 p-5 text-center dark:bg-slate-800">
                  <p className="text-3xl font-semibold text-slate-900 dark:text-white">5+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Projects</p>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                Featured Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Projects that demonstrate product-quality development.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map(project => (
                <article key={project.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                      {project.status}
                    </span>
                  </div>
                  <p className="mb-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-sky-700 transition hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100">
                    Explore project →
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="space-y-8 rounded-[2rem] border border-slate-200 bg-sky-50/80 p-8 dark:border-slate-700 dark:bg-slate-900/80">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                Skills
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Technical strengths for modern product development.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skills.map(skill => (
                <div key={skill.title} className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{skill.title}</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">{skill.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="space-y-8">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                About
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Building products with performance and clarity.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900">
                <p className="text-slate-600 dark:text-slate-300 leading-8">
                  I create user-centered applications with an emphasis on performance, reliability, and clean architecture. My approach blends frontend craftsmanship, backend engineering, and database design to deliver maintainable, production-ready products.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl bg-slate-50 p-5 text-center dark:bg-slate-800">
                    <p className="text-3xl font-semibold text-slate-950 dark:text-white">5+</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Projects</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 text-center dark:bg-slate-800">
                    <p className="text-3xl font-semibold text-slate-950 dark:text-white">8</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Technologies</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 text-center dark:bg-slate-800">
                    <p className="text-3xl font-semibold text-slate-950 dark:text-white">2+</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Years</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">What I build</h3>
                <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
                  <li>Responsive web applications with strong UI/UX</li>
                  <li>REST APIs and backend services for scalable systems</li>
                  <li>Database-driven applications with reliable data flow</li>
                  <li>Minimum viable products ready for launch</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="contact" className="space-y-8">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                Contact
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Ready to collaborate on your next project.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.9fr]">
              <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900">
                <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                  Name
                  <input className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" type="text" name="name" required />
                </label>
                <label className="mt-6 block text-sm font-semibold text-slate-900 dark:text-white">
                  Email
                  <input className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" type="email" name="email" required />
                </label>
                <label className="mt-6 block text-sm font-semibold text-slate-900 dark:text-white">
                  Project brief
                  <textarea className="mt-3 min-h-[180px] w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" name="message" rows={6} required />
                </label>
                <button className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-800" type="submit">
                  {messageSent ? 'Message Sent ✓' : 'Send Message'}
                </button>
              </form>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Let’s build something great.</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                  Available for freelance and full-time roles. I enjoy working on ambitious products and delivering clean, maintainable code.
                </p>
                <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
                  <li>Email: badraaliou13@gmail.com</li>
                  <li>Phone: +212 772 172 379</li>
                  <li>Location: Casablanca, Morocco</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          © {new Date().getFullYear()} Badra Aliou Diarra. Full-Stack Developer.
        </footer>
      </div>
    </div>
  );
}

export default App;

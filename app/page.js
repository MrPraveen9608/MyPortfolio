const skills = ['Java', 'C++', 'Machine Learning', 'Web Development', 'Problem Solving']

const projects = [
  {
    title: 'Smart Study Planner (In Progress)',
    description:
      'A productivity-focused student planner to manage study goals, track consistency, and improve daily discipline.',
    status: 'Building',
  },
  {
    title: 'ML Mini Projects (In Progress)',
    description:
      'Hands-on machine learning experiments exploring model training, feature engineering, and performance comparison.',
    status: 'Researching',
  },
  {
    title: 'DSA Practice Tracker (Planned)',
    description:
      'A lightweight dashboard to track coding streaks, solved topics, and progression in data structures and algorithms.',
    status: 'Planned',
  },
]

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <nav className="nav container">
          <p className="brand">K. Praveen</p>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="hero container">
        <div>
          <p className="badge">OPEN TO INTERNSHIPS</p>
          <h1>Designing my future through code and consistency.</h1>
          <p className="lead">
            I&apos;m K. Praveen, a BTech CSIT student at Sree Datta College, Hyderabad. I&apos;m focused on building
            strong fundamentals in Java, C++, and machine learning.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="/RESUME.PRAVEEN.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p className="hero-card-title">Current Focus</p>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Java & C++ development</li>
            <li>Machine Learning basics</li>
            <li>Portfolio-grade project building</li>
          </ul>
        </div>
      </section>

      <section id="about" className="section container">
        <h2>About Me</h2>
        <p>
          I enjoy converting ideas into clean, useful products while improving one step at a time. My goal is to become
          a software engineer with a strong blend of system thinking, coding discipline, and practical ML knowledge.
        </p>
      </section>

      <section id="skills" className="section container">
        <h2>Skills</h2>
        <div className="pill-grid">
          {skills.map((skill) => (
            <span key={skill} className="pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="section container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="status">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section container contact">
        <h2>Let&apos;s Connect</h2>
        <p>Interested in collaboration, projects, or internships? Let&apos;s connect.</p>
        <div className="hero-actions">
          <a className="btn btn-secondary" href="mailto:praveenkorra9608@gmail.com">
            Email Me
          </a>
          <a className="btn btn-secondary" href="https://github.com/MrPraveen9608" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

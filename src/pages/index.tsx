import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
// import ExperienceCard from '../../components/ExperienceCard'
import WorkExperience from '../../components/WorkExperience'
import Skills from '../../components/Skills'
import Projects  from '../../components/Projects'
import Contact from '../../components/Contact'


export default function Home() {
  return (
    // <div className='snap snap-mandatory' >
      
      
      <div className=" overflow-y-scroll overflow-x-hidden  bg-[rgb(36,36,36)] text-white h-screen z-0 overflow-scroll snap-y snap-mandatory " >
      
      <Head>
        <title>MyPortfolio</title>
      </Head>
        {/* Header */}
        <Header  />

        {/* Hero */}
        <section id="hero" className='snap-start'>
          <Hero />
        </section>

        {/* About */}
        <section id="about" className='snap-start'>
          <About />
        </section>

        {/* Experience */}
        <section id="xprnc" className='snap-start'>
        <WorkExperience />
        </section>
        {/* Skills */}

        <section id="skills" className='snap-start'>
          <Skills />
        </section>

        {/*Projects*/}
        <section id="projects" className='snap-start'>
          <Projects />
        </section>

        {/* Contact Us */}
        <section id="contactUs" className='snap-start'>
          <Contact />
        </section>

    
    </div>
  )
}

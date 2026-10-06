import {
  ArrowRight,
  Brain,
  Car,
  CloudSun,
  Map,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import "./home.css";
import WavingFlag from "../components/WavingFlag";
import slFlag from "../assets/sl.jpg";


const components = [
  {
    icon: MessageCircle,
    title: "AI Conversational Travel Analyzer",
    description:
      "Understands natural-language travel requirements and generates personalized travel packages and itineraries.",
  },
  {
    icon: Brain,
    title: "Adaptive Emotion Recognition",
    description:
      "Analyzes tourist emotional responses to support a more personalized and comfortable travel experience.",
  },
  {
    icon: Car,
    title: "Smart Driver & Vehicle Safety",
    description:
      "Provides proactive driver and vehicle safety intelligence to identify risks and support safer journeys.",
  },
  {
    icon: Users,
    title: "Tourism Flow & Crowd Prediction",
    description:
      "Predicts tourism pressure and crowd conditions to support better destination and travel-flow management.",
  },
];

function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Brain size={17} />
            AI-POWERED SMART TOURISM
          </div>

          <h1>
            Intelligent Travel Support
            <span> for Sri Lanka</span>
          </h1>

          <p className="hero-description">
            TripMind LK is a next-generation AI framework designed to provide
            intelligent, personalized, and safer travel support for tourists
            exploring Sri Lanka.
          </p>

          <div className="hero-buttons">
            <a href="#research" className="btn btn-primary">
              Explore Research
              <ArrowRight size={18} />
            </a>

            <a href="#components" className="btn btn-secondary">
              View Components
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>04</strong>
              <span>AI Components</span>
            </div>

            <div>
              <strong>01</strong>
              <span>Integrated Framework</span>
            </div>

            <div>
              <strong>SL</strong>
              <span>Tourism Focus</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card main-visual-card">
            <div className="visual-icon">
              <Map size={42} />
            </div>

            <h3>TripMind LK</h3>
            <p>Intelligent Travel Framework</p>

            <div className="visual-line">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="visual-info">
              <CloudSun size={20} />
              <span>Smart Travel Intelligence</span>
            </div>

            <div className="visual-info">
              <ShieldCheck size={20} />
              <span>Safer & Personalized Journeys</span>
            </div>
          </div>

          <div className="floating-card floating-one">
            <Brain size={20} />
            <div>
              <strong>AI Intelligence</strong>
              <small>Adaptive Support</small>
            </div>
          </div>

          <div className="floating-card floating-two">
            <Map size={20} />
            <div>
              <strong>Smart Routing</strong>
              <small>Travel Optimization</small>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTRODUCTION */}
      <section className="research-section" id="research">
        <div className="section-heading">
          <span>OUR RESEARCH</span>
          <h2>Making Travel More Intelligent</h2>
          <p>
            TripMind LK integrates multiple AI-driven capabilities into a
            unified smart tourism framework to improve travel planning,
            tourist experience, safety, and tourism-flow management.
          </p>
        </div>

        <div className="research-content">
          <div className="research-text">
            <h3>Why TripMind LK?</h3>

            <p>
              Traditional travel systems often provide static recommendations
              without continuously considering tourist preferences, emotional
              responses, safety conditions, and crowd pressure.
            </p>

            <p>
              TripMind LK addresses these challenges through an integrated
              framework that combines conversational AI, emotion recognition,
              proactive safety intelligence, and tourism-flow prediction.
            </p>

            <a href="#components" className="text-link">
              Discover the framework <ArrowRight size={17} />
            </a>
          </div>

          <div className="research-highlight">
            <div className="highlight-icon">
              <Brain size={30} />
            </div>

            <h3>AI-Driven Tourism Intelligence</h3>

            <p>
              From understanding what a tourist wants to predicting tourism
              pressure, the framework supports intelligent decision-making
              throughout the travel journey.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="components-section" id="components">
        <div className="section-heading">
          <span>CORE COMPONENTS</span>
          <h2>Four Intelligent AI Components</h2>
          <p>
            TripMind LK combines four complementary research components into
            one integrated intelligent tourism framework.
          </p>
        </div>

        <div className="component-grid">
          {components.map((component, index) => {
            const Icon = component.icon;

            return (
              <article className="component-card" key={component.title}>
                <div className="component-number">
                  0{index + 1}
                </div>

                <div className="component-icon">
                  <Icon size={26} />
                </div>

                <h3>{component.title}</h3>

                <p>{component.description}</p>

                <a href="#research" className="card-link">
                  Learn more <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* CALL TO ACTION */}
<section className="cta-section">
  <WavingFlag image={slFlag} />

  <div className="cta-content">
    <span>TRIPMIND LK</span>
    <h2>Building the Future of Intelligent Tourism</h2>
    <p>
      Explore our research, system architecture, methodology, and
      intelligent tourism components.
    </p>
  </div>

  <a href="#research" className="btn btn-primary">
    Explore Research
    <ArrowRight size={18} />
  </a>
</section>
    </main>
  );
}

export default Home;
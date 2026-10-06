import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Cloud,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Map,
  MessageSquare,
  Network,
  ScanFace,
  Server,
  Smartphone,
  Workflow,
} from "lucide-react";
import "./domain.css";

const tabs = [
  { id: "literature", label: "Literature Survey" },
  { id: "gap", label: "Research Gap" },
  { id: "problem", label: "Research Problem" },
  { id: "objectives", label: "Objectives" },
  { id: "methodology", label: "Methodology" },
  { id: "technologies", label: "Technologies" },
];

const literature = [
  ["C1", "Conversational Travel Planning", "Transformer models such as BERT can extract intents and constraints from a request, and NSGA-II produces a set of trade-off packages. But itineraries are usually fixed once generated, and few systems adapt the plan during the trip or support voice interaction."],
  ["C2", "Emotion Recognition in Tourism", "Emotion is a key driver of tourist satisfaction. Existing work relies on fixed cameras or wearables, is mostly tested in laboratories, and rarely produces actionable recommendations. No reviewed system runs on the visitor's own phone."],
  ["C3", "Driver and Vehicle Safety", "Drowsiness detection from eye aspect ratio and sensor-based driving behaviour are well studied. Fleet products need installed hardware and report after the trip. Few combine driver state, vehicle condition and route risk into one proactive alert."],
  ["C4", "Tourism Flow and Crowd Prediction", "LSTM forecasting and social-force crowd models explain and predict congestion. Most work covers a single site, needs costly counting infrastructure, and stops at prediction without sending recommendations to tourists."],
  ["All", "Integrated Smart Tourism Platforms", "Smart tourism destinations are described as shared data ecosystems, but deployed systems are mostly single-purpose apps. Data stays in silos, and privacy and governance of shared data remain under-specified."],
];

const gaps = [
  ["Static, single-objective planning", "C1", "Planners generate an itinerary once and rarely trade off cost, time, interest match and comfort. They do not handle several intents in one request or support voice-first interaction."],
  ["No real-time adaptation", "C1 · C2 · C4", "Itineraries do not respond to weather, closures, crowding or the emotional state of travellers, so a good morning plan can become a poor afternoon one."],
  ["No mobile emotion recognition", "C2", "Every reviewed system uses fixed cameras or wearables. None runs on the visitor's smartphone, maps emotion to zones, models change over a visit, or detects anomalies early."],
  ["Fragmented, reactive transport safety", "C3", "Driver state, driving behaviour and route risk are treated separately, usually need installed hardware, and are not linked to the tourist journey."],
  ["Forecasting without redistribution", "C4", "Crowd forecasts are seldom turned into recommendations that reach tourists while they plan or visit, and they ignore emotional and planning signals."],
  ["No closed-loop architecture", "All", "Planning, experience sensing, transport safety and flow management are built as separate silos, so no component can use another's output."],
  ["Privacy and governance of sensitive data", "All", "Emotion, location and driver-state data are sensitive. Few designs apply consent, pseudonymous identity, on-device processing and role-based access consistently under Sri Lanka's Personal Data Protection Act, No. 9 of 2022."],
];

const subProblems = [
  ["Planning", "C1", "How can free-text and spoken requests with several intents become optimised, personalised packages that adapt in real time?"],
  ["Experience", "C2", "How can emotion recognition run on a standard smartphone, link to zones of a heritage site, and turn into recommendations?"],
  ["Safety", "C3", "How can driver state, driving behaviour, vehicle condition and route risk be combined into timely, proactive alerts?"],
  ["Flow", "C4", "How can crowding across a network of attractions be forecast and redistributed in time to matter?"],
  ["Integration", "All", "How can the four components share a data contract, identity, consent and spatial model while staying independently deployable and private?"],
];

const objectives = [
  ["Build an AI conversational travel analyser (C1)", "Extract destinations, dates, budget, group composition and interests from text and voice requests, generate ranked packages with an NSGA-II optimiser, and adapt the itinerary live through a proactive voice agent."],
  ["Develop on-device emotion recognition (C2)", "Classify seven emotions with a MobileNetV2 model on the visitor's phone, fuse the result with zone, crowd and time context, track emotional trajectories with an LSTM, and give managers a zone heatmap dashboard."],
  ["Create a proactive driver and vehicle safety system (C3)", "Detect drowsiness and distraction with the phone camera, analyse driving behaviour and vehicle condition, model route risk, and issue prioritised alerts with trip safety scores."],
  ["Optimise tourism flow and crowding (C4)", "Forecast crowding across attractions from historical, calendar, weather and live signals, and recommend alternative sites, times and routes through an operator dashboard."],
  ["Integrate the four components privately and securely", "Define a versioned data contract and event interfaces, apply consistent consent, pseudonymous identity and access control, and demonstrate at least three cross-component scenarios in a pilot."],
];

const methodology = [
  ["Research Approach and Requirements", "The work follows design science research. Requirements were gathered for tourists, drivers and destination managers, and the four components were assigned to separate team members around a shared integration layer."],
  ["Architecture and Integration Design", "A layered architecture connects the mobile app and web dashboards to the four components through a shared spatial model, versioned data contracts and an event bus, with common identity and consent handling."],
  ["Component Development", "C1 combines a transformer intent extractor, NSGA-II and an adaptive voice engine. C2 uses a quantised MobileNetV2 with late fusion and an LSTM. C3 uses face landmarks, motion sensors and a route-risk model. C4 uses time-series forecasting and an optimisation engine."],
  ["Privacy, Security and Ethics by Design", "Emotion is processed on the device, so no images are stored or transmitted. Consent, pseudonymous identity and role-based access apply across every component, and outputs are advisory, not diagnostic."],
  ["Implementation and Testing", "Services are built with FastAPI, PostgreSQL with PostGIS and an event broker, packaged in Docker. Testing covers each component, cross-component scenarios, and device and load tests."],
  ["Evaluation and Pilot", "Component benchmarking, ablation studies, scenario tests and a usability assessment lead into a pilot at a Sri Lankan heritage site with consenting volunteers."],
];

const technologies = [
  [Smartphone, "React Native", "Tourist and driver mobile app", "One code base for Android and iOS"],
  [Brain, "TensorFlow and TensorFlow Lite", "Model training and on-device inference", "Mature mobile runtime that works offline"],
  [ScanFace, "MobileNetV2 and MediaPipe Face Mesh", "Emotion classification and face landmarks", "Built for mobile processors, real-time"],
  [Eye, "YOLOv8 nano", "Crowd density estimation", "Lightweight real-time person detection"],
  [MessageSquare, "Transformer language models", "Intent extraction and dialogue", "Strong multi-intent understanding"],
  [Network, "NSGA-II", "Multi-objective package optimisation", "Produces Pareto-optimal alternatives"],
  [Server, "Python and FastAPI", "Back-end REST and model services", "Concise, asynchronous, suited to ML"],
  [Database, "PostgreSQL with PostGIS", "Sessions, records and spatial zones", "Spatial queries and polygon zones"],
  [Workflow, "Redis Streams or RabbitMQ", "Event bus between components", "Decouples components, supports retries"],
  [Map, "React and Leaflet", "Manager and operator dashboards", "Interactive maps and heatmaps"],
  [Cloud, "Docker and a cloud provider", "Packaging, hosting and GPU retraining", "Each service scales independently"],
  [GitBranch, "Git and a shared task board", "Version control and planning", "Traceable progress and team coordination"],
];

function Heading({ label, title, text }) {
  return (
    <div className="domain-heading">
      <span>{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Domain() {
  const [active, setActive] = useState("literature");
  const panelRef = useRef(null);
  const firstRender = useRef(true);

  // after a tab is clicked, glide down so the content is in view
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  return (
    <main className="domain">
      <header className="domain-hero">
        <span className="domain-kicker">
          <Cpu size={15} /> Research Domain
        </span>
        <h1>Domain Overview</h1>
        <p>
          Explore our literature survey, research gap, problem statement,
          objectives, methodology and technologies.
        </p>
      </header>

      <div className="domain-tabs-wrap">
        <div className="domain-tabs" role="tablist" aria-label="Domain sections">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              className={active === t.id ? "active" : ""}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <section className="domain-panel" key={active} ref={panelRef} role="tabpanel">
        {active === "literature" && (
          <>
            <Heading
              label="Literature Survey"
              title="What Existing Research Says"
              text="A review of existing studies and systems in conversational planning, emotion recognition, driver safety, crowd flow and integrated smart tourism."
            />
            <div className="d-grid d-grid-3">
              {literature.map(([tag, title, text], i) => (
                <article className={`d-card accent-${i % 4}`} key={title}>
                  <span className="d-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </>
        )}

        {active === "gap" && (
          <>
            <Heading
              label="Research Gap"
              title="What Is Missing"
              text="No reviewed study combines conversational planning, on-phone emotion recognition, proactive driver safety and crowd-flow optimisation in one privacy-aware platform. Seven specific gaps remain."
            />
            <div className="d-grid d-grid-2">
              {gaps.map(([title, tag, text], i) => (
                <article className={`d-card accent-${i % 4}`} key={title}>
                  <span className="d-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </>
        )}

        {active === "problem" && (
          <>
            <Heading
              label="Research Problem"
              title="The Problem We Solve"
              text="Understanding the core challenge that TripMind LK addresses."
            />
            <blockquote className="d-quote">
              “How can an integrated, mobile-first AI framework support tourists
              in Sri Lanka across planning, destination experience, road
              transport and crowd flow, with components that share information,
              adapt to live conditions and protect privacy?”
            </blockquote>
            <p className="d-statement">
              Tourism intelligence in Sri Lanka is scattered across separate
              tools and arrives too late. Itineraries are static, managers
              cannot see how visitors feel during a visit, transport safety is
              supervised after the fact, and crowding at popular sites is
              managed by intuition. This research designs, builds and evaluates
              TripMind LK, an integrated AI framework that addresses these
              challenges through four connected components.
            </p>
            <h3 className="d-subtitle">Five sub-problems</h3>
            <div className="d-grid d-grid-3">
              {subProblems.map(([title, tag, text], i) => (
                <article className={`d-card accent-${i % 4}`} key={title}>
                  <span className="d-tag">{tag}</span>
                  <h3>{title} problem</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </>
        )}

        {active === "objectives" && (
          <>
            <Heading
              label="Research Objectives"
              title="What We Aim to Achieve"
              text="The specific goals that guide the TripMind LK research and development."
            />
            <div className="d-list">
              {objectives.map(([title, text], i) => (
                <article className="d-item" key={title}>
                  <span className="d-num">{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {active === "methodology" && (
          <>
            <Heading
              label="Methodology"
              title="How We Build It"
              text="The research and engineering process behind TripMind LK."
            />
            <ol className="d-timeline">
              {methodology.map(([title, text], i) => (
                <li key={title}>
                  <span className="d-num">{i + 1}</span>
                  <div className="d-step">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </>
        )}

        {active === "technologies" && (
          <>
            <Heading
              label="Technologies"
              title="Our Tech Stack"
              text="The tools and platforms used to build, train, connect and host the framework."
            />
            <div className="d-grid d-grid-4">
              {technologies.map(([Icon, name, purpose, why], i) => (
                <article className={`d-tech accent-${i % 4}`} key={name}>
                  <span className="d-icon">
                    <Icon size={26} />
                  </span>
                  <h3>{name}</h3>
                  <strong>{purpose}</strong>
                  <p>{why}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Domain;
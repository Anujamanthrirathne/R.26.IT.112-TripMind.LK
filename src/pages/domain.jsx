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
  Radio,
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
  ["C1 - Senevirathne T.M.N.D.L", "Conversational Travel Planning", "Transformer models such as BERT can extract intents and constraints from a request, and NSGA-II produces a set of trade-off packages. But itineraries are usually fixed once generated, and few systems adapt the plan during the trip or support voice interaction."],
  ["C2 - Kaweeshwara M.D.O", "Emotion Recognition in Tourism", "Emotion is a key driver of tourist satisfaction. Existing work relies on fixed cameras or wearables, is mostly tested in laboratories, and rarely produces actionable recommendations. Mobile-first multi-modal recognition linked to destination zones remains limited."],
  ["C3 - Rupasinghe M.L.K.S", "Smart Driver and Vehicle Safety", "Drowsiness detection from eye aspect ratio and sensor-based driving behaviour are well studied. Fleet products need installed hardware and report after the trip. Few combine driver state, vehicle condition and route risk into one proactive alert."],
  ["C4 - Manthrirathne M.A.A.C", "Tourism Flow and Crowd Prediction", "LSTM forecasting and social-force crowd models explain and predict congestion. Most work covers a single site, needs costly counting infrastructure, and stops at prediction without sending recommendations to tourists."],
  ["All", "Integrated Smart Tourism Platforms", "Smart tourism destinations are described as shared data ecosystems, but deployed systems are mostly single-purpose apps. Data stays in silos, and privacy and governance of shared data remain under-specified."],
];

const gaps = [
  ["Static, single-objective planning", "C1", "Planners generate an itinerary once and rarely trade off cost, time, interest match and comfort. They do not handle several intents in one request or support voice-first interaction."],
  ["No real-time adaptation", "C1 · C2 · C4", "Itineraries do not respond to weather, closures, crowding or the emotional state of travellers, so a good morning plan can become a poor afternoon one."],
  ["Limited mobile emotion recognition & zone mapping", "C2", "Existing systems use fixed cameras or wearables rather than mobile apps that map facial expressions (RAF-DB) to GPS zones, track emotional trajectories, and detect anomalies."],
  ["Fragmented, reactive transport safety", "C3", "Driver state (fatigue/yawns) and forward collision risk (TTC) are treated separately in commercial systems, lacking a unified edge-computed Composite Safety Index (CSI) with tiered alerts and strict privacy."],
  ["Forecasting without redistribution", "C4", "Crowd forecasts are seldom turned into recommendations that reach tourists while they plan or visit, and they ignore emotional and planning signals."],
  ["No closed-loop architecture", "All", "Planning, experience sensing, transport safety and flow management are built as separate silos, so no component can use another's output."],
  ["Privacy and governance of sensitive data", "All", "Emotion, location and driver-state data are sensitive. Few designs apply consent, pseudonymous identity, on-device processing and role-based access consistently under Sri Lanka's Personal Data Protection Act, No. 9 of 2022."],
];

const subProblems = [
  ["Planning", "C1", "How can free-text and spoken requests with several intents become optimised, personalised packages that adapt in real time?"],
  ["Experience", "C2", "How can custom CNN emotion recognition run on a standard smartphone, link to GPS zones of a heritage site, and generate actionable recommendations"],
  ["Safety", "C3", "How can driver fatigue (EAR/yawns) and forward collision risk (TTC) be combined via edge IoT hardware into a Composite Safety Index with tiered alerts"],
  ["Flow", "C4", "How can crowding across a network of attractions be forecast and redistributed in time to matter?"],
  ["Integration", "All", "How can the four components share a data contract, identity, consent and spatial model while staying independently deployable and private?"],
];

const objectives = [
  ["Build an AI conversational travel analyser (C1)", "Extract destinations, dates, budget, group composition and interests from text and voice requests, generate ranked packages with an NSGA-II optimiser, and adapt the itinerary live through a proactive voice agent."],
  ["Develop on-device emotion recognition (C2)", "Classify five emotions (angry, happy, neutral, sad, surprise) using a Custom CNN trained on RAF-DB with TensorFlow Lite, integrate GPS zones and LSTM trajectories, and provide a manager dashboard."],
  ["Create a proactive driver and vehicle safety system (C3)", "Deploy an IoT edge unit using an ESP32-CAM (MobileNetV2 eye/yawn models) and HC-SR04 sensor, communicating via ESP-NOW to an ESP32 hub that computes a Composite Safety Index (CSI) from EAR and TTC."],
  ["Optimise tourism flow and crowding (C4)", "Forecast crowding across attractions from historical, calendar, weather and live signals, and recommend alternative sites, times and routes through an operator dashboard."],
  ["Integrate the four components privately and securely", "Define a versioned data contract and event interfaces, apply consistent consent, pseudonymous identity and access control, and demonstrate at least three cross-component scenarios in a pilot."],
];

const methodology = [
  ["Research Approach and Requirements", "The work follows design science research. Requirements were gathered for tourists, drivers and destination managers, and the four components were assigned to separate team members around a shared integration layer."],
  ["Architecture and Integration Design", "A layered architecture connects mobile apps and IoT hardware to the four components through a shared spatial model, versioned data contracts and an event bus, with common identity and consent handling."],
  ["Component Development", "C1 uses transformers and NSGA-II. C2 uses a mobile Custom CNN with TensorFlow Lite, late fusion, and LSTM trajectories. C3 uses an ESP32-CAM, HC-SR04, ESP-NOW, and an ESP32 main hub for CSI calculation. C4 uses forecasting and optimisation."],
  ["Privacy, Security and Ethics by Design", "Facial images and driver video never leave the respective local devices (smartphone/ESP32-CAM). Consent, pseudonymous identity and role-based access apply across every component."],
  ["Implementation and Testing", "Services are built with FastAPI, PostgreSQL with PostGIS and message brokers, packaged in Docker. Testing covers component benchmarks, unit tests, and cross-component integration."],
  ["Evaluation and Pilot", "Component benchmarking, ablation studies, scenario tests and usability assessments lead into pilot deployments at Sri Lankan heritage and transport sites."],
];

const technologies = [
  [Smartphone, "React Native", "Tourist and driver mobile apps", "One code base for Android and iOS dashboards"],
  [Brain, "TensorFlow and TensorFlow Lite", "Mobile emotion model inference (C2)", "Efficient on-device execution for C2[cite: 72]"],
  [ScanFace, "Custom CNN & RAF-DB", "Facial emotion classification (C2)", "Classifies 5 universal emotions on mobile[cite: 72]"],
  [Cpu, "ESP32-CAM & MobileNetV2", "Edge driver monitoring (C3)", "Local eye-state and yawn classification[cite: 2]"],
  [Radio, "ESP-NOW & HC-SR04", "IoT sensor communication & distance (C3)", "Low-latency wireless link and collision sensing[cite: 2]"],
  [Server, "Python and FastAPI", "Back-end REST and model services", "Concise, asynchronous, suited to ML and IoT sync"],
  [Database, "PostgreSQL with PostGIS", "Sessions, records and spatial zones", "Spatial queries and polygon zones"],
  [Workflow, "RabbitMQ / Firebase", "Event bus and real-time sync", "Decouples components and pushes alerts (FCM)[cite: 2]"],
  [Map, "React and Leaflet / Mapbox", "Manager and operator dashboards", "Interactive maps, heatmaps and live tracking[cite: 2, 72]"],
  [Cloud, "Docker and AWS", "Packaging, hosting and GPU scaling", "Each microservice scales independently"],
  [GitBranch, "Git and shared task board", "Version control and planning", "Traceable progress and team coordination"],
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
              text="No reviewed study combines conversational planning, mobile emotion recognition, IoT edge driver safety and crowd-flow optimisation in one privacy-aware platform."
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
              “How can an integrated, mobile-first and IoT-backed AI framework support tourists
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
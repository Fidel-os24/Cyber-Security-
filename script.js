const projects = [
  {
    id: "01",
    status: "ROADMAP",
    title: "Python Port Scanner",
    summary: "A lightweight security utility designed to turn networking fundamentals into a practical reconnaissance workflow.",
    why: "Build a small security tool from first principles while strengthening understanding of ports, sockets, services and reconnaissance.",
    objective: "Create a command-line utility that can inspect a target host across a defined port range and present useful findings clearly.",
    tools: "Python · sockets · CLI · TCP/IP fundamentals",
    work: "Implement the scanning logic, validate inputs, handle connection failures, format results and document the security concepts behind the tool.",
    skills: "Python scripting · networking · reconnaissance · error handling · technical documentation",
    outcome: "A focused security utility that can become a foundation for later enhancements such as service detection, concurrency and structured output.",
    relevance: "Port scanning is a foundational reconnaissance technique used during authorized security assessments and network troubleshooting.",
    evidence: [
      {label:"GitHub repository", url:"https://github.com/YOUR-GITHUB-USERNAME/cybersecurity-journey"},
      {label:"Technical write-up", url:"#", placeholder:true},
      {label:"Screenshots", url:"#", placeholder:true}
    ],
    tech:["Python","Networking","Recon"]
  },
  {
    id: "02",
    status: "ROADMAP",
    title: "Security Log Analyzer",
    summary: "A Python project for turning raw log data into security-relevant observations.",
    why: "Learn how defenders can use structured analysis to identify patterns that deserve investigation.",
    objective: "Parse log entries, extract useful fields and surface repeated or suspicious activity in a readable report.",
    tools: "Python · regular expressions · file parsing · Linux",
    work: "Design the parsing workflow, normalize entries, identify useful indicators and create readable output for investigation.",
    skills: "Log analysis · Python · pattern recognition · defensive thinking · data handling",
    outcome: "A practical foundation for understanding how security monitoring starts with reliable collection and analysis of events.",
    relevance: "Log analysis is central to troubleshooting, incident investigation and security monitoring.",
    evidence: [
      {label:"GitHub repository", url:"https://github.com/YOUR-GITHUB-USERNAME/cybersecurity-journey"},
      {label:"Sample logs", url:"#", placeholder:true},
      {label:"Write-up", url:"#", placeholder:true}
    ],
    tech:["Python","Logs","Blue Team"]
  },
  {
    id: "03",
    status: "ROADMAP",
    title: "File Integrity Monitor",
    summary: "A defensive project exploring hashing and the detection of unexpected file changes.",
    why: "Connect cryptographic hashing with a practical defensive control that can detect changes to monitored files.",
    objective: "Create a baseline of file hashes and compare later states to identify additions, modifications or deletions.",
    tools: "Python · SHA-256 · filesystem APIs · Linux",
    work: "Create baseline records, hash monitored files, compare snapshots and report changes in a way that is easy to investigate.",
    skills: "Hashing · integrity monitoring · Python · defensive security · automation",
    outcome: "A practical demonstration of how integrity checks can provide an early signal that a monitored system has changed.",
    relevance: "File integrity monitoring is useful for detecting unauthorized changes to sensitive configuration and system files.",
    evidence: [
      {label:"GitHub repository", url:"https://github.com/YOUR-GITHUB-USERNAME/cybersecurity-journey"},
      {label:"Technical documentation", url:"#", placeholder:true},
      {label:"Demo", url:"#", placeholder:true}
    ],
    tech:["Python","SHA-256","Defense"]
  },
  {
    id: "04",
    status: "LEARNING",
    title: "Network Recon Lab",
    summary: "A controlled lab for learning reconnaissance and network visibility with common security tooling.",
    why: "Move from theoretical networking concepts into an environment where observations can be tested safely.",
    objective: "Practice identifying hosts, services and network behaviour in an authorized lab environment.",
    tools: "Nmap · Wireshark · Linux · VirtualBox",
    work: "Build the lab environment, perform controlled scans, inspect packets and document what each observation means.",
    skills: "Network enumeration · packet analysis · Linux · lab methodology · documentation",
    outcome: "A repeatable practice environment for connecting networking theory with practical security analysis.",
    relevance: "Reconnaissance and traffic analysis are common components of authorized assessments and defensive investigations.",
    evidence: [
      {label:"Lab documentation", url:"#", placeholder:true},
      {label:"Screenshots", url:"#", placeholder:true},
      {label:"Write-up", url:"#", placeholder:true}
    ],
    tech:["Nmap","Wireshark","Linux"]
  },
  {
    id: "05",
    status: "LEARNING",
    title: "Web Security Practice",
    summary: "Hands-on exploration of web application security concepts using a controlled environment.",
    why: "Understand how web requests, authentication and common vulnerabilities behave by inspecting them rather than only reading about them.",
    objective: "Use an authorized lab to practise request inspection, application mapping and vulnerability analysis.",
    tools: "Burp Suite · Linux · HTTP · browser developer tools",
    work: "Map requests, inspect parameters and responses, test controlled scenarios and document observations without targeting real systems.",
    skills: "HTTP · web reconnaissance · request analysis · vulnerability thinking",
    outcome: "A safer foundation for understanding how application security testing works in a controlled environment.",
    relevance: "Web application security is a major area of modern security assessment and defensive engineering.",
    evidence: [
      {label:"Lab write-up", url:"#", placeholder:true},
      {label:"Screenshots", url:"#", placeholder:true},
      {label:"Technical notes", url:"#", placeholder:true}
    ],
    tech:["Burp Suite","HTTP","Web Security"]
  },
  {
    id: "06",
    status: "LEARNING",
    title: "Cybersecurity Journey Repository",
    summary: "A public repository intended to organise practical learning into projects, labs, notes and evidence.",
    why: "Create one transparent place where cybersecurity progress can be inspected instead of represented only as a list of skills.",
    objective: "Build a structured repository covering Linux, networking, Python, security tools, vulnerability analysis and practical projects.",
    tools: "Git · GitHub · Linux · Python · security tooling",
    work: "Organise projects, document experiments, publish notes and progressively improve the quality and depth of the work.",
    skills: "Version control · technical writing · project organisation · practical security learning",
    outcome: "A living body of evidence that grows with the cybersecurity learning journey.",
    relevance: "A well-documented project history makes technical learning more inspectable and reproducible.",
    evidence: [
      {label:"GitHub repository", url:"https://github.com/YOUR-GITHUB-USERNAME/cybersecurity-journey"},
      {label:"Repository README", url:"#", placeholder:true}
    ],
    tech:["Git","GitHub","Documentation"]
  }
];

const projectGrid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function renderProjects(){
  projectGrid.innerHTML = projects.map((p, index) => `
    <article class="project-card">
      <div class="card-top">
        <span class="project-number">${p.id}</span>
        <span class="tag">${p.status}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="tech-list">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <button class="project-open" data-project="${index}" aria-label="Open ${p.title}">
        <span>VIEW PROJECT</span><span>↗</span>
      </button>
    </article>
  `).join("");
}

function openProject(index){
  const p = projects[index];
  modalContent.innerHTML = `
    <span class="modal-kicker">${p.id} / ${p.status}</span>
    <h2 id="modalTitle">${p.title}</h2>
    <p style="color:#9eabb2;font-size:15px;max-width:750px">${p.summary}</p>
    <div class="detail-grid">
      <div class="detail-box"><h4>WHY I BUILT IT</h4><p>${p.why}</p></div>
      <div class="detail-box"><h4>OBJECTIVE</h4><p>${p.objective}</p></div>
      <div class="detail-box"><h4>TOOLS / TECHNOLOGIES</h4><p>${p.tools}</p></div>
      <div class="detail-box"><h4>WHAT I ACTUALLY DID</h4><p>${p.work}</p></div>
      <div class="detail-box"><h4>SKILLS DEVELOPED</h4><p>${p.skills}</p></div>
      <div class="detail-box"><h4>OUTCOME</h4><p>${p.outcome}</p></div>
    </div>
    <div class="detail-box"><h4>REAL-WORLD RELEVANCE</h4><p>${p.relevance}</p></div>
    <div class="evidence-box">
      <h4>EVIDENCE</h4>
      <div class="evidence-links">
        ${p.evidence.map(e => e.placeholder
          ? `<span class="evidence-placeholder">${e.label} — PLACEHOLDER</span>`
          : `<a href="${e.url}" target="_blank" rel="noopener">${e.label} ↗</a>`).join("")}
      </div>
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeProject(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

renderProjects();

projectGrid.addEventListener("click", e => {
  const button = e.target.closest("[data-project]");
  if(button) openProject(Number(button.dataset.project));
});

modalClose.addEventListener("click", closeProject);
modal.addEventListener("click", e => {
  if(e.target.hasAttribute("data-close-modal")) closeProject();
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeProject();
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", e => {
  if(e.target.tagName === "A") navLinks.classList.remove("open");
});

document.getElementById("year").textContent = new Date().getFullYear();

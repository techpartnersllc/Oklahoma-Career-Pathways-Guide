/* ═══════════════════════════════════════════════════════════════════════
   TULSA CAREER PATH — App Logic
   Quiz-first flow. CareerOneStop as secondary "go deeper" resource.
═══════════════════════════════════════════════════════════════════════ */

// ─── THEME TOGGLE ──────────────────────────────────────────────────────
(function () {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const moon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const sun  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  function setTheme(t) {
    theme = t;
    root.setAttribute('data-theme', t);
    if (toggle) {
      toggle.innerHTML = t === 'dark' ? sun : moon;
      toggle.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' mode');
    }
  }
  root.setAttribute('data-theme', theme);
  setTheme(theme);
  if (toggle) toggle.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
})();

// ─── QUIZ ENGINE ───────────────────────────────────────────────────────
const TOTAL_STEPS = 4;
let currentStep = 1;

function setProgress(step) {
  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = ((step / TOTAL_STEPS) * 100) + '%';
}

function goToStep(n) {
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  const target = document.querySelector(`.quiz-step[data-step="${n}"]`);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  currentStep = n;
  setProgress(n - 1);
  clearError();
}

function clearError() {
  const el = document.getElementById('quizError');
  if (el) el.textContent = '';
}

function showError(msg) {
  const el = document.getElementById('quizError');
  if (el) { el.textContent = msg; el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
}

function getVal(step) {
  const s = document.querySelector(`.quiz-step[data-step="${step}"]`);
  if (!s) return null;
  const checked = s.querySelector('input[type="radio"]:checked');
  return checked ? checked.value : null;
}

// Wire navigation
document.querySelectorAll('.btn-next').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!getVal(currentStep)) { showError('Please select an option to continue.'); return; }
    goToStep(parseInt(btn.dataset.next));
  });
});
document.querySelectorAll('.btn-back').forEach(btn => {
  btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.back)));
});
document.querySelectorAll('.opt-card input[type="radio"]').forEach(r => {
  r.addEventListener('change', clearError);
});

// Submit
document.getElementById('generateBtn')?.addEventListener('click', () => {
  if (!getVal(4)) { showError('Please select an area of interest to generate your plan.'); return; }
  generatePlan();
});

function collectAnswers() {
  return {
    startingPoint: getVal(1) || 'new',
    priority:      getVal(2) || 'growth',
    timeAvailable: getVal(3) || 'parttime',
    interest:      getVal(4) || 'cybersecurity'
  };
}

// ─── PLAN GENERATION ───────────────────────────────────────────────────
function generatePlan() {
  const answers = collectAnswers();
  const trackId = getRecommendedTrack(answers);
  const track   = TRACKS[trackId];
  if (!track) return;

  setProgress(TOTAL_STEPS);

  const section = document.getElementById('results');
  const content = document.getElementById('resultsContent');
  content.innerHTML = buildPlan(track, answers);
  section.hidden = false;
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.getElementById('restartBtn')?.addEventListener('click', () => {
    section.hidden = true;
    document.querySelectorAll('.quiz-step input[type="radio"]').forEach(r => r.checked = false);
    goToStep(1);
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ─── PLAN BUILDER ──────────────────────────────────────────────────────
function buildPlan(track, answers) {
  const { startingPoint, priority, timeAvailable } = answers;

  // Why-this-fits sentence
  const spMap  = { new:'starting fresh', changer:'making a career change', upskill:'looking to advance in tech', displaced:'getting back on track' };
  const priMap = { speed:'your priority is getting hired quickly', earn:"you need income while you train", growth:"you're building for long-term growth", remote:'you want remote flexibility' };
  const taMap  = { fulltime:'you can go full-time', parttime:'you can train evenings and weekends', minimal:'you have limited hours available' };
  const whyFit = `You're ${spMap[startingPoint]||'beginning your journey'}, ${priMap[priority]||'focused on your future'}, and ${taMap[timeAvailable]||'working with your schedule'}. <strong>${track.label}</strong> is one of Tulsa's highest-demand tracks — ${track.demand}.`;

  // Programs
  const progsHTML = track.localPrograms.map(p => `
    <div class="plan-prog ${p.highlight ? 'plan-prog-top' : ''}">
      <span class="prog-badge ${p.highlight ? '' : 'prog-badge-alt'}">${p.highlight ? 'Top Pick' : 'Also Consider'}</span>
      <div class="pp-name">${p.name}</div>
      <div class="pp-provider">${p.provider}</div>
      <div class="pp-details">
        <span><b>Duration:</b> ${p.duration}</span>
        <span><b>Cost:</b> ${p.cost}</span>
        <span><b>Credential:</b> ${p.credential}</span>
      </div>
      <div class="pp-fit">${p.fit}</div>
      <a href="${p.url}" target="_blank" rel="noopener" class="pp-cta">Apply / Learn More →</a>
    </div>
  `).join('');

  // Certs
  const certsHTML = track.certs.map(c =>
    `<li class="cert-item"><span class="cert-dot"></span>${c}</li>`
  ).join('');

  // Roles
  const rolesHTML = track.roles.map(r => `<span class="role-chip">${r}</span>`).join('');

  // Next steps
  const stepsHTML = track.nextSteps.map((s, i) => `
    <a href="${s.url}" target="_blank" rel="noopener" class="next-step">
      <span class="ns-num">${i + 1}</span>
      <span class="ns-text">${s.text}</span>
      <span class="ns-arrow">→</span>
    </a>
  `).join('');

  // Adjacent
  const adjHTML = track.adjacent.map(a => `
    <div class="adj-card">
      <div class="adj-role">${a.role}</div>
      <div class="adj-sal">${a.salary}/yr</div>
    </div>
  `).join('');

  // COS escape hatch — shown at bottom of every plan
  const cosEscape = `
    <div class="cos-escape">
      <div class="cos-escape-left">
        <div class="cos-escape-label">Exploring a different direction?</div>
        <p>If your interests don't fit neatly into one of the six tracks above, <strong>CareerOneStop</strong> (U.S. Dept. of Labor) offers a free validated interest assessment, wage and outlook data for every occupation, and a training finder covering all accredited programs near Tulsa — including WIOA-funded options.</p>
      </div>
      <div class="cos-escape-links">
        <a href="https://www.careeronestop.org/Toolkit/Careers/interest-assessment.aspx" target="_blank" rel="noopener" class="btn-cos-sm">Take the Interest Assessment</a>
        <a href="https://www.careeronestop.org/LocalHelp/EducationAndTraining/find-colleges.aspx?location=Tulsa%2C+OK&radius=25&lang=en" target="_blank" rel="noopener" class="btn-cos-sm">Search Training Near Tulsa</a>
        <a href="https://www.careeronestop.org/JobSearch/FindJobs/find-jobs.aspx?keyword=technology&location=Tulsa%2C+OK&radius=25&lang=en" target="_blank" rel="noopener" class="btn-cos-sm">Browse Tulsa Job Listings</a>
      </div>
    </div>
  `;

  return `
    <div class="plan-card">

      <!-- Header -->
      <div class="plan-header">
        <div class="plan-track-tag">${track.icon} ${track.label}</div>
        <h2>Your Personalized Career Plan</h2>
        <p class="plan-sub">${whyFit}</p>
        <div class="plan-meta">
          <div class="pm-item"><span class="pm-label">Time to First Job</span><span class="pm-val">${track.timeToJob}</span></div>
          <div class="pm-item"><span class="pm-label">Entry Salary (Oklahoma)</span><span class="pm-val">${track.salaryEntry}</span></div>
        </div>
      </div>

      <div class="plan-body">

        <!-- Salary -->
        <div class="plan-block">
          <div class="plan-block-label">Oklahoma Salary Range</div>
          <div class="salary-row">
            <div class="sal-item"><div class="sal-lvl">Entry Level</div><div class="sal-num">${track.salaryEntry}</div></div>
            <div class="sal-item"><div class="sal-lvl">Mid-Career</div><div class="sal-num">${track.salaryMid}</div></div>
            <div class="sal-item"><div class="sal-lvl">Senior</div><div class="sal-num">${track.salarySenior}</div></div>
          </div>
        </div>

        <!-- Roles -->
        <div class="plan-block">
          <div class="plan-block-label">Roles in This Track</div>
          <div class="roles-wrap">${rolesHTML}</div>
        </div>

        <!-- Tulsa Programs -->
        <div class="plan-block">
          <div class="plan-block-label">Tulsa Training Programs</div>
          <div class="plan-progs">${progsHTML}</div>
        </div>

        <!-- Certs -->
        <div class="plan-block">
          <div class="plan-block-label">Certifications to Target</div>
          <ul class="cert-list">${certsHTML}</ul>
        </div>

        <!-- Next Steps -->
        <div class="plan-block">
          <div class="plan-block-label">Your Next Steps — Start Here</div>
          <div class="next-steps">${stepsHTML}</div>
        </div>

        <!-- Adjacent Paths -->
        <div class="plan-block">
          <div class="plan-block-label">Adjacent Paths Worth Knowing</div>
          <div class="adj-row">${adjHTML}</div>
        </div>

        <!-- Tech Partners CTA -->
        <div class="plan-cta">
          <div>
            <h3>Ready to connect with employers?</h3>
            <p>Tech Partners LLC places IT professionals in Tulsa. Register as a candidate once you're in training or ready to start.</p>
          </div>
          <a href="https://techpartnersllc.com" target="_blank" rel="noopener" class="btn-primary">Register with Tech Partners LLC →</a>
        </div>

        <!-- CareerOneStop escape hatch -->
        ${cosEscape}

      </div>
    </div>

    <div class="restart-wrap">
      <button class="btn-restart" id="restartBtn">← Start Over / Explore Another Track</button>
    </div>
  `;
}

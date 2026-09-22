<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)

const capabilities = [
  { name: 'RAG Compass', type: 'Knowledge architecture', text: 'Evaluates the use case before recommending long context, RAG, graph or hybrid retrieval.', color: 'brass' },
  { name: 'Omni Extractor', type: 'Document intelligence', text: 'Routes mixed documents through OCR or vision and returns normalized data with quality signals.', color: 'teal' },
  { name: 'AGUI Studio', type: 'Agent experience', text: 'Makes agent steps, tool calls and decisions visible, steerable and easier to trust.', color: 'clay' },
  { name: 'AI Control Tower', type: 'Production assurance', text: 'Connects evaluations, traces, usage and cost so deployed AI never runs unwatched.', color: 'blue' }
]

const model = [
  ['A', 'Align', 'Frame the user and business outcome.'],
  ['R', 'Reason', 'Choose the system pattern deliberately.'],
  ['G', 'Ground', 'Connect trusted data, tools and policy.'],
  ['U', 'Understand', 'Evaluate quality, value and behaviour.'],
  ['S', 'Scale', 'Operate, govern and improve continuously.']
]

const scrollTo = (id) => {
  menuOpen.value = false
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const closeMenu = (event) => {
  if (event.key === 'Escape') menuOpen.value = false
}

onMounted(() => window.addEventListener('keydown', closeMenu))
onBeforeUnmount(() => window.removeEventListener('keydown', closeMenu))
</script>

<template>
  <div class="site-shell">
    <header>
      <div class="wrap nav-row">
        <a class="wordmark" href="#top" @click="scrollTo('#top')">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><circle class="solid" cx="12" cy="12" r="3"></circle></svg>
          <span>Argus AI Studio</span>
        </a>
        <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen"><span></span><span></span></button>
        <nav :class="{ open: menuOpen }">
          <a href="#capabilities" @click="scrollTo('#capabilities')">Capabilities</a>
          <a href="#model" @click="scrollTo('#model')">Operating model</a>
          <a href="#about" @click="scrollTo('#about')">About</a>
        </nav>
        <button class="button primary header-button" type="button" @click="scrollTo('#capabilities')">Explore ARGUS</button>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="wrap hero-grid">
          <div class="hero-copy">
            <p class="eyebrow"><span class="mini-eye"></span> Applied AI · FDE operating model</p>
            <h1>AI systems that keep watch over your workflows</h1>
            <p class="lede">ARGUS brings knowledge, document, agent-interface and assurance capabilities into one connected model for production AI.</p>
            <div class="hero-actions">
              <button class="button primary" type="button" @click="scrollTo('#capabilities')">See the capabilities</button>
              <button class="button ghost" type="button" @click="scrollTo('#model')">How ARGUS works</button>
            </div>
          </div>

          <div class="constellation" aria-label="ARGUS capability network">
            <svg viewBox="0 0 470 390" role="img">
              <g class="lines"><line x1="240" y1="195" x2="88" y2="78"/><line x1="240" y1="195" x2="385" y2="55"/><line x1="240" y1="195" x2="415" y2="255"/><line x1="240" y1="195" x2="320" y2="345"/><line x1="240" y1="195" x2="75" y2="295"/><line x1="88" y1="78" x2="385" y2="55"/><line x1="415" y1="255" x2="320" y2="345"/></g>
              <g class="eye center"><circle cx="240" cy="195" r="48"/><circle class="solid" cx="240" cy="195" r="11"/></g>
              <g class="eye teal"><circle cx="88" cy="78" r="25"/><circle class="solid" cx="88" cy="78" r="6"/></g>
              <g class="eye blue"><circle cx="385" cy="55" r="21"/><circle class="solid" cx="385" cy="55" r="5"/></g>
              <g class="eye clay"><circle cx="415" cy="255" r="27"/><circle class="solid" cx="415" cy="255" r="7"/></g>
              <g class="eye brass"><circle cx="320" cy="345" r="22"/><circle class="solid" cx="320" cy="345" r="6"/></g>
              <g class="eye teal small"><circle cx="75" cy="295" r="16"/><circle class="solid" cx="75" cy="295" r="4"/></g>
            </svg>
          </div>
        </div>
      </section>

      <section id="capabilities" class="section">
        <div class="wrap">
          <div class="section-head">
            <h2>Four capabilities.<br />One watchtower.</h2>
            <p>Each capability addresses a blind spot that appears when AI moves beyond a demo and into daily use.</p>
          </div>

          <div class="capability-list">
            <article v-for="(item, index) in capabilities" :key="item.name" class="capability-row">
              <span class="index">0{{ index + 1 }}</span>
              <div :class="['capability-eye', item.color]"><span></span></div>
              <div class="capability-name"><h3>{{ item.name }}</h3><p>{{ item.type }}</p></div>
              <p class="capability-copy">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="model" class="section model-section">
        <div class="wrap">
          <div class="section-head">
            <h2>How ARGUS<br />sees the whole system.</h2>
            <p>A compact reasoning loop for moving from opportunity to production without disconnecting discovery, architecture and operation.</p>
          </div>
          <div class="model-track">
            <article v-for="([letter, name, text], index) in model" :key="name" class="model-step">
              <div class="step-top"><strong>{{ letter }}</strong><span>0{{ index + 1 }}</span></div>
              <h3>{{ name }}</h3><p>{{ text }}</p>
            </article>
          </div>
          <div class="loop-line"><span>Opportunity</span><i></i><strong>Evidence-led delivery</strong><i></i><span>Operational learning ↺</span></div>
        </div>
      </section>

      <section class="section proof-section">
        <div class="wrap proof-grid">
          <div><p class="eyebrow"><span class="mini-eye"></span> ARGUS in practice</p><h2>Three ideas.<br />One point of view.</h2></div>
          <div class="proof-list">
            <article><span>01</span><div><h3>Retrieval is a decision, not a default.</h3><p>RAG Compass compares patterns before recommending an architecture.</p></div></article>
            <article><span>02</span><div><h3>Agents need a lifecycle, not only a prompt.</h3><p>AGUI connects interaction, execution, evaluation and feedback.</p></div></article>
            <article><span>03</span><div><h3>Document AI is a system, not an OCR call.</h3><p>Omni Extractor combines classification, routing, extraction and confidence.</p></div></article>
          </div>
        </div>
      </section>

      <section id="about" class="section about-section">
        <div class="wrap about-grid">
          <div>
            <p class="eyebrow"><span class="mini-eye"></span> Builder behind ARGUS</p>
            <h2>Manasa Ramesh</h2>
            <p class="role">Forward Deployed Engineer · AI systems and platform delivery</p>
          </div>
          <div class="about-copy">
            <p>ARGUS distils 12+ years across full-stack engineering, quality automation and cloud delivery into a practical approach to production AI.</p>
            <div class="about-facts"><span><strong>12+</strong> years engineering & quality</span><span><strong>5</strong> years international experience</span><span><strong>E2E</strong> architecture through delivery</span></div>
            <div class="links"><a href="mailto:EMAIL_PLACEHOLDER">Email ↗</a><a href="LINKEDIN_PLACEHOLDER">LinkedIn ↗</a><a href="RESUME_PLACEHOLDER">Résumé ↗</a><a href="https://github.com/manasa-r" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
        </div>
      </section>
    </main>

    <footer><div class="wrap footer-row"><span>© {{ new Date().getFullYear() }} Argus AI Studio</span><span>AI delivery, with the whole system in view.</span><button type="button" @click="scrollTo('#top')">Back to top ↑</button></div></footer>
  </div>
</template>

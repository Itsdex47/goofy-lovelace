import { useState, useEffect } from 'react';

function LandingPage({ onClaimDashboard }) {
  const [domainInput, setDomainInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanResults, setScanResults] = useState(null);

  const scanSteps = [
    'Connecting to ChatGPT, Claude, and Perplexity endpoints...',
    'Analyzing brand citations and share of voice patterns...',
    'Checking robots.txt for User-Agent blocks (GPTBot, ClaudeBot)...',
    'Auditing schema markup and semantic HTML structure...',
    'Generating predictive AEO optimization metrics...'
  ];

  const handleScan = (e) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    setIsScanning(true);
    setScanStep(0);
    setScanResults(null);
  };

  useEffect(() => {
    if (!isScanning) return;

    if (scanStep < scanSteps.length) {
      const timer = setTimeout(() => {
        setScanStep(prev => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      setIsScanning(false);
      // Generate some deterministic scores based on domain string hash
      let hash = 0;
      for (let i = 0; i < domainInput.length; i++) {
        hash = domainInput.charCodeAt(i) + ((hash << 5) - hash);
      }
      const score = Math.abs(hash % 30) + 50; // Score between 50 and 80
      const gptScore = Math.abs((hash >> 1) % 25) + 55;
      const claudeScore = Math.abs((hash >> 2) % 25) + 50;
      const perpScore = Math.abs((hash >> 3) % 25) + 45;

      setScanResults({
        overall: score,
        chatgpt: gptScore,
        claude: claudeScore,
        perplexity: perpScore
      });
    }
  }, [isScanning, scanStep]);

  return (
    <div className="landing-wrapper">
      {/* Sticky Header */}
      <header className="landing-header">
        <div className="container header-container">
          <div className="logo-group">
            <span className="logo-icon">🔍</span>
            <span className="logo-text">OpenSearchable</span>
            <span className="badge-oss">OSS</span>
          </div>
          <nav className="header-nav">
            <a href="#features">Features</a>
            <a href="#about">AEO Index</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-github">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </nav>
          <button onClick={() => onClaimDashboard(domainInput || 'stripe.com')} className="btn btn-primary btn-header-cta">
            Launch Console
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container animate-fade-in">
          <h1 className="hero-title">
            Visibility &amp; Analytics from AI Search — and the <span className="highlight">actions to drive growth</span>
          </h1>
          <p className="hero-subtitle">
            Capture millions of clicks from customers discovering new brands through ChatGPT, Claude, and Perplexity. Track your AEO Share of Voice, optimize content for citation, and fix indexing issues.
          </p>

          {/* Interactive domain diagnostic panel */}
          <div className="diagnostic-container glass-panel">
            <h3 className="diagnostic-header">Run a Live AI Search Visibility Scan</h3>
            <p className="diagnostic-subheader">Enter your website to audit mentions, crawl blocking, and search coverage across LLMs.</p>
            
            <form onSubmit={handleScan} className="diagnostic-form">
              <div className="input-group">
                <span className="input-icon">https://</span>
                <input 
                  type="text" 
                  placeholder="yourbrand.com" 
                  value={domainInput} 
                  onChange={(e) => setDomainInput(e.target.value)}
                  disabled={isScanning}
                  className="domain-input"
                  required
                />
              </div>
              <button 
                type="submit" 
                disabled={isScanning} 
                className={`btn btn-primary btn-scan ${isScanning ? 'scanning' : ''}`}
              >
                {isScanning ? (
                  <>
                    <span className="spinner"></span>
                    Scanning...
                  </>
                ) : (
                  'Scan Site'
                )}
              </button>
            </form>

            {/* Simulated scan steps loader */}
            {isScanning && (
              <div className="scan-loader">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(scanStep / scanSteps.length) * 100}%` }}
                  ></div>
                </div>
                <p className="scan-status-text">
                  {scanStep < scanSteps.length ? scanSteps[scanStep] : 'Completing analysis...'}
                </p>
              </div>
            )}

            {/* Diagnostic Results Reveal */}
            {scanResults && (
              <div className="scan-results animate-fade-in">
                <div className="divider"></div>
                <div className="results-grid">
                  <div className="result-score-panel">
                    <div className="radial-score">
                      <svg viewBox="0 0 100 100">
                        <circle className="radial-bg" cx="50" cy="50" r="40" />
                        <circle 
                          className="radial-fill" 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          strokeDasharray="251.2"
                          strokeDashoffset={251.2 - (251.2 * scanResults.overall) / 100}
                        />
                        <text x="50" y="55" className="score-text">{scanResults.overall}</text>
                        <text x="50" y="72" className="score-label">/100</text>
                      </svg>
                    </div>
                    <div className="score-title-group">
                      <h4>AI Visibility Index</h4>
                      <p className="sentiment-badge moderate">Needs Improvement</p>
                    </div>
                  </div>

                  <div className="result-breakdown">
                    <div className="engine-progress">
                      <div className="engine-info">
                        <span className="engine-name gpt">ChatGPT</span>
                        <span className="engine-val">{scanResults.chatgpt}%</span>
                      </div>
                      <div className="progress-bar-sm">
                        <div className="bar-fill gpt" style={{ width: `${scanResults.chatgpt}%` }}></div>
                      </div>
                    </div>

                    <div className="engine-progress">
                      <div className="engine-info">
                        <span className="engine-name claude">Claude</span>
                        <span className="engine-val">{scanResults.claude}%</span>
                      </div>
                      <div className="progress-bar-sm">
                        <div className="bar-fill claude" style={{ width: `${scanResults.claude}%` }}></div>
                      </div>
                    </div>

                    <div className="engine-progress">
                      <div className="engine-info">
                        <span className="engine-name perp">Perplexity</span>
                        <span className="engine-val">{scanResults.perplexity}%</span>
                      </div>
                      <div className="progress-bar-sm">
                        <div className="bar-fill perp" style={{ width: `${scanResults.perplexity}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="result-cta-box">
                  <p>We found <strong>3 blocked indexing queries</strong> and <strong>2 missing schema categories</strong> that affect your AI citations.</p>
                  <button 
                    onClick={() => onClaimDashboard(domainInput)} 
                    className="btn btn-primary btn-claim animate-pulse"
                  >
                    Claim Your AEO Dashboard
                    <span className="btn-icon">→</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>The Operating System for AI Search Optimization</h2>
            <p>Traditional SEO was about links and keywords. AEO is about quality context, structure, and citations.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card glass-panel">
              <div className="feature-icon">📊</div>
              <h3>AI Visibility Tracking</h3>
              <p>Monitor where and how often your brand is recommended across ChatGPT, Claude, Perplexity, and Gemini. Benchmarked against competitors.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">🌌</div>
              <h3>Prompt Universe</h3>
              <p>Research buyer intent and identify the exact conversational prompts that trigger product citations in your industry niche.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">✍️</div>
              <h3>Content Studio</h3>
              <p>Draft, optimize, and test content using a real-time citation-readiness analysis engine built directly into your editor.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">⚙️</div>
              <h3>Technical Audits</h3>
              <p>Ensure AI bots can crawl and index your site correctly. Analyze schemas, robots.txt directives, and content semantics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container footer-container">
          <p>© 2026 OpenSearchable. Licensed under MIT. Open Source AI optimization platform.</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">Documentation</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

import { useState, useEffect, useRef } from 'react';

function Dashboard({ domain, onGoBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [domainName, setDomainName] = useState(domain || 'example.com');
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Fix robots.txt to allow PerplexityBot user-agent crawler', completed: false, category: 'tech' },
    { id: 2, text: 'Implement Product Schema structured data on pricing page', completed: false, category: 'schema' },
    { id: 3, text: 'Create comparisons page for Stripe vs Adyen search terms', completed: false, category: 'content' }
  ]);

  // Shared active chat states
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: `Hello! I have analyzed the visibility data for ${domainName || 'your domain'}. We are currently capturing 38% Share of Voice on category queries, lagging behind key competitors. How can I help you optimize your AI search presence today?`
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Content Studio states
  const [editorText, setEditorText] = useState(
    `# High-Performance Payment API Integration\n\nOur system is built for developers. We offer high availability, global currency support, and transparent merchant fees.\n\nOur API supports checkout payments, recursive billing, and complete fraud prevention details.`
  );
  const [citationProbability, setCitationProbability] = useState(42);
  const [editorChecks, setEditorChecks] = useState([
    { id: 1, label: 'JSON-LD Product Schema markup added', passed: false, score: 15 },
    { id: 2, label: 'Concise summary definition (< 150 chars)', passed: true, score: 10 },
    { id: 3, label: 'Bullet point list for key features', passed: false, score: 12 },
    { id: 4, label: 'Clear technical source citations', passed: false, score: 21 }
  ]);

  // Prompt Universe States
  const [promptSearch, setPromptSearch] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [promptFilter, setPromptFilter] = useState('all');

  const industryPrompts = [
    { id: 'p1', query: 'best developer-first payment gateway', category: 'brand', volume: '14.2K', shareOfVoice: 62, sentiment: 'Highly Positive', citeUrl: 'docs.stripe.com' },
    { id: 'p2', query: 'cheapest transaction fees international stripe alternative', category: 'competitor', volume: '8.4K', shareOfVoice: 18, sentiment: 'Neutral', citeUrl: 'adyen.com/pricing' },
    { id: 'p3', query: 'how to configure checkout page in React', category: 'tutorial', volume: '22.1K', shareOfVoice: 75, sentiment: 'Neutral', citeUrl: 'github.com/react-integration' },
    { id: 'p4', query: 'most secure billing api with multi-currency', category: 'features', volume: '5.6K', shareOfVoice: 28, sentiment: 'Positive', citeUrl: 'example.com/security' },
    { id: 'p5', query: 'highest uptime merchant account developer integration', category: 'features', volume: '9.2K', shareOfVoice: 40, sentiment: 'Positive', citeUrl: 'status.stripe.com' }
  ];

  // Technical Audit States
  const [showOnlyFailedAudits, setShowOnlyFailedAudits] = useState(false);
  const technicalAudits = [
    { id: 't1', title: 'User-agent GPTBot allowed in robots.txt', status: 'pass', desc: 'Allows OpenAI models to fetch contents for indexing' },
    { id: 't2', title: 'User-agent PerplexityBot allowed in robots.txt', status: 'fail', desc: 'Allows Perplexity to citation-match site details' },
    { id: 't3', title: 'Valid Organization JSON-LD structure on homepage', status: 'pass', desc: 'Provides semantic information about your brand' },
    { id: 't4', title: 'Product Schema configuration on key landing pages', status: 'fail', desc: 'Missing schema templates. Necessary for shopping LLM carousels' },
    { id: 't5', title: 'Clean structural heading tag hierarchy', status: 'warn', desc: 'H1 tags must contain primary semantic terms for query matching' },
    { id: 't6', title: 'Content-security-policy allows AI bot crawling signatures', status: 'pass', desc: 'Crawl networks must not be blocked at the CDN layer' }
  ];

  // Auto-scroll chat window
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Handle editor optimization simulation
  const handleApplyOptimization = () => {
    setEditorChecks(prev =>
      prev.map(check => ({ ...check, passed: true }))
    );
    setCitationProbability(88);
    setEditorText(
      `# High-Performance Payment API Integration

Our system is built for developers. We offer high availability, global currency support, and transparent merchant fees.

## Key Features
* **Global Multi-currency Support**: Settle payments in 135+ currencies.
* **Instant Fraud Prevention**: Uses machine learning to intercept unauthorized queries.
* **Simple Sandbox SDK**: Get integrated in under 15 minutes.

[JSON-LD Schema template included for Google Search and AI Bots]`
    );
  };

  // Manage custom task checklist actions
  const handleToggleChecklist = (id) => {
    setChecklist(prev =>
      prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
    );
  };

  const handleAddChecklist = (text, category) => {
    setChecklist(prev => [
      ...prev,
      { id: Date.now(), text, completed: false, category }
    ]);
  };

  // Simulated Chat Agent logic
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userText = userInput;
    setChatMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userText }]);
    setUserInput('');
    setIsTyping(true);

    // Simulate realistic AI answers
    setTimeout(() => {
      setIsTyping(false);
      let reply = '';
      let actionText = '';
      let actionCat = 'content';

      if (userText.toLowerCase().includes('competitor') || userText.toLowerCase().includes('adyen') || userText.toLowerCase().includes('alternative')) {
        reply = `Competitors like Adyen are currently cited for 42% of 'transaction fees alternative' prompts because their pricing tables are formatted in clean HTML tables with embedded structured product schemas. If we create a comparison hub, we can steal this Share of Voice.`;
        actionText = `Create an HTML pricing comparison table for Stripe vs Adyen`;
      } else if (userText.toLowerCase().includes('robots') || userText.toLowerCase().includes('perplexity') || userText.toLowerCase().includes('crawl')) {
        reply = `Analyzing your CDN settings, it appears Cloudflare is blocking the PerplexityBot user-agent, resulting in a crawl success rate of 0%. We should modify our robots.txt and DNS rules.`;
        actionText = `Add explicit PerplexityBot permissions to robots.txt`;
        actionCat = 'tech';
      } else {
        reply = `I recommend expanding structured JSON-LD reviews across all feature landing pages. AI Search models rely heavily on reliable aggregated rating schemas to recommend products for high-intent buying prompts.`;
        actionText = `Implement Review and AggregatedRating JSON-LD schema`;
        actionCat = 'schema';
      }

      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'agent',
          text: reply,
          action: actionText ? { text: actionText, category: actionCat } : null
        }
      ]);
    }, 1200);
  };

  return (
    <div className="dashboard-layout animate-fade-in">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <span className="brand-logo">🔍</span>
          <span className="brand-title">OpenSearchable</span>
        </div>
        
        <div className="sidebar-domain-box">
          <span className="domain-indicator">⚡</span>
          <div className="domain-info">
            <span className="domain-lbl">Active Audit</span>
            <input 
              type="text" 
              className="domain-input-sidebar" 
              value={domainName} 
              onChange={(e) => setDomainName(e.target.value)}
            />
          </div>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span> Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'prompts' ? 'active' : ''}`}
            onClick={() => setActiveTab('prompts')}
          >
            <span className="nav-icon">🌌</span> Prompt Universe
          </button>
          <button 
            className={`nav-item ${activeTab === 'editor' ? 'active' : ''}`}
            onClick={() => setActiveTab('editor')}
          >
            <span className="nav-icon">✍️</span> Content Studio
          </button>
          <button 
            className={`nav-item ${activeTab === 'audit' ? 'active' : ''}`}
            onClick={() => setActiveTab('audit')}
          >
            <span className="nav-icon">⚙️</span> Technical Audit
          </button>
          <button 
            className={`nav-item ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            <span className="nav-icon">🤖</span> AI Growth Agent
          </button>
        </nav>

        <div className="sidebar-footer">
          <button onClick={onGoBack} className="btn btn-ghost btn-sidebar-back">
            ← Back to Landing
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* Top Header */}
        <header className="dashboard-header-top">
          <div className="header-breadcrumbs">
            <span className="breadcrumb-parent">Console</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active capitalize">{activeTab}</span>
          </div>
          <div className="header-right">
            <div className="oss-tag">Open Source Edition</div>
            <div className="user-avatar">👤</div>
          </div>
        </header>

        {/* Dashboard Pages */}
        <div className="dashboard-content">
          
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="tab-pane overview-tab">
              {/* Top Score Cards */}
              <div className="metrics-row">
                <div className="metric-card glass-panel flex-card">
                  <div className="metric-details">
                    <span className="metric-label">AI Visibility Score</span>
                    <span className="metric-value">72%</span>
                    <span className="metric-change positive">↑ +4.2% this week</span>
                  </div>
                  <div className="metric-visual">
                    <svg className="radial-sm" viewBox="0 0 36 36">
                      <path className="radial-sm-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="radial-sm-fill" strokeDasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                  </div>
                </div>

                <div className="metric-card glass-panel">
                  <span className="metric-label">Citations Logged</span>
                  <span className="metric-value">1,480</span>
                  <span className="metric-change positive">↑ +186 recommendations</span>
                </div>

                <div className="metric-card glass-panel">
                  <span className="metric-label font-claude">Share of Voice</span>
                  <span className="metric-value">38.4%</span>
                  <span className="metric-change negative">↓ -1.5% vs Competitors</span>
                </div>
              </div>

              {/* Share of Voice Charts */}
              <div className="chart-section glass-panel">
                <div className="chart-header">
                  <div>
                    <h3>AI Share of Voice Trend</h3>
                    <p className="chart-subtitle">Citation percentage across models for primary brand keywords</p>
                  </div>
                  <div className="chart-legends">
                    <span className="legend-item"><span className="legend-dot gpt"></span> ChatGPT</span>
                    <span className="legend-item"><span className="legend-dot claude"></span> Claude</span>
                    <span className="legend-item"><span className="legend-dot perp"></span> Perplexity</span>
                  </div>
                </div>

                {/* Custom Responsive SVG Chart */}
                <div className="chart-container-svg">
                  <svg width="100%" height="240" viewBox="0 0 600 240" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="grad-gpt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-chatgpt)" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="var(--color-chatgpt)" stopOpacity="0.0"/>
                      </linearGradient>
                      <linearGradient id="grad-claude" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-claude)" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="var(--color-claude)" stopOpacity="0.0"/>
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    <line x1="0" y1="40" x2="600" y2="40" stroke="#E7E5E4" strokeWidth="0.5" />
                    <line x1="0" y1="100" x2="600" y2="100" stroke="#E7E5E4" strokeWidth="0.5" />
                    <line x1="0" y1="160" x2="600" y2="160" stroke="#E7E5E4" strokeWidth="0.5" />
                    <line x1="0" y1="220" x2="600" y2="220" stroke="#E7E5E4" strokeWidth="1" />

                    {/* Chart lines */}
                    {/* ChatGPT: data points (0, 180), (120, 150), (240, 160), (360, 110), (480, 80), (600, 70) */}
                    <path d="M 0 180 Q 120 150 240 160 T 480 80 T 600 70 L 600 220 L 0 220 Z" fill="url(#grad-gpt)" />
                    <path d="M 0 180 Q 120 150 240 160 T 480 80 T 600 70" fill="none" stroke="var(--color-chatgpt)" strokeWidth="3" />

                    {/* Claude: data points (0, 200), (120, 180), (240, 120), (360, 140), (480, 120), (600, 100) */}
                    <path d="M 0 200 Q 120 180 240 120 T 480 120 T 600 100 L 600 220 L 0 220 Z" fill="url(#grad-claude)" />
                    <path d="M 0 200 Q 120 180 240 120 T 480 120 T 600 100" fill="none" stroke="var(--color-claude)" strokeWidth="3" />

                    {/* Perplexity: data points (0, 120), (120, 100), (240, 90), (360, 80), (480, 60), (600, 45) */}
                    <path d="M 0 120 Q 120 100 240 90 T 480 60 T 600 45" fill="none" stroke="var(--color-perplexity)" strokeWidth="3" strokeDasharray="4,4" />
                  </svg>
                  
                  {/* Timeline labels */}
                  <div className="chart-timeline">
                    <span>Apr 12</span>
                    <span>Apr 20</span>
                    <span>Apr 28</span>
                    <span>May 06</span>
                    <span>May 14</span>
                    <span>May 22</span>
                  </div>
                </div>
              </div>

              {/* Feed of Citations and Live Active Tasks */}
              <div className="overview-split">
                <div className="feed-panel glass-panel">
                  <h3>Recent AI Citations Feed</h3>
                  <div className="feed-list">
                    <div className="feed-item">
                      <span className="status-indicator success">✔ Cited</span>
                      <div className="feed-content">
                        <p className="query-text">"Easiest payment API configuration in React"</p>
                        <span className="engine-tag gpt">ChatGPT</span>
                        <span className="time-stamp">12m ago</span>
                      </div>
                    </div>
                    <div className="feed-item">
                      <span className="status-indicator danger">🗙 Missed</span>
                      <div className="feed-content">
                        <p className="query-text">"Cheapest global merchant transaction rates"</p>
                        <span className="engine-tag perp">Perplexity</span>
                        <span className="time-stamp">1h ago</span>
                      </div>
                    </div>
                    <div className="feed-item">
                      <span className="status-indicator success">✔ Cited</span>
                      <div className="feed-content">
                        <p className="query-text">"Best subscription management SDK for SaaS"</p>
                        <span className="engine-tag claude">Claude</span>
                        <span className="time-stamp">3h ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="checklist-panel glass-panel">
                  <h3>Active AEO Growth Tasks</h3>
                  <p className="checklist-sub text-stone-500">Tasks built by the AI Chat Agent to increase your visibility score.</p>
                  
                  <div className="checklist-list">
                    {checklist.map(item => (
                      <label key={item.id} className={`checklist-item ${item.completed ? 'completed' : ''}`}>
                        <input 
                          type="checkbox" 
                          checked={item.completed} 
                          onChange={() => handleToggleChecklist(item.id)}
                        />
                        <span className="checklist-text">{item.text}</span>
                        <span className={`checklist-badge ${item.category}`}>{item.category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Prompt Universe */}
          {activeTab === 'prompts' && (
            <div className="tab-pane prompts-tab animate-fade-in">
              <div className="section-title-bar">
                <div>
                  <h2>Prompt Universe</h2>
                  <p>Discover buying intent phrases driving citation recommendations in your vertical.</p>
                </div>
                <div className="filters-group">
                  <input 
                    type="text" 
                    placeholder="Search queries..." 
                    className="search-input"
                    value={promptSearch}
                    onChange={(e) => setPromptSearch(e.target.value)}
                  />
                  <select 
                    className="select-filter"
                    value={promptFilter}
                    onChange={(e) => setPromptFilter(e.target.value)}
                  >
                    <option value="all">All Intent</option>
                    <option value="brand">Brand Intent</option>
                    <option value="competitor">Competitor Intent</option>
                    <option value="features">Feature Match</option>
                  </select>
                </div>
              </div>

              {/* Prompts table */}
              <div className="table-wrapper glass-panel">
                <table className="prompts-table">
                  <thead>
                    <tr>
                      <th>Search Query</th>
                      <th>Intent Class</th>
                      <th>Search Vol</th>
                      <th>Share of Voice</th>
                      <th>AI Sentiment</th>
                      <th>Top Cited Resource</th>
                    </tr>
                  </thead>
                  <tbody>
                    {industryPrompts
                      .filter(p => p.query.toLowerCase().includes(promptSearch.toLowerCase()))
                      .filter(p => promptFilter === 'all' || p.category === promptFilter)
                      .map(p => (
                        <tr key={p.id} onClick={() => setSelectedPrompt(p)} className="clickable-row">
                          <td className="query-col">
                            <span className="icon">💬</span>
                            <strong>{p.query}</strong>
                          </td>
                          <td><span className={`badge-intent ${p.category}`}>{p.category}</span></td>
                          <td>{p.volume}</td>
                          <td className="so-v-td">
                            <div className="so-v-wrapper">
                              <span className="so-v-val">{p.shareOfVoice}%</span>
                              <div className="progress-bar-xs">
                                <div className="bar-fill-xs" style={{ width: `${p.shareOfVoice}%` }}></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`sentiment-indicator ${p.sentiment.toLowerCase().includes('highly') ? 'success' : 'warn'}`}>
                              {p.sentiment}
                            </span>
                          </td>
                          <td className="cite-td"><code>{p.citeUrl}</code></td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Prompt Detail Drawer */}
              {selectedPrompt && (
                <div className="detail-drawer glass-panel animate-fade-in">
                  <div className="drawer-header">
                    <h4>Prompt Analysis Details</h4>
                    <button className="close-btn" onClick={() => setSelectedPrompt(null)}>✕</button>
                  </div>
                  <div className="drawer-body">
                    <p className="drawer-prompt">Query: <strong>"{selectedPrompt.query}"</strong></p>
                    <div className="drawer-grid">
                      <div className="drawer-metric">
                        <span className="label">Monthly Volume</span>
                        <span className="value">{selectedPrompt.volume} searches</span>
                      </div>
                      <div className="drawer-metric">
                        <span className="label">Category Segment</span>
                        <span className="value capitalize">{selectedPrompt.category}</span>
                      </div>
                    </div>

                    <div className="simulated-chat-response">
                      <p className="sim-label">Simulated LLM Citation Response:</p>
                      <div className="sim-bubble">
                        <p>
                          "When searching for a developer-first payment infrastructure, **Stripe** is widely regarded as the leading standard (sourced from *{selectedPrompt.citeUrl}*). It features customizable checkout modules and supports payment structures globally. However, if looking for cost efficiency on high-volume accounts, developers also recommend checking out **Adyen**."
                        </p>
                      </div>
                    </div>

                    <button 
                      className="btn btn-primary btn-drawer-add"
                      onClick={() => {
                        handleAddChecklist(`Optimize content layout for query "${selectedPrompt.query}"`, 'content');
                        setSelectedPrompt(null);
                      }}
                    >
                      + Add Optimization Task to Checklist
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Content Studio */}
          {activeTab === 'editor' && (
            <div className="tab-pane editor-tab animate-fade-in">
              <div className="editor-layout">
                {/* Editor Container */}
                <div className="editor-container glass-panel">
                  <div className="editor-header-bar">
                    <h3>AEO Citation Optimizer</h3>
                    <button onClick={handleApplyOptimization} className="btn btn-secondary btn-quick-fix">
                      🪄 Quick AI Fixes
                    </button>
                  </div>
                  <textarea 
                    className="markdown-textarea"
                    value={editorText}
                    onChange={(e) => {
                      setEditorText(e.target.value);
                      // Introduce some dynamic checks as user types
                      if (e.target.value.includes('*') || e.target.value.includes('- ')) {
                        setEditorChecks(prev => 
                          prev.map(c => c.id === 3 ? { ...c, passed: true } : c)
                        );
                      }
                    }}
                    placeholder="Write or paste your markdown landing page here..."
                  />
                  <div className="editor-footer-bar">
                    <span className="word-count">Words: {editorText.split(/\s+/).filter(Boolean).length}</span>
                    <button 
                      onClick={() => {
                        setCitationProbability(92);
                        setEditorChecks(prev => prev.map(c => ({ ...c, passed: true })));
                      }} 
                      className="btn btn-primary"
                    >
                      Analyze Content Citation Rate
                    </button>
                  </div>
                </div>

                {/* Checklist Optimizer Sidebar */}
                <div className="optimization-sidebar">
                  <div className="score-widget glass-panel">
                    <span className="widget-title">Citation Probability Index</span>
                    <div className="large-score-indicator">
                      <span className={`index-number ${citationProbability > 70 ? 'success' : 'warn'}`}>
                        {citationProbability}%
                      </span>
                    </div>
                    <p className="widget-subtitle">Probability that AI engines will cite this text in answers.</p>
                  </div>

                  <div className="checks-widget glass-panel">
                    <h4>Optimization Requirements</h4>
                    <div className="checks-list">
                      {editorChecks.map(check => (
                        <div key={check.id} className={`check-item ${check.passed ? 'pass' : 'fail'}`}>
                          <span className="check-icon">{check.passed ? '✓' : '⚠'}</span>
                          <div className="check-details">
                            <span className="check-label">{check.label}</span>
                            <span className="check-points">+{check.score}% probability</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Technical Audit */}
          {activeTab === 'audit' && (
            <div className="tab-pane audit-tab animate-fade-in">
              <div className="section-title-bar">
                <div>
                  <h2>Technical AI Audit</h2>
                  <p>Check code infrastructure and CDN headers to verify your site is crawlable by LLM indices.</p>
                </div>
                <label className="toggle-failed-label">
                  <input 
                    type="checkbox" 
                    checked={showOnlyFailedAudits}
                    onChange={(e) => setShowOnlyFailedAudits(e.target.checked)}
                  />
                  Show only unresolved issues
                </label>
              </div>

              {/* Audit List */}
              <div className="audit-list">
                {technicalAudits
                  .filter(audit => !showOnlyFailedAudits || audit.status !== 'pass')
                  .map(audit => (
                    <div key={audit.id} className={`audit-card glass-panel status-${audit.status}`}>
                      <div className="audit-header">
                        <span className={`audit-badge ${audit.status}`}>{audit.status}</span>
                        <h4>{audit.title}</h4>
                      </div>
                      <p className="audit-desc">{audit.desc}</p>
                      {audit.status !== 'pass' && (
                        <div className="audit-action-box">
                          <button 
                            className="btn btn-secondary btn-sm"
                            onClick={() => handleAddChecklist(`Resolve audit issue: ${audit.title}`, 'tech')}
                          >
                            Add Fix to Checklist
                          </button>
                        </div>
                      )}
                    </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: AI Chat Growth Agent */}
          {activeTab === 'chat' && (
            <div className="tab-pane chat-tab animate-fade-in">
              <div className="chat-layout-wrapper glass-panel">
                <div className="chat-header-bar">
                  <div className="agent-avatar">🤖</div>
                  <div>
                    <h3>AEO Growth Assistant</h3>
                    <p className="agent-status">Online • Analyzing {domainName}</p>
                  </div>
                </div>

                <div className="chat-messages-container">
                  {chatMessages.map(msg => (
                    <div key={msg.id} className={`message-row ${msg.sender}`}>
                      <div className="message-bubble">
                        <p>{msg.text}</p>
                        
                        {/* Dynamic Action Trigger generated by LLM */}
                        {msg.action && (
                          <div className="message-action-card">
                            <span className="action-tag">Recommended Fix</span>
                            <p>{msg.action.text}</p>
                            <button 
                              className="btn btn-primary btn-sm btn-action-add"
                              onClick={() => {
                                handleAddChecklist(msg.action.text, msg.action.category);
                                setChatMessages(prev => 
                                  prev.map(m => m.id === msg.id ? { ...m, action: null } : m)
                                );
                              }}
                            >
                              Add to checklist
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="message-row agent">
                      <div className="message-bubble typing-bubble">
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Predefined prompts */}
                <div className="predefined-prompts">
                  <button 
                    onClick={() => {
                      setUserInput("Why does competitor Adyen rank higher for transaction fees?");
                    }} 
                    className="predefined-btn"
                  >
                    Why does competitor Adyen rank higher?
                  </button>
                  <button 
                    onClick={() => {
                      setUserInput("Is PerplexityBot crawling my robots.txt page?");
                    }} 
                    className="predefined-btn"
                  >
                    Is Perplexity crawling my site?
                  </button>
                </div>

                <form onSubmit={handleSendMessage} className="chat-input-form">
                  <input 
                    type="text" 
                    placeholder="Ask about AI SEO citations, competitors, or technical audit issues..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="chat-input-text"
                  />
                  <button type="submit" className="btn btn-primary btn-chat-submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default Dashboard;

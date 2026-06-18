import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import {
  Activity,
  AlertTriangle,
  Bot,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileCode2,
  GitBranch,
  Link2,
  Play,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";
import { casperAuditProof, evidenceLog, HackathonMode, positioning, proofLinks, tests, workflow } from "./data/demoData";

const nav = [
  { label: "Release Risk", icon: Activity },
  { label: "Agent Workflow", icon: Bot },
  { label: "Repo Context", icon: GitBranch },
  { label: "Impacted Tests", icon: TestTube2 },
  { label: "Evidence", icon: ClipboardCheck },
];

const modes: HackathonMode[] = ["uipath", "gitlab", "product", "casper"];

function App() {
  const [mode, setMode] = useState<HackathonMode>("uipath");
  const [scanState, setScanState] = useState<"idle" | "running" | "generated" | "approved">("idle");
  const active = positioning[mode];
  const highRiskCount = tests.filter((test) => test.risk === "high").length;
  const progress = scanState === "idle" ? 71 : scanState === "running" ? 77 : scanState === "generated" ? 64 : 24;

  const approvalCopy = useMemo(() => {
    if (scanState === "approved") {
      return {
        title: "Release approved",
        body: "Human approval captured with evidence packet attached.",
        action: "Approved",
      };
    }

    if (scanState === "generated") {
      return {
        title: "Tests generated",
        body: "Three new test drafts are ready. Review the evidence before release approval.",
        action: "Approve Release",
      };
    }

    if (mode === "casper") {
      return {
        title: "Audit receipt ready",
        body: "Release decision hash is paired with a verified Casper Testnet transaction proof.",
        action: "Approve Receipt",
      };
    }

    return {
      title: "Needs Review",
      body: "Auth and release-gate changes require a human checkpoint before promotion.",
      action: "Approve Release",
    };
  }, [mode, scanState]);

  const runScan = () => {
    setScanState("running");
    window.setTimeout(() => setScanState("generated"), 650);
  };

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Primary">
        <div className="brand">
          <div className="brand-mark">EO</div>
          <span>Orchestrator</span>
        </div>

        <nav className="nav-list">
          {nav.map((item, index) => {
            const Icon = item.icon;
            return (
              <button className={index === 0 ? "nav-item active" : "nav-item"} key={item.label} title={item.label}>
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <span className="tiny-label">Demo targets</span>
          <strong>4 tracks</strong>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <h1>Enterprise AI Engineering Orchestrator</h1>
            <p>{active.angle}</p>
          </div>
          <div className="topbar-actions">
            <label className="mode-select">
              <span>Positioning</span>
              <select value={mode} onChange={(event) => setMode(event.target.value as HackathonMode)}>
                {modes.map((item) => (
                  <option key={item} value={item}>
                    {positioning[item].name}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} aria-hidden="true" />
            </label>
            <button className="primary-button" onClick={runScan}>
              <Play size={16} />
              {active.primaryCta}
            </button>
          </div>
        </header>

        <div className="dashboard-grid">
          <section className="panel risk-panel">
            <div className="panel-header">
              <div>
                <span className="tiny-label">Release Risk</span>
                <h2>Checkout release 2026.06.17</h2>
              </div>
              <span className="status-chip warning">
                <AlertTriangle size={14} />
                Needs Review
              </span>
            </div>

            <div className="risk-body">
              <div className="risk-meter" style={{ "--risk": `${progress}%` } as CSSProperties}>
                <span>{progress}</span>
                <small>risk score</small>
              </div>
              <div className="risk-metrics">
                <div>
                  <strong>{highRiskCount}</strong>
                  <span>high-risk areas</span>
                </div>
                <div>
                  <strong>12</strong>
                  <span>changed files</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>test drafts</span>
                </div>
              </div>
            </div>
          </section>

          <section className="panel context-panel">
            <div className="panel-header compact">
              <div>
                <span className="tiny-label">Repo Context</span>
                <h2>{active.integration}</h2>
              </div>
              <FileCode2 size={18} />
            </div>
            <div className="context-list">
              <div>
                <span>Repository</span>
                <strong>enterprise-checkout-api</strong>
              </div>
              <div>
                <span>Branch</span>
                <strong>feature/release-risk-agent</strong>
              </div>
              <div>
                <span>CI state</span>
                <strong>2 flaky tests isolated</strong>
              </div>
            </div>
          </section>

          <section className="panel workflow-panel">
            <div className="panel-header">
              <div>
                <span className="tiny-label">Agent Workflow</span>
                <h2>Human-governed automation path</h2>
              </div>
              <Bot size={18} />
            </div>
            <div className="timeline">
              {workflow.map((step) => (
                <div className={`timeline-row ${step.status}`} key={step.label}>
                  <div className="timeline-dot">
                    {step.status === "complete" ? <Check size={14} /> : step.status === "active" ? <Sparkles size={14} /> : null}
                  </div>
                  <div>
                    <strong>{step.label}</strong>
                    <span>{step.agent}</span>
                    <p>{step.evidence}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="panel tests-panel">
            <div className="panel-header">
              <div>
                <span className="tiny-label">Impacted Tests</span>
                <h2>Coverage work queue</h2>
              </div>
              <button className="ghost-button" onClick={() => setScanState("generated")}>
                <Sparkles size={15} />
                Generate Tests
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Area</th>
                  <th>Risk</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test) => (
                  <tr key={test.id}>
                    <td>{test.id}</td>
                    <td>
                      <strong>{test.area}</strong>
                      <span>{test.impact}</span>
                    </td>
                    <td>
                      <span className={`risk-tag ${test.risk}`}>{test.risk}</span>
                    </td>
                    <td>{test.suggestedAction}</td>
                    <td>{scanState === "generated" && test.status === "Needs Review" ? "Generated" : test.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="panel approval-panel">
            <div className="panel-header compact">
              <div>
                <span className="tiny-label">Human Approval</span>
                <h2>{approvalCopy.title}</h2>
              </div>
              <ShieldCheck size={18} />
            </div>
            <p>{approvalCopy.body}</p>
            <button className={scanState === "approved" ? "approval-button approved" : "approval-button"} onClick={() => setScanState("approved")}>
              <ShieldCheck size={16} />
              {approvalCopy.action}
            </button>
          </section>

          <section className="panel evidence-panel">
            <div className="panel-header compact">
              <div>
                <span className="tiny-label">Evidence</span>
                <h2>Audit packet</h2>
              </div>
              <ClipboardCheck size={18} />
            </div>
            <ol>
              {evidenceLog.map((entry, index) => (
                <li key={entry}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {entry}
                </li>
              ))}
            </ol>
          </section>

          <section className="panel proof-panel">
            <div className="panel-header compact">
              <div>
                <span className="tiny-label">Submission Proofs</span>
                <h2>Public judging links</h2>
              </div>
              <Link2 size={18} />
            </div>
            <div className="proof-list">
              {proofLinks.map((proof) => (
                <a href={proof.href} target="_blank" rel="noreferrer" key={proof.href}>
                  <span>{proof.target}</span>
                  <strong>{proof.label}</strong>
                  <p>{proof.note}</p>
                </a>
              ))}
            </div>
          </section>

          {mode === "casper" ? (
            <section className="panel casper-panel">
              <div className="panel-header compact">
                <div>
                  <span className="tiny-label">Casper Receipt</span>
                  <h2>Verifiable release audit</h2>
                </div>
                <Link2 size={18} />
              </div>
              <dl className="receipt-list">
                <div>
                  <dt>Audit ID</dt>
                  <dd>{casperAuditProof.auditId}</dd>
                </div>
                <div>
                  <dt>Decision</dt>
                  <dd>{casperAuditProof.decision}</dd>
                </div>
                <div>
                  <dt>Payload hash</dt>
                  <dd>{casperAuditProof.payloadHash}</dd>
                </div>
                <div>
                  <dt>Chain</dt>
                  <dd>{casperAuditProof.chain}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{casperAuditProof.transactionStatus}</dd>
                </div>
                <div>
                  <dt>Explorer proof</dt>
                  <dd>
                    <a href={casperAuditProof.explorerUrl} target="_blank" rel="noreferrer">
                      View Testnet transaction
                    </a>
                  </dd>
                </div>
              </dl>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}

export default App;

import { Header } from "../blocks/Header";
import { Copyright } from "../blocks/Copyright";
import { ContactCtaButton } from "./ContactCtaButton";
import Image from "next/image";
import resumeRankerLogo from "../../../content/ResumeRanker.png";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Products</h1>
            <p className="text-lg md:text-xl text-black/80 max-w-3xl">
              Explore our AI-powered SaaS products designed to streamline operations and deliver measurable outcomes.
            </p>
          </div>
        </section>

        {/* Resume Ranker Section */}
        <section className="bg-white py-12 md:py-16 border-t border-black/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Image src={resumeRankerLogo} alt="Resume Ranker logo" className="h-20 md:h-24 lg:h-28 w-auto" />
                <h2 className="text-3xl md:text-4xl font-bold text-black m-0">Resume Ranker</h2>
                <span className="ml-2 inline-block text-[10px] md:text-xs font-semibold tracking-wide uppercase text-black/60">New</span>
              </div>
              <p className="text-black/80 mt-3 max-w-3xl">
                AI-powered resume screening for modern hiring teams. Shortlist the right candidates in minutes by ranking resumes against your job description — with clear, explainable AI insights.
              </p>
            </div>

            {/* Problem It Solves */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">What Problem It Solves</h3>
                <ul className="list-disc list-inside space-y-2 text-black/90">
                  <li>Hiring teams waste hours manually screening resumes</li>
                  <li>Keyword filters miss strong candidates and surface weak ones</li>
                  <li>Recruiters struggle to justify why a candidate was shortlisted</li>
                  <li>High resume volume leads to inconsistent and biased decisions</li>
                </ul>
              </div>

              {/* What it does */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">What Resume Ranker Does</h3>
                <ul className="list-disc list-inside space-y-2 text-black/90">
                  <li>Upload resumes in bulk (PDF / DOCX)</li>
                  <li>Paste your job description</li>
                  <li>Instantly rank candidates by role fit</li>
                  <li>See why each resume scored where it did</li>
                  <li>Identify skill gaps and strengths at a glance</li>
                  <li>Export ranked results for sharing or ATS upload</li>
                </ul>
              </div>
            </div>

            {/* Differentiators */}
            <div className="bg-black/[0.03] rounded-xl p-6 md:p-8 mb-12">
              <h3 className="text-xl font-semibold text-black mb-4">Key Differentiators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg border border-black/10 bg-white p-5">
                  <div className="text-2xl mb-2">🧠 Explainable AI</div>
                  <ul className="list-disc list-inside space-y-1 text-black/90">
                    <li>See the reasoning behind every score</li>
                    <li>Skills matched, missing, or over/under-qualified</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-5">
                  <div className="text-2xl mb-2">⚖️ Bias-Aware Screening</div>
                  <ul className="list-disc list-inside space-y-1 text-black/90">
                    <li>Optional anonymised review mode</li>
                    <li>Ignores names, age indicators, and non-role signals</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-5">
                  <div className="text-2xl mb-2">⏱ Faster Shortlisting</div>
                  <ul className="list-disc list-inside space-y-1 text-black/90">
                    <li>Reduce resume screening time from hours to minutes</li>
                    <li>Focus interviews on high-potential candidates</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-5">
                  <div className="text-2xl mb-2">🔐 Secure & Private</div>
                  <ul className="list-disc list-inside space-y-1 text-black/90">
                    <li>Resumes are processed securely</li>
                    <li>No training on your data</li>
                    <li>Designed with hiring compliance in mind</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA placeholder */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-black/80">Interested in early access or a demo?</p>
              <ContactCtaButton />
            </div>
          </div>
        </section>

        <Copyright />
      </main>
    </>
  );
}

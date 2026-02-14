import React from "react";
import { Printer } from "lucide-react";
import StepCard from "../ui/StepCard";
import Card from "../ui/Card";
import { STEP_CARDS, TEAM_MEMBERS } from "../../constants";

export default function HowToUse() {
  return (
    <section
      id="how"
      className="py-20 sm:py-28 scroll-mt-[100px]"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 backdrop-blur-md shadow-sm">
            <Printer className="h-4 w-4 text-indigo-600" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">
              How to Use?
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Our Expertise:{" "}
            <span className="text-indigo-600">
              Idea to Product
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At <b>Lorenta Technologies</b>, we design and develop smart
            document printing. Our solutions deliver speed, reliability,
            and seamless user experience.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEP_CARDS.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>

        {/* About + Mission + Vision + Team */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* About Us */}
          <Card title="About Us">
            <p className="text-slate-600 leading-relaxed">
              Lorenta Technologies started with the idea of making
              document printing simple and easy for everyone.
              We design automated printing solutions that work independently.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We design and develop document printing solutions for
              colleges and offices where reliable self-service
              printing is needed.
            </p>
          </Card>

          {/* Right Side Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <Card title="Our Mission">
              <p className="text-slate-600 leading-relaxed">
                Develop self-service machines that save time,
                are easy to use for institutions, and reduce manual work.
              </p>
            </Card>

            <Card title="Our Vision">
              <p className="text-slate-600 leading-relaxed">
                Make smart document printing available
                in more campuses and offices.
              </p>
            </Card>

            <Card title="Our Team" className="sm:col-span-2">
              <ul className="mt-2 text-slate-700 space-y-2 text-sm sm:text-base">
                {TEAM_MEMBERS.map((member) => (
                  <li key={member}>• {member}</li>
                ))}
              </ul>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}

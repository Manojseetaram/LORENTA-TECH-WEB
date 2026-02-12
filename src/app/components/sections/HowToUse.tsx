import React from "react";
import { Printer } from "lucide-react";
import StepCard from "../ui/StepCard";
import Card from "../ui/Card";
import { STEP_CARDS, TEAM_MEMBERS } from "../../constants";

export default function HowToUse() {
  return (
    <section id="how" className="py-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2">
            <Printer className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium">How to Use?</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-semibold">
            Our Expertise: <span className="text-indigo-600">Idea to Product</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
            At <b>Lorenta Technologies</b>, we design and develop smart document printing kiosks and automated vending machines.
            Our solutions deliver speed, reliability, and seamless user experience.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEP_CARDS.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="About Us">
            <p className="text-slate-600">
              Lorenta Technologies started with the idea of making document printing simple and easy for everyone.
              We design automated printing solutions that work on their own.
            </p>
            <p className="mt-3 text-slate-600">
              We design and develop document printing kiosks and vending machines for colleges, offices, and public areas,
              where reliable self-service printing is needed.
            </p>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card title="Our Mission">
              <p className="text-slate-600">
                Develop self-service machines that save time, are easy to use for institutions, and reduce manual work.
              </p>
            </Card>
            <Card title="Our Vision">
              <p className="text-slate-600">
                Make smart document printing kiosks available in more campuses and offices.
              </p>
            </Card>
            <Card title="Our Team" className="sm:col-span-2">
              <ul className="mt-1 text-slate-700 space-y-1">
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
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { globalTalentAssessment } from "@/lib/gtv-details";
import { personal } from "@/lib/profile";
import { cn } from "@/lib/utils";

type Answer = "yes" | "not-yet" | "unsure";
const choices: { value: Answer; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "not-yet", label: "Not yet" },
  { value: "unsure", label: "Not sure" },
];

export function GTVEligibility() {
  const [answers, setAnswers] = useState<(Answer | null)[]>(() =>
    globalTalentAssessment.map(() => null),
  );
  const [step, setStep] = useState(0);
  const reducedMotion = useReducedMotion();
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);
  const complete = step === globalTalentAssessment.length;
  const current = globalTalentAssessment[step];
  const answered = answers.filter((answer) => answer !== null).length;
  const score = answers.filter((answer) => answer === "yes").length;
  const result =
    score <= 2
      ? "Start by tightening your positioning and gathering clearer evidence of impact."
      : score <= 4
        ? "You may have the beginnings of a strong story. Look for gaps in validation, leadership, or proof."
        : "You have several useful signals. The next step is shaping them into a coherent, verifiable story.";

  useEffect(() => {
    if (previousStep.current !== step)
      heading.current?.focus({ preventScroll: true });
    previousStep.current = step;
  }, [step]);

  return (
    <section
      id="readiness-check"
      aria-labelledby="readiness-title"
      className="scroll-mt-24 border-y border-rule bg-cream/40"
    >
      <div className="grid gap-10 px-6 py-16 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
        <div>
          <p className="mb-5 font-mono text-xs text-accent">Readiness check</p>
          <h2
            id="readiness-title"
            className="max-w-sm font-playfair text-3xl leading-tight tracking-tight md:text-4xl"
          >
            A quick pause before the paperwork.
          </h2>
          <p className="mt-5 max-w-md font-sans text-base leading-7 text-muted">
            This is not a formal eligibility checker or legal advice. It is a
            practical prompt to help you see whether your profile is starting to
            show the signals that matter.
          </p>
        </div>
        <div className="min-w-0 border border-rule bg-paper p-5 sm:p-8">
          <div className="mb-3 flex justify-between gap-4 font-mono text-xs text-muted">
            <span>
              {complete
                ? "Reflection complete"
                : `Question ${step + 1} of ${globalTalentAssessment.length}`}
            </span>
            <span>{answered} answered</span>
          </div>
          <Progress
            value={(answered / globalTalentAssessment.length) * 100}
            aria-label="Assessment completion"
          />
          <motion.div
            key={step}
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="pt-8"
          >
            {complete ? (
              <div>
                <h3
                  ref={heading}
                  tabIndex={-1}
                  className="text-2xl font-bold outline-none"
                >
                  Your next step
                </h3>
                <p className="mt-5 font-fraunces text-xl leading-relaxed">
                  {result}
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
                  These answers are a starting point for reflection, not a
                  prediction of a visa decision.
                </p>
                <a
                  href={personal.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-6 gap-3 tracking-normal",
                  )}
                >
                  Discuss your profile <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            ) : (
              <div className="min-h-60">
                <h3
                  id="assessment-question"
                  ref={heading}
                  tabIndex={-1}
                  className="max-w-xl text-2xl leading-snug font-bold outline-none"
                >
                  {current.question}
                </h3>
                <p
                  id="assessment-requirement"
                  className="mt-4 max-w-xl font-sans text-base leading-7 text-muted"
                >
                  {current.requirement}
                </p>
                <div
                  role="group"
                  aria-labelledby="assessment-question"
                  aria-describedby="assessment-requirement"
                  className="mt-7 flex flex-wrap gap-3"
                >
                  {choices.map((choice) => (
                    <Button
                      key={choice.value}
                      variant={
                        answers[step] === choice.value ? "default" : "outline"
                      }
                      size="lg"
                      aria-pressed={answers[step] === choice.value}
                      className="tracking-normal"
                      onClick={() =>
                        setAnswers((values) =>
                          values.map((value, index) =>
                            index === step ? choice.value : value,
                          ),
                        )
                      }
                    >
                      {choice.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-5">
            <Button
              variant="ghost"
              disabled={step === 0}
              onClick={() => setStep((value) => value - 1)}
              className="gap-2 tracking-normal"
            >
              <ArrowLeft aria-hidden="true" />
              {complete ? "Review answers" : "Back"}
            </Button>
            {complete ? (
              <Button
                variant="ghost"
                className="gap-2 tracking-normal"
                onClick={() => {
                  setAnswers(globalTalentAssessment.map(() => null));
                  setStep(0);
                }}
              >
                <RotateCcw aria-hidden="true" />
                Start again
              </Button>
            ) : (
              <Button
                disabled={answers[step] === null}
                onClick={() => setStep((value) => value + 1)}
                className="gap-2 tracking-normal"
              >
                {step === globalTalentAssessment.length - 1
                  ? "See reflection"
                  : "Next"}
                <ArrowRight aria-hidden="true" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

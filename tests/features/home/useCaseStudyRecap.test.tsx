import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { CaseStudySummary } from "../../../src/features/home/types";
import useCaseStudyRecap from "../../../src/features/home/hooks/useCaseStudyRecap";

const createCaseStudy = (id: CaseStudySummary["id"]): CaseStudySummary => ({
  id,
  number: "00",
  tag: "Test",
  title: "Test Case Study",
  platform: "Test Platform",
  tags: [],
  to: `/case-studies/${id}`,
  recap: {
    headline: "Test headline",
    bullets: ["Bullet 1", "Bullet 2"],
  },
});

describe("useCaseStudyRecap", () => {
  const caseStudies = [createCaseStudy("divar"), createCaseStudy("setare-aval")];

  it("returns null as the default active case study", () => {
    const { result } = renderHook(() => useCaseStudyRecap(caseStudies));

    expect(result.current.activeCaseStudy).toBeNull();
    expect(result.current.isOpen).toBe(false);
  });

  it("opens the requested case study", () => {
    const { result } = renderHook(() => useCaseStudyRecap(caseStudies));

    act(() => {
      result.current.openRecap("setare-aval");
    });

    expect(result.current.activeCaseStudy?.id).toBe("setare-aval");
    expect(result.current.isOpen).toBe(true);
  });

  it("closes the currently open recap", () => {
    const { result } = renderHook(() => useCaseStudyRecap(caseStudies));

    act(() => {
      result.current.openRecap("divar");
    });

    act(() => {
      result.current.closeRecap();
    });

    expect(result.current.activeCaseStudy).toBeNull();
    expect(result.current.isOpen).toBe(false);
  });
});



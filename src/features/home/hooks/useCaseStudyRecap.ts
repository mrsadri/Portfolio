import { useCallback, useMemo, useState } from "react";
import type { CaseStudyId, CaseStudySummary } from "../types";

type CaseStudyRecapController = {
  activeCaseStudy: CaseStudySummary | null;
  openRecap: (id: CaseStudyId) => void;
  closeRecap: () => void;
  isOpen: boolean;
};

const useCaseStudyRecap = (caseStudies: ReadonlyArray<CaseStudySummary>): CaseStudyRecapController => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<CaseStudyId | null>(null);

  const activeCaseStudy = useMemo(
    () => caseStudies.find((item) => item.id === selectedCaseStudyId) ?? null,
    [caseStudies, selectedCaseStudyId],
  );

  const openRecap = useCallback((id: CaseStudyId) => {
    setSelectedCaseStudyId(id);
  }, []);

  const closeRecap = useCallback(() => {
    setSelectedCaseStudyId(null);
  }, []);

  return {
    activeCaseStudy,
    openRecap,
    closeRecap,
    isOpen: activeCaseStudy !== null,
  };
};

export default useCaseStudyRecap;



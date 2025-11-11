import { useMemo } from "react";
import type { CaseStudyEntry } from "../types";

const useRelatedCaseStudies = (
  entries: ReadonlyArray<CaseStudyEntry>,
  currentId: CaseStudyEntry["id"],
) =>
  useMemo(
    () => entries.filter((entry) => entry.id !== currentId),
    [entries, currentId],
  );

export default useRelatedCaseStudies;



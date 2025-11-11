import { useCallback, useEffect, useMemo, useState, type MouseEvent as ReactMouseEvent } from "react";
import type { CaseStudySection } from "../types";

type CaseStudySectionList = readonly CaseStudySection[];

const isBrowser = typeof window !== "undefined";

const getInitialSectionId = (sections: CaseStudySectionList) => sections[0]?.id ?? "";

const useCaseStudyNavigation = (sections: CaseStudySectionList) => {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  const [activeSectionId, setActiveSectionId] = useState(() => getInitialSectionId(sections));

  useEffect(() => {
    if (!sectionIds.includes(activeSectionId)) {
      setActiveSectionId(getInitialSectionId(sections));
    }
  }, [activeSectionId, sectionIds, sections]);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      setActiveSectionId(hash);
    }
  }, [sectionIds]);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const sectionElements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const firstVisible = visibleEntries[0];
        if (firstVisible) {
          setActiveSectionId(firstVisible.target.id);
        }
      },
      { rootMargin: "-45% 0px -45%" },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleOutlineClick = useCallback(
    (event: ReactMouseEvent<HTMLAnchorElement>, targetId: string) => {
      event.preventDefault();

      if (!isBrowser) {
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSectionId(targetId);
        const newUrl = `${window.location.pathname}${window.location.search}#${targetId}`;
        window.history.replaceState(null, "", newUrl);
      }
    },
    [],
  );

  return { activeSectionId, handleOutlineClick };
};

export default useCaseStudyNavigation;



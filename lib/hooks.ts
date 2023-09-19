import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from '@/lib/types';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    const { ref, inView } = useInView({
        threshold: threshold,
    });

    useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
    }
    }, [inView, setActiveSection, timeOfLastClick])
    return {
        ref,

    };
}
/**
 * Case study registry. Each case has identity, narrative metadata, and
 * declared "kindred works" — the editorial cross-links surfaced at the
 * bottom of each case study and throughout the home index.
 */

export type WorkId =
  | "ds-allstate"
  | "ds-harvest"
  | "ds-panduit"
  | "d-allstate"
  | "d-harvest"
  | "d-panduit";

export type WorkDiscipline = "Design Systems" | "UX Design";

export type Kindred = {
  id: WorkId;
  /** Why is this related — same company, shared method, etc. */
  reason: string;
};

export type Work = {
  id: WorkId;
  index: string;
  discipline: WorkDiscipline;
  company: string;
  kicker: string;
  title: string;
  subtitle: string;
  years: string;
  blurb: string;
  role: string;
  surface: string;
  href: string;
  kindred: Kindred[];
};

export const work: Record<WorkId, Work> = {
  "ds-allstate": {
    id: "ds-allstate",
    index: "01",
    discipline: "Design Systems",
    company: "Allstate",
    kicker: "Mesh Design System",
    title: "Reducing system drift across tools and handoffs.",
    subtitle:
      "Tightening the contracts between design, handoff, and implementation so 40+ teams stayed in sync.",
    years: "2018 — 2021",
    blurb:
      "Audited drift across Sketch, Zeplin, and Styleguidist. Built tooling that let designers self-validate before handoff. ~90% Sketch–code parity.",
    role: "UX Architect & Front-End Engineer",
    surface: "Cross-tool enterprise system",
    href: "/design-systems/allstate",
    kindred: [
      {
        id: "d-allstate",
        reason: "Same company — quote flow rebuilt against this same system.",
      },
      {
        id: "ds-panduit",
        reason: "Shared point of view on alignment as governance.",
      },
    ],
  },
  "ds-harvest": {
    id: "ds-harvest",
    index: "02",
    discipline: "Design Systems",
    company: "Harvest",
    kicker: "Dual-stack Component Library",
    title: "Clarifying guidance across a Rails + React system.",
    subtitle:
      "Separating implementation paths and giving each its own contract — making correct usage easier than guesswork.",
    years: "2021 — 2023",
    blurb:
      "Reduced confusion in a dual-stack system by giving Rails and React their own implementation contracts. 40% adoption increase, 60% fewer support requests.",
    role: "Senior Design Engineer",
    surface: "Dual-stack component library",
    href: "/design-systems/harvest",
    kindred: [
      {
        id: "d-harvest",
        reason:
          "Same company — workflow consolidation built on these primitives.",
      },
      {
        id: "ds-allstate",
        reason:
          "Shared lens: contract clarity reduces drift more than enforcement does.",
      },
    ],
  },
  "ds-panduit": {
    id: "ds-panduit",
    index: "03",
    discipline: "Design Systems",
    company: "Panduit",
    kicker: "AEM Component System",
    title: "Aligning siloed business units through a shared system.",
    subtitle:
      "Designing components and governance for an AEM platform that supported parallel application redesigns.",
    years: "2016 — 2018",
    blurb:
      "Created shared AEM components for siloed business units with competing priorities. 3× component adoption, 70% fewer accessibility issues.",
    role: "Lead UX Designer",
    surface: "AEM platform & marketing applications",
    href: "/design-systems/panduit",
    kindred: [
      {
        id: "d-panduit",
        reason:
          "Same company — distributor portal redesign used these primitives.",
      },
      {
        id: "ds-allstate",
        reason:
          "Shared challenge: governance across teams that do not report to each other.",
      },
    ],
  },
  "d-allstate": {
    id: "d-allstate",
    index: "04",
    discipline: "UX Design",
    company: "Allstate",
    kicker: "Quote Flow Architecture",
    title: "Reducing complexity in a multi-driver quote flow.",
    subtitle:
      "Re-architecting form length, branching, and agent-vs-customer paths to scale across real household configurations.",
    years: "2019 — 2021",
    blurb:
      "Re-architected a multi-driver, multi-vehicle quote flow. Form length reduced, agent throughput up, household configurations finally first-class.",
    role: "UX Architect",
    surface: "Agent + consumer quote experience",
    href: "/design/allstate",
    kindred: [
      {
        id: "ds-allstate",
        reason: "Same company — the system that made the new flow possible.",
      },
      {
        id: "d-harvest",
        reason:
          "Shared method: structural consolidation over surface-level UI changes.",
      },
    ],
  },
  "d-harvest": {
    id: "d-harvest",
    index: "05",
    discipline: "UX Design",
    company: "Harvest",
    kicker: "Reporting Workflow",
    title: "Unifying saved and recurring report workflows.",
    subtitle:
      "Identifying duplication that was costing customers and engineers, and consolidating without losing edge cases.",
    years: "2022 — 2023",
    blurb:
      "Two reporting flows had quietly grown into one. Consolidated without losing edge cases — reducing user rework and engineering complexity.",
    role: "Senior Product Designer",
    surface: "Reporting & analytics workspace",
    href: "/design/harvest",
    kindred: [
      {
        id: "ds-harvest",
        reason:
          "Same company — the design system that absorbed the consolidated flow.",
      },
      {
        id: "d-allstate",
        reason:
          "Shared method: structural simplification before any visual rework.",
      },
    ],
  },
  "d-panduit": {
    id: "d-panduit",
    index: "06",
    discipline: "UX Design",
    company: "Panduit",
    kicker: "Distributor Portal",
    title: "Modernizing a legacy distributor portal.",
    subtitle:
      "A full UX re-architecture of a decades-old enterprise system, against modern platform constraints.",
    years: "2017 — 2018",
    blurb:
      "Re-architected a decades-old distributor portal. Reduced error rates, modernized the platform, kept the muscle memory of long-tenured users.",
    role: "Lead UX Designer",
    surface: "Enterprise distributor portal",
    href: "/design/panduit",
    kindred: [
      {
        id: "ds-panduit",
        reason: "Same company — the AEM system that backed the new portal.",
      },
      {
        id: "d-allstate",
        reason:
          "Shared challenge: modernizing critical-path enterprise software without breaking it.",
      },
    ],
  },
};

export const workOrder: WorkId[] = [
  "ds-allstate",
  "ds-harvest",
  "ds-panduit",
  "d-allstate",
  "d-harvest",
  "d-panduit",
];

export const designSystemsWorks = workOrder.filter(
  (id) => work[id].discipline === "Design Systems",
);

export const uxDesignWorks = workOrder.filter(
  (id) => work[id].discipline === "UX Design",
);

export const getKindred = (id: WorkId) =>
  work[id].kindred.map((k) => ({ ...k, work: work[k.id] }));

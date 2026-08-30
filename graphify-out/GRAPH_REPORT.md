# Graph Report - resume_al  (2026-08-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 156 nodes · 257 edges · 9 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `abc616d4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7

## God Nodes (most connected - your core abstractions)
1. `ProfileMode` - 18 edges
2. `compilerOptions` - 15 edges
3. `ProjectItem` - 9 edges
4. `ArticleItem` - 9 edges
5. `personalInfo` - 6 edges
6. `scripts` - 6 edges
7. `lib` - 4 edges
8. `TestimonialItem` - 3 edges
9. `FlagshipShowcaseProps` - 3 edges
10. `ProjectsSectionProps` - 3 edges

## Surprising Connections (you probably didn't know these)
- `ResumeModalProps` --references--> `ProfileMode`  [EXTRACTED]
  src/components/ResumeModal.tsx → src/types.ts
- `SkillsSectionProps` --references--> `ProfileMode`  [EXTRACTED]
  src/components/SkillsSection.tsx → src/types.ts
- `TimelineSectionProps` --references--> `ProfileMode`  [EXTRACTED]
  src/components/TimelineSection.tsx → src/types.ts
- `HeaderProps` --references--> `ProfileMode`  [EXTRACTED]
  src/components/Header.tsx → src/types.ts
- `HeroSectionProps` --references--> `ProfileMode`  [EXTRACTED]
  src/components/HeroSection.tsx → src/types.ts

## Import Cycles
- None detected.

## Communities (9 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (21): CertificationsSection(), ResumeModal(), ResumeModalProps, SkillsSection(), SkillsSectionProps, TestimonialsSection(), TimelineSection(), TimelineSectionProps (+13 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (17): App(), ArchitectureDiagram(), ContactSection(), ContactSectionProps, Footer(), FooterProps, Header(), HeaderProps (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (21): dotenv, express, @google/genai, lucide-react, motion, dependencies, dotenv, express (+13 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (18): DOM, DOM.Iterable, ES2022, compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules (+10 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (18): autoprefixer, esbuild, vite, devDependencies, autoprefixer, esbuild, tailwindcss, tsx (+10 more)

### Community 5 - "Community 5"
Cohesion: 0.20
Nodes (13): ArchitectureArtifact(), ArchitectureArtifactProps, CodeSnippetViewer(), CodeSnippetViewerProps, FlagshipShowcase(), FlagshipShowcaseProps, ProjectDetailModal(), ProjectDetailModalProps (+5 more)

### Community 6 - "Community 6"
Cohesion: 0.21
Nodes (10): ArticleDetailView(), ArticleDetailViewProps, ArticlesSection(), ArticlesSectionProps, CreateArticleModal(), CreateArticleModalProps, ArticleItem, MessagePayload (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, clean, dev, lint, preview (+2 more)

## Knowledge Gaps
- **53 isolated node(s):** `DeveloperAccreditation`, `ContactSectionProps`, `FooterProps`, `ScrollProgressProps`, `ShaderBackgroundProps` (+48 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 2` to `Community 4`, `Community 7`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 4` to `Community 7`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `ProfileMode` connect `Community 5` to `Community 0`, `Community 1`, `Community 6`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **What connects `DeveloperAccreditation`, `ContactSectionProps`, `FooterProps` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10541310541310542 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11076923076923077 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
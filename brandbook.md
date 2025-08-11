> ⛔ NON-NEGOTIABLE: DO NOT EDIT THIS DOCUMENT unless explicitly requested/solicited. Fixed business context. Unintended agentic changes prohibited.
> ⛔ NO NEGOCIABLE: NO EDITAR ESTE DOCUMENTO salvo solicitud explícita. Contexto de negocio fijo. Prohibidas modificaciones agenticas no intencionadas.

---

# Prisma Brandbook

## Positioning Statement
Prisma es una comunidad y SaaS senior-first para product leaders, construida sobre densidad de valor, calidad de relaciones y excelencia profesional. Nuestro lenguaje de marca debe sentirse premium, minimalista e intencional: más "executive briefing" que "thumbnail masivo". Inspiración comparable: la disciplina y pulido editorial de Reforge.

## Brand Principles
- **Curation over volume**: publica solo lo que enseña, decide o eleva.
- **Value density**: comprime insight/tiempo; relevante para seniors y no-googleable.
- **Negative space**: el blanco es un componente de autoridad serena.
- **Visual restraint**: acentos limitados, grids limpios, motion suave.
- **Relationship-first**: fomenta confianza; seguridad silenciosa sobre hype.
- **Accessibility**: contraste WCAG, estructura escaneable.

Referencias: el minimalismo y el whitespace mejoran la comprensión y la percepción de calidad: [Webflow](https://webflow.com/blog/minimalist-graphic-design), [Nielsen Norman Group](https://www.nngroup.com/articles/whitespace/).

## Core Identity System (aligned to `01-saas-product/app/styles.css`)

### Color Palette
- **Primary**: Black `#000000`
- **Accents**: Cyan `#47FFBF`, Purple `#8376FF`, Pink `#FF48C7`
- **Neutrals**: Gray 900 `#111111` → Gray 100 `#F5F5F5`, White `#FFFFFF`

Usage rules:
- **Backgrounds**: Black o Gray 900 para digital; White para decks impresos.
- **Accent ratio**: acentos ≤15% por superficie. Cyan es el CTA por defecto.
- **Gradients**: sutiles (hero/CTA); evita arcoíris en editorial.
- **Avoid**: usar Cyan+Purple+Pink simultáneamente en un mismo componente salvo hero/CTA controlado.

### Typography
- **Primary**: Inter (300–700). **Mono**: JetBrains Mono para código/métricas.
- **Hierarchy (web)**: H1 48–72; H2 36–48; H3 28–36; H4 24; Body 16–20; Small 14.
- **Letter-spacing**: headings −0.02em; body 0. **Line-length**: 60–80 chars.
- **Case**: sentence case; ALL CAPS solo para labels compactos.

### Layout & Spacing
- **Tokens**: `--space-xs` (4px) → `--space-5xl` (128px). Max width 1280px.
- **Grid**: 12-col desktop; 8-col tablet; 4-col mobile.
- **Section anatomy**: Label → Title → Subtitle (opt.) → Body → Primary Action.

### Iconography & Imagery
- **Icons**: 2px stroke, esquinas redondeadas, por defecto en escala de grises.
- **Photography**: alto contraste, temperatura cálida, interacción humana franca; alinea con ALD en `02-event-design-frameworks/supporting-systems/visual-brand-system/ald-aesthetic-concept.md`.
- **Avoid**: clip-art, sticker walls, tropos de "YouTube thumbnail".

### Motion Principles
- **Propósito y sutileza**: 200–300ms, `--ease-out`. Hover lift 2–4px, soft glow solo en CTA primario.
- **Avoid**: loops distractores en superficies de lectura; motion complejo solo en demo de producto.
- Referencia: [Material Design – Motion](https://m3.material.io/styles/motion/overview).

### Accessibility
- **Contrast**: body ≥4.5:1; texto grande ≥3:1 (WCAG 2.1 AA). Focus rings visibles.
- **Reduced motion**: respeta `prefers-reduced-motion`. Enlaces con color + subrayado al hover.
- Referencias: [WCAG 2.1](https://www.w3.org/TR/WCAG21/).

## Verbal Identity
- **Tone**: profesional, conciso, peer-level; confianza sin hype. Español primario; inglés para términos técnicos precisos.
- **Structure**: outcome → method → action; MECE para frameworks; bullets > bloques densos.
- **Favor**: sustantivos/verbos precisos, cuantificación, evidencia. **Avoid**: adjetivos hype, vaguedades.

## System-of-Systems Consistency

Mapping to `community-structure.md`
- Todas las piezas comparten anatomía: cyan label, título conciso, subtítulo ejecutivo, cuerpo.
- Posters: fondos black/white, acento cyan escaso, tipografía premium, cero clutter.
- Coffee Meetups (íntimo): whitespace máximo. Product Nights (medio): divisores sutiles. World Product Day (grande): tipografía grande, grid limpio; la contención sigue aplicando.

Mapping to `business.md`
- **SaaS**: CTAs cyan-first; visuales de producto sobre fondos negros.
- **AI Workshops**: Purple secundario; diagramas de línea mínimos y espacios generosos.
- **Prisma Talent**: Purple+Cyan con moderación; visuales de confianza; sin gráficos "salesy".
- **Events**: Pink solo como highlight; no introducir nuevos colores.

Mapping to `styles.css`
- Los tokens en `styles.css` son la fuente de verdad. Nuevos colores/motions requieren tokens y usage audit. Depreca texto arcoíris animado en editorial; solo en demos contenidas.

## Sub-Brand System (Product-Line "Twists" within One System)

Todas las variantes heredan: bases black/white, Inter, CTAs cyan-first, motion contenido y reglas de accesibilidad. Para minimizar drift y maximizar reconocimiento, se asigna un único icono/color por línea (ver "Flywheel Icon System").

- **SaaS (PRD Builder)**
  - Palette: Full (Cyan, Purple, Pink) según `styles.css`.
  - Treatments: gradientes y glassmorphism permitidos en landing/hero/CTAs; editorial sobria.
  - Backgrounds: Black/Gray-900 dominante.
  - Motion: funcional y comedido; showcases aceptables.

- **Product Nights (Monthly Expert Sessions)**
  - Primary: Pink como base de impacto (edgy).
  - Secondary: Purple ≤10% en reglas/dividers/labels para rigor.
  - Backgrounds: Black/Gray-900 con tipografía grande y grids estrictos.
  - Motion: mínimo; el contenido manda.

- **Executive Dinners (Invite-only)**
  - Primary: White/Black de alta contención.
  - Accents: micro Cyan en digital; Pink solo como spot color físico (coasters) manteniendo minimalismo.
  - Backgrounds: White en decks/invites; Black en hero digital.
  - Motion: none en email; micro-hover en web.

- **Coffee Meetups / Cafe (Intimate, chill)**
  - Primary: Cyan predominante.
  - Secondary: ninguna (excluir Purple/Pink para calma minimal).
  - Optional neutrals (print/email): Cream #F8F6F0, Navy #1B2951, Charcoal #2C2C2C.
  - Backgrounds: White/Cream con acentos Cyan; Black con moderación.
  - Motion: none; glow sutil permitido en badges.

- **Prisma Talent (Search & Assessment)**
  - Primary: Purple intensivo para pericia y discernimiento.
  - Secondary: Black/White para legibilidad; Cyan reservado a métricas/CTAs; evitar Pink.
  - Backgrounds: White en propuestas/briefs; Black o Purple profundo en hero web (con contraste AA).
  - Motion: none; prioriza credibilidad y claridad.

Guardrails (todas las variantes)
- Acentos ≤15% por superficie.
- Sin sticker walls/emoji floods/multi‑hue gradients en editorial.
- Mantén escala tipográfica constante; tono ejecutivo.

## Flywheel Icon System (one mark per line)

Para reducir switching cognitivo y drift, se fija un icono/color único por experiencia. Cada marca cumple un "trabajo psicológico" específico en el funnel.

- **Cafes (Top‑of‑Funnel, acercamiento)**
  - Mark: Ojos (`assets/ojos-cyan.svg`)
  - Color: Cyan `#47FFBF`
  - Job: acercabilidad y curiosidad sin amenaza; baja fricción social; impulsa waitlist SaaS.

- **Product Nights (Mid‑Funnel, atención y demo)**
  - Mark: Explosión (`assets/explosion-rosa.svg`)
  - Color: Pink `#FF48C7`
  - Job: "momento/announcement"; rompe la fatiga morada de consultoría; gana atención y solicitudes de demo.

- **Executive Dinners (Decision, enterprise/workshops)**
  - Mark: Chispa Blanca (`assets/chispablanca-fondonegro.svg`)
  - Color: Monochrome (White sobre Black o Black sobre White; prioriza whitespace ≥40%)
  - Job: claridad y decisión; reduce carga cognitiva; facilita próximos pasos.

- **Talent (Brief → Shortlist → Mandate)**
  - Mark: Trébol (`assets/trebol-lilac.svg`)
  - Color: Purple `#8376FF`
  - Job: calma premium y cohesión/fit. Requisito: acompañar siempre con evidencia (scorecard, métricas en JetBrains Mono: time‑to‑shortlist, shortlist size, 12‑month retention).

Notas de gobernanza
- 4 marcas, 1 versión cada una (sin variantes de color).
- CTAs siempre en Cyan para coherencia de acción.
- En Talent, prohíbe lenguaje "community" en titulares; usa sustantivos instrumentales: Scorecard, Signal, Shortlist.

## Color Psychology Rationale (Concise)
- **Cyan** `#47FFBF`: innovación, claridad y energía tech sin agresión → CTA por defecto y base de Cafes.
- **Purple** `#8376FF`: premium, expertise, pensamiento estratégico → dominante en Talent y como acento de rigor.
- **Pink** `#FF48C7`: chispa creativa, memorabilidad, edge → base de Product Nights con contención tipográfica.
- **Black/White + Neutrals**: autoridad, calma, legibilidad → base de todo; habilita whitespace y pulido editorial.

## Component Standards

**Buttons**
- Primary: fondo Cyan, texto Black; hover glow + lift.
- Secondary: transparente, borde Cyan; hover tinte Cyan.
- Enterprise: Purple→Pink gradient reservado a CTAs finales/premium.

**Cards**
- Glassmorphism sutil (5–10%); borde 1px; radios 12–16px; legibilidad ante todo.

**Sections**
- Section labels (uppercase, cyan) con moderación. Hero: una frase de valor + subtítulo corto.

**Logos & Social Proof**
- Monocromo/escala de grises por defecto; color completo solo en press/partners.

**Data & Metrics**
- JetBrains Mono solo para métricas; nunca en párrafos.

## Event Branding (antidote to "thumbnail" aesthetics)
- **Principios**: texto mínimo, tipografía grande, acento único, fotografía honesta.
- **Coffee Meetup**: un headline + fecha/hora; subrayado cyan; foto con grano.
- **Product Night**: speaker + topic; base Pink; regla Purple sutil (≤10%).
- **World Product Day**: ver sección dedicada.

## Content Patterns
- **Executive briefs (PDF)**: fondo blanco, 1–2 reglas de acento, jerarquía fuerte, márgenes generosos.
- **Long-form**: headings cada 300–400 palabras; bullets para frameworks; sin emoji walls.
- **Social**: fondo negro, motivo cyan único, 1 insight por frame; carruseles ≤6.

## Governance & Workflow
- **Source of truth**: tokens en `styles.css`. Cambios: proposal → review → version bump → usage audit.
- **Brand QA** por asset: contraste, espaciado, ratio de acento, motion restraint, densidad de contenido.
- **Asset library**: componentes de Figma mapeados a tokens; templates de deck/one‑pager/social.
- **Exceptions**: motion experimental solo en demos de producto; nunca en educación de marca/talent/executive.

## SaaS Product Expression (visual specifics)
- **Icon context**: el SaaS vive visualmente dentro de Nights (demo) y nurture; no añade quinta marca.
- **Gradient lock** para hero/CTA de producto:
  - Ángulo 135°
  - Stops: 0% `#47FFBF` → 100% `#8376FF`
- **Uso**: solo en hero/CTAs de producto y showcase; editorial sobria (sin gradiente).

## Anti‑Drift Safeguards
- Accents ≤15% por superficie (verifica con plugin/inspección).
- Cafes: prohíbe stickers/emoji; cap del tamaño de Eyes (≤50% del tile).
- Dinners: whitespace mínimo del 40%; máx. dos bloques de texto; sin sub‑CTA.
- Talent: requiere trío de métricas y/o scorecard UI; motion desactivado en hero.
- Product Nights: Pink base permitido; Purple ≤10% como regla/acento; tipografía y grid sostienen el "edge".
- Dark/Print: provee alternas Black/White para cada tile; keyline de 0.5–1px en pequeñas aplicaciones.

## Token Appendix (implementation snippet)
```css
:root {
  /* Colors */
  --color-black: #000000;
  --color-cyan: #47FFBF;
  --color-purple: #8376FF;
  --color-pink: #FF48C7;
  --color-white: #FFFFFF;
  /* Neutrals */
  --color-gray-900: #111111; /* …through #F5F5F5 */
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  /* Spacing */
  --space-xs: 0.25rem; /* …to --space-5xl: 8rem */
  /* Motion */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --motion-hover-lift: 220ms var(--ease-out);
}
```

## References & Further Reading
- Minimalismo y whitespace: [Webflow](https://webflow.com/blog/minimalist-graphic-design), [NN/g](https://www.nngroup.com/articles/whitespace/)
- Contraste y accesibilidad: [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
- Motion: [Material Motion](https://m3.material.io/styles/motion/overview)
- Minimalist do's/don'ts: [Grazitti](https://www.grazitti.com/blog/embracing-minimalist-design-essential-principles-dos-and-donts/)

---

## World Product Day Visual System (Color‑Explosion, Disciplined)

**Purpose**
- Celebramos PM una vez al año con color y tiles modulares. Alegre pero sistemático y legible.

**Palette (WPD‑only)**
- Base: Black, White
- Core Prisma: Cyan `#47FFBF`, Purple `#8376FF`, Pink `#FF48C7`
- Uso: bloques de color y planos duotono. Formas negras sobre campos de color; texto Black sobre color o White sobre dark con contraste AA/AAA.

**Icon Set (4 marks)**
- Ubicación: `assets/`: `chispablanca-fondonegro.svg`, `ojos-cyan.svg`, `trebol-lilac.svg`, `explosion-rosa.svg`
- Mapeo de producto (WPD): usa las 4 marcas en su color asignado del sistema.
- Implementación:
  - Usar como máscaras monocromas con `currentColor`.
  - Tamaños: 16–20 (sm), 24–32 (md), 48–64 (lg), 120–240 (tile).
  - Clearspace ≥25% del ancho del icono. Sin outlines/gradients.
  - Accesibilidad: alt text específico por producto.

**Typography & Grid**
- Inter Black/Bold para headlines; Medium para metadata.
- Escalas: H1 72–96, H2 48–64, H3 32–40, Body 18–20 con −0.02em en grandes.
- Grid: 8/12 columnas; sistema modular que mezcla tiles de icono y bloques tipográficos.

**Layout Principles**
- Poster/hero: 60–70% tiles de color + 30–40% tipografía grande. Fecha/lugar legibles a 1m y en móvil.
- Sponsors: logos en escala de grises en franja reservada/final; nunca en el foco del hero.
- Hashtag lock: una sola píldora vertical (#WPD2025) o lock de esquina.

**Motion (digital)**
- Permitido: parallax sutil, bounce‑in único (500–800ms). Loops de 6–10s con largos descansos. Respeta `prefers-reduced-motion`.

**Accessibility**
- Verifica contraste para todo texto sobre color (mín. AA). Añade underlay 6–10% si hace falta.
- Máx. 3 tiles de color distintos por frame para evitar ruido.

**Deliverables (template kit)**
- Poster/Square (1080×1080), Story (1080×1920), Header (1920×1080), Badge, Stage screen, Email hero.
- Figma: Color tile, Icon tile, Date pill, Venue badge, Hashtag lock, Sponsor strip.

**Guardrails**
- WPD es el único contexto para multi‑hue blocks. Fuera de WPD, vuelve a las reglas minimalistas.

---

## Why It Works (ICP → Conversion → Mark/Color)

- **Cafes** → Senior PMs (individual) → Join waitlist → Ojos/Cyan (acercabilidad, curiosidad).
- **Product Nights** → Directors/VPs → Demo/Trial → Explosión/Pink (momento, memorabilidad).
- **Dinners** → C‑suite/VPs → Book Workshop/Next step → Chispa/Monochrome (decisión, claridad).
- **Talent** → Hiring Managers/TA → Brief → Trébol/Purple + métricas (calma premium + evidencia).

Resultado: un sistema de 4 marcas, 1 versión cada una, optimizado para conversión, gobernanza-ready y con distintividad sostenida.
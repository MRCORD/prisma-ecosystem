# Prisma PRD Builder - Product Requirements Document

## Resumen Ejecutivo

El **Prisma PRD Builder** es un sistema avanzado de inteligencia artificial que transforma ideas de productos en Documentos de Requerimientos de Producto (PRD) profesionales y completos. Utiliza una cadena secuencial de 10 agentes especializados de IA que analizan, estructuran y desarrollan cada aspecto de un producto desde diferentes perspectivas expertas.

## Arquitectura del Sistema

### Stack Tecnológico

| Componente | Tecnología |
|------------|------------|
| **Frontend** | React 18 + TypeScript + Vite |
| **Backend** | Node.js + Express.js + TypeScript |
| **UI** | shadcn/ui + Tailwind CSS con efectos glass morphism |
| **IA** | OpenAI GPT-4o (modelo más reciente) |
| **Estado** | Zustand + React Query |
| **Comunicación** | WebSocket en tiempo real |
| **Autenticación** | Código de acceso "Product25" |
| **Branding** | Prisma (negro, #47FFBF, #8376FF, #FF48C7) |

## Los 10 Prompts Especializados

### 1. IDEA STRUCTURER (Estructurador de Ideas)

**Objetivo:** Convertir texto libre en estructura JSON estandarizada

**Prompt:** "Eres un estratega de productos experto. Analiza la idea dada y estructúrala en formato JSON estandarizado."

**Output:**
- `nombre_idea`
- `necesidad`
- `contexto_base`
- `objetivo`
- `segmento`

### 2. INTERBANK CONTEXT ADAPTER (Adaptador de Contexto Bancario)

**Objetivo:** Agregar contexto estratégico y técnico específico de banca

**Prompt:** "Eres un experto en dominio bancario. Agrega contexto estratégico y técnico específico de banca a la idea estructurada."

**Output:**
- `canal`
- `sla_afectado`
- `impacto_proceso_firmas`
- `sistemas_involucrados`
- `riesgos_operacionales`
- `regulaciones_aplicables`
- `beneficios_esperados`

### 3. STAKEHOLDER SYNTHESIZER (Sintetizador de Stakeholders)

**Objetivo:** Identificar expectativas y riesgos desde perspectivas de negocio, tecnología y compliance

**Prompt:** "Eres un experto en análisis de stakeholders. Identifica expectativas y riesgos desde perspectivas de negocio, tecnología y compliance."

**Output:**
- `business_expectations`
- `technical_risks`
- `compliance_requirements`
- `resource_implications`
- `timeline_expectations`
- `success_metrics`

### 4. COMPETITIVE ANALYST (Analista Competitivo)

**Objetivo:** Análisis de mercado y posicionamiento competitivo

**Prompt:** "Eres un analista de inteligencia competitiva en el sector bancario. Identifica brechas y diferenciadores versus otros bancos y fintechs."

**Output:**
- `competitor_solutions`
- `market_gaps`
- `differentiators`
- `competitive_advantages`
- `market_positioning`
- `threat_assessment`

### 5. COMPLIANCE SCANNER (Escáner de Compliance)

**Objetivo:** Análisis de cumplimiento regulatorio (SBS, AML/KYC, privacidad de datos)

**Prompt:** "Eres un experto en compliance bancario. Escanea requerimientos regulatorios incluyendo SBS, AML/KYC, y flags de privacidad de datos."

**Output:**
- `regulatory_frameworks`
- `aml_kyc_requirements`
- `data_privacy_flags`
- `audit_requirements`
- `risk_assessment`
- `mitigation_strategies`

### 6. USER INSIGHTS AGENT (Agente de Insights de Usuario)

**Objetivo:** Desarrollo de experiencia de usuario y personas

**Prompt:** "Eres un investigador UX y experto en experiencia de usuario. Define personas de usuario, jobs to be done, y expectativas UX."

**Output:**
- `user_personas`
- `jobs_to_be_done`
- `user_journeys`
- `pain_points`
- `ux_expectations`
- `accessibility_requirements`

### 7. STORY & FUNCTIONAL REQS AGENT (Agente de Historias y Requerimientos Funcionales)

**Objetivo:** Especificaciones funcionales detalladas e historias de usuario

**Prompt:** "Eres un product manager experto en escribir historias de usuario y criterios de aceptación. Crea requerimientos funcionales detallados."

**Output:**
- `user_stories`
- `acceptance_criteria`
- `functional_requirements`
- `business_rules`
- `integration_points`
- `data_requirements`

### 8. TECHNICAL REQUIREMENTS AGENT (Agente de Requerimientos Técnicos)

**Objetivo:** Arquitectura técnica y especificaciones de sistema

**Prompt:** "Eres un arquitecto técnico especializado en sistemas bancarios. Define requerimientos de seguridad, performance, disponibilidad, y APIs."

**Output:**
- `security_requirements`
- `performance_requirements`
- `availability_requirements`
- `scalability_requirements`
- `api_specifications`
- `infrastructure_requirements`
- `monitoring_requirements`

### 9. WIREFLOW UX AGENT (Agente de Wireflow UX)

**Objetivo:** Descripciones de diseño a nivel de pantalla y flujos de usuario

**Prompt:** "Eres un diseñador UX especializado en interfaces bancarias. Crea descripciones a nivel de pantalla de flujos de usuario clave."

**Output:**
- `key_screens`
- `user_flows`
- `interaction_patterns`
- `responsive_considerations`
- `accessibility_features`
- `ui_components`

### 10. PRD COMPOSER (Compositor de PRD)

**Objetivo:** Compilación final del PRD en Markdown

**Prompt:** "Eres un senior product manager experto en escribir Documentos de Requerimientos de Producto comprensivos. Compila todos los outputs de agentes anteriores en un PRD completo y profesional en formato Markdown."

**Output:** PRD completo en Markdown con 12 secciones estructuradas

## Flujo de Datos y Contexto

### Acumulación de Estado

Cada agente recibe:
1. Input original del usuario
2. Datos de contexto (empresa, país, objetivo)
3. Estado completo de todos los agentes anteriores
4. Prompts especializados adaptados a su rol

### Contexto Enriquecido

```javascript
const context = `
Enterprise/Organization: ${empresa}
Country/Region: ${país}
Primary Goal: ${objetivo}
Original Product Idea: ${idea_usuario}
+ Outputs de todos los agentes anteriores
`
```

## Comunicación en Tiempo Real

### WebSocket Events

| Evento | Descripción |
|--------|-------------|
| `progress` | Agente iniciando procesamiento |
| `agent_complete` | Agente terminado con output |
| `agent_error` | Agente falló con error |
| `session_complete` | Todos los agentes completados |
| `session_error` | Sesión falló |

## Funcionalidades de Exportación

### Opciones de Descarga

1. **Markdown PRD:** Documento formateado completo
2. **JSON State:** Estado completo de agentes y outputs
3. **PDF Export:** (UI preparada, no implementada)

## Interfaz Sofisticada

### Características de Diseño

- **Glass Morphism:** Efectos de vidrio con blur
- **Colores Prisma:** 
  - Negro (#000000)
  - Cian (#47FFBF)
  - Púrpura (#8376FF)
  - Rosa (#FF48C7)
- **Gradientes:** Burbujas de mensajes con gradientes por tipo de agente
- **Indicadores de Progreso:** Codificados por colores usando la paleta Prisma
- **Tipografía Profesional:** Espaciado refinado y jerarquía visual
- **Branding Premium:** Logo Prisma sobre fondos negros

## Seguridad y Control de Acceso

### Flujo de Autenticación

1. Código de acceso "Product25"
2. Formulario de contexto (empresa, país, objetivo)
3. Creación de sesión con datos de contexto
4. Ejecución de cadena de agentes con contexto completo

### Validación de Datos

- Esquemas Zod para todas las estructuras de datos
- Sanitización y validación de inputs
- Manejo de errores con degradación elegante
- Type safety en todo el stack
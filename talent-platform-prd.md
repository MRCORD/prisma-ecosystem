# Prisma Talent MVP Documentation (Simplified)

## Overview

**Promise**: 3–5 prioritized candidates with evidence delivered in ≤10 business days  
**Model**: Premium headhunting agency powered by community sourcing  
**Channels**: WhatsApp, email newsletter, LinkedIn  
**Scope**: Full-service talent acquisition with manual validation process  

*Brand Guidelines: See `brandbook.md` - Trébol/Purple system with evidence-based approach, premium positioning, and relationship-first philosophy.*

---

## Core Value Proposition

- **Speed**: 10-day delivery vs 30-45 industry standard
- **Quality**: Community-sourced candidates with manual validation
- **Intelligence**: Deep role assessment + cultural fit prediction
- **Network**: Warm introductions vs cold outreach spam
- **Evidence**: Scorecards and metrics in JetBrains Mono (time-to-shortlist, shortlist size, 12-month retention)

## Prisma Community Advantage

### **The Differentiator: Community-Driven Talent Intelligence**

Unlike traditional recruiting agencies that rely on databases and cold outreach, Prisma Talent leverages our established product management community infrastructure to deliver superior placement outcomes through relationship-based sourcing.

#### **Multi-Tier Community Structure**
- **Open Community (300+ members)**: Verified product, growth, and design professionals across LATAM
- **Leadership Circle (20 members)**: Senior executives (Directors, VPs, CPOs) who provide strategic insights and referrals
- **Executive Dinners**: Intimate gatherings creating deep professional relationships and trust-based recommendations

#### **Domain Specialization Advantage**
- **Product Management Expertise**: Deep understanding of PM roles from running Coffee Meetups, Product Nights, and World Product Day
- **Growth & Design Fluency**: Specialized knowledge of growth marketing and product design disciplines through community activities
- **Cultural Intelligence**: Community interactions provide insights into collaboration styles, leadership approaches, and team fit

#### **Relationship-First Sourcing**
- **Personal Knowledge**: Direct relationships with candidates through community events and professional interactions
- **Warm Introductions**: Candidates are introduced through existing professional relationships, not cold contacted
- **Ongoing Relationships**: Placements become part of our extended professional network, ensuring long-term success

#### **Evidence-Based Assessment Process**
- **Community Validation**: Candidates validated through peer interactions at events and community participation
- **Manual Screening**: All candidates personally screened with community context and relationship insights
- **Cultural Fit Prediction**: Community interaction data provides superior cultural compatibility assessment
- **Role Scorecard Methodology**: Systematic evaluation based on Position Blueprint framework developed through community insights

### **Competitive Differentiation Matrix**

| **Factor** | **Prisma Talent** | **Traditional Agencies** | **Database Services** |
|------------|-------------------|---------------------------|----------------------|
| **Candidate Source** | Community relationships | Cold outreach + databases | Database searches |
| **Domain Knowledge** | Deep PM/Growth/Design expertise | Generalist approach | Algorithm matching |
| **Cultural Assessment** | Community interaction data | Interview-only | Limited/automated |
| **Relationship Quality** | Ongoing professional network | Transactional placement | One-time service |
| **Success Rates** | Higher retention through fit | Industry standard | Lower due to limited context |
| **Post-Placement** | Community integration | Limited follow-up | No relationship |

### **Success Metrics Enhancement**
- **Community Conversion**: >30% of candidates sourced through community relationships vs external databases
- **Cultural Fit Accuracy**: >85% placement satisfaction on cultural compatibility (vs 60% industry average)
- **12-Month Retention**: >90% of placements active after 12 months (vs 70% industry average)
- **Referral Network Growth**: Each placement generates 2+ qualified referrals within 6 months through community integration

---

## Functional Workflow

### Stage 1: Client Onboarding & Request
**SLA**: Same-day response to form submission  
**Owner**: Sales/BD lead  

**Process**:
1. Client completes intake form on `/talent-request` page
2. Auto-confirmation email with next steps + Calendly link
3. T&C acceptance triggers CRM entry
4. Sales team books scoping call within 24 hours

**Templates**: 
- Welcome email template
- Scoping call agenda template
- T&C document template

### Stage 2: Position Design Workshop  
**SLA**: 45-minute scoping call + 24-hour Position Blueprint delivery  
**Owner**: Senior consultant  

**Process**:
1. Structured scoping call using Position Blueprint template
2. Position Blueprint created in Notion (template-driven)
3. Client receives blueprint for approval within 24 hours
4. JD generation begins upon approval

**Deliverables**:
- Position Blueprint document (skills, experience, cultural fit criteria)
- Role scorecard template
- Interview guidance framework

### Stage 3: JD Generation & Validation
**SLA**: 24-hour JD delivery + 1 revision cycle maximum  
**Owner**: Content specialist  

**Process**:
1. AI-assisted JD generation using Position Blueprint
2. Internal quality review (readability, accuracy, appeal)
3. Client receives JD for feedback
4. Single revision cycle (24-hour turnaround)
5. Final approval triggers community activation

**Quality Gates**:
- Role clarity check
- Compensation benchmarking
- Cultural alignment validation
- Market positioning review

### Stage 4: Community Activation & Sourcing
**SLA**: 48-hour multi-channel broadcast  
**Owner**: Community manager  

**Process**:
1. WhatsApp broadcast to targeted community segments
2. LinkedIn post with community engagement
3. Email newsletter inclusion (weekly talent roundup)
4. Optional Coffee Meetup mention for premium/executive roles
5. Candidate applications routed to central intake system

**Distribution Strategy**:
- WhatsApp: Direct community messaging
- LinkedIn: Professional network activation  
- Email: Newsletter integration
- Events: Premium role announcements

### Stage 5: Candidate Pipeline & Manual Screening
**SLA**: Rolling review, all candidates screened within 5 business days  
**Owner**: Talent analyst  

**Process**:
1. CV + application form auto-stored in central database
2. Initial screening using role-specific scoring framework
3. **Manual validation**: Internal team reviews community connections and background
4. **Manual reference gathering**: Direct outreach to validate experience claims
5. 15-30 minute phone/video screening for qualified candidates
6. Basic background verification

**Validation Criteria**:
- Technical competency match
- Cultural fit assessment
- Community reputation check
- Reference validation
- Career trajectory analysis

### Stage 6: Shortlist Delivery & Handoff
**SLA**: Day 10 maximum delivery  
**Owner**: Senior consultant  

**Process**:
1. Top 3-5 candidates compiled with evidence packages
2. Risk analysis and interview guidance included
3. 30-minute debrief call with hiring manager
4. Warm introduction emails facilitated
5. Interview coordination support provided

**Deliverables**:
- Candidate profiles with evidence
- Interview question recommendations
- Risk/opportunity assessment per candidate
- Cultural fit prediction
- Compensation guidance

### Stage 7: Placement & Commission
**SLA**: Offer support + 60-day guarantee  
**Owner**: Account manager  

**Process**:
1. Interview feedback collection and coaching
2. Offer negotiation support for both sides
3. Placement confirmation and contract execution
4. 50% commission invoiced upon candidate start
5. 50% balance invoiced at 60-day milestone
6. 60-day replacement guarantee activation

---

## Form Specifications

### Client Intake Form (`/talent-request`)

**Company Information**
- `company_name` (text, required): Legal company name
- `company_size` (select, required): 1-10, 11-50, 51-200, 201-1000, 1000+
- `company_stage` (select, required): Pre-seed, Seed, Series A, Series B+, Public, Established
- `industry` (select, required): SaaS, FinTech, HealthTech, E-commerce, EdTech, Other
- `headquarters` (text, required): City, Country
- `website` (url, optional): Company website for context
- `hiring_urgency` (select, required): ASAP (2 weeks), Standard (4 weeks), Flexible (6+ weeks)

**Product Context**
- `product_type` (select, required): B2B, B2C, B2B2C, Marketplace, Platform
- `user_base` (select, required): <1K, 1K-10K, 10K-100K, 100K-1M, 1M+
- `revenue_stage` (select, required): Pre-revenue, <$1M ARR, $1M-$10M ARR, $10M+ ARR
- `tech_stack` (text, optional): Primary technologies for technical roles

**Role Specification**
- `role_title` (text, required): Specific position title
- `role_level` (select, required): IC/Senior, Lead/Principal, Director, VP, C-level
- `department` (select, required): Product, Engineering, Growth, Design, Data
- `role_type` (select, required): Full-time, Contract, Part-time
- `remote_policy` (select, required): On-site, Hybrid, Fully Remote
- `salary_range` (text, required): Expected salary range in USD
- `equity_range` (text, optional): Equity percentage if applicable
- `start_date` (date, required): Desired start date

**Requirements & Context**
- `must_have_skills` (textarea, required): Non-negotiable requirements
- `nice_to_have_skills` (textarea, optional): Preferred qualifications
- `team_context` (textarea, required): Team structure and dynamics
- `growth_opportunity` (textarea, required): Role growth potential
- `company_culture` (textarea, required): Cultural fit expectations
- `interview_process` (textarea, optional): Planned interview stages

**Contact & Agreement**
- `primary_contact` (text, required): Hiring manager name
- `contact_email` (email, required): Primary communication email
- `contact_phone` (phone, optional): WhatsApp-enabled number preferred
- `budget_approval` (checkbox, required): Budget approved for search fee
- `terms_acceptance` (checkbox, required): T&C agreement
- `referral_source` (select, optional): How they heard about Prisma Talent

### Candidate Application Form

**Personal Information**
- `full_name` (text, required): Legal full name
- `email` (email, required): Primary contact email
- `phone` (phone, required): WhatsApp-enabled preferred
- `location` (text, required): Current city, country
- `linkedin_url` (url, required): LinkedIn profile URL
- `portfolio_url` (url, optional): Portfolio/personal website

**Professional Background**
- `current_role` (text, required): Current position title
- `current_company` (text, required): Current company name
- `experience_years` (select, required): 1-2, 3-5, 6-10, 10+ years
- `cv_upload` (file, required): PDF format, max 2MB
- `cover_letter` (textarea, optional): Role-specific motivation

**Role-Specific Questions** (Dynamic based on role type)
- `role_interest` (textarea, required): Why interested in this specific role
- `relevant_experience` (textarea, required): Most relevant experience for position
- `technical_skills` (textarea, required): Technical competencies
- `leadership_experience` (textarea, optional): Team/project leadership examples
- `cultural_fit` (textarea, required): Examples of cultural alignment
- `availability` (select, required): Immediate, 2 weeks, 1 month, 2+ months
- `salary_expectations` (text, required): Expected salary range in USD

**Community Connection**
- `prisma_events` (checkbox): Attended Prisma events (Coffee Meetups, Product Nights, etc.)
- `community_referral` (text, optional): Referred by Prisma community member
- `how_heard` (select, required): Community, LinkedIn, Referral, Website, Other

**Consent & Authorization**
- `data_consent` (checkbox, required): GDPR-compliant data processing consent
- `reference_consent` (checkbox, required): Permission to contact references
- `background_check_consent` (checkbox, required): Basic background verification consent

---

## Success Metrics & KPIs

### Service Delivery Metrics
- **SLA Compliance**: >95% of deliverables meet promised timelines
- **Client Satisfaction**: >9/10 rating on service delivery
- **Response Time**: <2 hours average response time to client inquiries
- **Candidate Response Rate**: >25% from community broadcasts
- **Placement Rate**: >40% of shortlisted candidates receive offers
- **Quality Score**: >80% of placed candidates exceed 90-day expectations

### Business Metrics  
- **Monthly Active Roles**: 10 concurrent searches by month 6
- **Placement Revenue**: $150K annual run rate by month 12
- **Average Fee**: 25% first-year salary average
- **Client Retention**: >70% repeat business rate
- **Candidate Database**: 500+ qualified candidates by month 6
- **Market Position**: Top 3 tech recruiting agency in LATAM by reputation

### Community Integration Metrics
- **Community Conversion**: >15% of candidates sourced through community
- **Event Integration**: >30% of executive roles mentioned at events
- **Referral Rate**: >20% of candidates referred by community members
- **Brand Alignment**: 100% compliance with Trébol/Purple brand guidelines

---

## Risk Mitigation

### Quality Assurance
- Internal review of all Position Blueprints before client delivery
- Manual validation of all shortlisted candidates (no automated screening)
- Client feedback collection after every placement
- 60-day replacement guarantee with like-for-like commitment
- Regular template updates based on client feedback

### Operational Resilience
- Multiple team members trained on manual screening process
- Clear escalation paths for client complaints or delays
- Regular backup of all candidate and client data
- Documented processes for all manual validation steps
- Redundant communication channels (WhatsApp, email, phone)

### Legal & Compliance  
- Legal review of all service agreements and T&Cs
- GDPR-compliant data processing and candidate consent
- Clear IP ownership and confidentiality agreements
- Proper invoicing and tax compliance setup
- Regular compliance audits and process updates

### Brand Consistency
- All materials follow brandbook.md guidelines (Trébol/Purple system)
- Premium positioning maintained throughout candidate experience
- Evidence-based approach with metrics in JetBrains Mono
- Relationship-first philosophy in all communications

---

## Technical Implementation Notes

**In Scope (Manual Processes)**:
- Template-driven Position Blueprint creation
- Manual candidate screening and validation
- Basic CRM for client/candidate tracking
- Email/WhatsApp communication workflows
- Simple form collection and storage
- Invoice generation and tracking

**Out of Scope (Automated Systems)**:
- ATS or HRIS integrations
- Client portals/dashboards  
- Automated peer/community validation
- Multi-country legal/payroll support
- Psychometrics or technical coding tests
- Complex analytics or ML scoring
- Social paid advertising campaigns
- Long-term candidate coaching/onboarding

---

## 3-Phase Implementation Plan

### Phase 1: Market Validation (Minimal Frontend + Manual Backend)
**Goal**: Test market demand with minimal technical investment  
**Timeline**: 2-4 weeks  
**Investment**: ~$2K (frontend + basic setup)

#### Frontend Requirements:
- [ ] Simple landing page explaining Prisma Talent service
- [ ] Client intake form (`/talent-request`) with all specified fields
- [ ] Auto-confirmation email system
- [ ] Basic form validation and submission
- [ ] T&C acceptance page
- [ ] Contact information and service overview

#### Manual Backend Process:
- [ ] Form submissions go directly to team email/Slack
- [ ] Manual follow-up within 24 hours via email/phone
- [ ] All client communication via personal email + Calendly
- [ ] Manual Position Blueprint creation in Google Docs/Notion
- [ ] Manual community outreach via personal WhatsApp/LinkedIn
- [ ] Manual candidate collection via email
- [ ] Manual screening and shortlist creation
- [ ] Manual client delivery via email + call

#### Success Metrics:
- [ ] 5+ quality form submissions within first month
- [ ] 2+ client scoping calls completed
- [ ] 1+ successful placement to prove concept

---

### Phase 2: Process Systemization (Backend Automation)
**Goal**: Systematize successful processes while maintaining manual quality control  
**Timeline**: 4-6 weeks after Phase 1 validation  
**Investment**: ~$8K (CRM + automation tools)

#### System Requirements:
- [ ] CRM integration (HubSpot/Pipedrive) for client management
- [ ] Email automation sequences (welcome, follow-up, templates)
- [ ] Candidate application form with file upload capability
- [ ] Basic candidate database (Airtable/Notion database)
- [ ] Template library for Position Blueprints and JDs
- [ ] WhatsApp Business API for community broadcasting
- [ ] Calendar integration for automated booking
- [ ] Document generation automation (Position Blueprints, JDs)

#### Enhanced Manual Processes:
- [ ] Structured Position Blueprint template system
- [ ] Standardized JD generation workflow
- [ ] Community broadcast templates and segments
- [ ] Manual candidate scoring framework
- [ ] Evidence package templates for shortlists
- [ ] Client communication templates
- [ ] Performance tracking spreadsheets

#### Success Metrics:
- [ ] 10+ concurrent active searches
- [ ] 50% reduction in administrative time per placement
- [ ] 5+ completed placements
- [ ] Client satisfaction >8/10

---

### Phase 3: Full MVP (Complete Service Integration)
**Goal**: Deliver full-service platform matching original PRD specifications  
**Timeline**: 6-8 weeks after Phase 2 success  
**Investment**: ~$15K (platform development + integrations)

#### Complete Platform Features:
- [ ] Full candidate portal with application tracking
- [ ] Client dashboard with search progress visibility
- [ ] Automated community sourcing workflows
- [ ] Advanced candidate matching algorithms
- [ ] Interview coordination system
- [ ] Placement tracking and guarantee management
- [ ] Invoice generation and payment tracking
- [ ] Comprehensive reporting and analytics
- [ ] Mobile-responsive design for all interfaces

#### Advanced Manual Processes:
- [ ] Multi-channel candidate sourcing coordination
- [ ] Advanced cultural fit assessment protocols
- [ ] Reference checking workflow automation
- [ ] Risk assessment framework implementation
- [ ] Client feedback collection system
- [ ] 60-day guarantee tracking system
- [ ] Community integration measurement
- [ ] Quality assurance checkpoints

#### Full Service Capabilities:
- [ ] Multiple concurrent roles per client (10+ active searches)
- [ ] Complete SLA compliance (≤10 business days)
- [ ] Evidence-based shortlist delivery
- [ ] Warm introduction facilitation
- [ ] Offer negotiation support
- [ ] Post-placement tracking and guarantee
- [ ] Community-powered candidate sourcing
- [ ] Premium brand experience aligned with brandbook.md

#### Success Metrics:
- [ ] $150K+ annual run rate
- [ ] 15+ successful placements
- [ ] 70%+ client retention rate
- [ ] 95%+ SLA compliance
- [ ] Market position as top LATAM tech recruiter

---

## Implementation Priorities by Phase

### Phase 1 Focus: Prove Market Demand
- Minimize technical complexity
- Focus on client acquisition and validation
- Test service pricing and demand
- Validate community sourcing effectiveness

### Phase 2 Focus: Operational Efficiency  
- Systematize proven processes
- Reduce manual workload
- Improve client experience
- Scale to multiple concurrent searches

### Phase 3 Focus: Market Leadership
- Complete competitive feature set
- Premium client experience
- Full brand integration
- Sustainable business operations

Each phase builds incrementally while maintaining the core value proposition of community-powered, premium talent acquisition services.
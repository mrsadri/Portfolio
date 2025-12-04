// File: scripts/generate-resume-pdf.ts
// Purpose: Generates a professional PDF resume from resume content data
import puppeteer from "puppeteer";
import { join } from "node:path";
import { mkdir, cp } from "node:fs/promises";

const resumeData = {
  name: "Masih Sadri",
  title: "Product Designer",
  summary:
    "Data-driven Product Designer with <strong>6+ years</strong> of experience improving experiences for <strong>40M+ users</strong>. Impact-oriented with hands-on experience in <strong>two semi-unicorn tech companies</strong> (Divar, IR-MCI), designing for both <strong>B2B and B2C products</strong> across embedded, centralized, and single-threaded team structures.",
  contact: {
    email: "sadrimasih@gmail.com",
    linkedin: "linkedin.com/in/msadri",
    portfolio: "https://mrsadri.github.io/Portfolio/",
    location: "Tehran, Iran • Willing to relocate",
  },
  experience: [
    {
      company: "BimeBazar | B2B/B2C insurance marketplace & digital distribution platform | Nationwide scale",
      role: "Staff Product Designer",
      jobType: "· Remote, Full-time",
      period: "August 2025 – Present | 5 months",
      description: "",
      highlights: [],
    },
    {
      company: "Persol | B2B/B2C marketplace, early-stage growth",
      role: "Senior Product Designer",
      jobType: "· Hybrid, Full-time",
      period: "October 2024 – August 2025 | 11 months",
      description:
        "Lead designer guiding product vision and delivering high-impact experiments across the funnel.",
      highlights: [
        "Redesigned the sign-up flow through data-driven funnel analysis, eliminating major friction points and achieving an 80% increase in lead generation within 3 months.",
        "Developed a scalable design kit from scratch, standardizing UI patterns and improving design-to-development handoff efficiency across the team.",
      ],
    },
    {
      company: "Divar | Top regional classifieds platform | 50M+ users",
      role: "Senior User Experience Designer",
      jobType: "· Hybrid, Full-time",
      period: "April 2022 – September 2024 | 2 years 6 months",
      description:
        "Trusted partner across Trust & Safety, Growth, and Core Experience initiatives.",
      highlights: [
        "Designed and launched a Secure Call System with the Trust & Safety team, achieving a 60% reduction in harassment incidents and strengthening user trust.",
        "Improved search experience by introducing the Nearby Cities feature, reducing bounce rate by 25%.",
        "Optimized post-ad submission flow, streamlining form fields and lowering redundant chat conversations by 12%.",
        "Implemented a new ticketing workflow, improving customer-support efficiency and reducing user wait times by 20%.",
      ],
    },
    {
      company: "IR MCI - Setare Aval | Fintech services + USSD + Mobile service | Nationwide scale",
      role: "Product Designer",
      jobType: "· On-site, Full-time",
      period: "June 2019 – March 2022 | 2 years 10 months",
      description:
        "Shaped cross-functional feature development and design systems for nationwide financial products.",
      highlights: [
        "Built Morph, a scalable design system ensuring visual consistency, used by 8,300+ designers.",
        "Gamified the referral-sharing experience, turning 60,000+ subscribers into daily active users and boosting retention.",
        "Increased bill-payment share from 6% to 47% of total payment through in-depth interviews.",
      ],
    },
  ],
  volunteer: [
    {
      organization: "Rahnema College | Professional bootcamps + Internship programs",
      role: "Design Mentor",
      jobType: "· Seasonal",
      period: "June 2022 – Present | 8 semesters",
      description:
        "Mentored over 200 aspiring designers, introduced gamified learning techniques, and bridged academia with industry practices.",
    },
  ],
  skills: [
    {
      category: "Research & Strategy",
      items: [
        "Usability Testing & Interview",
        "Market & Competitive Analysis",
        "Roadmapping & OKR Alignment",
        "Insight Gathering: Clarity, GA, HotJar",
      ],
    },
    {
      category: "Design",
      items: [
        "Design Systems & UI Kits",
        "User Interface Design (UI)",
        "Wireframing & Prototyping",
        "Interaction & Micro-interactions",
      ],
    },
    {
      category: "Technical Tools & Data Analytics",
      items: [
        "Figma, Framer, Claude, Cursor, NotebookLM",
        "Business Metrics & Funnel Analytics (CRO)",
        "Data Preprocessing & Statistical Analysis",
        "BI Tools and Dashboards",
      ],
    },
  ],
  education: [
    {
      institution: "Payame Noor University",
      program: "BSc. in Project Management Engineering",
      period: "September 2015 – August 2018",
      description:
        "Teaching Assistant, appointed by Dr. E. Rajabi, Head of the Science Committee. Member of the Civil Engineering and Project Management scientific society.",
    },
  ],
  certifications: [
    {
      name: "Data Analysis BootCamp",
      issuer: "Rahnema College",
      year: "July 2025",
      description:
        "170h • Data Preprocessing, Business Metrics, BI Tools, Introductory Python, Storytelling with Data, Statistical Inference, A/B Testing.",
    },
    {
      name: "IELTS (Academic)",
      issuer: "International Development Program (IDP)",
      year: "May 2022",
      description: "Overall Score 7.0.",
    },
    {
      name: "Conducting Usability Testing",
      issuer: "Interaction Design Foundation",
      year: "July 2021",
    },
    {
      name: "UI/UX Design BootCamp",
      issuer: "Rahnema College",
      year: "July 2019",
      description: "150h intensive bootcamp.",
    },
    {
      name: "Product Design and Advanced UX Design",
      issuer: "Sharif University of Technology + University of Tehran",
      year: "May 2019",
      description: "98h dual-institution training.",
    },
  ],
};

const generateResumeHTML = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Masih Sadri - Resume</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      font-size: 10pt;
      line-height: 1.5;
      color: #1a1a1a;
      background: #ffffff;
      padding: 0;
      margin: 0;
    }
    
    @page {
      size: A4;
      margin: 0.4in 0.5in;
    }
    
    .header {
      border-bottom: 2px solid #1f6feb;
      padding-bottom: 12px;
      margin-bottom: 16px;
      page-break-after: avoid;
    }
    
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }
    
    .header-left h1 {
      font-size: 24pt;
      font-weight: 700;
      color: #0b2c5c;
      margin-bottom: 2px;
      letter-spacing: -0.5px;
    }
    
    .header-left .title {
      font-size: 12pt;
      font-weight: 600;
      color: #1f6feb;
    }
    
    .header-right {
      text-align: right;
      font-size: 9pt;
      color: #4a5568;
      line-height: 1.7;
    }
    
    .header-right a {
      color: #1f6feb;
      text-decoration: none;
    }
    
    .contact-row {
      display: flex;
      justify-content: flex-end;
      gap: 4px;
      align-items: center;
    }
    
    .contact-icon {
      margin-right: 2px;
    }
    
    .section {
      margin-bottom: 14px;
      page-break-inside: avoid;
    }
    
    .section-title {
      font-size: 11pt;
      font-weight: 700;
      color: #0b2c5c;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      padding-bottom: 3px;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .summary {
      font-size: 9.5pt;
      line-height: 1.5;
      color: #4a5568;
      font-style: italic;
      margin-bottom: 0;
    }
    
    .summary strong {
      font-weight: 600;
      color: #2d3748;
      orphans: 3;
      widows: 3;
      word-wrap: break-word;
      hyphens: auto;
    }
    
    .summary-section {
      margin-bottom: 14px;
      page-break-before: avoid;
      page-break-after: avoid;
    }
    
    .first-page-section {
      page-break-before: avoid;
    }
    
    .experience-item, .volunteer-item {
      margin-bottom: 12px;
      page-break-inside: avoid;
    }
    
    .experience-header, .volunteer-header {
      margin-bottom: 4px;
    }
    
    .experience-header-row, .volunteer-header-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    
    .experience-role, .volunteer-role {
      font-weight: 600;
      font-size: 10.5pt;
      color: #0b2c5c;
    }
    
    .experience-job-type, .volunteer-job-type {
      font-size: 8.5pt;
      color: #718096;
      font-weight: 400;
      margin-left: 4px;
    }
    
    .experience-company, .volunteer-org {
      font-weight: 600;
      font-size: 10pt;
      color: #1f6feb;
    }
    
    .experience-period, .volunteer-period {
      font-size: 9pt;
      color: #718096;
      white-space: nowrap;
      text-align: right;
    }
    
    .experience-description, .volunteer-description {
      font-size: 9.5pt;
      color: #4a5568;
      font-style: italic;
      margin-bottom: 4px;
    }
    
    .highlights {
      margin-top: 4px;
      padding-left: 16px;
      margin-bottom: 0;
    }
    
    .highlights li {
      font-size: 9.5pt;
      color: #2d3748;
      margin-bottom: 3px;
      line-height: 1.45;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 6px;
    }
    
    .skill-category {
      page-break-inside: avoid;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 10px 12px;
    }
    
    .skill-category-title {
      font-weight: 600;
      font-size: 9.5pt;
      color: #0b2c5c;
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .skill-items {
      font-size: 8.5pt;
      color: #4a5568;
      line-height: 1.5;
    }
    
    .skill-items ul {
      margin: 0;
      padding-left: 14px;
    }
    
    .skill-items li {
      margin-bottom: 2px;
    }
    
    .education-item, .cert-item {
      margin-bottom: 8px;
      page-break-inside: avoid;
    }
    
    .education-header, .cert-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2px;
      flex-wrap: wrap;
      gap: 6px;
    }
    
    .education-program, .cert-name {
      font-weight: 600;
      font-size: 10pt;
      color: #0b2c5c;
    }
    
    .education-institution, .cert-issuer {
      font-size: 9.5pt;
      color: #1f6feb;
    }
    
    .education-period, .cert-year {
      font-size: 9pt;
      color: #718096;
      white-space: nowrap;
    }
    
    .education-description, .cert-description {
      font-size: 9pt;
      color: #4a5568;
      margin-top: 2px;
    }
    
    @media print {
      body {
        padding: 0.5in;
      }
      
      .section {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-top">
      <div class="header-left">
        <h1>${resumeData.name}</h1>
        <div class="title">${resumeData.title}</div>
      </div>
      <div class="header-right">
        <div class="contact-row"><span class="contact-icon">📧</span> ${resumeData.contact.email}</div>
        <div class="contact-row"><span class="contact-icon">💼</span> <a href="https://${resumeData.contact.linkedin}">${resumeData.contact.linkedin}</a></div>
        <div class="contact-row"><span class="contact-icon">🌐</span> <a href="${resumeData.contact.portfolio}">${resumeData.contact.portfolio}</a></div>
        <div class="contact-row"><span class="contact-icon">📍</span> ${resumeData.contact.location}</div>
      </div>
    </div>
  </div>
  
  <div class="section summary-section">
    <div class="section-title">Professional Summary</div>
    <div class="summary">${resumeData.summary}</div>
  </div>
  
  <div class="section first-page-section">
    <div class="section-title">Professional Experience</div>
    ${resumeData.experience
      .map(
        (exp) => `
    <div class="experience-item">
      <div class="experience-header">
        <div class="experience-header-row">
          <div class="experience-role">${exp.role}${exp.jobType ? `<span class="experience-job-type">${exp.jobType}</span>` : ""}</div>
          <div class="experience-period">${exp.period}</div>
        </div>
        <div class="experience-company">${exp.company}</div>
      </div>
      ${exp.description ? `<div class="experience-description">${exp.description}</div>` : ""}
      ${exp.highlights.length > 0 ? `<ul class="highlights">
        ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>` : ""}
    </div>
    `,
      )
      .join("")}
  </div>
  
  <div class="section">
    <div class="section-title">Volunteer Experience</div>
    ${resumeData.volunteer
      .map(
        (vol) => `
    <div class="volunteer-item">
      <div class="volunteer-header">
        <div class="volunteer-header-row">
          <div class="volunteer-role">${vol.role}${vol.jobType ? `<span class="volunteer-job-type">${vol.jobType}</span>` : ""}</div>
          <div class="volunteer-period">${vol.period}</div>
        </div>
        <div class="volunteer-org">${vol.organization}</div>
      </div>
      <div class="volunteer-description">${vol.description}</div>
    </div>
    `,
      )
      .join("")}
  </div>
  
  <div class="section">
    <div class="section-title">Skills</div>
    <div class="skills-grid">
      ${resumeData.skills
        .map(
          (skill) => `
      <div class="skill-category">
        <div class="skill-category-title">${skill.category}</div>
        <div class="skill-items"><ul>${skill.items.map(item => `<li>${item}</li>`).join("")}</ul></div>
      </div>
      `,
        )
        .join("")}
    </div>
  </div>
  
  <div class="section">
    <div class="section-title">Education</div>
    ${resumeData.education
      .map(
        (edu) => `
    <div class="education-item">
      <div class="education-header">
        <div>
          <div class="education-program">${edu.program}</div>
          <div class="education-institution">${edu.institution}</div>
        </div>
        <div class="education-period">${edu.period}</div>
      </div>
      <div class="education-description">${edu.description}</div>
    </div>
    `,
      )
      .join("")}
  </div>
  
  <div class="section">
    <div class="section-title">Certifications</div>
    ${resumeData.certifications
      .map(
        (cert) => `
    <div class="cert-item">
      <div class="cert-header">
        <div>
          <div class="cert-name">${cert.name}</div>
          <div class="cert-issuer">${cert.issuer}</div>
        </div>
        <div class="cert-year">${cert.year}</div>
      </div>
      ${cert.description ? `<div class="cert-description">${cert.description}</div>` : ""}
    </div>
    `,
      )
      .join("")}
  </div>
</body>
</html>`;
};

const generatePDF = async () => {
  console.log("🚀 Starting PDF generation...");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    const html = generateResumeHTML();

    await page.setContent(html, { waitUntil: "load", timeout: 10000 });

    const pdfPath = join(process.cwd(), "public", "Masih-Sadri-Resume.pdf");
    const docsPdfPath = join(process.cwd(), "docs", "Masih-Sadri-Resume.pdf");

    // Ensure directories exist
    await mkdir(join(process.cwd(), "public"), { recursive: true });
    await mkdir(join(process.cwd(), "docs"), { recursive: true });

    // Generate PDF buffer
    const pdfBuffer = await page.pdf({
      format: "A4",
      margin: {
        top: "0.65in",
        right: "0.5in",
        bottom: "0.4in",
        left: "0.5in",
      },
      printBackground: true,
    });

    // Write to public directory
    await Bun.write(pdfPath, pdfBuffer);
    console.log(`✅ PDF generated successfully: ${pdfPath}`);

    // Copy to docs directory
    await Bun.write(docsPdfPath, pdfBuffer);
    console.log(`✅ PDF copied to: ${docsPdfPath}`);
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    process.exit(1);
  } finally {
    await browser.close();
  }
};

generatePDF();


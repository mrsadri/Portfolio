// File: scripts/generate-resume-pdf.ts
// Purpose: Generates a professional PDF resume from resume content data
import puppeteer from "puppeteer";
import { join } from "node:path";
import { mkdir } from "node:fs/promises";
import {
  professionalExperience,
  resumeCertificates,
  resumeEducation,
  resumeSummary,
  skillCategories,
  volunteerExperience,
} from "../src/features/resume/data/content";

const contact = {
  email: "sadrimasih@gmail.com",
  linkedin: "linkedin.com/in/msadri",
  portfolio: "https://mrsadri.github.io/Portfolio/",
  figmaCommunity: "https://www.figma.com/community/file/1069259333467083182/morph-design-system",
  location: "Tehran, Iran",
};

const formatHighlight = (h: string | { theme: string; text: string }): string =>
  typeof h === "object"
    ? `<strong>${h.theme}:</strong> ${h.text}`
    : h;

const resumeData = {
  name: resumeSummary.title,
  title: resumeSummary.subtitle,
  summary:
    "Impact-oriented Product Designer with <strong>6+ years</strong> of experience scaling products for <strong>40M+ users</strong>. Specialized in leveraging <strong>Data Analytics</strong> and <strong>AI tools (Claude, Cursor)</strong> to accelerate design-to-development workflows. Proven track record in market-leading platforms, delivering a <strong>1.8x lift in lead generation</strong> at Persol and a <strong>60% reduction in safety incidents</strong> at Divar. Expert in building open-source design systems with <strong>8,600+ global users</strong>.",
  contact,
  experience: professionalExperience.map((exp) => ({
    company: exp.company,
    role: exp.role,
    jobType: exp.jobType,
    period: exp.period,
    description: exp.description,
    highlights: exp.highlights.map(formatHighlight),
  })),
  volunteer: volunteerExperience.map((vol) => ({
    organization: vol.organization,
    role: vol.role,
    jobType: vol.jobType,
    period: vol.period,
    description: vol.description,
  })),
  skillCategories: skillCategories.map((cat) => ({ title: cat.title, skills: [...cat.skills] })),
  education: resumeEducation.map((edu) => ({
    institution: edu.institution,
    program: edu.program,
    period: edu.period,
    description: edu.description,
  })),
  certifications: resumeCertificates.map((cert) => ({
    name: cert.name,
    issuer: cert.issuer,
    year: cert.year,
    description: cert.description,
  })),
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
    
    .header-single {
      max-width: 100%;
    }
    
    .header-single h1 {
      font-size: 24pt;
      font-weight: 700;
      color: #0b2c5c;
      margin-bottom: 2px;
      letter-spacing: -0.5px;
    }
    
    .header-single .title {
      font-size: 12pt;
      font-weight: 600;
      color: #1f6feb;
      margin-bottom: 8px;
    }
    
    .contact-block {
      font-size: 9pt;
      color: #4a5568;
      line-height: 1.6;
    }
    
    .contact-block a {
      color: #1f6feb;
      text-decoration: none;
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
      flex-wrap: wrap;
      gap: 4px;
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
    
    .skills-categories {
      font-size: 9.5pt;
      color: #4a5568;
      line-height: 1.6;
    }
    
    .skill-category-row {
      margin-bottom: 6px;
    }
    
    .skill-category-title {
      color: #0b2c5c;
      margin-right: 6px;
    }
    
    .skill-category-items {
      color: #4a5568;
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
    <div class="header-single">
      <h1>${resumeData.name}</h1>
      <div class="title">${resumeData.title}</div>
      <div class="contact-block">
        ${resumeData.contact.email} &nbsp;|&nbsp;
        <a href="https://${resumeData.contact.linkedin}">LinkedIn</a> &nbsp;|&nbsp;
        <a href="${resumeData.contact.portfolio}">Portfolio</a> &nbsp;|&nbsp;
        <a href="${resumeData.contact.figmaCommunity}">Figma Community</a> &nbsp;|&nbsp;
        ${resumeData.contact.location}
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
    <div class="section-title">Skills</div>
    <div class="skills-categories">
      ${resumeData.skillCategories
        .map(
          (cat) => `
      <div class="skill-category-row">
        <span class="skill-category-title"><strong>${cat.title}:</strong></span>
        <span class="skill-category-items">${cat.skills.join(", ")}</span>
      </div>
      `,
        )
        .join("")}
    </div>
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
      ${edu.description ? `<div class="education-description">${edu.description}</div>` : ""}
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

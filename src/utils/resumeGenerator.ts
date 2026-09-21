import { ProfileInfo, Project, Internship, SkillCategory, Certificate } from '../types';

export function printOrDownloadResume(
  profile: ProfileInfo,
  projects: Project[],
  internships: Internship[],
  skillCategories: SkillCategory[],
  certificates: Certificate[]
) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Curriculum Vitae - ${profile.name}</title>
  <style>
    @page { margin: 15mm; size: A4; }
    body {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      line-height: 1.45;
      margin: 0;
      padding: 20px;
      font-size: 13px;
    }
    .header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    .name { font-size: 24px; font-weight: 700; color: #0f172a; margin: 0 0 4px 0; }
    .title { font-size: 15px; color: #2563eb; font-weight: 600; margin-bottom: 8px; }
    .contacts { font-size: 12px; color: #475569; display: flex; flex-wrap: wrap; gap: 12px; }
    .section-title {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 3px;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    .item { margin-bottom: 10px; }
    .item-header { display: flex; justify-content: space-between; font-weight: 600; }
    .item-sub { color: #475569; font-size: 12px; margin-bottom: 4px; }
    ul { margin: 4px 0 0 18px; padding: 0; }
    li { margin-bottom: 2px; }
    .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .badge { display: inline-block; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 11px; margin-right: 4px; margin-bottom: 4px; }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 16px; padding: 10px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
    <span>Klik tombol cetak untuk menyimpan sebagai PDF atau mencetak CV ini.</span>
    <button onclick="window.print()" style="padding: 6px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Cetak / Simpan PDF</button>
  </div>

  <div class="header">
    <div class="name">${profile.name}</div>
    <div class="title">${profile.title} | ${profile.status}</div>
    <div class="contacts">
      <span>📧 ${profile.email}</span>
      <span>📱 ${profile.phone}</span>
      <span>📍 ${profile.location}</span>
      <span>🔗 ${profile.linkedin}</span>
      <span>🐙 ${profile.github}</span>
    </div>
  </div>

  <div class="section-title">Ringkasan Profesional</div>
  <p style="margin: 4px 0;">${profile.headline} ${profile.aboutStory.paragraphs[0]}</p>

  <div class="section-title">Pendidikan</div>
  ${profile.educationMilestones.map(edu => `
    <div class="item">
      <div class="item-header">
        <span>${edu.degree} – ${edu.institution}</span>
        <span>${edu.year}</span>
      </div>
      <ul>
        ${edu.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `).join('')}

  <div class="section-title">Pengalaman Magang & Industri</div>
  ${internships.map(intern => `
    <div class="item">
      <div class="item-header">
        <span>${intern.role} – ${intern.company}</span>
        <span>${intern.period}</span>
      </div>
      <div class="item-sub">${intern.type} | Lokasi: ${intern.location}</div>
      <ul>
        ${intern.keyAchievements.map(ach => `<li>${ach}</li>`).join('')}
      </ul>
    </div>
  `).join('')}

  <div class="section-title">Proyek Unggulan (Kuliah & Portofolio)</div>
  ${projects.slice(0, 3).map(proj => `
    <div class="item">
      <div class="item-header">
        <span>${proj.title}</span>
        <span>${proj.period}</span>
      </div>
      <div class="item-sub">Peran: ${proj.role} | ${proj.categoryLabel}</div>
      <p style="margin: 2px 0;">${proj.description}</p>
      <ul>
        ${proj.features.slice(0, 2).map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div style="margin-top: 4px;">
        ${proj.technologies.map(t => `<span class="badge">${t}</span>`).join('')}
      </div>
    </div>
  `).join('')}

  <div class="section-title">Kompetensi Teknis</div>
  <div class="skills-grid">
    ${skillCategories.map(cat => `
      <div>
        <strong>${cat.title}:</strong>
        <div style="margin-top: 4px;">
          ${cat.skills.map(s => `<span class="badge">${s.name} (${s.level})</span>`).join('')}
        </div>
      </div>
    `).join('')}
  </div>

  <div class="section-title">Sertifikasi & Kredensial Resmi</div>
  <ul>
    ${certificates.map(c => `
      <li>
        <strong>${c.title}</strong> – ${c.issuer} (${c.issueDate}) | ID: ${c.credentialId}
      </li>
    `).join('')}
  </ul>

  <script>
    window.onload = function() {
      // Auto-trigger print prompt after short delay
      setTimeout(function() {
        // window.print();
      }, 500);
    };
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}

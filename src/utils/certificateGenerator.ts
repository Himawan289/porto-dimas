import { Certificate } from '../types';

/**
 * Generates an official high-resolution PNG certificate using HTML5 Canvas
 * and initiates an instant browser download.
 */
export function downloadDigitalCertificate(cert: Certificate, recipientName: string = 'Respati Himawan') {
  const canvas = document.createElement('canvas');
  // High resolution for crisp printing & display: 1600 x 1130 (approx A4 landscape aspect ratio)
  canvas.width = 1600;
  canvas.height = 1130;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background - Clean minimalist off-white / light slate
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Outer border with subtle slate tone
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 14;
  ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

  // Inner thin border
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

  // Subtle corner accents
  const corners = [
    [60, 60],
    [canvas.width - 60, 60],
    [60, canvas.height - 60],
    [canvas.width - 60, canvas.height - 60]
  ];
  ctx.fillStyle = '#0f172a';
  corners.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  // Header banner / Issuer pill
  ctx.fillStyle = '#0f172a';
  ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(cert.issuer.toUpperCase(), canvas.width / 2, 130);

  // "CERTIFICATE OF ACHIEVEMENT / RECOGNITION"
  ctx.fillStyle = '#475569';
  ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('SERTIFIKAT KOMPETENSI & PENCAPAIAN DIGITAL', canvas.width / 2, 180);
  ctx.letterSpacing = '0px';

  // Divider line
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 180, 210);
  ctx.lineTo(canvas.width / 2 + 180, 210);
  ctx.stroke();

  // "Diberikan kepada / Presented to"
  ctx.fillStyle = '#64748b';
  ctx.font = 'italic 400 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Dengan ini menerangkan bahwa keahlian teknis telah divalidasi kepada:', canvas.width / 2, 270);

  // Recipient Name (Large, prominent)
  ctx.fillStyle = '#0f172a';
  ctx.font = '700 58px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(recipientName, canvas.width / 2, 350);

  // Decorative underline under name
  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 140, 375);
  ctx.lineTo(canvas.width / 2 + 140, 375);
  ctx.stroke();

  // Title of the Certificate
  ctx.fillStyle = '#1e293b';
  ctx.font = '600 36px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(cert.title, canvas.width / 2, 450);

  // Description / Statement of competence
  ctx.fillStyle = '#475569';
  ctx.font = '400 22px "Plus Jakarta Sans", sans-serif';
  const descText = cert.description;
  wrapText(ctx, descText, canvas.width / 2, 510, 1100, 34);

  // Validated Technical Skills Box
  const boxY = 640;
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 2;
  roundRect(ctx, canvas.width / 2 - 500, boxY, 1000, 140, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#0f172a';
  ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('KOMPETENSI & KEAHLIAN YANG TERVERIFIKASI:', canvas.width / 2, boxY + 40);

  // Skills chips
  const skillsText = cert.skills.join('  •  ');
  ctx.fillStyle = '#2563eb';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(skillsText, canvas.width / 2, boxY + 90);

  // Bottom Section: Verification details & Seal
  const bottomY = 870;

  // Left column: Issue Date & Credential ID
  ctx.textAlign = 'left';
  ctx.fillStyle = '#64748b';
  ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('TANGGAL PENERBITAN:', 160, bottomY);
  ctx.fillStyle = '#0f172a';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(cert.issueDate + (cert.expiryDate ? ` (Berlaku s/d ${cert.expiryDate})` : ' (Seumur Hidup)'), 160, bottomY + 30);

  ctx.fillStyle = '#64748b';
  ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('NOMOR KREDENSIAL / ID VALIDASI:', 160, bottomY + 80);
  ctx.fillStyle = '#0f172a';
  ctx.font = '600 20px "JetBrains Mono", monospace';
  ctx.fillText(cert.credentialId, 160, bottomY + 110);

  // Center column: Digital Seal Badge
  const sealX = canvas.width / 2;
  const sealY = bottomY + 50;
  ctx.beginPath();
  ctx.arc(sealX, sealY, 65, 0, Math.PI * 2);
  ctx.fillStyle = '#0f172a';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(sealX, sealY, 58, 0, Math.PI * 2);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('VERIFIED', sealX, sealY - 10);
  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('CREDENTIAL', sealX, sealY + 12);
  ctx.font = '500 11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('DIGITAL VALIDATION', sealX, sealY + 28);

  // Right column: Issuer Signature / Seal
  ctx.textAlign = 'right';
  ctx.fillStyle = '#64748b';
  ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('OTORISASI & VALIDASI:', canvas.width - 160, bottomY);

  ctx.fillStyle = '#0f172a';
  ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(cert.issuer, canvas.width - 160, bottomY + 45);

  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width - 380, bottomY + 65);
  ctx.lineTo(canvas.width - 160, bottomY + 65);
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = '400 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(cert.scoreOrHonor || 'Official Academic & Industry Partner', canvas.width - 160, bottomY + 95);
  ctx.font = '400 14px "JetBrains Mono", monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Verify at: ' + cert.verificationUrl.replace('https://', '').slice(0, 32) + '...', canvas.width - 160, bottomY + 120);

  // Trigger Download
  const link = document.createElement('a');
  link.download = `Sertifikat-${cert.credentialId}-${recipientName.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

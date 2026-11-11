const fs = require('fs');
const path = require('path');

const bundle = JSON.parse(fs.readFileSync(path.resolve('images-bundle.json'), 'utf8'));

// Prepare the HTML content
const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#0284c7">
  <meta name="description" content="Fundación Gotitas del Rocío - Institución sin fines de lucro dedicada al desarrollo integral, educación, estimulación temprana y nutrición de niños, jóvenes y familias vulnerables en Ecuador.">
  <title>Fundación Gotitas del Rocío | Sembrando Esperanza y Amor</title>
  
  <!-- Tipografía Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <style>
    /* VARIABLES Y PALETA CROMÁTICA OFICIAL (GOTITAS DEL ROCÍO) */
    :root {
      --primary: #0284c7;       /* Azul Rocío Principal */
      --primary-dark: #0369a1;  /* Azul Intenso */
      --primary-deep: #075985;  /* Azul Profundo Marino */
      --primary-light: #e0f2fe; /* Azul Cielo Suave */
      --orange: #f97316;        /* Naranja Institucional (Uniforme) */
      --orange-dark: #ea580c;   /* Naranja Fuerte */
      --orange-light: #ffedd5;  /* Naranja Melocotón Suave */
      --green: #16a34a;         /* Verde Esperanza y Vida */
      --green-light: #dcfce7;   /* Verde Suave */
      --red: #ef4444;           /* Rojo Solidaridad */
      --red-light: #fee2e2;     /* Rojo Suave */
      --yellow: #f59e0b;        /* Amarillo Cálido */
      --yellow-light: #fef3c7;  /* Amarillo Suave */
      
      --text-main: #0f172a;     /* Grafito Slate 900 */
      --text-muted: #475569;    /* Gris Lectura Slate 600 */
      --text-light: #94a3b8;    /* Gris Claro Slate 400 */
      
      --bg-page: #f8fafc;       /* Fondo General */
      --bg-card: #ffffff;       /* Fondo Tarjetas */
      --border-color: #e2e8f0;  /* Bordes Suaves */
      
      --font-heading: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      
      --shadow-sm: 0 2px 8px -2px rgba(15, 23, 42, 0.06);
      --shadow-md: 0 12px 24px -6px rgba(2, 132, 199, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.04);
      --shadow-lg: 0 24px 48px -12px rgba(2, 132, 199, 0.18), 0 8px 16px -4px rgba(15, 23, 42, 0.06);
      --shadow-glow: 0 0 28px rgba(249, 115, 22, 0.35);
      
      --radius-sm: 10px;
      --radius-md: 18px;
      --radius-lg: 28px;
      --radius-full: 9999px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 100px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      font-family: var(--font-body);
      background-color: var(--bg-page);
      color: var(--text-main);
      line-height: 1.7;
      overflow-x: hidden;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 0.25s ease;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
      background: none;
      transition: all 0.25s ease;
    }

    .container {
      width: min(1240px, calc(100% - 40px));
      margin: 0 auto;
    }

    /* TOPBAR SUPERIOR */
    .topbar {
      background: linear-gradient(90deg, #075985 0%, #0369a1 40%, #0284c7 70%, #f97316 100%);
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
      padding: 9px 0;
      position: relative;
      z-index: 60;
    }

    .topbar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .topbar-left {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .topbar-item {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      color: #e0f2fe;
    }

    .topbar-item:hover {
      color: #ffffff;
    }

    .topbar-item svg {
      width: 15px;
      height: 15px;
      fill: currentColor;
    }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .topbar-socials {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .topbar-social-btn {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.16);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      transition: all 0.2s;
    }

    .topbar-social-btn:hover {
      background: #ffffff;
      color: var(--primary-dark);
      transform: translateY(-2px);
    }

    .topbar-social-btn svg {
      width: 14px;
      height: 14px;
      fill: currentColor;
    }

    .topbar-dl-btn {
      background: #ffffff;
      color: var(--primary-deep);
      font-weight: 800;
      font-size: 11px;
      padding: 5px 12px;
      border-radius: var(--radius-full);
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      transition: all 0.2s;
    }

    .topbar-dl-btn:hover {
      background: var(--orange-light);
      color: var(--orange-dark);
      transform: scale(1.04);
    }

    /* HEADER Y NAVBAR */
    .header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .nav {
      height: 86px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 260px;
    }

    .brand-logo-wrap {
      width: 58px;
      height: 58px;
      border-radius: 16px;
      background: linear-gradient(135deg, #e0f2fe, #ffedd5);
      padding: 4px;
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
      border: 2px solid #ffffff;
    }

    .brand-logo-wrap img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .brand-text h1 {
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 900;
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--primary-deep);
    }

    .brand-text span {
      display: block;
      color: var(--orange);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 2px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 24px;
      list-style: none;
    }

    .nav-links a {
      font-size: 14px;
      font-weight: 700;
      color: var(--text-muted);
      position: relative;
      padding: 6px 0;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--primary);
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--orange));
      transition: width 0.25s ease;
      border-radius: 2px;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      padding: 12px 22px;
      border-radius: var(--radius-full);
      font-family: var(--font-heading);
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 0.02em;
      transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: var(--shadow-sm);
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: #ffffff;
      box-shadow: 0 8px 20px -4px rgba(2, 132, 199, 0.4);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 26px -4px rgba(2, 132, 199, 0.55);
      background: linear-gradient(135deg, #0ea5e9 0%, var(--primary-deep) 100%);
    }

    .btn-orange {
      background: linear-gradient(135deg, #fb923c 0%, var(--orange) 50%, var(--orange-dark) 100%);
      color: #ffffff;
      box-shadow: 0 8px 22px -4px rgba(249, 115, 22, 0.45);
    }

    .btn-orange:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 28px -4px rgba(249, 115, 22, 0.6);
      background: linear-gradient(135deg, #f97316 0%, #c2410c 100%);
    }

    .btn-outline {
      border: 2px solid var(--primary);
      color: var(--primary);
      background: #ffffff;
    }

    .btn-outline:hover {
      background: var(--primary-light);
      transform: translateY(-2px);
    }

    .btn-whatsapp {
      background: #25d366;
      color: #ffffff;
      box-shadow: 0 8px 20px -4px rgba(37, 211, 102, 0.4);
    }

    .btn-whatsapp:hover {
      background: #20ba5a;
      transform: translateY(-2px);
      box-shadow: 0 12px 25px -4px rgba(37, 211, 102, 0.55);
    }

    .btn-sm {
      padding: 8px 16px;
      font-size: 12px;
    }

    .menu-toggle {
      display: none;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--primary-light);
      color: var(--primary-dark);
      font-size: 20px;
      align-items: center;
      justify-content: center;
    }

    /* HERO SECTION */
    .hero {
      position: relative;
      overflow: hidden;
      padding: 70px 0 90px;
      background: radial-gradient(circle at 85% 20%, rgba(224, 242, 254, 0.8) 0%, rgba(255, 237, 213, 0.5) 45%, #ffffff 80%);
    }

    .hero-decor-1 {
      position: absolute;
      top: -120px;
      right: -100px;
      width: 450px;
      height: 450px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero-decor-2 {
      position: absolute;
      bottom: -150px;
      left: -100px;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      align-items: center;
      gap: 50px;
      position: relative;
      z-index: 2;
    }

    .badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 16px;
      background: rgba(2, 132, 199, 0.1);
      border: 1px solid rgba(2, 132, 199, 0.25);
      border-radius: var(--radius-full);
      color: var(--primary-dark);
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .badge-pill span.dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--orange);
      box-shadow: 0 0 8px var(--orange);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.3); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }

    .hero-title {
      font-family: var(--font-heading);
      font-size: clamp(38px, 4.8vw, 62px);
      font-weight: 900;
      line-height: 1.08;
      letter-spacing: -0.03em;
      color: var(--primary-deep);
      margin-bottom: 22px;
    }

    .hero-title .gradient-text {
      background: linear-gradient(120deg, var(--primary) 0%, var(--orange) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-lead {
      font-size: 18px;
      color: var(--text-muted);
      line-height: 1.85;
      margin-bottom: 34px;
      max-width: 580px;
    }

    .hero-buttons {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .hero-trust {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-top: 25px;
      border-top: 1px solid var(--border-color);
    }

    .trust-avatars {
      display: flex;
      margin-left: 8px;
    }

    .trust-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid #ffffff;
      margin-left: -12px;
      background: #e2e8f0;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .trust-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .trust-text {
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 600;
    }

    .trust-text strong {
      color: var(--primary-dark);
      display: block;
    }

    /* COMPOSICIÓN VISUAL DEL HERO */
    .hero-visual {
      position: relative;
    }

    .hero-card-main {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      border: 4px solid #ffffff;
      aspect-ratio: 4 / 3.4;
      background: #e2e8f0;
    }

    .hero-card-main img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .hero-card-main:hover img {
      transform: scale(1.04);
    }

    .hero-logo-badge {
      position: absolute;
      top: -20px;
      left: -20px;
      background: #ffffff;
      padding: 12px;
      border-radius: 24px;
      box-shadow: var(--shadow-md);
      border: 3px solid var(--primary-light);
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 5;
    }

    .hero-logo-badge img {
      width: 54px;
      height: 54px;
      object-fit: contain;
    }

    .hero-logo-badge-text strong {
      display: block;
      font-family: var(--font-heading);
      font-size: 13px;
      color: var(--primary-deep);
      line-height: 1.2;
    }

    .hero-logo-badge-text small {
      color: var(--orange);
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.05em;
    }

    .hero-floating-card {
      position: absolute;
      bottom: -22px;
      right: -20px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      padding: 16px 22px;
      border-radius: 20px;
      box-shadow: var(--shadow-lg);
      border: 2px solid #ffffff;
      display: flex;
      align-items: center;
      gap: 14px;
      z-index: 5;
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .floating-icon {
      width: 46px;
      height: 46px;
      border-radius: 14px;
      background: linear-gradient(135deg, var(--orange-light), var(--orange));
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
    }

    .floating-text strong {
      display: block;
      font-family: var(--font-heading);
      font-size: 15px;
      color: var(--text-main);
    }

    .floating-text span {
      font-size: 12px;
      color: var(--text-muted);
      font-weight: 600;
    }

    /* BARRA DE VALORES DESTACADOS */
    .values-strip {
      background: #ffffff;
      border-block: 1px solid var(--border-color);
      padding: 30px 0;
    }

    .values-strip-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .value-strip-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px;
      border-radius: var(--radius-md);
      transition: all 0.25s;
    }

    .value-strip-item:hover {
      background: var(--bg-page);
      transform: translateY(-2px);
    }

    .value-strip-icon {
      width: 50px;
      height: 50px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
    }

    .icon-blue { background: var(--primary-light); color: var(--primary-dark); }
    .icon-orange { background: var(--orange-light); color: var(--orange-dark); }
    .icon-green { background: var(--green-light); color: var(--green); }
    .icon-red { background: var(--red-light); color: var(--red); }

    .value-strip-content h4 {
      font-family: var(--font-heading);
      font-size: 16px;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.25;
      margin-bottom: 2px;
    }

    .value-strip-content p {
      font-size: 12px;
      color: var(--text-muted);
      line-height: 1.4;
    }

    /* SECCIÓN GENERAL */
    .section {
      padding: 95px 0;
      position: relative;
    }

    .section-head {
      max-width: 720px;
      margin: 0 auto 55px;
      text-align: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--primary);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .eyebrow::before,
    .eyebrow::after {
      content: '';
      width: 18px;
      height: 2px;
      background: var(--orange);
      border-radius: 2px;
    }

    .section-head h2 {
      font-family: var(--font-heading);
      font-size: clamp(32px, 3.8vw, 46px);
      font-weight: 900;
      line-height: 1.15;
      letter-spacing: -0.03em;
      color: var(--primary-deep);
      margin-bottom: 16px;
    }

    .section-head p {
      font-size: 16px;
      color: var(--text-muted);
      line-height: 1.8;
    }

    /* SECCIÓN NOSOTROS Y PRESIDENTE */
    .about-grid {
      display: grid;
      grid-template-columns: 0.95fr 1.05fr;
      align-items: center;
      gap: 65px;
    }

    .about-visual {
      position: relative;
    }

    .about-image-main {
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      border: 4px solid #ffffff;
      height: 480px;
    }

    .about-image-main img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .about-card-badge {
      position: absolute;
      bottom: -25px;
      left: 30px;
      background: #ffffff;
      border-radius: 20px;
      padding: 18px 24px;
      box-shadow: var(--shadow-md);
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .about-badge-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--primary-light);
      color: var(--primary-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    .about-badge-text strong {
      display: block;
      font-size: 15px;
      font-weight: 800;
      color: var(--primary-deep);
    }

    .about-badge-text small {
      color: var(--text-muted);
      font-size: 12px;
    }

    .about-content h2 {
      font-family: var(--font-heading);
      font-size: clamp(30px, 3.5vw, 42px);
      font-weight: 900;
      line-height: 1.15;
      color: var(--primary-deep);
      margin-bottom: 20px;
    }

    .about-content p {
      font-size: 15px;
      color: var(--text-muted);
      line-height: 1.85;
      margin-bottom: 18px;
    }

    /* CREDENCIAL DEL PRESIDENTE */
    .president-card {
      margin-top: 30px;
      padding: 22px 26px;
      border-radius: 20px;
      background: linear-gradient(135deg, #ffffff 0%, var(--primary-light) 100%);
      border: 1px solid rgba(2, 132, 199, 0.25);
      box-shadow: var(--shadow-sm);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    .president-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .president-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--orange));
      color: #ffffff;
      font-family: var(--font-heading);
      font-size: 22px;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
      flex-shrink: 0;
    }

    .president-text strong {
      display: block;
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 800;
      color: var(--primary-deep);
    }

    .president-text span {
      display: block;
      color: var(--orange-dark);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .president-seal {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      color: var(--primary-dark);
      background: rgba(255, 255, 255, 0.85);
      padding: 6px 14px;
      border-radius: var(--radius-full);
      border: 1px solid rgba(2, 132, 199, 0.2);
    }

    /* SECCIÓN MISIÓN Y VISIÓN PREMIUM */
    .mv-section {
      background: linear-gradient(180deg, #f8fafc 0%, #e0f2fe 50%, #f8fafc 100%);
      position: relative;
    }

    .mv-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .mv-card {
      background: #ffffff;
      border-radius: var(--radius-lg);
      padding: 45px 40px;
      box-shadow: var(--shadow-md);
      border: 1px solid var(--border-color);
      position: relative;
      overflow: hidden;
      transition: all 0.35s ease;
    }

    .mv-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
      border-color: rgba(2, 132, 199, 0.3);
    }

    .mv-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, var(--primary), var(--orange));
    }

    .mv-card.vision::before {
      background: linear-gradient(90deg, var(--orange), var(--green));
    }

    .mv-header {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-bottom: 24px;
    }

    .mv-icon {
      width: 60px;
      height: 60px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      box-shadow: var(--shadow-sm);
    }

    .mv-title-wrap h3 {
      font-family: var(--font-heading);
      font-size: 26px;
      font-weight: 800;
      color: var(--primary-deep);
      line-height: 1.2;
    }

    .mv-title-wrap span {
      font-size: 12px;
      color: var(--text-light);
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .mv-body {
      font-size: 15px;
      color: var(--text-muted);
      line-height: 1.9;
      margin-bottom: 26px;
    }

    .mv-list {
      list-style: none;
      display: grid;
      gap: 12px;
      padding-top: 20px;
      border-top: 1px solid var(--border-color);
    }

    .mv-list li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 700;
      color: var(--text-main);
    }

    .mv-list li svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }

    /* SECCIÓN IMPACTO Y MÉTRICAS ANIMADAS */
    .impact-section {
      background: linear-gradient(135deg, #075985 0%, #0369a1 50%, #0284c7 100%);
      color: #ffffff;
      position: relative;
      overflow: hidden;
      padding: 85px 0;
    }

    .impact-section::before {
      content: '';
      position: absolute;
      top: -100px;
      right: -100px;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      pointer-events: none;
    }

    .impact-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 24px;
      padding: 34px 20px;
      text-align: center;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-4px);
    }

    .stat-number {
      font-family: var(--font-heading);
      font-size: clamp(38px, 4.5vw, 54px);
      font-weight: 900;
      line-height: 1;
      margin-bottom: 10px;
      background: linear-gradient(120deg, #ffffff, #ffedd5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stat-label {
      font-size: 14px;
      font-weight: 700;
      color: #e0f2fe;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .stat-desc {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 6px;
    }

    /* SECCIÓN DE EJES Y METODOLOGÍA */
    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    .pillar-card {
      background: #ffffff;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .pillar-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }

    .pillar-thumb {
      height: 220px;
      overflow: hidden;
      position: relative;
      background: #e2e8f0;
    }

    .pillar-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .pillar-card:hover .pillar-thumb img {
      transform: scale(1.08);
    }

    .pillar-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(6px);
      color: #ffffff;
      padding: 5px 12px;
      border-radius: var(--radius-full);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .pillar-content {
      padding: 26px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .pillar-content h3 {
      font-family: var(--font-heading);
      font-size: 20px;
      font-weight: 800;
      color: var(--primary-deep);
      margin-bottom: 10px;
      line-height: 1.3;
    }

    .pillar-content p {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 18px;
      flex-grow: 1;
    }

    .pillar-link {
      font-size: 13px;
      font-weight: 800;
      color: var(--primary);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .pillar-link:hover {
      color: var(--orange);
    }

    /* SECCIÓN EQUIPO HUMANO (ADMINISTRATIVO, SERVICIO, DOCENTES, CATERING) */
    .team-section {
      background: #ffffff;
    }

    .team-tabs {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .team-tab-btn {
      padding: 10px 22px;
      border-radius: var(--radius-full);
      background: var(--bg-page);
      border: 1px solid var(--border-color);
      font-size: 13px;
      font-weight: 800;
      color: var(--text-muted);
      transition: all 0.25s;
    }

    .team-tab-btn:hover {
      background: var(--primary-light);
      color: var(--primary-dark);
      border-color: rgba(2, 132, 199, 0.3);
    }

    .team-tab-btn.active {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 26px;
    }

    .person-card {
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .person-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-md);
      border-color: rgba(2, 132, 199, 0.3);
    }

    .person-photo-wrap {
      height: 240px;
      overflow: hidden;
      position: relative;
      background: linear-gradient(135deg, #e0f2fe, #ffedd5);
    }

    .person-photo-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .person-card:hover .person-photo-wrap img {
      transform: scale(1.05);
    }

    .person-area-badge {
      position: absolute;
      bottom: 12px;
      left: 12px;
      padding: 4px 12px;
      border-radius: var(--radius-full);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    .badge-adm { background: #0284c7; color: #ffffff; }
    .badge-doc { background: #f97316; color: #ffffff; }
    .badge-ser { background: #16a34a; color: #ffffff; }
    .badge-cat { background: #d97706; color: #ffffff; }

    .person-info {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .person-role {
      font-size: 12px;
      font-weight: 800;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }

    .person-name {
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.25;
      margin-bottom: 8px;
    }

    .person-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* SECCIÓN GALERÍA DE FOTOS REALES CON FILTROS */
    .gallery-section {
      background: #f8fafc;
    }

    .gallery-filter-tabs {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 35px;
    }

    .gallery-filter-btn {
      padding: 8px 18px;
      border-radius: var(--radius-full);
      background: #ffffff;
      border: 1px solid var(--border-color);
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
      transition: all 0.2s;
    }

    .gallery-filter-btn:hover {
      border-color: var(--primary);
      color: var(--primary);
    }

    .gallery-filter-btn.active {
      background: var(--orange);
      color: #ffffff;
      border-color: var(--orange);
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 240px;
      gap: 18px;
    }

    .gallery-item {
      position: relative;
      border-radius: 18px;
      overflow: hidden;
      cursor: pointer;
      background: #e2e8f0;
      box-shadow: var(--shadow-sm);
      border: 2px solid #ffffff;
    }

    .gallery-item.span-2 {
      grid-column: span 2;
    }

    .gallery-item.span-row-2 {
      grid-row: span 2;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .gallery-item:hover img {
      transform: scale(1.08);
    }

    .gallery-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.9) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 18px;
      color: #ffffff;
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    .gallery-overlay h4 {
      font-family: var(--font-heading);
      font-size: 15px;
      font-weight: 800;
      line-height: 1.3;
      margin-bottom: 4px;
    }

    .gallery-overlay p {
      font-size: 12px;
      color: #e2e8f0;
      line-height: 1.4;
    }

    .gallery-zoom-btn {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      color: var(--primary-deep);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }

    /* MODAL LIGHTBOX PARA VER FOTOS EN GRANDE */
    .lightbox {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(15, 23, 42, 0.92);
      backdrop-filter: blur(10px);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 30px;
    }

    .lightbox.open {
      display: flex;
    }

    .lightbox-content {
      max-width: 950px;
      width: 100%;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .lightbox-img-wrap {
      width: 100%;
      max-height: 72vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 16px;
      background: #000000;
      box-shadow: 0 25px 60px rgba(0,0,0,0.5);
    }

    .lightbox-img-wrap img {
      max-width: 100%;
      max-height: 72vh;
      object-fit: contain;
    }

    .lightbox-caption {
      margin-top: 16px;
      color: #ffffff;
      text-align: center;
    }

    .lightbox-caption h3 {
      font-family: var(--font-heading);
      font-size: 18px;
      margin-bottom: 4px;
    }

    .lightbox-caption p {
      font-size: 13px;
      color: #cbd5e1;
    }

    .lightbox-close {
      position: absolute;
      top: -45px;
      right: 0;
      color: #ffffff;
      font-size: 32px;
      line-height: 1;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .lightbox-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .lightbox-nav:hover {
      background: #ffffff;
      color: var(--primary-deep);
    }

    .lightbox-nav.prev { left: -70px; }
    .lightbox-nav.next { right: -70px; }

    /* SECCIÓN SOLIDARIDAD / LLAMADO A LA ACCIÓN */
    .cta-banner {
      background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%);
      color: #ffffff;
      border-radius: var(--radius-lg);
      padding: 60px 50px;
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      margin: 40px 0;
    }

    .cta-banner::after {
      content: '';
      position: absolute;
      right: -80px;
      top: -80px;
      width: 320px;
      height: 320px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.12);
    }

    .cta-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
      gap: 40px;
      position: relative;
      z-index: 2;
    }

    .cta-copy h2 {
      font-family: var(--font-heading);
      font-size: clamp(28px, 3.4vw, 40px);
      font-weight: 900;
      line-height: 1.18;
      margin-bottom: 14px;
    }

    .cta-copy p {
      font-size: 16px;
      opacity: 0.95;
      line-height: 1.7;
    }

    .cta-actions {
      display: flex;
      gap: 14px;
      justify-content: flex-end;
      flex-wrap: wrap;
    }

    .btn-white {
      background: #ffffff;
      color: var(--orange-dark);
      font-weight: 800;
    }

    .btn-white:hover {
      background: var(--orange-light);
      transform: translateY(-2px);
    }

    /* SECCIÓN CONTACTO Y REDES SOCIALES */
    .contact-section {
      background: #ffffff;
      padding: 95px 0 110px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 60px;
      align-items: start;
    }

    .contact-details h2 {
      font-family: var(--font-heading);
      font-size: clamp(30px, 3.6vw, 42px);
      font-weight: 900;
      color: var(--primary-deep);
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .contact-details p {
      font-size: 15px;
      color: var(--text-muted);
      line-height: 1.8;
      margin-bottom: 30px;
    }

    .contact-card-box {
      display: grid;
      gap: 16px;
      margin-bottom: 35px;
    }

    .contact-item-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      border-radius: 16px;
      background: var(--bg-page);
      border: 1px solid var(--border-color);
      transition: all 0.25s;
    }

    .contact-item-card:hover {
      border-color: var(--primary);
      transform: translateX(4px);
    }

    .contact-item-icon {
      width: 46px;
      height: 46px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
    }

    .contact-item-text strong {
      display: block;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-light);
      margin-bottom: 2px;
    }

    .contact-item-text span {
      font-size: 15px;
      font-weight: 700;
      color: var(--text-main);
    }

    /* TARJETAS DE TODAS LAS REDES SOCIALES */
    .social-showcase {
      margin-top: 30px;
    }

    .social-showcase h4 {
      font-family: var(--font-heading);
      font-size: 15px;
      font-weight: 800;
      color: var(--primary-deep);
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .social-cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .social-link-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 14px;
      background: #ffffff;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      transition: all 0.25s;
    }

    .social-link-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .social-link-card.fb:hover { border-color: #1877f2; background: #f0f6ff; }
    .social-link-card.ig:hover { border-color: #e1306c; background: #fff0f5; }
    .social-link-card.tt:hover { border-color: #000000; background: #f8fafc; }
    .social-link-card.wa:hover { border-color: #25d366; background: #f0fdf4; }

    .social-card-icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      flex-shrink: 0;
    }

    .icon-fb { background: #1877f2; }
    .icon-ig { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
    .icon-tt { background: #000000; }
    .icon-wa { background: #25d366; }

    .social-link-card svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    .social-card-info strong {
      display: block;
      font-size: 13px;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.2;
    }

    .social-card-info span {
      font-size: 11px;
      color: var(--text-muted);
    }

    /* FORMULARIO DE CONTACTO / WHATSAPP */
    .contact-form-wrap {
      background: #ffffff;
      padding: 40px;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-lg);
    }

    .contact-form-wrap h3 {
      font-family: var(--font-heading);
      font-size: 24px;
      font-weight: 800;
      color: var(--primary-deep);
      margin-bottom: 8px;
    }

    .contact-form-wrap p {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }

    .form-group {
      margin-bottom: 18px;
    }

    .form-label {
      display: block;
      font-size: 12px;
      font-weight: 800;
      color: var(--text-main);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 7px;
    }

    .form-control {
      width: 100%;
      padding: 13px 16px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      font-family: inherit;
      font-size: 14px;
      color: var(--text-main);
      background: #fbfdfe;
      outline: none;
      transition: all 0.2s;
    }

    .form-control:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(2, 132, 199, 0.12);
      background: #ffffff;
    }

    textarea.form-control {
      min-height: 110px;
      resize: vertical;
    }

    /* FOOTER */
    .footer {
      background: #0f172a;
      color: #ffffff;
      padding: 75px 0 30px;
      position: relative;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 0.9fr 0.9fr 1fr;
      gap: 45px;
      margin-bottom: 55px;
    }

    .footer-brand {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 18px;
    }

    .footer-logo {
      width: 62px;
      height: 62px;
      border-radius: 16px;
      background: #ffffff;
      padding: 4px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .footer-logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .footer-brand-text h3 {
      font-family: var(--font-heading);
      font-size: 17px;
      font-weight: 900;
      color: #ffffff;
      line-height: 1.2;
    }

    .footer-brand-text span {
      color: var(--orange);
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .footer-desc {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.8;
      margin-bottom: 22px;
      max-width: 340px;
    }

    .footer-socials {
      display: flex;
      gap: 10px;
    }

    .footer-social-btn {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.08);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      transition: all 0.2s;
    }

    .footer-social-btn:hover {
      background: var(--primary);
      transform: translateY(-3px);
    }

    .footer-social-btn svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    .footer-col h4 {
      font-family: var(--font-heading);
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #e2e8f0;
      margin-bottom: 20px;
      position: relative;
      padding-bottom: 8px;
    }

    .footer-col h4::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 24px;
      height: 2px;
      background: var(--orange);
      border-radius: 2px;
    }

    .footer-links {
      list-style: none;
      display: grid;
      gap: 12px;
    }

    .footer-links a {
      font-size: 13px;
      color: #94a3b8;
      transition: all 0.2s;
    }

    .footer-links a:hover {
      color: #ffffff;
      padding-left: 4px;
    }

    .footer-contact-item {
      display: flex;
      gap: 12px;
      font-size: 13px;
      color: #94a3b8;
      margin-bottom: 14px;
      line-height: 1.5;
    }

    .footer-contact-item svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      margin-top: 3px;
      color: var(--primary);
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      font-size: 12px;
      color: #64748b;
    }

    .footer-bottom strong {
      color: #cbd5e1;
    }

    /* BOTÓN FLOTANTE DE WHATSAPP */
    .whatsapp-floating {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 85;
      background: #25d366;
      color: #ffffff;
      border-radius: var(--radius-full);
      padding: 13px 20px;
      box-shadow: 0 10px 30px rgba(37, 211, 102, 0.45);
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 800;
      font-family: var(--font-heading);
      letter-spacing: 0.02em;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .whatsapp-floating:hover {
      transform: translateY(-4px) scale(1.03);
      box-shadow: 0 14px 35px rgba(37, 211, 102, 0.6);
      color: #ffffff;
    }

    .whatsapp-floating svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    /* BOTÓN FLOTANTE DE ADMINISTRACIÓN / EDITOR */
    .admin-floating-btn {
      position: fixed;
      left: 20px;
      bottom: 20px;
      z-index: 85;
      background: #0f172a;
      color: #ffffff;
      border-radius: var(--radius-full);
      padding: 11px 18px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 800;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.25s;
    }

    .admin-floating-btn:hover {
      background: var(--primary);
      transform: translateY(-2px);
    }

    /* MODAL DE EDICIÓN EN VIVO */
    .admin-modal {
      position: fixed;
      inset: 0;
      z-index: 95;
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(8px);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .admin-modal.open {
      display: flex;
    }

    .admin-window {
      background: #ffffff;
      border-radius: 24px;
      width: min(880px, 100%);
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--border-color);
      padding: 32px;
      position: relative;
    }

    .admin-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 24px;
    }

    .admin-head h2 {
      font-family: var(--font-heading);
      font-size: 22px;
      color: var(--primary-deep);
    }

    .admin-close {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: var(--bg-page);
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .admin-tabs {
      display: flex;
      gap: 8px;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 22px;
      overflow-x: auto;
      padding-bottom: 8px;
    }

    .admin-tab-btn {
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .admin-tab-btn.active {
      background: var(--primary-light);
      color: var(--primary-dark);
    }

    .admin-tab-content {
      display: none;
    }

    .admin-tab-content.active {
      display: block;
    }

    .admin-field-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 18px;
    }

    .admin-field {
      margin-bottom: 14px;
    }

    .admin-field label {
      display: block;
      font-size: 12px;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 6px;
    }

    .admin-field input,
    .admin-field textarea,
    .admin-field select {
      width: 100%;
      padding: 10px 14px;
      border-radius: 10px;
      border: 1px solid #cbd5e1;
      font-family: inherit;
      font-size: 13px;
    }

    .admin-card-row {
      border: 1px solid var(--border-color);
      border-radius: 14px;
      padding: 16px;
      margin-bottom: 14px;
      background: var(--bg-page);
      display: grid;
      grid-template-columns: 70px 1fr 1fr 120px 80px;
      gap: 12px;
      align-items: center;
    }

    .admin-actions-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      border-top: 1px solid var(--border-color);
      margin-top: 24px;
      flex-wrap: wrap;
      gap: 12px;
    }

    /* RESPONSIVE DESIGN */
    @media (max-width: 1024px) {
      .hero-grid { grid-template-columns: 1fr; gap: 40px; }
      .hero-visual { max-width: 600px; margin: 0 auto; }
      .about-grid { grid-template-columns: 1fr; gap: 45px; }
      .values-strip-grid { grid-template-columns: repeat(2, 1fr); }
      .impact-grid { grid-template-columns: repeat(2, 1fr); }
      .pillars-grid { grid-template-columns: repeat(2, 1fr); }
      .team-grid { grid-template-columns: repeat(2, 1fr); }
      .gallery-grid { grid-template-columns: repeat(3, 1fr); }
      .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 35px; }
      .contact-grid { grid-template-columns: 1fr; }
      .lightbox-nav.prev { left: 10px; }
      .lightbox-nav.next { right: 10px; }
    }

    @media (max-width: 768px) {
      .topbar { font-size: 11px; }
      .topbar-content { justify-content: center; text-align: center; }
      .nav-links, .nav-actions .btn { display: none; }
      .menu-toggle { display: flex; }
      
      .nav-links.mobile-open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 86px;
        left: 0;
        right: 0;
        background: #ffffff;
        padding: 25px 30px;
        border-bottom: 1px solid var(--border-color);
        box-shadow: 0 20px 30px rgba(0,0,0,0.1);
        gap: 16px;
        align-items: flex-start;
      }
      
      .mv-grid { grid-template-columns: 1fr; }
      .pillars-grid { grid-template-columns: 1fr; }
      .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
      .gallery-item.span-2 { grid-column: span 1; }
      .cta-grid { grid-template-columns: 1fr; text-align: center; }
      .cta-actions { justify-content: center; }
      .social-cards-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr; }
      .admin-field-grid { grid-template-columns: 1fr; }
      .admin-card-row { grid-template-columns: 1fr; }
    }

    @media (max-width: 480px) {
      .hero-title { font-size: 34px; }
      .values-strip-grid { grid-template-columns: 1fr; }
      .team-grid { grid-template-columns: 1fr; }
      .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 220px; }
      .whatsapp-floating span { display: none; }
      .whatsapp-floating { padding: 14px; border-radius: 50%; }
    }
  </style>
</head>
<body>

  <!-- BARRA SUPERIOR CON TELÉFONO, CORREO Y REDES SOCIALES -->
  <div class="topbar">
    <div class="container topbar-content">
      <div class="topbar-left">
        <a class="topbar-item" href="https://wa.me/593985657957" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
          <span id="topPhoneText">WhatsApp: 098 565 7957</span>
        </a>
        <a class="topbar-item" href="mailto:fundaciogotitasdelrocio@gmail.com">
          <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          <span id="topEmailText">fundaciogotitasdelrocio@gmail.com</span>
        </a>
      </div>
      <div class="topbar-right">
        <div class="topbar-socials">
          <a class="topbar-social-btn" href="https://www.facebook.com/share/1CH58YncUw/" target="_blank" rel="noopener" aria-label="Facebook Oficial 1" title="Facebook Fundación Gotitas del Rocío">
            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a class="topbar-social-btn" href="https://www.facebook.com/share/1EFwpjysin/" target="_blank" rel="noopener" aria-label="Facebook Oficial 2" title="Facebook Comunidad">
            <svg viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.784-.14-2.808 0-4.716 1.71-4.716 4.85v2.65H7v4h3v9h4v-9z"/></svg>
          </a>
          <a class="topbar-social-btn" href="https://www.instagram.com/gotitasdel.rocio?xtok=MTlwaTlvZHMwdXp4MA==" target="_blank" rel="noopener" aria-label="Instagram Oficial" title="Instagram @gotitasdel.rocio">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a class="topbar-social-btn" href="https://www.tiktok.com/@gotitasdelrocio3?_r=1&_t=ZS-9BGY9JYswuv" target="_blank" rel="noopener" aria-label="TikTok Oficial" title="TikTok @gotitasdelrocio3">
            <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
          </a>
        </div>
        <button class="topbar-dl-btn" id="topDownloadBtn" title="Descargar código HTML completo">
          <svg style="width:13px;height:13px;fill:currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
          Descargar HTML
        </button>
      </div>
    </div>
  </div>

  <!-- NAVEGACIÓN PRINCIPAL -->
  <header class="header">
    <div class="container nav">
      <a class="brand" href="#inicio">
        <div class="brand-logo-wrap">
          <img id="navLogo" alt="Logotipo Fundación Gotitas del Rocío">
        </div>
        <div class="brand-text">
          <h1>FUNDACIÓN<br>GOTITAS DEL ROCÍO</h1>
          <span>Sembrando Amor y Oportunidades</span>
        </div>
      </a>

      <nav>
        <ul class="nav-links" id="navLinks">
          <li><a href="#inicio" class="active">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#mision-vision">Misión y Visión</a></li>
          <li><a href="#impacto">Impacto</a></li>
          <li><a href="#programas">Ejes de Trabajo</a></li>
          <li><a href="#equipo">Nuestro Equipo</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a class="btn btn-whatsapp" id="navWaBtn" href="https://wa.me/593985657957" target="_blank" rel="noopener">
          <svg style="width:17px;height:17px;fill:currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
          WhatsApp 098 565 7957
        </a>
        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú móvil">☰</button>
      </div>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero" id="inicio">
      <div class="hero-decor-1"></div>
      <div class="hero-decor-2"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="badge-pill">
            <span class="dot"></span>
            Fundación Gotitas del Rocío · Ecuador
          </div>
          <h1 class="hero-title" id="heroTitle">
            Pequeñas gotas,<br>
            <span class="gradient-text">grandes cambios de vida.</span>
          </h1>
          <p class="hero-lead" id="heroDesc">
            Acompañamos a niñas, niños y jóvenes en situación de vulnerabilidad con educación con amor, estimulación temprana, nutrición saludable y talleres artísticos para construir un presente seguro y un futuro lleno de oportunidades.
          </p>
          <div class="hero-buttons">
            <a class="btn btn-orange" href="#contacto">
              <svg style="width:18px;height:18px;fill:currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Quiero Colaborar
            </a>
            <a class="btn btn-outline" href="#nosotros">
              Conoce Nuestra Labor ↗
            </a>
            <a class="btn btn-primary" id="heroDownloadBtn">
              <svg style="width:16px;height:16px;fill:currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              Descargar Sitio (.html)
            </a>
          </div>

          <div class="hero-trust">
            <div class="trust-avatars">
              <div class="trust-avatar"><img id="avatarTrust1" alt="Beneficiarios"></div>
              <div class="trust-avatar"><img id="avatarTrust2" alt="Educadoras"></div>
              <div class="trust-avatar"><img id="avatarTrust3" alt="Equipo"></div>
            </div>
            <div class="trust-text">
              <strong>Equipo multidisciplinario y solidario</strong>
              Docentes, personal de servicio, administrativo y catering unidos por la niñez.
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-logo-badge">
            <img id="heroBadgeLogo" alt="Logotipo Oficial">
            <div class="hero-logo-badge-text">
              <strong>Gotitas del Rocío</strong>
              <small>ORGANIZACIÓN SOCIAL</small>
            </div>
          </div>

          <div class="hero-card-main">
            <img id="heroMainPhoto" alt="Actividad de la Fundación Gotitas del Rocío">
          </div>

          <div class="hero-floating-card">
            <div class="floating-icon">💧</div>
            <div class="floating-text">
              <strong>Cada gota cuenta</strong>
              <span>Tu apoyo transforma realidades</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BARRA DE VALORES DESTACADOS -->
    <div class="values-strip">
      <div class="container values-strip-grid">
        <div class="value-strip-item">
          <div class="value-strip-icon icon-blue">♡</div>
          <div class="value-strip-content">
            <h4>Amor y Protección</h4>
            <p>Espacios libres de violencia, afecto y resguardo infantil.</p>
          </div>
        </div>
        <div class="value-strip-item">
          <div class="value-strip-icon icon-orange">✦</div>
          <div class="value-strip-content">
            <h4>Estimulación Temprana</h4>
            <p>Desarrollo psicomotriz, sensorial y cognitivo personalizado.</p>
          </div>
        </div>
        <div class="value-strip-item">
          <div class="value-strip-icon icon-green">🥗</div>
          <div class="value-strip-content">
            <h4>Nutrición y Catering</h4>
            <p>Alimentación balanceada y hábitos de vida saludables.</p>
          </div>
        </div>
        <div class="value-strip-item">
          <div class="value-strip-icon icon-red">🤝</div>
          <div class="value-strip-content">
            <h4>Comunidad Unida</h4>
            <p>Acompañamiento integral a familias y entornos comunitarios.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECCIÓN NOSOTROS Y PRESIDENTE -->
    <section class="section" id="nosotros">
      <div class="container about-grid">
        <div class="about-visual">
          <div class="about-image-main">
            <img id="aboutMainPhoto" alt="Taller del equipo de la Fundación Gotitas del Rocío">
          </div>
          <div class="about-card-badge">
            <div class="about-badge-icon">★</div>
            <div class="about-badge-text">
              <strong>Compromiso Humano</strong>
              <small>Capacitación y vocación permanente</small>
            </div>
          </div>
        </div>

        <div class="about-content">
          <span class="eyebrow">Quiénes Somos</span>
          <h2>Un compromiso que nace del corazón y se vive en comunidad.</h2>
          <p>
            La <strong>Fundación Gotitas del Rocío</strong> es una organización sin fines de lucro nacida con la firme convicción de que cada niño, niña y joven merece crecer en un entorno lleno de ternura, aprendizaje, dignidad y oportunidades.
          </p>
          <p>
            Trabajamos incansablemente junto a educadoras apasionadas, personal de servicio, equipos de catering nutricional y colaboradores administrativos para brindar estimulación adecuada, acompañamiento pedagógico, alimentación nutritiva y contención a familias en situación de vulnerabilidad.
          </p>
          
          <!-- CREDENCIAL DEL PRESIDENTE -->
          <div class="president-card">
            <div class="president-info">
              <div class="president-avatar" id="presAvatarLetter">GP</div>
              <div class="president-text">
                <strong id="presNameLabel">Jorge Guido Perez Mendoza</strong>
                <span>Presidente de la Fundación Gotitas del Rocío</span>
              </div>
            </div>
            <div class="president-seal">
              <span>✓ Liderazgo Institucional</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN MISIÓN Y VISIÓN PREMIUM -->
    <section class="section mv-section" id="mision-vision">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Nuestra Razón de Ser</span>
          <h2>Misión y Visión Institucional</h2>
          <p>
            Pilares estratégicos y éticos que guían cada acción, taller y programa de la Fundación Gotitas del Rocío.
          </p>
        </div>

        <div class="mv-grid">
          <!-- TARJETA MISIÓN -->
          <article class="mv-card">
            <div class="mv-header">
              <div class="mv-icon icon-blue">💧</div>
              <div class="mv-title-wrap">
                <h3>Nuestra Misión</h3>
                <span>Propósito Fundamental</span>
              </div>
            </div>
            <p class="mv-body" id="misionText">
              Contribuir al bienestar y desarrollo integral de niños, niñas y jóvenes en situación de vulnerabilidad en el Ecuador, mediante acciones solidarias, estimulación temprana, acompañamiento educativo, alimentación balanceada y espacios de cuidado que fortalezcan sus capacidades afectivas, cognitivas y sociales con dignidad y amor.
            </p>
            <ul class="mv-list">
              <li>
                <svg style="color:var(--primary)" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Atención pedagógica y estimulación sensorial de calidad.
              </li>
              <li>
                <svg style="color:var(--primary)" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Espacios libres de violencia, inclusivos y protectores.
              </li>
              <li>
                <svg style="color:var(--primary)" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Nutrición infantil saludable y soporte sociofamiliar.
              </li>
            </ul>
          </article>

          <!-- TARJETA VISIÓN -->
          <article class="mv-card vision">
            <div class="mv-header">
              <div class="mv-icon icon-orange">🌟</div>
              <div class="mv-title-wrap">
                <h3>Nuestra Visión</h3>
                <span>Horizonte Estratégico</span>
              </div>
            </div>
            <p class="mv-body" id="visionText">
              Ser una fundación referente a nivel nacional por su calidez humana, transparencia e impacto transformador en la vida de la niñez y la juventud, consolidando alianzas solidarias y comunidades empoderadas donde cada niño crezca en un entorno de respeto, inclusión, creatividad y esperanza infinita.
            </p>
            <ul class="mv-list">
              <li>
                <svg style="color:var(--orange)" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Impacto sostenible y replicable en comunidades vulnerables.
              </li>
              <li>
                <svg style="color:var(--orange)" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Fortalecimiento constante de facilitadores y docentes.
              </li>
              <li>
                <svg style="color:var(--orange)" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Reconocimiento por la ética, transparencia y amor al servicio.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- SECCIÓN IMPACTO Y MÉTRICAS -->
    <section class="impact-section" id="impacto">
      <div class="container">
        <div class="section-head" style="margin-bottom:45px">
          <span class="eyebrow" style="color:#e0f2fe">Resultados que Inspiran</span>
          <h2 style="color:#ffffff">El Valor de Cada Gotita Solidaria</h2>
          <p style="color:#e0f2fe">
            Cifras representativas de nuestra labor continua en favor de los niños y sus familias.
          </p>
        </div>

        <div class="impact-grid">
          <div class="stat-card">
            <div class="stat-number" data-target="250">250+</div>
            <div class="stat-label">Niñas y Niños</div>
            <div class="stat-desc">Acompañados en programas de cuidado y desarrollo.</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-target="85">85+</div>
            <div class="stat-label">Talleres Impartidos</div>
            <div class="stat-desc">Estimulación, psicomotricidad, arte y nutrición.</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-target="4">4 Áreas</div>
            <div class="stat-label">Equipo Integral</div>
            <div class="stat-desc">Administración, Docentes, Servicio y Catering.</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">Entrega de Amor</div>
            <div class="stat-desc">Dedicación absoluta a la sonrisa de cada niño.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN EJES DE TRABAJO -->
    <section class="section" id="programas">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Nuestras Líneas de Acción</span>
          <h2>Programas y Metodología Integral</h2>
          <p>
            Conoce cómo articulamos la educación, la creatividad, la salud y la convivencia en beneficio de los niños.
          </p>
        </div>

        <div class="pillars-grid">
          <!-- PILAR 1 -->
          <article class="pillar-card">
            <div class="pillar-thumb">
              <img id="pillarPhoto1" alt="Estimulación Sensorial">
              <span class="pillar-badge">Pedagogía</span>
            </div>
            <div class="pillar-content">
              <h3>Estimulación Temprana y Sensorial</h3>
              <p>
                Implementación de tapetes táctiles, paneles de texturas y rincones de aprendizaje diseñados para despertar la curiosidad y coordinación motriz de los infantes.
              </p>
              <a class="pillar-link" href="#galeria">Ver fotos de talleres ↗</a>
            </div>
          </article>

          <!-- PILAR 2 -->
          <article class="pillar-card">
            <div class="pillar-thumb">
              <img id="pillarPhoto2" alt="Material Didáctico Reciclado">
              <span class="pillar-badge">Creatividad</span>
            </div>
            <div class="pillar-content">
              <h3>Elaboración de Material Didáctico</h3>
              <p>
                Creación artesanal y colaborativa de rompecabezas numéricos, árboles didácticos y recursos visuales a partir de materiales seguros y reciclados.
              </p>
              <a class="pillar-link" href="#galeria">Ver elaboración lúdica ↗</a>
            </div>
          </article>

          <!-- PILAR 3 -->
          <article class="pillar-card">
            <div class="pillar-thumb">
              <img id="pillarPhoto3" alt="Teatro y Danza Infantil">
              <span class="pillar-badge">Arte y Expresión</span>
            </div>
            <div class="pillar-content">
              <h3>Arte, Teatro y Cuentacuentos</h3>
              <p>
                Obras temáticas como "El Cuento Viajero", danza tradicional, vestuarios lúdicos y títeres que fortalecen la autoestima, valores y la imaginación infantil.
              </p>
              <a class="pillar-link" href="#galeria">Ver presentaciones artísticas ↗</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECCIÓN EQUIPO HUMANO (ADMINISTRATIVO, SERVICIO, DOCENTES, CATERING) -->
    <section class="section team-section" id="equipo">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Nuestro Capital Humano</span>
          <h2>El Equipo que Hace Posible la Magia</h2>
          <p>
            Personas con vocación inquebrantable distribuidas en cuatro áreas fundamentales: Administrativo, Servicio, Docentes y Catering.
          </p>
        </div>

        <!-- PESTAÑAS DE FILTRO DE EQUIPO -->
        <div class="team-tabs" id="teamFilterTabs">
          <button class="team-tab-btn active" data-filter="Todos">Todos los Integrantes</button>
          <button class="team-tab-btn" data-filter="Administrativo">Administrativo</button>
          <button class="team-tab-btn" data-filter="Docentes">Docentes</button>
          <button class="team-tab-btn" data-filter="Servicio">Servicio</button>
          <button class="team-tab-btn" data-filter="Catering">Catering y Nutrición</button>
        </div>

        <!-- CUADRÍCULA DE INTEGRANTES -->
        <div class="team-grid" id="teamContainer">
          <!-- Renderizado dinámico vía JavaScript -->
        </div>
      </div>
    </section>

    <!-- SECCIÓN GALERÍA DE FOTOS REALES CON FILTROS -->
    <section class="section gallery-section" id="galeria">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Galería Fotográfica Oficial</span>
          <h2>Momentos que Quedan en el Corazón</h2>
          <p>
            Fotografías reales de nuestras actividades pedagógicas, eventos comunitarios, talleres docentes y convivencia.
          </p>
        </div>

        <!-- FILTROS DE GALERÍA -->
        <div class="gallery-filter-tabs" id="galleryFilterTabs">
          <button class="gallery-filter-btn active" data-cat="all">Todas las Fotos (23)</button>
          <button class="gallery-filter-btn" data-cat="eventos">Eventos y Niños</button>
          <button class="gallery-filter-btn" data-cat="material">Material Didáctico</button>
          <button class="gallery-filter-btn" data-cat="talleres">Talleres y Capacitación</button>
          <button class="gallery-filter-btn" data-cat="equipo">Equipo y Comunidad</button>
        </div>

        <!-- CUADRÍCULA DE FOTOS -->
        <div class="gallery-grid" id="galleryGrid">
          <!-- Renderizado dinámico de las 23 fotos reales -->
        </div>
      </div>
    </section>

    <!-- BANNER DE LLAMADO A LA SOLIDARIDAD -->
    <div class="container">
      <div class="cta-banner">
        <div class="cta-grid">
          <div class="cta-copy">
            <h2>Tu apoyo puede cambiar la vida de una niña o niño hoy mismo.</h2>
            <p>
              Súmate como padrino, voluntario o aliado institucional. Cada gotita de ayuda se convierte en sonrisas, nutrición y educación de calidad para la niñez ecuatoriana.
            </p>
          </div>
          <div class="cta-actions">
            <a class="btn btn-white" href="https://wa.me/593985657957?text=Hola%2C%20deseo%20saber%20c%C3%B3mo%20puedo%20apoyar%20a%20la%20Fundaci%C3%B3n%20Gotitas%20del%20Roc%C3%ADo" target="_blank" rel="noopener">
              Conversar por WhatsApp ↗
            </a>
            <a class="btn btn-primary" href="#contacto">
              Enviar Mensaje
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- SECCIÓN CONTACTO Y REDES SOCIALES -->
    <section class="section contact-section" id="contacto">
      <div class="container contact-grid">
        <div class="contact-details">
          <span class="eyebrow">Estamos a Tu Servicio</span>
          <h2>Comunícate con Nosotros</h2>
          <p>
            ¿Tienes dudas, deseas sumarte como voluntario, coordinar una donación o solicitar información para un niño? Escríbenos o conéctate con nuestras redes sociales oficiales.
          </p>

          <div class="contact-card-box">
            <a class="contact-item-card" href="https://wa.me/593985657957" target="_blank" rel="noopener">
              <div class="contact-item-icon icon-green">☎</div>
              <div class="contact-item-text">
                <strong>WhatsApp Oficial</strong>
                <span id="contactPhoneDisplay">098 565 7957 (+593 98 565 7957)</span>
              </div>
            </a>

            <a class="contact-item-card" href="mailto:fundaciogotitasdelrocio@gmail.com">
              <div class="contact-item-icon icon-blue">✉</div>
              <div class="contact-item-text">
                <strong>Correo Electrónico</strong>
                <span id="contactEmailDisplay">fundaciogotitasdelrocio@gmail.com</span>
              </div>
            </a>

            <div class="contact-item-card">
              <div class="contact-item-icon icon-orange">📍</div>
              <div class="contact-item-text">
                <strong>Presidencia y Sede</strong>
                <span>Jorge Guido Perez Mendoza · Ecuador</span>
              </div>
            </div>
          </div>

          <!-- BOTONES OFICIALES DE TODAS LAS REDES SOCIALES -->
          <div class="social-showcase">
            <h4>Nuestras Redes Sociales Oficiales:</h4>
            <div class="social-cards-grid">
              <!-- FACEBOOK 1 -->
              <a class="social-link-card fb" href="https://www.facebook.com/share/1CH58YncUw/" target="_blank" rel="noopener">
                <div class="social-card-icon icon-fb">
                  <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div class="social-card-info">
                  <strong>Facebook Oficial</strong>
                  <span>Fundación Gotitas</span>
                </div>
              </a>

              <!-- FACEBOOK 2 -->
              <a class="social-link-card fb" href="https://www.facebook.com/share/1EFwpjysin/" target="_blank" rel="noopener">
                <div class="social-card-icon icon-fb">
                  <svg viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.784-.14-2.808 0-4.716 1.71-4.716 4.85v2.65H7v4h3v9h4v-9z"/></svg>
                </div>
                <div class="social-card-info">
                  <strong>Facebook Alternativo</strong>
                  <span>Comunidad y Alianzas</span>
                </div>
              </a>

              <!-- INSTAGRAM -->
              <a class="social-link-card ig" href="https://www.instagram.com/gotitasdel.rocio?xtok=MTlwaTlvZHMwdXp4MA==" target="_blank" rel="noopener">
                <div class="social-card-icon icon-ig">
                  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div class="social-card-info">
                  <strong>Instagram</strong>
                  <span>@gotitasdel.rocio</span>
                </div>
              </a>

              <!-- TIKTOK -->
              <a class="social-link-card tt" href="https://www.tiktok.com/@gotitasdelrocio3?_r=1&_t=ZS-9BGY9JYswuv" target="_blank" rel="noopener">
                <div class="social-card-icon icon-tt">
                  <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                </div>
                <div class="social-card-info">
                  <strong>TikTok Oficial</strong>
                  <span>@gotitasdelrocio3</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- FORMULARIO DE CONTACTO DIRECTO -->
        <div class="contact-form-wrap">
          <h3>Escríbenos Directamente</h3>
          <p>Llena tus datos y tu mensaje se enviará directamente a nuestro WhatsApp oficial.</p>

          <form id="contactForm">
            <div class="form-group">
              <label class="form-label" for="formName">Nombre Completo *</label>
              <input class="form-control" id="formName" type="text" placeholder="Tu nombre y apellido" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="formEmail">Correo Electrónico</label>
              <input class="form-control" id="formEmail" type="email" placeholder="ejemplo@correo.com">
            </div>

            <div class="form-group">
              <label class="form-label" for="formTopic">Motivo de Contacto</label>
              <select class="form-control" id="formTopic">
                <option value="Información general">Información General</option>
                <option value="Deseo apoyar o ser padrino">Deseo Apoyar / Ser Padrino</option>
                <option value="Voluntariado o servicio">Voluntariado / Servicio</option>
                <option value="Alianza institucional">Alianza Institucional o Educativa</option>
                <option value="Inscripción de niños">Inscripción o Ayuda para Niños</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="formMessage">Tu Mensaje *</label>
              <textarea class="form-control" id="formMessage" placeholder="¿Cómo podemos ayudarte o cómo te gustaría colaborar con la fundación?" required></textarea>
            </div>

            <button class="btn btn-whatsapp" type="submit" style="width:100%;padding:15px">
              <svg style="width:20px;height:20px;fill:currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
              Enviar Mensaje a WhatsApp 098 565 7957 ↗
            </button>
            <small style="display:block;text-align:center;font-size:11px;color:#94a3b8;margin-top:10px">
              Al enviar, se abrirá WhatsApp con el mensaje preparado para la Fundación Gotitas del Rocío.
            </small>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- PIE DE PÁGINA (FOOTER) -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <div class="footer-logo">
              <img id="footerLogo" alt="Logotipo Fundación Gotitas del Rocío">
            </div>
            <div class="footer-brand-text">
              <h3>FUNDACIÓN<br>GOTITAS DEL ROCÍO</h3>
              <span>SEMBRANDO OPORTUNIDADES</span>
            </div>
          </div>
          <p class="footer-desc">
            Organización solidaria comprometida con el cuidado, la nutrición, estimulación temprana y felicidad de los niños y jóvenes más vulnerables del Ecuador.
          </p>
          <div class="footer-socials">
            <a class="footer-social-btn" href="https://www.facebook.com/share/1CH58YncUw/" target="_blank" rel="noopener" title="Facebook Oficial"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a class="footer-social-btn" href="https://www.instagram.com/gotitasdel.rocio?xtok=MTlwaTlvZHMwdXp4MA==" target="_blank" rel="noopener" title="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a class="footer-social-btn" href="https://www.tiktok.com/@gotitasdelrocio3?_r=1&_t=ZS-9BGY9JYswuv" target="_blank" rel="noopener" title="TikTok"><svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navegación</h4>
          <ul class="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#mision-vision">Misión y Visión</a></li>
            <li><a href="#impacto">Impacto Social</a></li>
            <li><a href="#programas">Ejes Pedagógicos</a></li>
            <li><a href="#equipo">Equipo Humano</a></li>
            <li><a href="#galeria">Galería Oficial</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Áreas de Apoyo</h4>
          <ul class="footer-links">
            <li><a href="#equipo">Dirección Administrativa</a></li>
            <li><a href="#equipo">Cuerpo Docente</a></li>
            <li><a href="#equipo">Servicios y Mantenimiento</a></li>
            <li><a href="#equipo">Catering y Nutrición</a></li>
            <li><a href="#programas">Estimulación Temprana</a></li>
            <li><a href="#contacto">Voluntariado</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contacto Directo</h4>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
            <div>
              <strong>WhatsApp:</strong><br>
              098 565 7957
            </div>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <div>
              <strong>Correo:</strong><br>
              fundaciogotitasdelrocio@gmail.com
            </div>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <div>
              <strong>Presidencia:</strong><br>
              Jorge Guido Perez Mendoza · Ecuador
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © <span id="currentYear"></span> <strong>Fundación Gotitas del Rocío</strong>. Todos los derechos reservados.
        </div>
        <div>
          <span>Unidos por el bienestar y futuro de la niñez · Ecuador</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- BOTÓN FLOTANTE DE WHATSAPP -->
  <a class="whatsapp-floating" href="https://wa.me/593985657957" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.5 11.5 0 0 0 2.7 17.2L1 23l6-1.6A11.5 11.5 0 1 0 20.5 3.5ZM12 21a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-3.5.9.9-3.4-.2-.3A9.5 9.5 0 1 1 12 21Zm5.2-7.1c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2s-.8 1-1 1.1c-.2.2-.4.2-.7.1s-1.3-.5-2.5-1.6c-.9-.8-1.5-1.8-1.7-2.1-.2-.4 0-.5.1-.6l.5-.6.4-.5c.1-.2 0-.4 0-.6L8.7 6c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.5s-1.2 1.2-1.2 2.8 1.2 3.1 1.4 3.3c.2.2 2.4 3.8 5.9 5.2.8.4 1.5.6 2 .7.8.2 1.6.2 2.2.1.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z"/></svg>
    <span>WhatsApp 098 565 7957</span>
  </a>

  <!-- BOTÓN FLOTANTE DE ADMINISTRACIÓN / EDITOR -->
  <button class="admin-floating-btn" id="openAdminBtn" title="Abrir panel de administración y edición del sitio">
    <span>⚙</span>
    <span>EDITAR SITIO</span>
  </button>

  <!-- MODAL LIGHTBOX PARA AMPLIAR FOTOS DE LA GALERÍA -->
  <div class="lightbox" id="lightboxModal" aria-hidden="true">
    <button class="lightbox-close" id="lightboxClose" aria-label="Cerrar visor">✕</button>
    <button class="lightbox-nav prev" id="lightboxPrev" aria-label="Foto anterior">‹</button>
    <button class="lightbox-nav next" id="lightboxNext" aria-label="Siguiente foto">›</button>
    <div class="lightbox-content">
      <div class="lightbox-img-wrap">
        <img id="lightboxImg" alt="Fotografía ampliada">
      </div>
      <div class="lightbox-caption">
        <h3 id="lightboxTitle">Título de la actividad</h3>
        <p id="lightboxDesc">Descripción de la labor institucional.</p>
      </div>
    </div>
  </div>

  <!-- PANEL DE ADMINISTRACIÓN Y EDICIÓN EN VIVO -->
  <div class="admin-modal" id="adminModal" aria-hidden="true">
    <div class="admin-window">
      <div class="admin-head">
        <div>
          <h2>Panel de Edición · Fundación Gotitas del Rocío</h2>
          <small style="color:var(--text-muted)">Modifica fotos, datos del presidente, personal de apoyo, misión y descarga el sitio actualizado.</small>
        </div>
        <button class="admin-close" id="closeAdminBtn" aria-label="Cerrar panel">✕</button>
      </div>

      <div class="admin-tabs">
        <button class="admin-tab-btn active" data-tab="tab-general">Datos Principales</button>
        <button class="admin-tab-btn" data-tab="tab-team">Personal de Apoyo (4 Áreas)</button>
        <button class="admin-tab-btn" data-tab="tab-gallery">Galería de Fotos</button>
      </div>

      <!-- PESTAÑA 1: DATOS PRINCIPALES -->
      <div class="admin-tab-content active" id="tab-general">
        <div class="admin-field-grid">
          <div class="admin-field">
            <label>Nombre del Presidente</label>
            <input type="text" id="adminPresName" value="Jorge Guido Perez Mendoza">
          </div>
          <div class="admin-field">
            <label>WhatsApp (con código de país o formato nacional)</label>
            <input type="text" id="adminPhone" value="0985657957">
          </div>
          <div class="admin-field">
            <label>Correo Electrónico Oficial</label>
            <input type="email" id="adminEmail" value="fundaciogotitasdelrocio@gmail.com">
          </div>
          <div class="admin-field">
            <label>Título Principal de Portada</label>
            <input type="text" id="adminHeroTitle" value="Pequeñas gotas, grandes cambios de vida.">
          </div>
        </div>

        <div class="admin-field">
          <label>Cambiar Logotipo Oficial (Sube una imagen)</label>
          <input type="file" id="adminLogoUpload" accept="image/*">
        </div>

        <div class="admin-field-grid">
          <div class="admin-field">
            <label>Cambiar Foto Principal de Portada (Hero)</label>
            <input type="file" id="adminHeroPhotoUpload" accept="image/*">
          </div>
          <div class="admin-field">
            <label>Cambiar Foto Sección Nosotros</label>
            <input type="file" id="adminAboutPhotoUpload" accept="image/*">
          </div>
        </div>

        <div class="admin-field">
          <label>Texto de la Misión</label>
          <textarea id="adminMisionText" rows="3"></textarea>
        </div>

        <div class="admin-field">
          <label>Texto de la Visión</label>
          <textarea id="adminVisionText" rows="3"></textarea>
        </div>
      </div>

      <!-- PESTAÑA 2: GESTIÓN DE PERSONAL (4 ÁREAS) -->
      <div class="admin-tab-content" id="tab-team">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px">
          <div>
            <h4 style="font-family:var(--font-heading);color:var(--primary-deep)">Personal Registrado</h4>
            <small style="color:var(--text-muted)">Administra a los integrantes de Administrativo, Servicio, Docentes y Catering.</small>
          </div>
          <button class="btn btn-primary btn-sm" id="adminAddPersonBtn">＋ Agregar Integrante</button>
        </div>

        <div id="adminTeamList">
          <!-- Renderizado dinámico de formulario por integrante -->
        </div>
      </div>

      <!-- PESTAÑA 3: GESTIÓN DE GALERÍA -->
      <div class="admin-tab-content" id="tab-gallery">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px">
          <div>
            <h4 style="font-family:var(--font-heading);color:var(--primary-deep)">Fotografías de la Fundación</h4>
            <small style="color:var(--text-muted)">Cambia títulos o agrega nuevas fotografías a la galería.</small>
          </div>
          <button class="btn btn-primary btn-sm" id="adminAddGalleryBtn">＋ Agregar Nueva Foto</button>
        </div>

        <div id="adminGalleryList">
          <!-- Renderizado dinámico de items de galería -->
        </div>
      </div>

      <!-- BARRA DE ACCIONES DEL PANEL -->
      <div class="admin-actions-bar">
        <button class="btn btn-outline btn-sm" id="adminResetBtn" style="color:var(--red);border-color:var(--red)">
          Restablecer Valores Iniciales
        </button>
        <div style="display:flex;gap:10px">
          <button class="btn btn-primary btn-sm" id="adminSaveBtn">
            Guardar Cambios
          </button>
          <button class="btn btn-orange btn-sm" id="adminDownloadHtmlBtn">
            📥 Descargar HTML Actualizado
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- BUNDLE DE DATOS EMBEBIDOS Y LÓGICA DE INTERACTIVIDAD -->
  <script>
    /* DATOS MAESTROS EMBEBIDOS (FOTOGRAFÍAS REALES EXTRAÍDAS + LOGOTIPO) */
    const MASTER_DATA = {
      logo: "${bundle.logo}",
      images: ${JSON.stringify(bundle.images)}
    };

    /* ESTADO INICIAL COMPLETO DEL SITIO */
    const DEFAULT_APP_STATE = {
      president: "Jorge Guido Perez Mendoza",
      phone: "0985657957",
      email: "fundaciogotitasdelrocio@gmail.com",
      heroTitle: "Pequeñas gotas, grandes cambios de vida.",
      heroDesc: "Acompañamos a niñas, niños y jóvenes en situación de vulnerabilidad con educación con amor, estimulación temprana, nutrición saludable y talleres artísticos para construir un presente seguro y un futuro lleno de oportunidades.",
      mision: "Contribuir al bienestar y desarrollo integral de niños, niñas y jóvenes en situación de vulnerabilidad en el Ecuador, mediante acciones solidarias, estimulación temprana, acompañamiento educativo, alimentación balanceada y espacios de cuidado que fortalezcan sus capacidades afectivas, cognitivas y sociales con dignidad y amor.",
      vision: "Ser una fundación referente a nivel nacional por su calidez humana, transparencia e impacto transformador en la vida de la niñez y la juventud, consolidando alianzas solidarias y comunidades empoderadas donde cada niño crezca en un entorno de respeto, inclusión, creatividad y esperanza infinita.",
      logo: MASTER_DATA.logo,
      heroPhoto: MASTER_DATA.images["fundacion_15.jpg"] || "assets/images/fundacion_15.jpg",
      aboutPhoto: MASTER_DATA.images["fundacion_01.jpg"] || "assets/images/fundacion_01.jpg",
      
      /* EQUIPO HUMANO PRECONFIGURADO CON LAS 4 ÁREAS REQUERIDAS */
      team: [
        {
          id: 1,
          name: "Jorge Guido Perez Mendoza",
          role: "Presidente Institucional",
          area: "Administrativo",
          desc: "Liderazgo, dirección estratégica y articulación comunitaria de la Fundación Gotitas del Rocío.",
          photo: MASTER_DATA.images["fundacion_04.jpg"] || "assets/images/fundacion_04.jpg"
        },
        {
          id: 2,
          name: "Lcda. Rocío Andrade Tacuri",
          role: "Coordinadora Pedagógica General",
          area: "Administrativo",
          desc: "Supervisión pedagógica, articulación de programas y seguimiento formativo.",
          photo: MASTER_DATA.images["fundacion_03.jpg"] || "assets/images/fundacion_03.jpg"
        },
        {
          id: 3,
          name: "Fernanda Pérez",
          role: "Gestión Administrativa y Proyectos",
          area: "Administrativo",
          desc: "Planificación operativa, gestión de convenios y seguimiento de proyectos.",
          photo: MASTER_DATA.images["fundacion_05.jpg"] || "assets/images/fundacion_05.jpg"
        },
        {
          id: 4,
          name: "Diana Morales",
          role: "Secretaría y Vinculación Comunitaria",
          area: "Administrativo",
          desc: "Atención a familias, registro de beneficiarios y enlace institucional.",
          photo: MASTER_DATA.images["fundacion_03.jpg"] || "assets/images/fundacion_03.jpg"
        },
        {
          id: 5,
          name: "Profe Joss",
          role: "Docente de Estimulación Temprana",
          area: "Docentes",
          desc: "Desarrollo psicomotriz, sensorial y cognitivo para niños de primera infancia.",
          photo: MASTER_DATA.images["fundacion_02.jpg"] || "assets/images/fundacion_02.jpg"
        },
        {
          id: 6,
          name: "Paola Carrillo",
          role: "Educadora y Animación Lúdica",
          area: "Docentes",
          desc: "Dirección de cuentacuentos, dinámicas expresivas y talleres de lectura.",
          photo: MASTER_DATA.images["fundacion_16.jpg"] || "assets/images/fundacion_16.jpg"
        },
        {
          id: 7,
          name: "Adriana Calderón",
          role: "Docente de Expresión Artística",
          area: "Docentes",
          desc: "Talleres de danza, psicomotricidad grupal y coreografías infantiles.",
          photo: MASTER_DATA.images["fundacion_13.jpg"] || "assets/images/fundacion_13.jpg"
        },
        {
          id: 8,
          name: "Cristina Cuzco",
          role: "Docente de Aprendizaje Creativo",
          area: "Docentes",
          desc: "Enseñanza con materiales didácticos, fomento de valores y convivencia.",
          photo: MASTER_DATA.images["fundacion_17.jpg"] || "assets/images/fundacion_17.jpg"
        },
        {
          id: 9,
          name: "Diana Yacelga",
          role: "Educadora de Rincón Fantasía",
          area: "Docentes",
          desc: "Teatro infantil, disfraces pedagógicos y estimulación del lenguaje.",
          photo: MASTER_DATA.images["fundacion_18.jpg"] || "assets/images/fundacion_18.jpg"
        },
        {
          id: 10,
          name: "Tania Tituaña",
          role: "Educadora Comunitaria",
          area: "Docentes",
          desc: "Acompañamiento escolar y facilitación de talleres lúdicos y de dibujo.",
          photo: MASTER_DATA.images["fundacion_06.jpg"] || "assets/images/fundacion_06.jpg"
        },
        {
          id: 11,
          name: "Sandra Chipantasi",
          role: "Espacios Seguros y Mantenimiento",
          area: "Servicio",
          desc: "Adecuación, higiene y acondicionamiento seguro de salones y áreas de juego.",
          photo: MASTER_DATA.images["fundacion_01.jpg"] || "assets/images/fundacion_01.jpg"
        },
        {
          id: 12,
          name: "Doris Morales",
          role: "Servicios Generales y Logística",
          area: "Servicio",
          desc: "Logística de materiales, apoyo en talleres y cuidado de las instalaciones.",
          photo: MASTER_DATA.images["fundacion_19.jpg"] || "assets/images/fundacion_19.jpg"
        },
        {
          id: 13,
          name: "Sofia Reyes",
          role: "Apoyo Operativo de Sedes",
          area: "Servicio",
          desc: "Mantenimiento preventivo, preparación de carpas y montaje de eventos.",
          photo: MASTER_DATA.images["fundacion_08.jpg"] || "assets/images/fundacion_08.jpg"
        },
        {
          id: 14,
          name: "Ana Chipantasi",
          role: "Auxiliar de Servicios Comunitarios",
          area: "Servicio",
          desc: "Asistencia integral en actividades de campo y soporte a docentes.",
          photo: MASTER_DATA.images["fundacion_10.jpg"] || "assets/images/fundacion_10.jpg"
        },
        {
          id: 15,
          name: "July Chamba",
          role: "Coordinadora de Catering y Nutrición",
          area: "Catering",
          desc: "Planificación de menús saludables, loncheras nutritivas e inocuidad alimentaria.",
          photo: MASTER_DATA.images["fundacion_09.jpg"] || "assets/images/fundacion_09.jpg"
        },
        {
          id: 16,
          name: "Jenny Shiguango",
          role: "Preparación de Alimentos y Comedor",
          area: "Catering",
          desc: "Elaboración de refrigerios nutritivos y servicio cariñoso en comedores infantiles.",
          photo: MASTER_DATA.images["fundacion_11.jpg"] || "assets/images/fundacion_11.jpg"
        },
        {
          id: 17,
          name: "Fanny",
          role: "Auxiliar de Cocina y Catering",
          area: "Catering",
          desc: "Manipulación responsable de alimentos y preparación de festejos comunitarios.",
          photo: MASTER_DATA.images["fundacion_12.jpg"] || "assets/images/fundacion_12.jpg"
        },
        {
          id: 18,
          name: "Cecy Calero",
          role: "Supervisión de Calidad Nutricional",
          area: "Catering",
          desc: "Control de higiene, hidratación y soporte en banquetes y eventos sociales.",
          photo: MASTER_DATA.images["fundacion_11.jpg"] || "assets/images/fundacion_11.jpg"
        }
      ],

      /* 23 FOTOGRAFÍAS REALES CONTEXTUALIZADAS */
      gallery: [
        { id: 1, file: "fundacion_15.jpg", cat: "eventos", span: "span-2 span-row-2", title: "Celebración y Gala Infantil", desc: "Niños beneficiarios vestidos con trajes de fantasía junto a sus educadoras." },
        { id: 2, file: "fundacion_01.jpg", cat: "equipo", span: "", title: "Taller de Fortalecimiento Institucional", desc: "Equipo de apoyo y docentes con su uniforme naranja en dinámicas de grupo." },
        { id: 3, file: "fundacion_02.jpg", cat: "material", span: "", title: "Alfombras de Estimulación Sensorial", desc: "Creación de tapetes de texturas para psicomotricidad y tacto infantil." },
        { id: 4, file: "fundacion_04.jpg", cat: "equipo", span: "", title: "Sesión Directiva con Guido Pérez", desc: "Reunión de coordinación institucional liderada por la presidencia." },
        { id: 5, file: "fundacion_16.jpg", cat: "eventos", span: "span-2", title: "Teatro Didáctico: El Cuento Viajero", desc: "Puesta en escena lúdica con escenografía de arcoíris y flores." },
        { id: 6, file: "fundacion_17.jpg", cat: "eventos", span: "", title: "Danza y Personajes de Fantasía", desc: "Docentes personificando al ave multicolor en animación infantil." },
        { id: 7, file: "fundacion_18.jpg", cat: "eventos", span: "", title: "Fantasía y Expresión Corporal", desc: "Cuentacuentos participativos en el rincón mágico de la fundación." },
        { id: 8, file: "fundacion_13.jpg", cat: "eventos", span: "", title: "Coreografía y Danza Tradicional", desc: "Presentación festiva en carpa comunitaria para las familias." },
        { id: 9, file: "fundacion_14.jpg", cat: "eventos", span: "", title: "Conducción y Animación con Valores", desc: "Educadoras guiando los juegos y concursos de integración." },
        { id: 10, file: "fundacion_20.jpg", cat: "material", span: "", title: "Árbol Didáctico Ecológico", desc: "Elaboración de recursos visuales con cartón y materiales reciclados." },
        { id: 11, file: "fundacion_21.jpg", cat: "material", span: "", title: "Diseño de Material Didáctico", desc: "Taller docente de creación de herramientas para el aula." },
        { id: 12, file: "fundacion_22.jpg", cat: "material", span: "", title: "Tapetes Numéricos en Foamy", desc: "Construcción de juegos lógicos y números coloridos para estimulación." },
        { id: 13, file: "fundacion_23.jpg", cat: "material", span: "", title: "Armado de Rincones de Aprendizaje", desc: "Ensamblaje seguro de estructuras pedagógicas con cartón y adhesivos." },
        { id: 14, file: "fundacion_06.jpg", cat: "talleres", span: "", title: "Capacitación Audiovisual Docente", desc: "Actualización continua en metodologías pedagógicas y cuidado infantil." },
        { id: 15, file: "fundacion_07.jpg", cat: "talleres", span: "", title: "Taller Formativo de Desarrollo Integral", desc: "Instrucción técnica para facilitadores y personal de acompañamiento." },
        { id: 16, file: "fundacion_08.jpg", cat: "talleres", span: "", title: "Jornada de Diálogo Pedagógico", desc: "Reflexión colectiva sobre las mejores prácticas de atención a la niñez." },
        { id: 17, file: "fundacion_09.jpg", cat: "talleres", span: "", title: "Nutrición y Loncheras Saludables", desc: "Presentación de carteleras educativas sobre alimentación balanceada." },
        { id: 18, file: "fundacion_03.jpg", cat: "equipo", span: "", title: "Reunión Virtual del Equipo Pedagógico", desc: "Coordinación remota de tareas educativas y evaluación periódica." },
        { id: 19, file: "fundacion_05.jpg", cat: "equipo", span: "", title: "Planificación Docente y de Apoyo", desc: "Seguimiento al cronograma de actividades con todas las facilitadoras." },
        { id: 20, file: "fundacion_10.jpg", cat: "equipo", span: "", title: "Dinámica de Integración y Empatía", desc: "Fortaleciendo la fraternidad y el espíritu solidario de la fundación." },
        { id: 21, file: "fundacion_11.jpg", cat: "equipo", span: "", title: "Compartir y Catering Institucional", desc: "Celebración y refrigerio compartido entre todas las áreas del equipo." },
        { id: 22, file: "fundacion_12.jpg", cat: "equipo", span: "", title: "Pastel Conmemorativo de la Fundación", desc: "Festejo de hitos y logros institucionales en favor de los niños." },
        { id: 23, file: "fundacion_19.jpg", cat: "equipo", span: "", title: "Liderazgo y Organización Operativa", desc: "Distribución de responsabilidades para talleres y eventos." }
      ]
    };

    /* GESTOR DE ESTADO PERSISTENTE EN LOCALSTORAGE */
    let appState = loadState();
    let currentTeamFilter = "Todos";
    let currentGalleryCat = "all";
    let currentLightboxIdx = 0;

    function loadState() {
      try {
        const stored = localStorage.getItem("gotitas_del_rocio_state_v2");
        if (stored) {
          const parsed = JSON.parse(stored);
          return { ...DEFAULT_APP_STATE, ...parsed };
        }
      } catch (e) {
        console.warn("Error cargando de localStorage:", e);
      }
      return structuredClone(DEFAULT_APP_STATE);
    }

    function saveState() {
      try {
        localStorage.setItem("gotitas_del_rocio_state_v2", JSON.stringify(appState));
        return true;
      } catch (e) {
        alert("Atención: El almacenamiento local está lleno. Para conservar tus cambios permanentemente, utiliza el botón 'Descargar HTML Actualizado'.");
        return false;
      }
    }

    /* OBTENER URL DE IMAGEN CON FALLBACK A BASE64 */
    function resolveImg(src) {
      if (!src) return "";
      if (src.startsWith("data:") || src.startsWith("http")) return src;
      // Buscar en imágenes maestras
      const filename = src.split("/").pop();
      if (MASTER_DATA.images[filename]) return MASTER_DATA.images[filename];
      return src;
    }

    /* RENDERIZADO COMPLETO DEL SITIO */
    function renderApp() {
      // 1. Logos
      const logoSrc = resolveImg(appState.logo);
      ["navLogo", "heroBadgeLogo", "footerLogo"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.src = logoSrc;
      });

      // 2. Textos principales y Presidente
      document.getElementById("presNameLabel").textContent = appState.president;
      document.getElementById("presAvatarLetter").textContent = appState.president
        .split(" ")
        .slice(0, 2)
        .map(w => w[0])
        .join("")
        .toUpperCase();

      document.getElementById("topPhoneText").textContent = "WhatsApp: " + formatPhone(appState.phone);
      document.getElementById("topEmailText").textContent = appState.email;
      document.getElementById("contactPhoneDisplay").textContent = formatPhone(appState.phone) + " (+593 " + appState.phone.replace(/^0/, "") + ")";
      document.getElementById("contactEmailDisplay").textContent = appState.email;

      // 3. WhatsApp Links
      const waUrl = "https://wa.me/593" + appState.phone.replace(/^0/, "").replace(/\\D/g, "");
      document.getElementById("navWaBtn").href = waUrl;
      document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => {
        const textParam = new URL(a.href).searchParams.get("text");
        a.href = waUrl + (textParam ? "?text=" + encodeURIComponent(textParam) : "");
      });

      // 4. Hero & Nosotros
      document.getElementById("heroMainPhoto").src = resolveImg(appState.heroPhoto);
      document.getElementById("aboutMainPhoto").src = resolveImg(appState.aboutPhoto);
      document.getElementById("avatarTrust1").src = resolveImg(MASTER_DATA.images["fundacion_15.jpg"] || "assets/images/fundacion_15.jpg");
      document.getElementById("avatarTrust2").src = resolveImg(MASTER_DATA.images["fundacion_01.jpg"] || "assets/images/fundacion_01.jpg");
      document.getElementById("avatarTrust3").src = resolveImg(MASTER_DATA.images["fundacion_02.jpg"] || "assets/images/fundacion_02.jpg");

      document.getElementById("pillarPhoto1").src = resolveImg(MASTER_DATA.images["fundacion_02.jpg"] || "assets/images/fundacion_02.jpg");
      document.getElementById("pillarPhoto2").src = resolveImg(MASTER_DATA.images["fundacion_22.jpg"] || "assets/images/fundacion_22.jpg");
      document.getElementById("pillarPhoto3").src = resolveImg(MASTER_DATA.images["fundacion_16.jpg"] || "assets/images/fundacion_16.jpg");

      // Misión y Visión
      document.getElementById("misionText").textContent = appState.mision;
      document.getElementById("visionText").textContent = appState.vision;

      // 5. Renderizar Equipo Humano
      renderTeam();

      // 6. Renderizar Galería
      renderGallery();

      // Año en footer
      document.getElementById("currentYear").textContent = new Date().getFullYear();
    }

    function formatPhone(p) {
      const clean = p.replace(/\\D/g, "");
      if (clean.length === 10) {
        return clean.slice(0, 3) + " " + clean.slice(3, 6) + " " + clean.slice(6);
      }
      return p;
    }

    /* RENDER EQUIPO HUMANO (FILTRABLE POR ÁREA) */
    function renderTeam() {
      const container = document.getElementById("teamContainer");
      const filtered = appState.team.filter(p => currentTeamFilter === "Todos" || p.area === currentTeamFilter);

      const areaBadgeClasses = {
        "Administrativo": "badge-adm",
        "Docentes": "badge-doc",
        "Servicio": "badge-ser",
        "Catering": "badge-cat"
      };

      container.innerHTML = filtered.map(p => \`
        <article class="person-card">
          <div class="person-photo-wrap">
            <img src="\${resolveImg(p.photo)}" alt="\${escapeHtml(p.name)}" loading="lazy">
            <span class="person-area-badge \${areaBadgeClasses[p.area] || 'badge-adm'}">\${escapeHtml(p.area)}</span>
          </div>
          <div class="person-info">
            <div class="person-role">\${escapeHtml(p.role)}</div>
            <h3 class="person-name">\${escapeHtml(p.name)}</h3>
            <p class="person-desc">\${escapeHtml(p.desc)}</p>
          </div>
        </article>
      \`).join("");
    }

    /* RENDER GALERÍA DE FOTOS REALES */
    function renderGallery() {
      const container = document.getElementById("galleryGrid");
      const filtered = appState.gallery.filter(g => currentGalleryCat === "all" || g.cat === currentGalleryCat);

      container.innerHTML = filtered.map((g, i) => \`
        <div class="gallery-item \${g.span || ''}" data-gallery-idx="\${i}">
          <img src="\${resolveImg(MASTER_DATA.images[g.file] || g.file)}" alt="\${escapeHtml(g.title)}" loading="lazy">
          <div class="gallery-overlay">
            <h4>\${escapeHtml(g.title)}</h4>
            <p>\${escapeHtml(g.desc)}</p>
          </div>
          <div class="gallery-zoom-btn">⤢</div>
        </div>
      \`).join("");
    }

    /* FILTROS DE EQUIPO */
    document.getElementById("teamFilterTabs").addEventListener("click", e => {
      const btn = e.target.closest(".team-tab-btn");
      if (!btn) return;
      document.querySelectorAll(".team-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTeamFilter = btn.dataset.filter;
      renderTeam();
    });

    /* FILTROS DE GALERÍA */
    document.getElementById("galleryFilterTabs").addEventListener("click", e => {
      const btn = e.target.closest(".gallery-filter-btn");
      if (!btn) return;
      document.querySelectorAll(".gallery-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentGalleryCat = btn.dataset.cat;
      renderGallery();
    });

    /* LIGHTBOX / VISOR DE FOTOS */
    const lightbox = document.getElementById("lightboxModal");
    document.getElementById("galleryGrid").addEventListener("click", e => {
      const item = e.target.closest(".gallery-item");
      if (!item) return;
      const idx = parseInt(item.dataset.galleryIdx, 10);
      openLightbox(idx);
    });

    function openLightbox(idx) {
      const filtered = appState.gallery.filter(g => currentGalleryCat === "all" || g.cat === currentGalleryCat);
      if (idx < 0 || idx >= filtered.length) return;
      currentLightboxIdx = idx;
      const g = filtered[idx];
      document.getElementById("lightboxImg").src = resolveImg(MASTER_DATA.images[g.file] || g.file);
      document.getElementById("lightboxTitle").textContent = g.title;
      document.getElementById("lightboxDesc").textContent = g.desc;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.getElementById("lightboxPrev").addEventListener("click", () => {
      const filtered = appState.gallery.filter(g => currentGalleryCat === "all" || g.cat === currentGalleryCat);
      openLightbox((currentLightboxIdx - 1 + filtered.length) % filtered.length);
    });
    document.getElementById("lightboxNext").addEventListener("click", () => {
      const filtered = appState.gallery.filter(g => currentGalleryCat === "all" || g.cat === currentGalleryCat);
      openLightbox((currentLightboxIdx + 1) % filtered.length);
    });
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        closeLightbox();
        closeAdmin();
      }
      if (lightbox.classList.contains("open")) {
        const filtered = appState.gallery.filter(g => currentGalleryCat === "all" || g.cat === currentGalleryCat);
        if (e.key === "ArrowLeft") openLightbox((currentLightboxIdx - 1 + filtered.length) % filtered.length);
        if (e.key === "ArrowRight") openLightbox((currentLightboxIdx + 1) % filtered.length);
      }
    });

    /* FORMULARIO DE CONTACTO / WHATSAPP */
    document.getElementById("contactForm").addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("formName").value.trim();
      const email = document.getElementById("formEmail").value.trim() || "No especificado";
      const topic = document.getElementById("formTopic").value;
      const msg = document.getElementById("formMessage").value.trim();

      const text = \`¡Hola Fundación Gotitas del Rocío!
Mi nombre es: \${name}
Correo de contacto: \${email}
Motivo: \${topic}

Mensaje:
\${msg}\`;

      const waPhone = "593" + appState.phone.replace(/^0/, "").replace(/\\D/g, "");
      const url = "https://wa.me/" + waPhone + "?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener,noreferrer");
    });

    /* MENÚ MÓVIL */
    document.getElementById("menuToggle").addEventListener("click", () => {
      document.getElementById("navLinks").classList.toggle("mobile-open");
    });
    document.querySelectorAll("#navLinks a").forEach(a => {
      a.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("mobile-open");
      });
    });

    /* PANEL DE ADMINISTRACIÓN / EDITOR */
    const adminModal = document.getElementById("adminModal");
    function openAdmin() {
      fillAdminForm();
      adminModal.classList.add("open");
      adminModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function closeAdmin() {
      adminModal.classList.remove("open");
      adminModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    document.getElementById("openAdminBtn").addEventListener("click", openAdmin);
    document.getElementById("closeAdminBtn").addEventListener("click", closeAdmin);
    adminModal.addEventListener("click", e => {
      if (e.target === adminModal) closeAdmin();
    });

    // Pestañas del admin
    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
      });
    });

    function fillAdminForm() {
      document.getElementById("adminPresName").value = appState.president;
      document.getElementById("adminPhone").value = appState.phone;
      document.getElementById("adminEmail").value = appState.email;
      document.getElementById("adminHeroTitle").value = appState.heroTitle;
      document.getElementById("adminMisionText").value = appState.mision;
      document.getElementById("adminVisionText").value = appState.vision;
      renderAdminTeamList();
      renderAdminGalleryList();
    }

    function renderAdminTeamList() {
      const list = document.getElementById("adminTeamList");
      list.innerHTML = appState.team.map((p, i) => \`
        <div class="admin-card-row">
          <div>
            <img src="\${resolveImg(p.photo)}" style="width:50px;height:50px;border-radius:10px;object-fit:cover;">
          </div>
          <div>
            <input data-team-idx="\${i}" data-field="name" value="\${escapeHtml(p.name)}" placeholder="Nombre">
          </div>
          <div>
            <input data-team-idx="\${i}" data-field="role" value="\${escapeHtml(p.role)}" placeholder="Cargo">
          </div>
          <div>
            <select data-team-idx="\${i}" data-field="area">
              <option \${p.area === 'Administrativo' ? 'selected' : ''}>Administrativo</option>
              <option \${p.area === 'Docentes' ? 'selected' : ''}>Docentes</option>
              <option \${p.area === 'Servicio' ? 'selected' : ''}>Servicio</option>
              <option \${p.area === 'Catering' ? 'selected' : ''}>Catering</option>
            </select>
          </div>
          <div>
            <button class="btn btn-sm" style="background:#fee2e2;color:#ef4444;padding:6px 10px" data-del-person="\${i}">Eliminar</button>
          </div>
        </div>
      \`).join("");
    }

    function renderAdminGalleryList() {
      const list = document.getElementById("adminGalleryList");
      list.innerHTML = appState.gallery.map((g, i) => \`
        <div class="admin-card-row">
          <div>
            <img src="\${resolveImg(MASTER_DATA.images[g.file] || g.file)}" style="width:50px;height:50px;border-radius:10px;object-fit:cover;">
          </div>
          <div style="grid-column: span 2">
            <input data-gallery-idx="\${i}" data-field="title" value="\${escapeHtml(g.title)}" placeholder="Título">
          </div>
          <div>
            <select data-gallery-idx="\${i}" data-field="cat">
              <option value="eventos" \${g.cat === 'eventos' ? 'selected' : ''}>Eventos</option>
              <option value="material" \${g.cat === 'material' ? 'selected' : ''}>Material</option>
              <option value="talleres" \${g.cat === 'talleres' ? 'selected' : ''}>Talleres</option>
              <option value="equipo" \${g.cat === 'equipo' ? 'selected' : ''}>Equipo</option>
            </select>
          </div>
          <div>
            <button class="btn btn-sm" style="background:#fee2e2;color:#ef4444;padding:6px 10px" data-del-gallery="\${i}">Eliminar</button>
          </div>
        </div>
      \`).join("");
    }

    // Agregar nuevo integrante
    document.getElementById("adminAddPersonBtn").addEventListener("click", () => {
      appState.team.push({
        id: Date.now(),
        name: "Nuevo Integrante",
        role: "Docente / Apoyo",
        area: "Docentes",
        desc: "Colaborador comprometido con los niños de la Fundación Gotitas del Rocío.",
        photo: MASTER_DATA.images["fundacion_01.jpg"] || "assets/images/fundacion_01.jpg"
      });
      renderAdminTeamList();
    });

    // Agregar foto a galería
    document.getElementById("adminAddGalleryBtn").addEventListener("click", () => {
      appState.gallery.push({
        id: Date.now(),
        file: "fundacion_15.jpg",
        cat: "eventos",
        span: "",
        title: "Nueva Actividad Comunitaria",
        desc: "Actividad participativa con la niñez y las familias de la fundación."
      });
      renderAdminGalleryList();
    });

    // Delegación de inputs de personas
    document.getElementById("adminTeamList").addEventListener("input", e => {
      const idx = e.target.dataset.teamIdx;
      const field = e.target.dataset.field;
      if (idx !== undefined && field) {
        appState.team[idx][field] = e.target.value;
      }
    });

    document.getElementById("adminTeamList").addEventListener("click", e => {
      const delBtn = e.target.closest("[data-del-person]");
      if (delBtn) {
        const idx = parseInt(delBtn.dataset.delPerson, 10);
        appState.team.splice(idx, 1);
        renderAdminTeamList();
      }
    });

    // Delegación de inputs de galería
    document.getElementById("adminGalleryList").addEventListener("input", e => {
      const idx = e.target.dataset.galleryIdx;
      const field = e.target.dataset.field;
      if (idx !== undefined && field) {
        appState.gallery[idx][field] = e.target.value;
      }
    });

    document.getElementById("adminGalleryList").addEventListener("click", e => {
      const delBtn = e.target.closest("[data-del-gallery]");
      if (delBtn) {
        const idx = parseInt(delBtn.dataset.delGallery, 10);
        appState.gallery.splice(idx, 1);
        renderAdminGalleryList();
      }
    });

    // Compresión y lectura de archivos de imagen subidos
    function readImageAsDataUrl(file) {
      return new Promise((resolve, reject) => {
        if (!file) return resolve(null);
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const max = 1200;
            const scale = Math.min(1, max / Math.max(img.width, img.height));
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", 0.82));
          };
          img.onerror = reject;
          img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    // Guardar cambios del admin
    document.getElementById("adminSaveBtn").addEventListener("click", async () => {
      appState.president = document.getElementById("adminPresName").value.trim() || DEFAULT_APP_STATE.president;
      appState.phone = document.getElementById("adminPhone").value.trim() || DEFAULT_APP_STATE.phone;
      appState.email = document.getElementById("adminEmail").value.trim() || DEFAULT_APP_STATE.email;
      appState.heroTitle = document.getElementById("adminHeroTitle").value.trim() || DEFAULT_APP_STATE.heroTitle;
      appState.mision = document.getElementById("adminMisionText").value.trim() || DEFAULT_APP_STATE.mision;
      appState.vision = document.getElementById("adminVisionText").value.trim() || DEFAULT_APP_STATE.vision;

      // Subidas de archivos
      const logoFile = document.getElementById("adminLogoUpload").files[0];
      if (logoFile) {
        const b64 = await readImageAsDataUrl(logoFile);
        if (b64) appState.logo = b64;
      }

      const heroFile = document.getElementById("adminHeroPhotoUpload").files[0];
      if (heroFile) {
        const b64 = await readImageAsDataUrl(heroFile);
        if (b64) appState.heroPhoto = b64;
      }

      const aboutFile = document.getElementById("adminAboutPhotoUpload").files[0];
      if (aboutFile) {
        const b64 = await readImageAsDataUrl(aboutFile);
        if (b64) appState.aboutPhoto = b64;
      }

      saveState();
      renderApp();
      closeAdmin();
      alert("✓ ¡Cambios guardados exitosamente!");
    });

    // Restablecer valores
    document.getElementById("adminResetBtn").addEventListener("click", () => {
      if (confirm("¿Deseas restablecer el sitio a su contenido original?")) {
        appState = structuredClone(DEFAULT_APP_STATE);
        localStorage.removeItem("gotitas_del_rocio_state_v2");
        renderApp();
        fillAdminForm();
        alert("Contenido restablecido al estado original.");
      }
    });

    /* DESCARGAR SITIO WEB COMPLETO EN HTML AUTÓNOMO */
    function downloadCompleteHtml() {
      // Tomar el HTML actual del documento
      const rawHtml = document.documentElement.outerHTML;
      // Inyectar el estado actualizado en DEFAULT_APP_STATE para que al abrirlo tenga los cambios
      const stateMarker = 'const DEFAULT_APP_STATE = ';
      const startPos = rawHtml.indexOf(stateMarker);
      let outputHtml = rawHtml;
      
      if (startPos !== -1) {
        const endPos = rawHtml.indexOf(';\\n    let appState = loadState();', startPos);
        if (endPos !== -1) {
          const serializedState = JSON.stringify(appState, null, 2);
          outputHtml = rawHtml.slice(0, startPos + stateMarker.length) + serializedState + rawHtml.slice(endPos);
        }
      }

      const blob = new Blob(["<!DOCTYPE html>\\n" + outputHtml], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "fundacion-gotitas-del-rocio-oficial.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }

    document.getElementById("topDownloadBtn").addEventListener("click", downloadCompleteHtml);
    document.getElementById("heroDownloadBtn").addEventListener("click", downloadCompleteHtml);
    document.getElementById("adminDownloadHtmlBtn").addEventListener("click", downloadCompleteHtml);

    function escapeHtml(str) {
      if (!str) return "";
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    // Inicialización al cargar la página
    renderApp();
  </script>
</body>
</html>`;

fs.writeFileSync(path.resolve('index.html'), html, 'utf8');
console.log('Successfully generated index.html. File size:', (fs.statSync('index.html').size / 1024 / 1024).toFixed(2), 'MB');

// ── Conquistas e Badges ──

export const CONQUISTAS = [
  // ── Primeiras conquistas ──
  { id: 'first-steps', title: 'Primeiros Passos', description: 'Completaste o teu primeiro módulo', icon: '👣', xp: 50, category: 'início', badge: 'bronze', criteria: { type: 'modules_completed', value: 1 } },
  { id: 'first-quiz', title: 'Primeiro Quiz', description: 'Completaste o teu primeiro quiz', icon: '🧩', xp: 30, category: 'início', badge: 'bronze', criteria: { type: 'quizzes_completed', value: 1 } },
  { id: 'first-exercise', title: 'Mãos à Obra', description: 'Completaste o teu primeiro exercício', icon: '⚡', xp: 40, category: 'início', badge: 'bronze', criteria: { type: 'exercises_completed', value: 1 } },
  { id: 'first-lab', title: 'Primeiro Lab', description: 'Completaste o teu primeiro laboratório', icon: '🔬', xp: 75, category: 'início', badge: 'prata', criteria: { type: 'labs_completed', value: 1 } },

  // ── Fases ──
  { id: 'first-network', title: 'Primeira Rede', description: 'Completaste a Fase de Redes', icon: '🌐', xp: 200, category: 'fases', badge: 'prata', criteria: { type: 'phase_completed', value: 'redes' } },
  { id: 'first-linux', title: 'Primeiro Linux', description: 'Completaste a Fase de Linux', icon: '🐧', xp: 200, category: 'fases', badge: 'prata', criteria: { type: 'phase_completed', value: 'linux' } },
  { id: 'kali-user', title: 'Kali User', description: 'Completaste a Fase Kali Linux', icon: '⚔️', xp: 300, category: 'fases', badge: 'ouro', criteria: { type: 'phase_completed', value: 'kali' } },
  { id: 'web-hunter', title: 'Web Hunter', description: 'Completaste a Fase Web Security', icon: '🕸️', xp: 350, category: 'fases', badge: 'ouro', criteria: { type: 'phase_completed', value: 'web' } },
  { id: 'mobile-tester', title: 'Mobile Tester', description: 'Completaste a Fase Mobile Security', icon: '📱', xp: 350, category: 'fases', badge: 'ouro', criteria: { type: 'phase_completed', value: 'mobile' } },
  { id: 'elite-hacker', title: 'Elite Hacker', description: 'Completaste TODAS as fases da plataforma', icon: '🔴', xp: 1000, category: 'fases', badge: 'elite', criteria: { type: 'all_phases_completed', value: true } },

  // ── Ferramentas ──
  { id: 'first-scan', title: 'Primeiro Scan', description: 'Realizaste o teu primeiro scan com Nmap', icon: '🔍', xp: 100, category: 'ferramentas', badge: 'prata', criteria: { type: 'exercise_completed', value: 'ex-nmap-lab' } },
  { id: 'burp-master', title: 'Burp Master', description: 'Usaste o Burp Suite para interceptar tráfego', icon: '🔀', xp: 100, category: 'ferramentas', badge: 'prata', criteria: { type: 'exercise_completed', value: 'ex-burp-dvwa' } },

  // ── Relatórios ──
  { id: 'first-report', title: 'Primeiro Relatório', description: 'Escreveste o teu primeiro relatório de vulnerabilidade', icon: '📝', xp: 150, category: 'profissional', badge: 'ouro', criteria: { type: 'exercise_completed', value: 'ex-relatorio' } },

  // ── Consistência ──
  { id: 'streak-3', title: 'Em Chamas', description: '3 dias consecutivos de estudo', icon: '🔥', xp: 75, category: 'consistência', badge: 'bronze', criteria: { type: 'streak', value: 3 } },
  { id: 'streak-7', title: 'Uma Semana Sólida', description: '7 dias consecutivos de estudo', icon: '💪', xp: 150, category: 'consistência', badge: 'prata', criteria: { type: 'streak', value: 7 } },
  { id: 'streak-30', title: 'Dedicação Total', description: '30 dias consecutivos de estudo', icon: '👑', xp: 500, category: 'consistência', badge: 'ouro', criteria: { type: 'streak', value: 30 } },

  // ── XP ──
  { id: 'xp-500', title: 'Aprendiz', description: 'Acumulaste 500 XP', icon: '⭐', xp: 0, category: 'xp', badge: 'bronze', criteria: { type: 'total_xp', value: 500 } },
  { id: 'xp-2000', title: 'Hacker em Crescimento', description: 'Acumulaste 2000 XP', icon: '🌟', xp: 0, category: 'xp', badge: 'prata', criteria: { type: 'total_xp', value: 2000 } },
  { id: 'xp-5000', title: 'Expert', description: 'Acumulaste 5000 XP', icon: '💫', xp: 0, category: 'xp', badge: 'ouro', criteria: { type: 'total_xp', value: 5000 } },
]

export const BADGE_LEVELS = {
  bronze: { label: 'Bronze', color: '#cd7f32', shadow: 'rgba(205, 127, 50, 0.4)' },
  prata: { label: 'Prata', color: '#c0c0c0', shadow: 'rgba(192, 192, 192, 0.4)' },
  ouro: { label: 'Ouro', color: '#ffd700', shadow: 'rgba(255, 215, 0, 0.5)' },
  elite: { label: 'Elite', color: '#00FF88', shadow: 'rgba(0, 255, 136, 0.6)' },
}

export const CERTIFICATIONS = [
  { id: 'ejpt', title: 'eJPT', org: 'eLearnSecurity', level: 'Iniciante', description: 'Entry-level Penetration Testing. Ideal como primeira certificação prática.', color: '#00FF88', prep: ['Fase 1-3 desta plataforma', 'TryHackMe paths', 'INE free course'] },
  { id: 'security-plus', title: 'CompTIA Security+', org: 'CompTIA', level: 'Iniciante-Intermédio', description: 'Certificação de segurança mais reconhecida globalmente. Exame teórico e prático.', color: '#FF0000', prep: ['Fases 1-5 desta plataforma', 'Professor Messer (YouTube)', 'CompTIA official study guide'] },
  { id: 'ceh', title: 'CEH', org: 'EC-Council', level: 'Intermédio', description: 'Certified Ethical Hacker. Reconhecida por empresas e governos. Foco em metodologia.', color: '#00BFFF', prep: ['Todas as fases desta plataforma', 'EC-Council courseware', 'iLabs practice'] },
  { id: 'oscp', title: 'OSCP', org: 'OffSec', level: 'Avançado', description: 'Offensive Security Certified Professional. A mais respeitada cert de pentesting. Exame de 24h hands-on.', color: '#FF4D4D', prep: ['Fase 7 desta plataforma', 'HackTheBox + TryHackMe', 'PWK course', 'Mínimo 6 meses de prática'] },
  { id: 'cpts', title: 'CPTS', org: 'HackTheBox', level: 'Avançado', description: 'Certified Penetration Testing Specialist. Nova certificação HTB com exame prático de alta qualidade.', color: '#9B59B6', prep: ['HTB Academy paths', 'Fase 7 desta plataforma', 'Prática em HTB machines'] },
]

// ── Recursos externos ──

export const RECURSOS = {
  livros: [
    {
      id: 'web-app-handbook',
      title: 'The Web Application Hacker\'s Handbook',
      authors: 'Stuttard & Pinto',
      description: 'A bíblia do Web Application Pentesting. Cobre todas as vulnerabilidades web com exemplos práticos detalhados.',
      level: 'Intermédio',
      icon: '📗',
      tags: ['Web', 'Pentesting', 'OWASP'],
      link: 'https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472'
    },
    {
      id: 'linux-hackers',
      title: 'Linux Basics for Hackers',
      authors: 'OccupyTheWeb',
      description: 'Aprende Linux com foco em hacking e segurança. Ideal para iniciantes que querem entrar no mundo do pentesting.',
      level: 'Iniciante',
      icon: '📘',
      tags: ['Linux', 'Terminal', 'Iniciante'],
      link: 'https://nostarch.com/linuxbasicsforhackers'
    },
    {
      id: 'black-hat-python',
      title: 'Black Hat Python',
      authors: 'Justin Seitz',
      description: 'Programação Python para hackers: sniffers, scanners, exploits, e ferramentas de hacking custom.',
      level: 'Avançado',
      icon: '📕',
      tags: ['Python', 'Programação', 'Ferramentas'],
      link: 'https://nostarch.com/black-hat-python2E'
    },
    {
      id: 'hacking-exposed',
      title: 'Hacking Exposed 7',
      authors: 'McClure, Scambray, Kurtz',
      description: 'Técnicas clássicas de hacking e contramedidas. Referência usada por profissionais há décadas.',
      level: 'Intermédio',
      icon: '📙',
      tags: ['Pentesting', 'Redes', 'Defesa'],
      link: 'https://www.mhprofessional.com/hacking-exposed-7-network-security-secrets-and-solutions-9780071780285-usa'
    },
  ],
  plataformas: [
    {
      id: 'tryhackme',
      title: 'TryHackMe',
      description: 'Plataforma gamificada de cibersegurança com salas guiadas. Perfeita para iniciantes. Tem percursos (paths) completos do zero ao avançado.',
      level: 'Todos os níveis',
      icon: '🎯',
      tags: ['Guiado', 'CTF', 'Iniciante'],
      link: 'https://tryhackme.com',
      free: true
    },
    {
      id: 'hackthebox',
      title: 'Hack The Box',
      description: 'Máquinas reais para explorar. Mais desafiante que TryHackMe. Comunidade enorme e write-ups detalhados. Tem também HackTheBox Academy com conteúdo estruturado.',
      level: 'Intermédio-Avançado',
      icon: '📦',
      tags: ['CTF', 'Máquinas', 'Comunidade'],
      link: 'https://hackthebox.com',
      free: true
    },
    {
      id: 'portswigger',
      title: 'PortSwigger Web Security Academy',
      description: 'A melhor plataforma gratuita de Web Application Security. Feita pelos criadores do Burp Suite. Labs práticos para cada vulnerabilidade OWASP.',
      level: 'Todos os níveis',
      icon: '🌐',
      tags: ['Web', 'Gratuito', 'Prático'],
      link: 'https://portswigger.net/web-security',
      free: true
    },
    {
      id: 'owasp-webgoat',
      title: 'OWASP WebGoat',
      description: 'Aplicação web insegura propositadamente para aprender segurança. Inclui lições interactivas sobre OWASP Top 10.',
      level: 'Iniciante-Intermédio',
      icon: '🐐',
      tags: ['OWASP', 'Lab', 'Gratuito'],
      link: 'https://owasp.org/www-project-webgoat/',
      free: true
    },
  ],
  videos: [
    {
      id: 'networkchuck',
      title: 'NetworkChuck',
      description: 'Canal no YouTube com conteúdo de redes, Linux, hacking e cloud. Altamente recomendado para iniciantes por ser divertido e prático.',
      icon: '☕',
      tags: ['YouTube', 'Redes', 'Linux', 'Hacking'],
      link: 'https://www.youtube.com/@NetworkChuck'
    },
    {
      id: 'john-hammond',
      title: 'John Hammond',
      description: 'CTF walkthroughs, análise de malware, e tutoriais de hacking. Conteúdo de alta qualidade técnica com excelentes explicações.',
      icon: '🔒',
      tags: ['YouTube', 'CTF', 'Malware', 'Avançado'],
      link: 'https://www.youtube.com/@_JohnHammond'
    },
    {
      id: 'david-bombal',
      title: 'David Bombal',
      description: 'Redes Cisco, Python para hacking, e entrevistas com profissionais de segurança. Excelente para certificações (CCNA, CEH).',
      icon: '🎓',
      tags: ['YouTube', 'Redes', 'Python', 'Certificações'],
      link: 'https://www.youtube.com/@davidbombal'
    },
    {
      id: 'ippsec',
      title: 'IppSec',
      description: 'Write-ups em vídeo de máquinas Hack The Box. O melhor canal para aprender pentesting real. Metodologia profissional em cada vídeo.',
      icon: '⚡',
      tags: ['YouTube', 'HTB', 'Pentesting', 'Avançado'],
      link: 'https://www.youtube.com/@ippsec'
    },
  ]
}

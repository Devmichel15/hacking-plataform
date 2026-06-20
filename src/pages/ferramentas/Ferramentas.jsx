import React from 'react'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Terminal, Shield, Eye, Globe, Zap } from 'lucide-react'

export const Ferramentas = () => {
  const tools = [
    {
      name: 'Nmap',
      category: 'Reconhecimento',
      desc: 'Network Mapper. Usado para descoberta de hosts e auditoria de segurança através do envio de pacotes brutos.',
      command: 'nmap -sV -O -p- 192.168.1.1',
      icon: <Globe className="text-neon" size={20} />,
      status: 'Padrão no Kali',
      labs: ['Metasploitable', 'DVWA']
    },
    {
      name: 'Wireshark',
      category: 'Análise de Rede',
      desc: 'Analisador de pacotes de rede interactivo. Permite capturar e inspecionar tráfego de rede em tempo real.',
      command: 'wireshark &',
      icon: <Eye className="text-info" size={20} />,
      status: 'Padrão no Kali',
      labs: ['Análise de HTTP/FTP']
    },
    {
      name: 'Burp Suite',
      category: 'Web Security',
      desc: 'Plataforma integrada para testes de segurança em aplicações web. Actua como um proxy HTTP interceptador.',
      command: 'burpsuite',
      icon: <Shield className="text-purple-400" size={20} />,
      status: 'Community Edition Grátis',
      labs: ['OWASP Juice Shop', 'PortSwigger Academy']
    },
    {
      name: 'Gobuster',
      category: 'Força Bruta',
      desc: 'Ferramenta para bruteforce de directórios, ficheiros e subdomínios em servidores web.',
      command: 'gobuster dir -u http://site.com -w wordlist.txt',
      icon: <Terminal className="text-warning" size={20} />,
      status: 'Instalável',
      labs: ['DVWA', 'TryHackMe']
    },
    {
      name: 'Nikto',
      category: 'Vulnerabilidades',
      desc: 'Scanner de vulnerabilidades web que testa servidores para itens perigosos e softwares desatualizados.',
      command: 'nikto -h http://site.com',
      icon: <Zap className="text-error" size={20} />,
      status: 'Padrão no Kali',
      labs: ['Metasploitable']
    }
  ]

  return (
    <div className="space-y-8 select-none p-4 md:p-0">
      {/* Banner */}
      <div className="glass-card p-8 border border-white/5 bg-gradient-to-r from-secondary via-card to-black">
        <h1 className="font-mono text-xl md:text-2xl font-extrabold tracking-wide text-text-main flex items-center gap-2">
          🔧 ARSENAL DE FERRAMENTAS
        </h1>
        <p className="text-xs text-text-muted mt-2 max-w-xl">
          Conhece as principais ferramentas utilizadas em Pentests profissionais e Cybersecurity.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Card key={tool.name} className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  {tool.icon}
                  <h3 className="font-mono text-sm font-bold text-text-main">{tool.name}</h3>
                </div>
                <span className="font-mono text-[9px] text-neon uppercase tracking-wider px-2 py-0.5 rounded bg-neon/10 border border-neon/20">
                  {tool.category}
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {tool.desc}
              </p>
              
              {/* Command block */}
              <div className="p-3 bg-black rounded border border-white/5 font-mono text-[10px] text-neon-dark select-all">
                {tool.command}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center justify-between">
              <span className="font-mono text-[9px] text-text-dim uppercase">
                STATUS: {tool.status}
              </span>
              <div className="flex gap-1.5">
                {tool.labs.map(lab => (
                  <span key={lab} className="font-mono text-[8px] text-text-muted border border-white/10 px-1.5 py-0.5 rounded">
                    {lab}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Ferramentas

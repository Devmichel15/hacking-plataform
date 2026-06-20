// ── Data layer: Roadmap completo HackerPath AO ──

export const ROADMAP = [
  {
    id: 'fundamentos',
    phase: 1,
    title: 'Fundamentos',
    icon: '🧠',
    color: '#00FF88',
    description: 'Base sólida para entender como funcionam computadores e a internet.',
    modules: [
      {
        id: 'fundamentos-internet',
        title: 'Como Funciona a Internet',
        duration: '2h',
        xp: 150,
        description: 'Compreende os protocolos e arquitectura que sustentam a internet moderna.',
        topics: [
          { id: 'cliente-servidor', title: 'Cliente e Servidor', content: 'O modelo cliente-servidor é a base de toda comunicação na internet. O cliente (browser, app) faz pedidos (requests) e o servidor responde com dados. Cada vez que abres um site, o teu browser é o cliente que pede ficheiros ao servidor do site.', type: 'theory' },
          { id: 'http', title: 'HTTP', content: 'HyperText Transfer Protocol é o protocolo que define como mensagens são formatadas e transmitidas. Usa métodos como GET (pedir dados), POST (enviar dados), PUT (actualizar), DELETE (apagar). Cada resposta tem um código de status: 200 OK, 404 Not Found, 500 Server Error.', type: 'theory' },
          { id: 'https', title: 'HTTPS', content: 'HTTPS é HTTP com uma camada de segurança (TLS/SSL). Os dados são encriptados durante a transmissão, impossibilitando que atacantes na rede interceptem informação sensível. O cadeado verde no browser indica HTTPS activo.', type: 'theory' },
          { id: 'dns', title: 'DNS', content: 'Domain Name System traduz nomes legíveis (google.com) em endereços IP (142.250.185.46). É como uma agenda telefónica da internet. Quando escreves um URL, o teu computador consulta servidores DNS para descobrir o IP do destino.', type: 'theory' },
          { id: 'ip', title: 'Endereços IP', content: 'Um endereço IP identifica unicamente um dispositivo na rede. IPv4 usa 4 octetos (ex: 192.168.1.1). IPv6 é mais longo para suportar mais dispositivos. IPs privados (192.168.x.x, 10.x.x.x) são usados em redes locais.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-ip-local', title: 'Identificar o teu IP local', description: 'Usa o comando ipconfig (Windows) ou ifconfig (Linux) para descobrir o teu endereço IP local e gateway.', type: 'exercise', xp: 25 },
          { id: 'ex-dns-sites', title: 'Descobrir DNS de sites', description: 'Usa nslookup google.com no terminal para descobrir os servidores DNS de diferentes sites.', type: 'exercise', xp: 25 },
        ],
        quiz: [
          { id: 'q1', question: 'O que é HTTPS?', options: ['HTTP com velocidade maior', 'HTTP com encriptação TLS/SSL', 'Um novo protocolo de internet', 'HTTP para servidores'], answer: 1 },
          { id: 'q2', question: 'Para que serve o DNS?', options: ['Encriptar dados', 'Aumentar velocidade', 'Traduzir domínios em IPs', 'Filtrar vírus'], answer: 2 },
          { id: 'q3', question: 'O que significa o código 404?', options: ['Servidor OK', 'Recurso não encontrado', 'Erro de servidor', 'Redirecionamento'], answer: 1 },
        ],
      },
      {
        id: 'fundamentos-arquitetura',
        title: 'Arquitetura Computacional',
        duration: '1h30',
        xp: 120,
        description: 'Entende como o hardware e sistema operativo gerem os recursos do computador.',
        topics: [
          { id: 'cpu', title: 'CPU', content: 'A Unidade Central de Processamento executa instruções dos programas. Cores múltiplos permitem paralelismo. A frequência (GHz) indica velocidade. Para hacking, CPUs mais rápidas beneficiam cracking de passwords e análise de dados.', type: 'theory' },
          { id: 'ram', title: 'RAM', content: 'Random Access Memory é memória volátil de acesso rápido. Armazena dados em uso activo. Ao fazer pentesting, ferramentas como Metasploit e Burp Suite consomem bastante RAM. Recomenda-se mínimo 8GB para laboratórios.', type: 'theory' },
          { id: 'disco', title: 'Disco e Armazenamento', content: 'HDD (mecânico) e SSD (estado sólido) armazenam dados persistentes. SSDs são mais rápidos para iniciar VMs. Em hacking, é importante compreender sistemas de ficheiros (ext4, NTFS, FAT32) e como dados são escritos/apagados.', type: 'theory' },
          { id: 'processos', title: 'Processos', content: 'Um processo é um programa em execução com o seu próprio espaço de memória. O sistema operativo gere múltiplos processos simultaneamente. Em Linux, usa ps aux ou top para ver processos activos. Em Windows, usa o Task Manager.', type: 'theory' },
          { id: 'threads', title: 'Threads', content: 'Threads são unidades de execução dentro de um processo. Um processo pode ter múltiplas threads a correr em paralelo. Ferramentas de hacking usam multi-threading para realizar scans e ataques mais rapidamente.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-recursos', title: 'Monitorizar recursos do sistema', description: 'Abre o monitor de recursos do teu sistema e identifica: qual processo consome mais CPU, qual usa mais RAM, e qual o total de memória disponível.', type: 'exercise', xp: 30 },
        ],
        quiz: [
          { id: 'q1', question: 'O que é RAM?', options: ['Memória persistente', 'Memória volátil de acesso rápido', 'Processador gráfico', 'Disco rígido'], answer: 1 },
          { id: 'q2', question: 'Qual a diferença entre processo e thread?', options: ['São iguais', 'Thread é mais lenta', 'Processo tem espaço de memória próprio; threads partilham-no', 'Processos são mais rápidos'], answer: 2 },
        ],
      },
    ]
  },
  {
    id: 'redes',
    phase: 2,
    title: 'Redes',
    icon: '🌐',
    color: '#00BFFF',
    description: 'Domina os conceitos de redes de computadores essenciais para qualquer hacker.',
    modules: [
      {
        id: 'redes-tipos',
        title: 'Tipos de Redes',
        duration: '1h30',
        xp: 130,
        description: 'Aprende os diferentes tipos de redes e as suas características.',
        topics: [
          { id: 'lan', title: 'LAN (Local Area Network)', content: 'Rede local que liga dispositivos num espaço físico limitado (casa, escritório). Alta velocidade, baixa latência. A maioria dos ataques internos (man-in-the-middle, ARP spoofing) ocorre em LANs. Switches gerem o tráfego interno.', type: 'theory' },
          { id: 'man', title: 'MAN (Metropolitan Area Network)', content: 'Rede metropolitana que cobre uma cidade ou campus universitário. Usa tecnologias como fibra óptica. Exemplos: redes de universidades angolanas, redes de operadoras de telecomunicações.', type: 'theory' },
          { id: 'wan', title: 'WAN (Wide Area Network)', content: 'Rede de área alargada que cobre grandes distâncias geográficas. A internet é o maior exemplo de WAN. Empresas angolanas usam WANs para ligar escritórios em diferentes províncias.', type: 'theory' },
          { id: 'vpn', title: 'VPN (Virtual Private Network)', content: 'Cria um túnel encriptado sobre uma rede pública (internet). Permite acesso seguro a redes privadas remotamente. Em hacking ético, VPNs são usadas para proteger identidade durante testes e aceder a plataformas como HackTheBox.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-rede-local', title: 'Mapear a rede local', description: 'Identifica o IP do teu router (gateway), a máscara de sub-rede e quantos dispositivos estão ligados à tua rede.', type: 'exercise', xp: 35 },
        ],
        quiz: [
          { id: 'q1', question: 'Qual o alcance de uma LAN?', options: ['Mundial', 'Nacional', 'Espaço físico limitado', 'Continental'], answer: 2 },
          { id: 'q2', question: 'Para que serve uma VPN?', options: ['Aumentar velocidade', 'Criar túnel encriptado', 'Gerir DNS', 'Monitorizar rede'], answer: 1 },
        ],
      },
      {
        id: 'redes-osi',
        title: 'Modelo OSI',
        duration: '2h',
        xp: 160,
        description: 'O modelo de referência que define como dados são transmitidos numa rede.',
        topics: [
          { id: 'osi-fisica', title: 'Camada 1 — Física', content: 'Transmissão de bits brutos por meio físico (cabos, ondas de rádio, fibra óptica). Define tensões, frequências e conectores. Ataques nesta camada incluem cortar cabos ou usar jammers de sinal WiFi.', type: 'theory' },
          { id: 'osi-enlace', title: 'Camada 2 — Enlace de Dados', content: 'Garante transferência confiável entre nós adjacentes. Usa endereços MAC. Protocolo Ethernet. Ataques: ARP Spoofing (falsificar tabela ARP para interceptar tráfego), MAC Flooding (sobrecarregar switches).', type: 'theory' },
          { id: 'osi-rede', title: 'Camada 3 — Rede', content: 'Responsável pelo endereçamento lógico (IP) e roteamento de pacotes. Routers operam nesta camada. Ataques: IP Spoofing (falsificar origem), ICMP attacks (ping of death), fragmentação maliciosa.', type: 'theory' },
          { id: 'osi-transporte', title: 'Camada 4 — Transporte', content: 'Controla fluxo e fiabilidade. TCP (confiável, com handshake) vs UDP (rápido, sem confirmação). Ataques: SYN Flood (overwhelm de conexões TCP), UDP Flood, Port Scanning.', type: 'theory' },
          { id: 'osi-sessao', title: 'Camada 5 — Sessão', content: 'Estabelece, gere e termina sessões entre aplicações. Ataques: Session Hijacking (roubar cookie de sessão), Session Fixation.', type: 'theory' },
          { id: 'osi-apresentacao', title: 'Camada 6 — Apresentação', content: 'Tradução, compressão e encriptação de dados. Formatos: JPEG, MP3, SSL/TLS. Ataques: SSL stripping (forçar downgrade para HTTP).', type: 'theory' },
          { id: 'osi-aplicacao', title: 'Camada 7 — Aplicação', content: 'Interface com o utilizador final. Protocolos: HTTP, HTTPS, DNS, FTP, SMTP. A maioria dos ataques web (XSS, SQLi, CSRF) ocorre nesta camada. É onde Burp Suite e proxies actuam.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-osi-packet', title: 'Mapear um pacote pelo modelo OSI', description: 'Quando fazes um pedido HTTP, mapeia cada camada OSI envolvida: desde o cabo físico até ao protocolo HTTP da aplicação.', type: 'exercise', xp: 40 },
        ],
        quiz: [
          { id: 'q1', question: 'Em que camada OSI actua um Switch?', options: ['Camada 3', 'Camada 1', 'Camada 2', 'Camada 4'], answer: 2 },
          { id: 'q2', question: 'O ataque ARP Spoofing actua em que camada?', options: ['Camada 7', 'Camada 4', 'Camada 1', 'Camada 2'], answer: 3 },
          { id: 'q3', question: 'Qual protocolo da Camada 4 é confiável?', options: ['UDP', 'IP', 'TCP', 'ARP'], answer: 2 },
        ],
      },
      {
        id: 'redes-tcpip',
        title: 'TCP/IP e Protocolos',
        duration: '2h',
        xp: 170,
        description: 'Aprofunda o protocolo TCP/IP e as suas ferramentas de diagnóstico.',
        topics: [
          { id: 'tcp', title: 'TCP — Transmission Control Protocol', content: 'Protocolo orientado à conexão com handshake de 3 vias (SYN → SYN-ACK → ACK). Garante entrega ordenada e sem erros. Usado por HTTP, HTTPS, FTP, SSH. O TCP handshake é o ponto de entrada para port scanning com Nmap.', type: 'theory' },
          { id: 'udp', title: 'UDP — User Datagram Protocol', content: 'Protocolo sem conexão, rápido mas não garante entrega. Usado em DNS, VoIP, jogos online, streaming. Em hacking, UDP scanning é mais difícil que TCP. Ferramentas como Nmap suportam UDP scanning com -sU.', type: 'theory' },
          { id: 'arp', title: 'ARP — Address Resolution Protocol', content: 'Resolve endereços IP em endereços MAC dentro de uma rede local. A tabela ARP é armazenada em cache. ARP Poisoning/Spoofing é um ataque clássico de Man-in-the-Middle em redes locais.', type: 'theory' },
          { id: 'icmp', title: 'ICMP — Internet Control Message Protocol', content: 'Usado para diagnóstico e controlo de rede. O comando ping usa ICMP. Traceroute usa ICMP TTL para mapear rotas. Firewalls frequentemente bloqueiam ICMP para esconder hosts.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-ping', title: 'Lab: Ping', description: 'Faz ping a google.com e ao teu router. Analisa o TTL e tempo de resposta. O que te diz o TTL sobre o sistema operativo remoto?', type: 'lab', xp: 35 },
          { id: 'ex-traceroute', title: 'Lab: Traceroute', description: 'Usa tracert (Windows) ou traceroute (Linux) para mapear o caminho até google.com. Quantos saltos (hops) existem?', type: 'lab', xp: 35 },
          { id: 'ex-netstat', title: 'Lab: Netstat', description: 'Usa netstat -an para ver todas as conexões activas e portos em escuta no teu sistema. Identifica portos suspeitos.', type: 'lab', xp: 35 },
        ],
        quiz: [
          { id: 'q1', question: 'Quantas mensagens tem o TCP handshake?', options: ['2', '3', '4', '1'], answer: 1 },
          { id: 'q2', question: 'Qual protocolo usa o comando ping?', options: ['TCP', 'UDP', 'ICMP', 'ARP'], answer: 2 },
        ],
      },
    ]
  },
  {
    id: 'linux',
    phase: 3,
    title: 'Linux',
    icon: '🐧',
    color: '#FFB800',
    description: 'Domina o sistema operativo preferido dos hackers e profissionais de segurança.',
    modules: [
      {
        id: 'linux-intro',
        title: 'Introdução ao Linux',
        duration: '2h',
        xp: 150,
        description: 'Compreende a estrutura do Linux e navega pelo sistema de ficheiros.',
        topics: [
          { id: 'diretorios', title: 'Estrutura de Directórios', content: 'Linux usa uma hierarquia de directórios começando em / (root). Directórios importantes: /etc (configurações), /home (utilizadores), /var (logs, dados variáveis), /tmp (temporários), /bin e /usr/bin (executáveis), /root (home do root).', type: 'theory' },
          { id: 'ficheiros', title: 'Sistema de Ficheiros', content: 'Tudo em Linux é um ficheiro: dispositivos, processos, sockets. Ext4 é o sistema de ficheiros mais comum. Ficheiros ocultos começam com ponto (.bashrc). Hard links e symbolic links permitem referenciar ficheiros de múltiplos locais.', type: 'theory' },
          { id: 'permissoes', title: 'Permissões', content: 'Cada ficheiro tem permissões para owner, group e others: r (read=4), w (write=2), x (execute=1). chmod 755 dá rwx ao owner, rx a todos. SUID bit (chmod u+s) executa com permissões do dono — vulnerabilidade clássica de privilege escalation.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-navegar', title: 'Navegar pelo sistema', description: 'Explora os directórios /etc, /var/log, /tmp e /home. Lista o conteúdo de cada um e descreve o que encontras.', type: 'exercise', xp: 30 },
        ],
        quiz: [
          { id: 'q1', question: 'Onde ficam os ficheiros de configuração no Linux?', options: ['/home', '/bin', '/etc', '/tmp'], answer: 2 },
          { id: 'q2', question: 'Que permissões dá chmod 777?', options: ['Só leitura', 'Leitura e escrita', 'Leitura, escrita e execução para todos', 'Execução apenas'], answer: 2 },
        ],
      },
      {
        id: 'linux-terminal',
        title: 'Domínio do Terminal',
        duration: '3h',
        xp: 200,
        description: 'Aprende os comandos essenciais para trabalhar como um profissional.',
        topics: [
          { id: 'cmd-ls', title: 'ls — Listar directório', content: 'ls -la mostra todos os ficheiros (incluindo ocultos) com permissões, dono e tamanho. ls -lh usa formato humano para tamanhos. ls -lt ordena por data de modificação. Combinação útil: ls -laht para ver tudo de forma clara.', type: 'theory' },
          { id: 'cmd-cd', title: 'cd — Navegar', content: 'cd /path vai para caminho absoluto. cd .. sobe um nível. cd ~ volta ao home. cd - volta ao directório anterior. cd / vai para o root. Dominar navegação é fundamental para velocidade no terminal.', type: 'theory' },
          { id: 'cmd-cat', title: 'cat, less, head, tail', content: 'cat ficheiro — mostra conteúdo completo. less ficheiro — paginado. head -n 20 — primeiras 20 linhas. tail -f — segue ficheiro em tempo real (útil para logs). cat /etc/passwd mostra utilizadores do sistema.', type: 'theory' },
          { id: 'cmd-grep', title: 'grep — Pesquisar texto', content: 'grep "padrão" ficheiro — pesquisa. grep -r — recursivo em directório. grep -i — case insensitive. grep -n — mostra números de linha. grep -v — exclui linhas. Combina com pipes: cat log.txt | grep "ERROR" | grep -v "404".', type: 'theory' },
          { id: 'cmd-chmod', title: 'chmod — Permissões', content: 'chmod 755 script.sh — rwxr-xr-x. chmod +x — adicionar execução. chmod 600 ssh_key — rw só para owner (obrigatório para SSH keys). chmod -R 755 dir — recursivo. Compreender permissões é crítico para privilege escalation.', type: 'theory' },
          { id: 'cmd-outros', title: 'Outros Comandos Essenciais', content: 'find / -name "*.conf" 2>/dev/null — encontrar ficheiros. ps aux — processos. kill -9 PID — matar processo. wget/curl — download. ssh user@ip — conexão remota. sudo — executar como root. which — localizar executável.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-pipeline', title: 'Desafio: Pipeline de comandos', description: 'Encontra todos os utilizadores no ficheiro /etc/passwd que usam bash como shell padrão, usando uma combinação de cat, grep e awk.', type: 'exercise', xp: 50 },
          { id: 'ex-admin', title: 'Desafio: Administração Linux', description: 'Cria um utilizador, define uma password, cria um directório para ele, e configura as permissões correctamente usando useradd, passwd e chmod.', type: 'exercise', xp: 50 },
        ],
        quiz: [
          { id: 'q1', question: 'Qual comando pesquisa texto em ficheiros?', options: ['find', 'cat', 'grep', 'ls'], answer: 2 },
          { id: 'q2', question: 'O que faz tail -f?', options: ['Apaga ficheiro', 'Mostra primeiras linhas', 'Segue ficheiro em tempo real', 'Copia ficheiro'], answer: 2 },
          { id: 'q3', question: 'Que permissão numérica representa rwxr-xr-x?', options: ['777', '644', '755', '600'], answer: 2 },
        ],
      },
    ]
  },
  {
    id: 'kali',
    phase: 4,
    title: 'Kali Linux',
    icon: '⚔️',
    color: '#FF4D4D',
    description: 'O sistema operativo dos profissionais de segurança ofensiva.',
    modules: [
      {
        id: 'kali-instalacao',
        title: 'Instalação e Configuração',
        duration: '2h',
        xp: 160,
        description: 'Configura o teu ambiente Kali Linux de forma profissional.',
        topics: [
          { id: 'virtualbox', title: 'VirtualBox', content: 'VirtualBox é gratuito e open-source. Permite correr Kali Linux como máquina virtual dentro do Windows. Download: virtualbox.org. Depois importa a ISO oficial do Kali (kali.org). Recomenda-se alocar mínimo 4GB RAM e 40GB disco à VM.', type: 'theory' },
          { id: 'vmware', title: 'VMware', content: 'VMware Workstation Pro (pago) ou VMware Player (gratuito). Melhor performance que VirtualBox. VMware vem com vmtools pré-instalado para melhor integração. Suporta snapshots para guardar estados do sistema antes de testes.', type: 'theory' },
          { id: 'dualboot', title: 'Dual Boot', content: 'Instalar Kali Linux ao lado do Windows no mesmo disco. Máxima performance pois usa hardware directamente. Processo: criar partição, fazer boot pela ISO, seleccionar instalação ao lado do Windows. ATENÇÃO: risco de perda de dados — faz backup primeiro.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-vm-setup', title: 'Configurar VM Kali', description: 'Instala VirtualBox, importa o Kali Linux e configura: 4GB RAM, rede em modo NAT. Faz o primeiro boot e actualiza o sistema com apt update && apt upgrade.', type: 'exercise', xp: 60 },
        ],
        quiz: [
          { id: 'q1', question: 'Qual a vantagem do Dual Boot vs VM?', options: ['Mais seguro', 'Mais fácil', 'Melhor performance', 'Mais barato'], answer: 2 },
        ],
      },
      {
        id: 'kali-android',
        title: 'Kali Linux no Android',
        duration: '1h30',
        xp: 140,
        description: 'Transforma o teu telemóvel Android num ambiente de pentesting.',
        topics: [
          { id: 'termux', title: 'Termux', content: 'Terminal Linux para Android sem root. Instala pacotes com pkg install nmap, python, etc. Útil para aprender Linux em qualquer lugar. Limitações: sem acesso a hardware raw (WiFi adapter), sem interfaces gráficas.', type: 'theory' },
          { id: 'userland', title: 'UserLAnd', content: 'Permite correr distribuições Linux completas (incluindo Kali) no Android sem root. Acesso a interface gráfica via VNC. Melhor que Termux para ambientes completos. Ideal para estudar em telemóvel.', type: 'theory' },
          { id: 'nethunter', title: 'Kali NetHunter', content: 'Versão oficial do Kali para Android. Requer root e hardware específico (Nexus, OnePlus). Suporta ataques WiFi, HID attacks, BadUSB. Para uso profissional em field operations. Não é para iniciantes.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-termux', title: 'Termux: Primeiros Passos', description: 'Instala Termux, actualiza os repositórios (pkg update), e instala: nmap, python, curl, git. Verifica as versões instaladas.', type: 'exercise', xp: 40 },
        ],
        quiz: [
          { id: 'q1', question: 'Qual opção Android NÃO requer root?', options: ['NetHunter', 'Termux', 'NetHunter Rootless', 'Todas requerem'], answer: 1 },
        ],
      },
      {
        id: 'kali-ferramentas',
        title: 'Ferramentas Essenciais',
        duration: '4h',
        xp: 250,
        description: 'Domina as ferramentas mais usadas em pentesting profissional.',
        topics: [
          { id: 'nmap', title: 'Nmap — Network Mapper', content: 'Ferramenta de descoberta de rede e auditoria de segurança. Comandos: nmap -sV -O target (detectar versões e OS), nmap -sC target (scripts padrão), nmap -p- target (todos os portos), nmap -A target (scan agressivo). Sempre usar em redes autorizadas.', type: 'theory' },
          { id: 'wireshark', title: 'Wireshark — Packet Analyser', content: 'Captura e analisa tráfego de rede em tempo real. Filtros úteis: http, dns, tcp.port==80. Permite ver passwords em texto claro em protocolos não encriptados (HTTP, FTP, Telnet). Essencial para compreender comunicações de rede.', type: 'theory' },
          { id: 'burpsuite', title: 'Burp Suite — Web Proxy', content: 'Proxy para interceptar e modificar tráfego HTTP/HTTPS. Funcionalidades: Proxy (interceptar), Repeater (reenviar pedidos), Intruder (fuzzing), Scanner (Community Edition limitado). A ferramenta mais usada em Web Application Pentesting.', type: 'theory' },
          { id: 'gobuster', title: 'Gobuster — Directory Bruteforce', content: 'Enumera directórios e ficheiros em servidores web. gobuster dir -u http://target -w /usr/share/wordlists/dirb/common.txt. Também enumera subdomínios (modo dns). Wordlists: SecLists no GitHub.', type: 'theory' },
          { id: 'nikto', title: 'Nikto — Web Vulnerability Scanner', content: 'Scanner de vulnerabilidades web. nikto -h http://target detecta: configurações inseguras, ficheiros sensíveis expostos, versões vulneráveis de software. Não é stealth — gera muito tráfego e é facilmente detectado por IDS.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-nmap-lab', title: 'Lab: Nmap no Metasploitable', description: 'Corre nmap -sV -O contra a VM Metasploitable. Identifica: OS, versões de serviços, portos abertos. Documenta tudo como num relatório real.', type: 'lab', xp: 70 },
          { id: 'ex-burp-dvwa', title: 'Lab: Burp Suite + DVWA', description: 'Configura o Burp Suite como proxy do teu browser. Intercepta um pedido de login no DVWA e modifica os parâmetros.', type: 'lab', xp: 70 },
        ],
        quiz: [
          { id: 'q1', question: 'Qual flag do Nmap detecta versões de serviços?', options: ['-O', '-sV', '-sC', '-A'], answer: 1 },
          { id: 'q2', question: 'Para que serve o Burp Suite Repeater?', options: ['Capturar pacotes', 'Reenviar e modificar pedidos HTTP', 'Bruteforce de passwords', 'Scan de vulnerabilidades'], answer: 1 },
        ],
      },
    ]
  },
  {
    id: 'web',
    phase: 5,
    title: 'Web Security',
    icon: '🕸️',
    color: '#9B59B6',
    description: 'Aprende a identificar e explorar vulnerabilidades em aplicações web.',
    modules: [
      {
        id: 'web-fundamentos',
        title: 'Como Funcionam os Websites',
        duration: '2h',
        xp: 160,
        description: 'Base técnica das tecnologias web modernas.',
        topics: [
          { id: 'html-css', title: 'HTML, CSS e JavaScript', content: 'HTML estrutura o conteúdo, CSS estiliza, JavaScript torna interactivo. Em pentesting, analisar o código fonte (Ctrl+U) pode revelar comentários com informação sensível, endpoints de API, tokens hardcoded, e lógica de validação do lado cliente (bypassável).', type: 'theory' },
          { id: 'apis', title: 'APIs e REST', content: 'Application Programming Interfaces permitem que sistemas comuniquem. REST usa HTTP methods (GET/POST/PUT/DELETE). APIs são alvos frequentes: autenticação fraca, autorização inadequada (IDOR), rate limiting ausente, respostas com dados excessivos.', type: 'theory' },
          { id: 'jwt', title: 'JWT — JSON Web Tokens', content: 'Tokens usados para autenticação stateless. Compostos por header.payload.signature em Base64. Vulnerabilidades: algoritmo none (sem verificação), weak secrets (crackáveis com john), confusão RS256/HS256. Usa jwt.io para inspecionar tokens.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-source', title: 'Análise de código fonte', description: 'Inspecciona o código fonte de 3 websites e procura: comentários, ficheiros JS expostos, variáveis de configuração, endpoints de API.', type: 'exercise', xp: 40 },
        ],
        quiz: [
          { id: 'q1', question: 'Um JWT tem quantas partes?', options: ['2', '4', '3', '1'], answer: 2 },
          { id: 'q2', question: 'O que é IDOR?', options: ['Injecção de código', 'Acesso directo a objectos sem autorização', 'Roubo de cookies', 'Ataque de força bruta'], answer: 1 },
        ],
      },
      {
        id: 'web-vulnerabilidades',
        title: 'OWASP Top 10 Vulnerabilidades',
        duration: '5h',
        xp: 350,
        description: 'As vulnerabilidades web mais críticas segundo a OWASP.',
        topics: [
          { id: 'xss', title: 'XSS — Cross-Site Scripting', content: 'Injector de código JavaScript malicioso em páginas web. Tipos: Reflected (via URL), Stored (persistente na BD), DOM-based. Payload básico: <script>alert(1)</script>. Impacto: roubo de cookies, keylogging, defacement. Mitigação: sanitização de input, Content Security Policy.', type: 'theory' },
          { id: 'sqli', title: 'SQL Injection', content: 'Injecção de código SQL malicioso em queries da base de dados. Payload básico: \' OR \'1\'=\'1. Pode levar a: bypass de autenticação, extracção de dados, execução de comandos OS (xp_cmdshell no MSSQL). Ferramentas: SQLMap. Mitigação: prepared statements.', type: 'theory' },
          { id: 'csrf', title: 'CSRF — Cross-Site Request Forgery', content: 'Força o browser da vítima a fazer pedidos autenticados sem o seu conhecimento. Exemplo: link malicioso que transfere dinheiro quando clicado por utilizador autenticado. Mitigação: CSRF tokens, SameSite cookies, verificação de Referer.', type: 'theory' },
          { id: 'idor', title: 'IDOR — Insecure Direct Object Reference', content: 'Acesso a recursos de outros utilizadores alterando referências directas (IDs). Exemplo: /profile?id=123 → trocar para id=124 e aceder ao perfil de outro utilizador. Mitigação: verificação de autorização no servidor para cada pedido.', type: 'theory' },
          { id: 'broken-auth', title: 'Broken Authentication', content: 'Falhas no mecanismo de autenticação: passwords fracas, sem limite de tentativas, sessões que não expiram, tokens previsíveis. Ataques: bruteforce, credential stuffing, session fixation. Mitigação: MFA, lockout policies, tokens seguros.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-xss-juice', title: 'Lab: XSS no OWASP Juice Shop', description: 'Encontra e explora pelo menos 2 vulnerabilidades XSS no OWASP Juice Shop. Documenta o payload, a localização e o impacto potencial.', type: 'lab', xp: 80 },
          { id: 'ex-sqli-dvwa', title: 'Lab: SQL Injection no DVWA', description: 'Realiza SQL Injection no DVWA em nível Low e Medium. Extrai os nomes e passwords da tabela de utilizadores.', type: 'lab', xp: 80 },
          { id: 'ex-portswigger', title: 'Lab: PortSwigger Academy', description: 'Completa pelo menos 3 labs gratuitos no PortSwigger Web Security Academy (XSS, SQLi, ou CSRF).', type: 'lab', xp: 100 },
        ],
        quiz: [
          { id: 'q1', question: 'Qual o payload mais básico de XSS?', options: ['SELECT * FROM users', '<script>alert(1)</script>', '\' OR \'1\'=\'1', 'DROP TABLE users'], answer: 1 },
          { id: 'q2', question: 'Como prevenir SQL Injection?', options: ['Firewall', 'Prepared Statements', 'Antivírus', 'HTTPS'], answer: 1 },
          { id: 'q3', question: 'CSRF força o utilizador a fazer pedidos...', options: ['Não autenticados', 'Encriptados', 'Autenticados sem o seu conhecimento', 'Mais rápidos'], answer: 2 },
        ],
      },
    ]
  },
  {
    id: 'mobile',
    phase: 6,
    title: 'Mobile Security',
    icon: '📱',
    color: '#E67E22',
    description: 'Segurança de aplicações móveis Android — o mercado mais relevante em Angola.',
    modules: [
      {
        id: 'mobile-fundamentos',
        title: 'Fundamentos Android',
        duration: '2h',
        xp: 180,
        description: 'Compreende a arquitectura Android e os seus mecanismos de segurança.',
        topics: [
          { id: 'android-arch', title: 'Arquitectura Android', content: 'Android é baseado em Linux. Camadas: kernel Linux, HAL, Android Runtime (ART), framework Java, aplicações. Cada app corre num sandbox isolado com UID único. Root permite acesso ao kernel, quebrando o isolamento.', type: 'theory' },
          { id: 'apk', title: 'APK — Android Package Kit', content: 'Ficheiro ZIP que contém: AndroidManifest.xml (permissões, actividades), classes.dex (código compilado), resources, assets, lib. Pode ser extraído e analisado com apktool. Reverse engineering de APKs é técnica fundamental em mobile pentesting.', type: 'theory' },
          { id: 'permissoes-android', title: 'Sistema de Permissões', content: 'Apps declaram permissões no Manifest. Permissões perigosas requerem consentimento explícito do utilizador (localização, câmara, contactos). Má configuração: permissões excessivas, exported activities sem protecção, providers acessíveis.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-apk-analyze', title: 'Analisar um APK', description: 'Usa apktool d app.apk para descompilar um APK. Analisa o AndroidManifest.xml e identifica: permissões declaradas, actividades exported, e providers.', type: 'exercise', xp: 60 },
        ],
        quiz: [
          { id: 'q1', question: 'O que contém o AndroidManifest.xml?', options: ['Código Java', 'Permissões e componentes da app', 'Imagens', 'Base de dados'], answer: 1 },
        ],
      },
      {
        id: 'mobile-security',
        title: 'Segurança e Ataques Mobile',
        duration: '3h',
        xp: 220,
        description: 'Técnicas de análise e exploração de vulnerabilidades mobile.',
        topics: [
          { id: 'reverse-eng', title: 'Reverse Engineering', content: 'Processo de analisar APKs para entender o seu funcionamento sem acesso ao código fonte. Ferramentas: apktool (decompile), jadx (Java decompiler), dex2jar. Permite encontrar: hardcoded API keys, lógica de validação bypassável, endpoints ocultos.', type: 'theory' },
          { id: 'traffic-mobile', title: 'Intercepção de Tráfego Mobile', content: 'Configurar proxy no Android para interceptar tráfego com Burp Suite. Instalar certificado do Burp para HTTPS. Desafio: certificate pinning (apps que verificam o certificado do servidor). Bypass: Frida, Objection.', type: 'theory' },
          { id: 'apps-vuln', title: 'Aplicações Vulneráveis de Treino', content: 'DIVA (Damn Insecure and Vulnerable App) — app Android especialmente criada com vulnerabilidades para praticar. InsecureBankv2 — simula app bancária vulnerável. OWASP GoatDroid. Estas apps são o teu laboratório seguro para mobile pentesting.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-diva', title: 'Lab: DIVA App', description: 'Instala o DIVA no Android Studio Emulator. Completa os primeiros 5 desafios: Insecure Logging, Hardcoding Issues, Insecure Data Storage.', type: 'lab', xp: 90 },
        ],
        quiz: [
          { id: 'q1', question: 'O que é certificate pinning?', options: ['Guardar certificados em ficheiro', 'App verifica o certificado do servidor', 'Encriptar comunicação', 'Gerar certificados'], answer: 1 },
        ],
      },
    ]
  },
  {
    id: 'advanced',
    phase: 7,
    title: 'Avançado',
    icon: '🔴',
    color: '#E74C3C',
    description: 'Tópicos avançados para pentesting profissional e preparação para certificações.',
    modules: [
      {
        id: 'advanced-ad',
        title: 'Active Directory',
        duration: '4h',
        xp: 300,
        description: 'Ataques e defesa em ambientes Windows corporativos.',
        topics: [
          { id: 'ad-intro', title: 'Introdução ao Active Directory', content: 'AD é o serviço de directório da Microsoft para gestão centralizada de utilizadores, grupos e políticas em redes Windows. Componentes: Domain Controller, Forest, Domain, OU. 90% das empresas Fortune 500 usam AD — entender ataques AD é essencial para pentesting corporativo.', type: 'theory' },
          { id: 'kerberoasting', title: 'Kerberoasting', content: 'Ataque que extrai tickets Kerberos de service accounts para cracking offline. Funcionamento: solicitar TGS para serviços, extrair hash, crackear com hashcat. Mitigação: passwords longas em service accounts, managed service accounts.', type: 'theory' },
          { id: 'pass-the-hash', title: 'Pass-the-Hash', content: 'Usa o hash NTLM de uma password directamente para autenticar sem conhecer a password em texto claro. Ferramentas: Mimikatz (dump de hashes), Impacket. Mitigação: Protected Users group, Credential Guard.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-ad-lab', title: 'Lab: TryHackMe AD', description: 'Completa as salas Attacktive Directory e Breaching AD no TryHackMe. São salas guiadas para praticar ataques AD de forma legal.', type: 'lab', xp: 100 },
        ],
        quiz: [
          { id: 'q1', question: 'O que é Pass-the-Hash?', options: ['Crackear passwords', 'Usar hash NTLM para autenticar', 'Interceptar tráfego', 'Injectar código'], answer: 1 },
        ],
      },
      {
        id: 'advanced-bugbounty',
        title: 'Bug Bounty',
        duration: '3h',
        xp: 250,
        description: 'Ganha dinheiro a encontrar vulnerabilidades de forma legal.',
        topics: [
          { id: 'plataformas-bb', title: 'Plataformas de Bug Bounty', content: 'HackerOne, Bugcrowd, Intigriti — plataformas onde empresas pagam por vulnerabilidades reportadas. Cada programa define o scope (o que podes testar), regras e recompensas. Empresas angolanas como operadoras de telecomunicações têm programas privados.', type: 'theory' },
          { id: 'metodologia-bb', title: 'Metodologia', content: 'Reconnaissance → Scanning → Exploitation → Reporting. Em Bug Bounty: sempre dentro do scope, documenta tudo, prova de conceito não destrutiva, relatório profissional. Triagem: P1 (crítico) a P5 (informativo).', type: 'theory' },
          { id: 'relatorio', title: 'Relatório Profissional', content: 'Um bom relatório contém: título claro, severidade, descrição, passos para reproduzir, prova de conceito (screenshots/vídeo), impacto, remediação sugerida. Qualidade do relatório afecta directamente a recompensa.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-relatorio', title: 'Escrever um Relatório', description: 'Com base num lab DVWA ou Juice Shop, escreve um relatório profissional de vulnerabilidade seguindo o template fornecido. Inclui screenshots e passos de reprodução.', type: 'exercise', xp: 80 },
        ],
        quiz: [
          { id: 'q1', question: 'O que define o scope num programa Bug Bounty?', options: ['O hacker', 'A plataforma', 'A empresa patrocinadora', 'A lei'], answer: 2 },
        ],
      },
      {
        id: 'advanced-cloud',
        title: 'Cloud e API Security',
        duration: '3h',
        xp: 270,
        description: 'Segurança em ambientes cloud e APIs modernas.',
        topics: [
          { id: 'cloud-misc', title: 'Misconfigurations Cloud', content: 'As vulnerabilidades cloud mais comuns são misconfigurations: S3 buckets públicos, roles IAM excessivamente permissivas, grupos de segurança abertos (0.0.0.0/0), secrets em variáveis de ambiente. Ferramentas: ScoutSuite, Prowler, Pacu.', type: 'theory' },
          { id: 'api-security', title: 'API Security — OWASP API Top 10', content: 'OWASP tem um Top 10 específico para APIs: Broken Object Level Authorization, Broken Authentication, Excessive Data Exposure, Rate Limiting, Function Level Authorization. APIs são a superfície de ataque mais crescente em 2024-2025.', type: 'theory' },
        ],
        exercises: [
          { id: 'ex-api-lab', title: 'Lab: API Security', description: 'Usa o crAPI (Completely Ridiculous API) — aplicação vulnerável para praticar ataques a APIs REST. Encontra pelo menos 3 vulnerabilidades.', type: 'lab', xp: 90 },
        ],
        quiz: [
          { id: 'q1', question: 'Qual a misconfiguration cloud mais comum?', options: ['VPN ausente', 'S3 buckets públicos', 'Sem antivírus', 'DNS errado'], answer: 1 },
        ],
      },
    ]
  }
]

export const PHASES = ROADMAP.map(p => ({
  id: p.id,
  phase: p.phase,
  title: p.title,
  icon: p.icon,
  color: p.color,
  description: p.description,
  totalModules: p.modules.length,
  totalXP: p.modules.reduce((acc, m) => acc + m.xp + m.exercises?.reduce((a, e) => a + (e.xp || 0), 0) + (m.quiz?.length * 15 || 0), 0)
}))

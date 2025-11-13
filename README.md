 Chaveiro Rápido & Seguro 24h – Site Institucional

## 📑 Descrição do Projeto
Este é um site institucional para o **Chaveiro Rápido & Seguro 24h**, desenvolvido para apresentar os serviços oferecidos, fornecer informações de contato e permitir que clientes solicitem orçamentos. O site é responsivo, moderno e otimizado para SEO básico.

---

## 🎯 Objetivo
- Apresentar serviços de chaveiro: cópia de chaves, abertura de portas, troca de fechaduras, manutenção.
- Fornecer informações de contato: telefone, WhatsApp, endereço.
- Permitir envio de orçamento/solicitação de atendimento via formulário.
- Mostrar a área de atendimento através do Google Maps.
- Implementar botão flutuante do WhatsApp para contato rápido.
- Geo-restrição simulada para restringir acesso a regiões não atendidas.

---

## ⚙️ Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3, JavaScript  
- **Frameworks e Bibliotecas:** Bootstrap 5, AOS.js (animações), Bootstrap Icons, FontAwesome  
- **Hospedagem (recomendada):** Hostinger, AWS Lightsail ou Locaweb  
- **Geo-restrição (simulada):** JavaScript  
- **Formulário de contato:** Simulação sem backend (pode ser integrado via EmailJS ou API própria)  

---

## 🏗️ Estrutura do Projeto
chaveiro-site/
├─ assets/
│ ├─ css/ # Arquivos CSS
│ ├─ js/ # Arquivos JavaScript
│ ├─ img/ # Imagens do site
├─ index.html # Página inicial
├─ servicos.html # Página de serviços
├─ sobre.html # Página sobre nós
├─ contato.html # Página de contato
├─ README.md # Este arquivo

yaml
Copiar código

---

## 📌 Funcionalidades
- **Formulário de contato/orçamento:** coleta nome, telefone, serviço desejado e mensagem.
- **Botão flutuante do WhatsApp:** permite contato direto.
- **Google Maps integrado:** mostra área de cobertura.
- **Geo-restrição simulada:** bloqueio de acesso via JavaScript.
- **SEO básico:** meta tags `title` e `description`.

---

## 🌐 Páginas
1. **Home:** apresentação do serviço, principais diferenciais e botão para contato.
2. **Serviços:** detalhamento de todos os serviços oferecidos.
3. **Sobre:** história da empresa, missão, valores e diferenciais.
4. **Contato:** telefone, WhatsApp, formulário e mapa da área de atendimento.

---

## 🚀 Como Rodar Localmente
1. Clone este repositório:

git clone <URL_DO_SEU_REPOSITORIO>
Abra a pasta chaveiro-site no VS Code ou outro editor.

Abra qualquer página .html em seu navegador para visualizar.

Caso queira simular envio de formulário, abra contato.html e teste.

📈 SEO e Performance
Meta tags configuradas em cada página.

Site responsivo para desktop e mobile.

Animações leves com AOS.js.

Google Maps integrado para mostrar área de atendimento.

Botão WhatsApp sempre visível em telas de qualquer tamanho.

🔒 Geo-restrição
Implementada via JavaScript simulando bloqueio de acesso para regiões não atendidas.

Em produção, recomenda-se usar Cloudflare ou APIs de geolocalização (ipapi, MaxMind GeoIP).


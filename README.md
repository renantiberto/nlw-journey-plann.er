<div align="center">
  <img src="public/logo-app.svg" alt="plann.er" width="200" />

  <h3>Planeje viagens com amigos de forma simples e organizada.</h3>

  <p>
    <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-5.2-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-5.3-646CFF?style=flat&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/Fastify-4.28-000000?style=flat&logo=fastify&logoColor=white" />
    <img src="https://img.shields.io/badge/Prisma-5.16-2D3748?style=flat&logo=prisma&logoColor=white" />
  </p>
</div>

---

## Sobre o projeto

**plann.er** é uma aplicação de planejamento de viagens desenvolvida durante a **NLW Journey** da [Rocketseat](https://rocketseat.com.br). Com ela, você cria uma viagem, convida amigos por e-mail, registra atividades com datas e horários, e organiza links importantes — tudo em um só lugar.

## Funcionalidades

- Criar uma viagem com destino e período de datas
- Convidar participantes por e-mail
- Cadastrar atividades com data e horário para cada dia da viagem
- Registrar links importantes (hospedagem, passagens, etc.)
- Visualizar lista de convidados confirmados

## Tecnologias

**Frontend**

| Categoria   | Tecnologia                              | Versão  |
| ----------- | --------------------------------------- | ------- |
| Framework   | React + TypeScript                      | 18.3 / 5.2 |
| Build       | Vite                                    | 5.3     |
| Estilo      | Tailwind CSS + tailwind-variants        | 3.4     |
| Roteamento  | React Router DOM                        | 6.24    |
| HTTP Client | Axios                                   | 1.7     |
| Datas       | date-fns + React Day Picker             | 3.6 / 8.10 |
| Ícones      | Lucide React                            | 0.403   |

**Backend**

| Categoria   | Tecnologia                              | Versão  |
| ----------- | --------------------------------------- | ------- |
| Runtime     | Node.js + TypeScript                    | 24 / 5.5 |
| Framework   | Fastify                                 | 4.28    |
| ORM         | Prisma                                  | 5.16    |
| Banco       | SQLite (dev) / PostgreSQL (produção)    | —       |
| Validação   | Zod                                     | 3.23    |
| E-mail      | Nodemailer + Ethereal                   | 6.9     |

## Como rodar localmente

**Pré-requisitos:** Node.js 18+

### Backend

```bash
cd nlw-journey-backend

npm install
npx prisma generate
npx prisma migrate deploy

# Configure as variáveis de ambiente
copy .env.example .env

npm run dev   # → http://localhost:3333
```

### Frontend

```bash
cd nlw-journey-plann.er

npm install

# Configure as variáveis de ambiente (padrão já aponta para localhost:3333)
copy .env.example .env

npm run dev   # → http://localhost:5173
```

## Variáveis de ambiente

**Frontend** (`.env`)

| Variável       | Descrição               | Padrão                  |
| -------------- | ----------------------- | ----------------------- |
| `VITE_API_URL` | URL base da API backend | `http://localhost:3333` |

**Backend** (`.env`)

| Variável       | Descrição                        | Padrão                  |
| -------------- | -------------------------------- | ----------------------- |
| `DATABASE_URL` | URL do banco de dados            | `file:./dev.db`         |
| `API_BASE_URL` | URL pública da API               | `http://localhost:3333` |
| `WEB_BASE_URL` | URL pública do frontend          | `http://localhost:3000` |
| `PORT`         | Porta do servidor                | `3333`                  |

## Deploy

**Frontend → Vercel**

1. Importe o repositório na [Vercel](https://vercel.com)
2. Em **Settings → Environment Variables**, adicione `VITE_API_URL` com a URL do backend em produção
3. Redeploy

**Backend → Railway / Render**

1. Faça o deploy do repositório do backend
2. Configure as variáveis de ambiente no painel da plataforma
3. Adicione `DATABASE_URL` apontando para um banco PostgreSQL

---

Desenvolvido durante a **NLW Journey** · [Rocketseat](https://rocketseat.com.br)

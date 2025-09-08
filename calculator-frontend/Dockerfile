FROM node:24

EXPOSE 80

RUN npm install -g pnpm

WORKDIR /calculator-frontend

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ARG BACKEND_URL

RUN pnpm build

CMD ["pnpm", "run", "preview", "--host", "0.0.0.0", "--port", "80"]

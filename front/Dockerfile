FROM node:18

WORKDIR /moneygate/front/app

COPY . .

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN pnpm install --production
RUN pnpm run build

CMD ["pnpm", "start"]
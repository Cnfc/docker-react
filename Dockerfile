FROM node:alpine as builder 
# 1 ==== builder app

WORKDIR '/app'
#working directory on ubuntu/usr/app

COPY package.json .
# cope sourse code without re-render

RUN yarn install
# npm install

COPY . .
# cope sourse code

RUN yarn build
# npm build prod version


FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
# 2 ====  copy from another fase Default command

# CMD ["npm", "run", "build"]
# commands
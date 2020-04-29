FROM mhart/alpine-node
RUN apk add --update npm
RUN npm install -g serve
COPY . .
RUN npm install
RUN npm run build
WORKDIR /build
# COPY ./build /app
CMD ["serve", "-p", "8080", "-s", "."]doc
FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY ./build /app
CMD ["serve", "-p", "8080", "-s", "."]doc
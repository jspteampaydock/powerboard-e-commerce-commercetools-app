FROM node:18 as build

COPY ./ /app

WORKDIR /app

RUN rm ./yarn.lock || true \
    && yarn install \
    && yarn build

FROM nginx:latest

COPY --from=build /app/public /var/www/html/jsp
COPY cnf/client/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]

FROM nginx:1.24
COPY "./build" /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

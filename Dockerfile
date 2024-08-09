# STEP 1
# 1
FROM node:18 AS builder

#Install dockerize 
RUN wget -qO- https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar -C /usr/local/bin -xzv

# 2
WORKDIR /app
# 3
COPY package*.json ./
RUN npm install

# 4
COPY . . 

# 5
RUN npm run build

# STEP 2
#6
# FROM node:18-alpine
#7
# WORKDIR /app
#8
# ENV SERVICE_MODe=production
#9
# COPY --from=builder /app ./
#10
#CMD ["npm","run", "start:prod"]                          
CMD ["dockerize", "-wait", "tcp://mysql:3306", "-timeout", "20s", "npm", "run", "start"]
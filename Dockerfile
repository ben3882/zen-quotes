# --- STAGE 1: The Node.js Builder ---
FROM node:20-alpine AS builder

# Create a working directory inside the container
WORKDIR /app

# Copy ONLY the package files first to cache the npm install step
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your raw React code (src, public, etc.)
COPY . .

# Run the Vite build command (this generates the 'dist' folder inside the container)
RUN npm run build 



# ==========================================
# STAGE 2: Serve the App with Nginx
# ==========================================
FROM nginx:alpine

# Copy the compiled React files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy your custom Nginx configuration file
COPY default.conf /etc/nginx/conf.d/default.conf

# Keep your existing Real IP fix!
RUN printf "set_real_ip_from 172.16.0.0/12;\nreal_ip_header CF-Connecting-IP;\n" > /etc/nginx/conf.d/real-ip.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
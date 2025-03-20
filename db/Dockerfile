FROM mysql:latest

# Set MySQL root password and database
ENV MYSQL_ROOT_PASSWORD=Mohammad111222333@
ENV MYSQL_DATABASE=urgentNewsDB

# Copy initialization SQL script
COPY init.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306

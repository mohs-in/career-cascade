# Use a more recent Maven image with OpenJDK 17 for building the project
FROM maven:3.8.4-openjdk-17 AS build

# Copy the Maven project files
COPY . .

# Build the project and skip tests
RUN mvn clean package -DskipTests

# Use OpenJDK 17 runtime image for running the application
FROM openjdk:17.0.1-jdk-slim

# Copy the JAR file from the build stage
COPY --from=build /target/spring-boot-rest-0.0.1-SNAPSHOT.jar demo.jar

# Expose port 8080 for the application
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "demo.jar"]

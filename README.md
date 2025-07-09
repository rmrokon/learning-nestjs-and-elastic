# 📘 Day 1 – NestJS Fundamentals

Today I started learning **NestJS** from scratch and built my first basic module.

## ✅ What I Learned

- Set up a new NestJS project using **Yarn**.
- Understood the roles of **modules**, **controllers**, and **services**.
- Learned key **OOP concepts** like encapsulation and dependency injection.
- Explored how **decorators** work (e.g., `@Controller`, `@Get`, `@Injectable`).
- Created my own module `StatusModule` with a `GET /status` endpoint.
- Injected a `StatusService` into the controller to separate logic cleanly.

## 🗓 Day 2

- I fixed a Prisma client initialization issue by properly generating the Prisma client with `npx prisma generate`.
- I implemented a custom `MyLogger` service using **Winston** for structured logging in NestJS.
- I configured `Winston` to write logs to `logs/app.log` in JSON format.
- I mounted this local `app.log` file as a Docker volume so **Logstash** (from the ELK stack running in Docker) could ingest it.
- I configured `logstash.conf` to read and parse JSON logs from `app.log` and forward them to Elasticsearch.
- I used `MyLogger` in services and configured it globally in `main.ts`.
- I understood the importance of **NestJS module boundaries** and learned how to fix dependency resolution errors by exporting and importing providers between modules.
- I learned that **Prisma migration files should be committed to Git** so schema changes are reproducible and consistent in all environments.

---

📁 I now have a solid foundation in:
- NestJS core concepts (modules, DI, services)
- Prisma ORM setup and migration workflow
- Winston logging
- Integrating NestJS logs with the ELK stack

---

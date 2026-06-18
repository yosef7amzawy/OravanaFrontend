# Backend Integration — ASP.NET Core (.NET Web API) + SQL Server

The frontend is **fully decoupled** from the backend and talks to a separate
.NET Web API over REST. No backend code lives in this repo.

## Frontend setup

1. Copy `.env.example` → `.env` and set:
   ```
   VITE_API_BASE_URL=https://localhost:5001/api
   ```
2. All HTTP calls go through `src/lib/api/`:
   - `client.ts` — fetch wrapper (JSON, JWT bearer, error normalization)
   - `auth.ts`   — token + user storage (localStorage, swap to httpOnly cookies if you prefer)
   - `endpoints.ts` — typed endpoint wrappers grouped by controller
   - `index.ts` — public barrel

   Components must import from `@/lib/api` — never call `fetch` directly.

## Suggested .NET solution layout

```
Oravana.Api/                ← ASP.NET Core Web API (entry point)
  Controllers/
    AuthController.cs
    ContactController.cs
    ServicesController.cs
    PortfolioController.cs
  Program.cs                ← CORS, JWT, EF Core, DI
Oravana.Application/        ← use-cases, DTOs, validators (FluentValidation)
Oravana.Domain/             ← entities, value objects, domain services
Oravana.Infrastructure/     ← EF Core DbContext (SQL Server), repositories, Identity, email
Oravana.Tests/              ← xUnit
```

Recommended packages: `Microsoft.EntityFrameworkCore.SqlServer`,
`Microsoft.AspNetCore.Authentication.JwtBearer`,
`Microsoft.AspNetCore.Identity.EntityFrameworkCore`, `FluentValidation`,
`Serilog`, `Swashbuckle.AspNetCore`.

## API contract expected by the frontend

| Method | Path                | Body / Query                                      | Returns                |
|--------|---------------------|---------------------------------------------------|------------------------|
| POST   | `/api/auth/login`    | `{ email, password }`                             | `{ token, user }`      |
| POST   | `/api/auth/register` | `{ name, email, password }`                       | `{ token, user }`      |
| POST   | `/api/auth/logout`   | —                                                 | `204`                  |
| GET    | `/api/auth/me`       | (Bearer)                                          | `User`                 |
| POST   | `/api/contact`       | `{ name, email, company?, projectType, message }` | `{ id }`               |
| GET    | `/api/services`      | —                                                 | `ServiceItem[]`        |
| GET    | `/api/portfolio`     | —                                                 | `PortfolioItem[]`      |

Tweak `src/lib/api/endpoints.ts` if your final controllers diverge.

## CORS (Program.cs)

```csharp
builder.Services.AddCors(o => o.AddPolicy("frontend", p =>
    p.WithOrigins("http://localhost:3000", "https://your-frontend.com")
     .AllowAnyHeader()
     .AllowAnyMethod()
     .AllowCredentials()));

app.UseCors("frontend");
```

## Auth flow

1. Frontend POSTs to `/api/auth/login`.
2. .NET issues a **JWT** (use `JwtBearer` with a strong signing key from
   user-secrets / Key Vault).
3. Frontend stores the token via `setToken()` and attaches
   `Authorization: Bearer <token>` to every subsequent request automatically.
4. On `401` the client clears the token; route components can redirect to `/login`.

For refresh tokens, add `/api/auth/refresh` and call it from a fetch
interceptor (extend `apiRequest` in `client.ts`).

## Database (SQL Server)

- Use EF Core migrations: `dotnet ef migrations add Init && dotnet ef database update`.
- Keep `DbContext` in `Oravana.Infrastructure`.
- Use ASP.NET Core **Identity** for users/roles (`AspNetUsers`, `AspNetRoles`)
  unless you have a hard requirement to roll your own.

## Scalability checklist

- Stateless API → horizontal scale behind a load balancer.
- SQL Server on managed service (Azure SQL / RDS) with read replicas if needed.
- Response caching + ETag on `GET /services` and `GET /portfolio`.
- Background work via `IHostedService` or Hangfire (long-running tasks, emails).
- Centralized logging (Serilog → Seq / Application Insights).
- Health checks at `/health` + `/health/ready`.

import { getToken, clearToken } from "./auth";

const BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://localhost:7069/api";

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(status: number, message: string, data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined | null>;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  anonymous?: boolean;
}

function buildUrl(path: string, query?: RequestOptions["query"]): string {
  const cleanPath = path.replace(/^\//, "");

  const url = new URL(`${BASE_URL}/${cleanPath}`);

  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== null) {
        url.searchParams.set(k, String(v));
      }
    }
  }

  return url.toString();
}

export async function apiRequest<T = unknown>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    method = "GET",
    body,
    query,
    headers = {},
    signal,
    anonymous,
  } = options;

  const finalHeaders: Record<string, string> = {
    Accept: "application/json",
    ...headers,
  };

  if (body !== undefined && !(body instanceof FormData)) {
    finalHeaders["Content-Type"] = "application/json";
  }

  if (!anonymous) {
    const token = getToken();

    if (token) {
      finalHeaders["Authorization"] = `Bearer ${token}`;
    }
  }

  let response: Response;

  try {
    response = await fetch(buildUrl(path, query), {
      method,
      headers: finalHeaders,
      body:
        body === undefined
          ? undefined
          : body instanceof FormData
          ? body
          : JSON.stringify(body),
      signal,
    });
  } catch (err) {
    throw new ApiError(0, "Network error — API unreachable", err);
  }

  if (response.status === 401) {
    clearToken();
  }

  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");

  const payload = isJson
    ? await response.json().catch(() => null)
    : await response.text();

  if (!response.ok) {
    const message =
      isJson &&
      payload &&
      typeof payload === "object" &&
      "message" in payload
        ? String((payload as { message: unknown }).message)
        : response.statusText;

    throw new ApiError(response.status, message, payload);
  }

  return payload as T;
}

export const api = {
  get: <T>(
    path: string,
    opts?: Omit<RequestOptions, "method" | "body">
  ) => apiRequest<T>(path, { ...opts, method: "GET" }),

  post: <T>(
    path: string,
    body?: unknown,
    opts?: Omit<RequestOptions, "method" | "body">
  ) => apiRequest<T>(path, { ...opts, method: "POST", body }),

  put: <T>(
    path: string,
    body?: unknown,
    opts?: Omit<RequestOptions, "method" | "body">
  ) => apiRequest<T>(path, { ...opts, method: "PUT", body }),

  patch: <T>(
    path: string,
    body?: unknown,
    opts?: Omit<RequestOptions, "method" | "body">
  ) => apiRequest<T>(path, { ...opts, method: "PATCH", body }),

  delete: <T>(
    path: string,
    opts?: Omit<RequestOptions, "method" | "body">
  ) => apiRequest<T>(path, { ...opts, method: "DELETE" }),
};
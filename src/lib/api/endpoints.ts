import { api } from "./client";
import {
  setToken,
  setUser,
  clearToken,
  type AuthUser,
} from "./auth";

// ───────── Auth ─────────

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: AuthUser;
  };
}

export const auth = {
  async login(payload: LoginRequest): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>(
      "/auth/login",
      payload,
      {
        anonymous: true,
      }
    );

    setToken(res.data.token);
    setUser(res.data.user);

    return res;
  },

  async register(payload: RegisterRequest): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>(
      "/auth/register",
      payload,
      {
        anonymous: true,
      }
    );

    setToken(res.data.token);
    setUser(res.data.user);

    return res;
  },

  async logout(): Promise<void> {
    try {
      await api.post("/auth/logout");
    } finally {
      clearToken();
    }
  },

  me: () => api.get<AuthUser>("/auth/me"),
};

// ───────── Contact ─────────

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
  };
}

export const contact = {
  submit: (payload: ContactSubmission) =>
    api.post<ContactResponse>(
      "/contact",
      payload,
      {
        anonymous: true,
      }
    ),
};

// ───────── Services ─────────

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const servicesApi = {
  getAll: () =>
    api.get<{
      success: boolean;
      data: ServiceItem[];
    }>("/services"),
};

// ───────── Portfolio ─────────

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  clientName: string;
}

export const portfolioApi = {
  getAll: () =>
    api.get<{
      success: boolean;
      data: PortfolioItem[];
    }>("/portfolio"),
};
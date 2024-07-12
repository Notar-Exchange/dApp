/*
 * File: /src/server/routes.ts
 * Project: notar
 * Created: Friday, 12th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

export const Routes = {
  list: {
    public: ["/"],
    private: [""],
    protected: [""],
  },
  path: {
    default: "/",
  },
} as const;

/*
 * File: /src/components/pages/landing/log.tsx
 * Project: netz-treasury
 * Created: Saturday, 8th June 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©*
 * -----
 */
"use client";

import { Fragment, useEffect } from "react";

export default function Log() {
  useEffect(() => {
    console.info("Developed by CosmoLabs -> @rashadtjou");
  }, []);
  return <Fragment />;
}

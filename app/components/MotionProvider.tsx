"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import React from "react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // Only loads core DOM animation features, shaving up to 50kb off your initial bundle
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
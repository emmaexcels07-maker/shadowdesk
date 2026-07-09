"use client";

import React, { useMemo } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * High-performance Framer Motion provider.
 * Uses `domAnimation` to trim up to 50kb of layout/drag features from the initial bundle.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  // Memoize children to prevent unneeded down-tree re-renders 
  // when global context or parent states shift.
  const cachedChildren = useMemo(() => children, [children]);

  return (
    <LazyMotion features={domAnimation} strict>
      {cachedChildren}
    </LazyMotion>
  );
}
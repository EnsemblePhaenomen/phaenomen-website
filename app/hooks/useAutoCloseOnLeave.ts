"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useInView } from "motion/react";

type UseInViewOptions = Parameters<typeof useInView>[1];

/**
 * Observe a DOM node and trigger a close callback when it leaves the viewport.
 * Returns the current in-view state for optional UI uses.
 */
export function useAutoCloseOnLeave<T extends Element>(
  ref: RefObject<T>,
  isOpen: boolean,
  onClose: () => void,
  options?: UseInViewOptions
) {
  const isInView = useInView(ref, { amount: 0, ...options });
  const hasEnteredView = useRef(false);

  useEffect(() => {
    if (isInView) {
      hasEnteredView.current = true;
    }
  }, [isInView]);

  useEffect(() => {
    if (!isOpen || !hasEnteredView.current || isInView) return;
    onClose();
  }, [isInView, isOpen, onClose]);

  return isInView;
}

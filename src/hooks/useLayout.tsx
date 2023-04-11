import { MutableRefObject, useState, useLayoutEffect } from "react";

type BasicTarget<T = HTMLElement> =
  | (() => T | null)
  | T
  | null
  | MutableRefObject<T | null | undefined>;

type Size = { width?: number; height?: number };
type TargetElement = HTMLElement | Element | Document | Window;

const getTargetElement = (
  target?: BasicTarget<TargetElement>,
  defaultElement?: TargetElement
): TargetElement | undefined | null => {
  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetElement | undefined | null;

  if (typeof target === "function") {
    targetElement = target();
  } else if ("current" in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
};

export const useLayout = (target: BasicTarget) => {
  const [{ width, height }, setState] = useState<Size>(() => {
    const el = getTargetElement(target);
    return {
      width: ((el || {}) as HTMLElement).clientWidth,
      height: ((el || {}) as HTMLElement).clientHeight
    };
  });

  useLayoutEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    const resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        entries.forEach((entry) => {
          setState({
            width: entry.target.clientWidth,
            height: entry.target.clientHeight
          });
        });
      }
    );

    resizeObserver.observe(el as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [typeof target === "function" ? undefined : target]);

  const xs = !!width && width <= 375;
  const sm = (!!width && width <= 450) || xs;
  const md = (!!width && width <= 750) || sm;

  return { width, height, xs, sm, md };
};

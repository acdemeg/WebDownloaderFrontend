import { type RefObject, useEffect, useRef, useLayoutEffect, type MutableRefObject } from "react";

export function useOutsideClick(elementRef: RefObject<any>, handler: () => any, attached = true): void {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!attached) {
      return;
    }

    const handleClick = (e: any): void => {
      if (elementRef.current === null) {
        return;
      }
      if (elementRef.current.contains(e.target) === false) {
        latestHandler.current()
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }

  }, [elementRef, latestHandler, attached])
}

export function useLatest(callback: () => any): MutableRefObject<() => any> {
  const valueRef = useRef(callback);

  useLayoutEffect(() => {
    valueRef.current = callback;
  }, [callback])

  return valueRef;
}

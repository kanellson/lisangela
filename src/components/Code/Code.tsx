"use client";
import { useEffect, useRef, useState } from "react";
import CopyClipBoard from "./CopyClipBoard";
import Icon from "./Icon";

const CODE = "95991571485";
const NAME = "Lisangela da Silva Peixoto";
const TIMEOUT_MS = 6000;

export default function Code() {
  const [hasCopied, setHasCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timeoutRef.current = setTimeout(setHasCopied, TIMEOUT_MS, false);

    return () => {
      if (!timeoutRef) return;
      clearTimeout(timeoutRef.current);
    };
  }, [hasCopied]);

  const handleOnClick = () => {
    CopyClipBoard(CODE)?.then(() => {
      setHasCopied(true);
    });
  };
  const iconId = hasCopied ? "check" : "copy";
  const tooltipText = hasCopied ? "COPIADO" : "Copiar";

  return (
    <div className="wrapper_value">
      <p>Faça uma doação</p>
      <button
        onClick={handleOnClick}
        type="button"
        className="text-slate-700 hover:text-slate-100 hover:opacity relative"
      >
        <div className="copy_msg code_copy">
          <span>{tooltipText}</span>
        </div>
        <div className="box_icon">
          <span>Click para copiar</span>
          <Icon id={iconId} />
        </div>
      </button>
      <strong>{NAME}</strong>
      <pre className="text-slate-400">pix {CODE}</pre>
    </div>
  );
}

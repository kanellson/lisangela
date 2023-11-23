"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "../Icons/Icon";
import CopyClipBoard from "../Copy/CopyClipBoard";

const CODE = "c9eb5eda-728f-4010-b701-122085df5ef2";
const TIMEOUT_MS = 3000;

export default function Code() {
  const [hasCopied, setHasCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(setHasCopied, TIMEOUT_MS, false);

    return () => {
      if (!timeoutRef) return;
      clearTimeout(timeoutRef.current);
    };
  }, [hasCopied]);

  const handleOnClick = () => {
		CopyClipBoard(CODE).then(() => {
			setHasCopied(true);
		})   	
  };
  const iconId = hasCopied ? "check" : "copy";
  const tooltipText = hasCopied ? "Copiado" : "Copiar";

  return (
    
	<div className="wrapper_value">
		<p>Faça uma doação usando a chave aleatória</p>
		<strong>Lisangela da Silva Peixoto</strong>
		<pre className="text-slate-400">{CODE}</pre>
		
		<button onClick={handleOnClick} type="button" className="text-slate-700 hover:text-slate-100 hover:opacity relative"
      >
			<div className="copy_msg code_copy">
				<span>{tooltipText}</span>
			</div>
        <div className="box_icon">
			<span>Click para copiar</span>
		  	<Icon id={iconId} />
		  </div>
      </button>		
	</div>  
  );
}

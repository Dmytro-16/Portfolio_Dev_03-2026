import React from "react";

export default function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-card-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="code-card-filename">dsdeveloper.js</span>
      </div>
      <pre className="code-card-body">
        <code>
          <span className="cc-comment">
            {"// Junior Fullstack Developer — Paris"}
          </span>
          {"\n\n"}
          <span className="cc-keyword">const </span>
          <span className="cc-var">dsdeveloper</span>
          <span className="cc-white"> = {"{"}</span>
          {"\n"}
          <span className="cc-white">{"  "}</span>
          <span className="cc-key">name</span>
          <span className="cc-white">:{"        "}</span>
          <span className="cc-string">"Dmytro SEMENCHUK"</span>
          <span className="cc-white">,</span>
          {"\n"}
          <span className="cc-white">{"  "}</span>
          <span className="cc-key">role</span>
          <span className="cc-white">:{"        "}</span>
          <span className="cc-string">"Fullstack Developer"</span>
          <span className="cc-white">,</span>
          {"\n"}
          <span className="cc-white">{"  "}</span>
          <span className="cc-key">stack</span>
          <span className="cc-white">:{"       "}</span>
          <span className="cc-white">[</span>
          <span className="cc-string">"React"</span>
          <span className="cc-white">, </span>
          <span className="cc-string">"Node.js"</span>
          <span className="cc-white">, </span>
          <span className="cc-string">"React Native"</span>
          <span className="cc-white">],</span>
          {"\n"}
          <span className="cc-white">{"  "}</span>
          <span className="cc-key">background</span>
          <span className="cc-white">: </span>
          <span className="cc-string">
            "Danseur pro → Technicien Support → Dev"
          </span>
          <span className="cc-white">,</span>
          {"\n"}
          <span className="cc-white">{"  "}</span>
          <span className="cc-key">openTo</span>
          <span className="cc-white">:{"      "}</span>
          <span className="cc-white">[</span>
          <span className="cc-string">"CDI"</span>
          <span className="cc-white">, </span>
          <span className="cc-string">"Freelance"</span>
          <span className="cc-white">],</span>
          {"\n"}
          <span className="cc-white">{"  "}</span>
          <span className="cc-key">available</span>
          <span className="cc-white">:{"    "}</span>
          <span className="cc-bool">true</span>
          <span className="cc-white">,</span>
          {"\n"}
          <span className="cc-white">{"  "}</span>
          <span className="cc-key">coffee</span>
          <span className="cc-white">:{"      "}</span>
          <span className="cc-white"> Infinity,</span>
          <span className="cc-comment">{"// non négociable"}</span>
          {"\n"}
          <span className="cc-white">{"};"}</span>
          {"\n\n"}
          <span className="cc-keyword">export default </span>
          <span className="cc-var">dsdeveloper</span>
          <span className="cc-white">;</span>
        </code>
      </pre>
    </div>
  );
}

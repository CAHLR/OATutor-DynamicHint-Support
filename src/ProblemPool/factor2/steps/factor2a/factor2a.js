import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./factor2a-index.js"; const step = {id: "factor2a", stepAnswer: ["$$\\left(x+6\\right) \\left(b^2-a\\right)$$"], problemType: "MultipleChoice", stepTitle: <div> Factor <InlineMath math="x \left(b^2-a\right)+6\left(b^2-a\right)"/> by pulling out the GCF, the Greatest Common Factor.</div>, stepBody: "", choices: ["$$\\left(x+6\\right) \\left(b^2-a\\right)$$", "$$x \\left(b^2-a\\right)$$", "$$6\\left(b^2-a\\right)$$", "$$b^2 \\left(x+6\\right)$$"], answerType: "string", hints: hints}; export {step};
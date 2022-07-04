var hints = [{id: "af4e405log6b-h1", type: "hint", dependencies: [], title: "Identify the base and exponent", text: "To convert a logarithmic equation to exponential form, we need to identify the base of the exponential, a, and the exponent y since $$y=\\log_{a}\\left(x\\right)$$ is equivalent to $$x=a^y$$.", variabilization: {}}, {id: "af4e405log6b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["af4e405log6b-h1"], title: "Identify the base", text: "What is the base of the exponent?", variabilization: {}}, {id: "af4e405log6b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["af4e405log6b-h2"], title: "Identify the exponent", text: "What is the exponent?", variabilization: {}}, {id: "af4e405log6b-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$1=3^0$$"], dependencies: ["af4e405log6b-h3"], title: "Determining Exponential Form", text: "Knowing the base and the exponent, what is the exponential form?", choices: ["$$1=3^0$$", "$$0=3^1$$", "$$3=1^0$$", "$$0=3^1$$"], variabilization: {}}, ]; export {hints};
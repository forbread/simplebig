S = require("./index");
console.log(S.t2s("東加拿大"));//东加拿大
console.log(S.t2s("太古遺產"));//太古遗产
console.log(S.s2t("繁体中文"));//繁體中文
S.attach();
console.log("香港動漫".t2s());//香港动漫
console.log("夜莺工作室".s2t());//夜鶯工作室
// note: typescript file wont run with node, use ts-node to run this file
function bar(a: string | number): string | number {
    // do not change implementation
    if (typeof (a) === "string") {
        return Number(a);
    }
    return String(a);
}

const first = bar("1");
console.log("🚀 ~ first:", first)
const second = bar(5);
console.log("🚀 ~ second:", second)


// 2 // 
// /* differce beetween "unknown", "any", "void" type. */
// let a: any;
// let b: unknown;
// let c: void;

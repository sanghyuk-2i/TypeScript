// tsc logging.ts -watch   -> 실시간 JS 변환
// tsc --init              -> tsconfig 초기 파일 생성
// tsc -w                  -> 모든 TS 파일을 실시간을 관찰하여 JS 변환

// tsconfig.json
//  "exclude": ["./src/XXX.ts"] -> did not compile this file.
//  "include": ["./src/XXX.ts"] -> only compile this file.

console.log("hello!");
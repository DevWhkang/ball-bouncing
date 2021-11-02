# Ball bouncing
타입스크립트 기반의 HTMLCanvasElement를 활용한 공 튀기기

## Getting start
1. Clone repository: `git clone git@github.com:DevWhkang/ball-bouncing.git`
2. Install packages: `yarn install`
3. Transpiling TypeScript to JavaScript: `yarn build`

   - `yarn build`: `tsc --build`
   - other scripts: `yarn start`: `tsc --watch`, `yarn clean`:`tsc --build --clean`
   - output js file: `./dist/`
   
4. Load `index.html` file in your browser
5. Refresh browser, random ball will appear

## Rendered Canvas features

- 랜덤한 각도로 공이 날아간다
- 랜덤한 지름을 가진다
- 랜덤한 속도를 가진다
- 벽에 부딪혀 날아온 각도의 반사각으로 다시 날아간다

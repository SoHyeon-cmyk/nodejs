# 환경변수 .env

최상위 폴더에 .env파일 만들기\
REACT_APP_API_TNDB_KEY="API_KEY"\
주의 맨뒤에 세미콜론 쓰지 않음

## .gitignore 파일에 올리면 안되는 것들 .env작성



## APIKEY 사용
const APIKEY = process.env.REACT_APP_API_TNDB_KEY



### 깃 배포하기

package.json 수정하기 \
하단에 "homepage": "https://SoHyeon-cmyk.github.io/tndb-movie" 깃허브 주소\
(https://SoHyeon-cmyk.github.io/tndb-movie)

scripts 수정\
"predeploy":"npm run build",\
"deploy":"gh-pages -d build"\

깃 저장소 업로드

### 터미널에서 gh-pages 설치하기 

npm install gh-pages\


### 깃허브 저장소 다시 확인하기

git remote -v\


### 깃허브 배포하기
npm run deploy

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

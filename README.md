# js-tutorial
 - js 튜토리얼

# 설정

## webpack
```
"webpack": "^4.43.0",
"webpack-cli": "^3.3.11",
"webpack-dev-server": "^3.10.3"
```

## loader
```
"html-webpack-plugin": "^4.3.0",
"style-loader": "^1.2.1",
"css-loader": "^3.5.3",
"sass-loader": "^8.0.2",
```


## gh-pages
```
script: {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
}
```

# js slide
 - css만 이용해서 슬라이드 설정하기
 - style - src/styles/slide.scss
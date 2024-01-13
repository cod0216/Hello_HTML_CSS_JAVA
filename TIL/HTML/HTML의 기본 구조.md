# HTML의 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="x-UA-Compatible" content="IE=chrome">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page!</title>
</head>
<body>
  <!-- 웹 페이지에 표시할 내용을 적습니다. -->
  <p>나의 첫 번째 웹 페이지</p>
</body>
</html>
```

## DTD
문서형 정의(DTD : Document Type Definition)는 웹 브라우저가 처리할 HTML 문서가 어떤 문서 형식을 따라야 하는지 알려주는 것으로,
HTML 문서를 작성할 떄 항상 처음에 넣어야 한다.
HTML5 등장 이후로 이전 버전의 문서 형시글 정의할 필요가 없으므로 항상 다음과 같이 DTD를 작성한다.
```html
<!DOCTYPE htlm>
```

## html 태그
html 태그는 HTML 문서의 시작과 끝을 의미한다. 따라서 모든 태그는 html 태그 안에 작성해야 한다.

## head 태그
head 태그는 HTML 문서의 **메타데이터**(**metadate**)를 정의하는 영역이다. 메타데이터란 HTML 문서에 대한 정보(data)로, 웹 브라우저에는
직접 노출 되지 않는다. 보통 meta, title, link, style, script 등의 태그를 사용해 HTML 문서의 여러 정보를 정의한다.

#### meta 태그
meta 태그는 메타데이털르 정의하는 데 사용한다.

다음 HTML 문서에는 허용하는 문자 집합(charset)을 정의하는 메타데이터 태그이다. 과거에는 EUC-KR을 주로 사용했지만, 최근에는 더 많은 언어를 허용하기 위해 UTF-8만 사용한다.
```html
<meta charset="UTF-8">
```

다음 태그는 인터넷 익스플로러(이하IE)의 렌더링 엔진을 강제ㅗㄹ 최신 렌더링 엔진으로 지정하는 메타데이터를 나타낸다.
구 버전의 렌더링 엔진을 사용하는 실험적 프로젝트가 아니라면 해당 태그를 정의하는 편이 좋다.
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

다음은 기기의 화면 너비에 맞추기 위해 사용하는 메타데이터 태그이다. 뷰포트는 웹 페이지에 접속했을 떄 사용자에게 보이는 화면 영역을 의미한다.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
## title 태그
title 태그는 HTML 문서의 제목을 지정하는데 사용한다.
```html
<title>My First Web Page!</title>
```
모든 HTML 문서는 반드시 1개의 title 태그를 사용해 HTML 문서의 제목을 지정해야 한다.
> **문서 제목은 왜 중복되면 안되나요?**
> 
> 구글이나 네이버 같은 검색 엔진 사이트에서 HTML 문서를 찾을 때는 title 태그에 작성된 제목으로 찾는다.
> 
> 만약 한 웹 사이트에서 제목이 중복된 문서가 여러 개 발견된다면 검색 엔진은 해당 웹 사이트가 신뢰성이 떨어진다고 판단해서 검색 엔진 노출 시 불이익을 준다.

## body 태그
body 태그는 웹 브라우저에 노출되는 내용을 작성하는 영역이다. 따라서 웹 브라우저에서 표시되는 모든 내용은 body 태그 영역 안에 작성한다.



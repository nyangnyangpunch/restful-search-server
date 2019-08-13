# restful-search-server

## 시작하기

- `Node.js 8` 이상 버전의 환경이 필요함
- `config.js` 파일을 통해 설정할 수 있음

```javascript
module.exports = {
  port: 8088,
  endPoint: '/설정한_API_ENDPOINT',
  log: '로그_파일_경로'
}

// 샘플
// module.exports = {
//   port: 8088,
//   endPoint: '/search',
//   log: 'D:/web.log'
// }
```

- 의존성 모듈 설치 및 실행

```bash
npm i
node index
```

## 테스트

`http://localhost:port/YOUR_API_ENDPOINT?query=KEYWORD`

- CURL 요청 예시

```bash
curl -X GET http://localhost:8088/search?query=cat
```

## 검색결과 형식

- hits: 검색된 게시물 리스트
  - created_at: 게시물 생성 시간
  - title: 게시물 제목
  - url: 게시물 주소
  - author: 작성자
  - _tags: 게시물 태그
- page: 페이지 번호
- query: 검색어

```json
{  
  "hits":[
    {  
      "created_at":"2019-06-26T11:08:48.000Z",
      "title":"HTTP Cats",
      "url":"https://http.cat/",
      "author":"afshinmeh",
      "points":408,
      "story_text":null,
      "comment_text":null,
      "num_comments":74,
      "story_id":null,
      "story_title":null,
      "story_url":null,
      "parent_id":null,
      "created_at_i":1561547328,
      "relevancy_score":8912,
      "_tags":[  
        "story",
        "author_afshinmeh",
        "story_20283794"
      ],
      "objectID":"20283794",
      "_highlightResult":{  
        "title":{  
          "value":"HTTP \u003cem\u003eCat\u003c/em\u003es",
          "matchLevel":"full",
          "fullyHighlighted":false,
          "matchedWords":[  
            "cat"
          ]
        },
        "url":{  
          "value":"https://http.\u003cem\u003ecat\u003c/em\u003e/",
          "matchLevel":"full",
          "fullyHighlighted":false,
          "matchedWords":[  
            "cat"
          ]
        },
        "author":{  
          "value":"afshinmeh",
          "matchLevel":"none",
          "matchedWords":[  

          ]
        }
      }
    },
    // ...
  ],
  "nbHits":243237,
  "page":0,
  "nbPages":50,
  "hitsPerPage":20,
  "processingTimeMS":11,
  "exhaustiveNbHits":false,
  "query":"cat",
  "params":"advancedSyntax=true\u0026analytics=false\u0026query=cat"
}
```

## 로그 데이터 형식

```bash
2019.08.01 07:39:24.586 INFO - CONFIG: CORS allowed
2019.08.01 07:39:24.599 INFO - Server started
2019.08.02 06:30:02.441 INFO - Search keyword: undefined
2019.08.02 06:38:24.077 INFO - Search keyword: cat
2019.08.02 07:25:21.246 INFO - Search keyword: nodejs
2019.08.02 07:25:29.960 INFO - Search keyword: kubernetes
2019.08.02 07:25:33.894 INFO - Search keyword: docker
```

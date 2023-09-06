# 오르미3기 프로젝트 1 

## 프로젝트

#### 프로젝트 주제
ChatGPT를 이용하여 명언을 만들어 주는 사이트

#### 프로젝트 기한
2023.08.29 ~ 2023.09.06

#### 프로젝트 tree
```
about.html
index.html
README.md
│  
│
├─css
│  ├─ WS_common.css
│  ├─ WS_Css1.css
│  │
│  └─img
│      ├ WS.JPG
│      ├ WSdark.png
│      ├ WS_moon.png
│      └ WS_sun.png
└─js
   ├ WS_1.js
   ├ WS_2.js
   ├ WS_dark.js
   ├ WS_down.js
   └ WS_Link.js

```
---

### UI 모습

#### UI 화면 및 다크모드
![ezgif-3-4f61a8c4a5](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/9e9791f3-6578-4c9b-96c9-d055a4632860)
---
#### 명언 생성 및 저장소 목록
![ezgif-2-380fead871](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/53114b6b-b0e2-42f5-8cff-3f571b715e89)
---
#### 저장소 선택 삭제와 명언 목록 다운로드
![ezgif-2-68b2e3b631](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/48eebe78-f62f-4faa-9a65-ad64639cfe6b)
---
#### 사이트 링크 복사 및 목록 삭제
![ezgif-2-954e8516ea](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/dad79de4-5dff-472b-9315-d1e1e53f49ae)


---

### 문제점과 해결점

#### 1. 생성되어 저장한 명언들을 어떻게 다운로드를 받을수 있게 하는가?<br>
생성된 명언은 Localstorage에 Value 값으로써 저장이 되는 즉 json로 변환 되어 있다는 점을 생각했었고, 그럼 이 json파일을 다운로드를 받을 수 있다면 그 안에 저장된 명언들은 string 형태로 저장 되어 있으니까 그걸 또 text 파일로 전환 한다면 .txt 파일로 받을수 있지 않을까란 생각을 했습니다.<br>

그래서 일단은 Localstorage에서 명언이 저장된 json파일부터 다운로드가 가능한지 부터 알아보다가 --**blob과 a요소 href 속성**--을 이용한다면 다운로드 url를 만들어서 개인 디바이스로의 다운이 가능하다는 걸을 알게 되었습니다.
***
명언 리스트를 Localstorage에서 .json 파일 형태로 다운 받을수 있는 코드
***
``` 
$DW_BTN.addEventListener('click', () => {
    WS_Down();
});

function WS_Down() {
    const WS_DownDate = JSON.stringify($saved_WS, null, 2).replace(/\\"/g, "");
    const blob = new Blob([WS_DownDate], { type: 'application/json' }); 
    const WS_DownLink = document.createElement('a');

    WS_DownLink.href = URL.createObjectURL(blob);
    WS_DownLink.download = '명언 리스트.json';
    WS_DownLink.style.display = 'none';
    document.body.appendChild(WS_DownLink);
    WS_DownLink.click();
    document.body.removeChild(WS_DownLink);
}
```
*** 
여기서 .json 파일 형태를 .txt로 바꾸는 코드
***
```
$DW_BTN.addEventListener('click', () => {
    WS_Down();
});

function WS_Down() {
    const WS_DownDate = JSON.stringify($saved_WS, null, 2).replace(/\\"/g, ""); // 정규식으로 \"" , ""/, /, "" 를 없애는 식을 넣었습니다.
    const blob = new Blob([WS_DownDate], { type: 'text/plain' }); // 'application/json'에서 'text/plain'으로 수정하여 일반 텍스트 파일로 new Blob을 생성하게 합니다.
    const WS_DownLink = document.createElement('a');

    WS_DownLink.href = URL.createObjectURL(blob);
    WS_DownLink.download = '명언 리스트.txt'; // 간혹 .json에서 .txt만 바꿔도 .txt파일로 다운로드가 되는 경우도 있지만, 스마트폰에서 다운로드 받을땐 파일형식이 .txt.json 이런형식으로 붙여서 나오기에 위의 식도 함께 수정을 하였습니다.
    WS_DownLink.style.display = 'none';
    document.body.appendChild(WS_DownLink);
    WS_DownLink.click();
    document.body.removeChild(WS_DownLink);
}
```
***
#### 해결 되지 않는 문제점<br>


이렇게 했는데도 불구하고, 다운이 안되는 경우 있고, 그건 아무래도 브라우저 보안성과 연관이 있다고 생각만 들뿐 아직 자세히는 알아보질 못했기에 추후에 좀 더 알아보고 싶은 내용입니다.<br>

그리고 이건 모든 localstorage에 저장한다면 거의 공통사항일듯 보입니다. 브라우저가 바뀌면 당연히 다른 브라우저의 저장된 값은 못 불러오기에 브라우저 마다 다른 저장된 명언들이 존재하고, 브라우저의 인터넷 사용 기록 삭제를 하게 되면 localstorage 값도 같이 사라지기에 복구가 불가능 합니다.

---

## 후기
지금 배운걸 토대로 구현화 할 주제를 잡고 빠르게 제작했다고 생각했지만, 아무래도 배운걸 전부 활용을 못 하고, 최대한 프로젝트 결과물에 완성에 집중하자는 목표로 만들었으나, 막판에 수정 하지 못하거나 구현화 실패한 것들에 대한 아쉬움이 큽니다.

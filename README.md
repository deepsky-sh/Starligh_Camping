# 담터 별빛캠핑장 ★ 3D 둘러보기

경기 포천시 관인면 담터길 307-2 **담터 별빛캠핑장**을 직접 찍은 사진·영상과 공개 정보를 바탕으로 3D로 재구성한 웹페이지입니다. 브라우저에서 바로 실행되며 설치가 필요 없습니다.

## 기능
- 캐릭터를 움직이며 **1인칭 / 3인칭 / 항공** 시점으로 둘러보기
- **낮 / 노을 / 별밤** 시간 전환 (별밤에는 은하수, 볼라드등, 소나무 줄전구, 모닥불 점등)
- 파쇄석 중앙 사이트, 소나무 전기 사이트 ★1–★8, 관리동, 화장실·샤워장, 담터계곡
- 배치도 클릭 이동, 바로가기, 계곡·모닥불·풀벌레 소리
- PC(키보드·마우스)와 모바일(가상 조이스틱) 모두 지원

## 조작
| 입력 | 동작 |
|---|---|
| W A S D / 방향키 | 이동 |
| Shift | 달리기 |
| Space | 점프 |
| 마우스 드래그 | 시점 회전 (1인칭은 클릭 시 마우스 고정) |
| 휠 | 3인칭 거리 조절 |
| V | 시점 전환 |
| T | 시간 전환 |

## 실행
GitHub Pages(Settings → Pages → Branch: `main` / `/ (root)`)를 켜면 아래 주소에서 열립니다.

https://deepsky-sh.github.io/Starligh_Camping/

로컬에서 보려면 폴더에서 `python3 -m http.server` 후 `http://localhost:8000` 을 여세요. (파일을 직접 더블클릭하면 텍스처·캐릭터가 로드되지 않습니다.)

## 구성
- `index.html` — three.js(r170, jsDelivr CDN)로 만든 전체 장면과 UI
- `tex/gravel.jpg`, `tex/forest_detail.jpg` — 현장 사진·영상에서 추출한 바닥·숲 질감
- `tex/photo*.jpg` — 시작 화면 사진
- `tex/hiker.gltf.json`, `tex/hiker_anims.json` — 캐릭터 모델(three.js 예제의 Ready Player Me 샘플 아바타)과 걷기·달리기·대기 애니메이션(three.js 예제 Xbot 애니메이션을 리타깃)

캠핑장 정보 출처: [한국관광공사 고캠핑 · 별빛캠핑장](https://www.gocamping.or.kr/bsite/camp/info/read.do?c_no=1499&viewType=read01)

배치는 사진·영상과 공개 정보를 바탕으로 재구성한 것으로 실제와 다를 수 있습니다.

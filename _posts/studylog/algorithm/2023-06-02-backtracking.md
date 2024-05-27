---
layout: post
title: "백트래킹"
description: >
  '오퍼레이팅 시스템' 공부를 시작하는 글입니다.
categories: [studylog, algorithm]
related_posts: [/studylog/algorithm/content/, /studylog/algorithm/two/]
comments: true
# hide_description: true
sitemap: true
---

* this unordered seed list will be replaced by toc as unordered list 
{:toc}

## 백트래킹(Backtracking)
> <font color="black">모든 경우의 수를 탐색하며 최적해를 구하는 과정에서 유망하지 않은 쪽은<br>더 이상 구하지 않는 방법</font>

- 정렬된 트리 구조

### 백트래킹에서 사용되는 용어
- 유망(Promisiong): 해가 될 가능성이 있는 경우
- 가지치기(Pruning): 해가 될 가능성이 없는 경우 해당 노드를 제외
- 백트래킹(Backtracking): 유망하지 않은 쪽으로 가지 않고 되돌아 옴

[!Note] 재귀함수와 BFS를 잘 활용하자!!

### 백트래킹 예시
#### 1. N-Queen 문제
##### 구현 코드
![image](/assets/study/algorithm/greedy/greedyEx.png){:.lead width="960" height="540" loading="lazy"}
<hr>

#### 구현 코드
![image](/assets/study/algorithm/greedy/greedyEx.png){:.lead width="960" height="540" loading="lazy"}
<hr>

## 관련 문제
### 문제1. 백준[2839] 설탕 배달
![image](/assets/study/algorithm/greedy/bj2839a.png){:.lead width="960" height="540" loading="lazy"}

#### 작성 코드
![image](/assets/study/algorithm/greedy/bj2839b.png){:.lead width="960" height="540" loading="lazy"}
<hr>

### 문제2. 백준[1931] 회의실 배정
![image](/assets/study/algorithm/greedy/bj1931a.png){:.lead width="960" height="540" loading="lazy"}

#### 작성 코드
![image](/assets/study/algorithm/greedy/bj1931b.png){:.lead width="960" height="540" loading="lazy"}
<hr>

---
layout: post
title: "이진 탐색"
description: >
  '오퍼레이팅 시스템' 공부를 시작하는 글입니다.
categories: [studylog, algorithm]
related_posts: [/studylog/algorithm/content/, /studylog/algorithm/two/]
comments: true
# hide_description: true
sitemap: true
---

* this unordered seed list will be replaced by the toc
{:toc}

## 이진 탐색(Binary Search)
> 정렬된 상태의 데이터에서 특정 값을 빠르게 탐색하는 방법

- 시간 복잡도: O(logN)

### 탐색 과정
❗️ 데이터가 정렬된 상태에서 이진 탐색 가능 ❗️

#### 기준 정하기
1. 찾고자 하는 값과 데이터의 중앙값을 비교
2. 찾고자 하는 값이 더 [작으면/크면] 데이터의 [왼쪽/오른쪽] 부분에서 이진 탐색

### 구현 
#### 반복문
![image](/assets/study/algorithm/search/binarySearch_for.png)

#### 재귀 호출
![image](/assets/study/algorithm/search/binarySearch_recursive.png)


### lower bound search ✨ 
> 찾고자 하는 값보다 크거나 같은 것 중에서 가장 작은 값을 찾아주는 이분검색방법

### upper bound search
> 찾고자 하는 값보다 큰 값들 중에서 가장 작은 값을 찾아주는 이분검색방법


### upper bound search 

### 관련 문제
#### 문제1. 백준[10815] 숫자코드
![image](/assets/study/algorithm/search/bj10815a.png)

결과 및 작성 코드
![Image](/assets/study/algorithm/search/bj10815b.png)
![Image](/assets/study/algorithm/search/bj10815c.png)

> **비교적 높은 오버헤드를 갖는 재귀함수 대신 반복문을 이용하여 이진탐색을 진행하였다.**

#### 문제2. 백준[13702] 이상한 술집
![image](/assets/study/algorithm/search/bj13702a.png)
 
 작성 코드
 ![image](/assets/study/algorithm/search/bj13702b.png)
> **이진탐색을 이용하여 시간 복잡도 O(N)은 불가능 하기에 O(NlogN)으로 작성함**
최대값이 필요하기에 right를 반환


<hr>



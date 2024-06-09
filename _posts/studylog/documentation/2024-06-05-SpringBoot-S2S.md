---
layout: post
title: "서버 간 통신"
description: >
    데이터 사전 검증과 오류를 처리하기 위한 방법을 알아보기.
categories: [studylog, documentation]
related_posts: [/studylog/documentation/Spring&SpringBoot/, 
/studylog/documentation/SpringBoot-Validation-Exception/,
/studylog/documentation/SpringBoot-Actuator/]
comments: false
sitemap: false
cover:  false
image: 
  path: /assets/study/spring/springBoot/S2S.jpg
---

* this unordered seed list will be replaced by toc as unordered list 
{:toc}


## 서버 간 통신 방법
<hr>

`MSA`와 같이 다른 서버로 웹 요청을 보내고 응답을 받을 수 있게 도와주는<br>RestTemplate과 WebClient에 대해 알아보자.
{:.lead}

```md
💡 MSA란?
마이크로서비스 아키텍처(MSA)로, 애플리케이션이 가지고 있는 기능(서비스)이 하나의 비즈니스 범위만 가지는 형태.
```

### RestTemplate이란?
<hr>

> 스프링에서 HTTP 통신 기능을 손쉽게 사용하도록 설계된 템플릿.

- RESTful 형식을 갖춘 템플릿.
- 동기 방식 처리(default) / 비동기 방식은 `AsyncRestTemplate` 사용.
- HTTP 요청 후 JSON, XML, 문자열 등의 다양한 형식으로 응답 받음.
- 블로킹 I/O 기반의 동기 방식을 사용.
- 다른 API를 호출 시 HTTP 헤더에 다양한 값 설정 가능.

#### RestTemplate 동작 원리 
<hr>

1. RestTemplate 선어하고 URI와 HTTP 메서드, Body 등을 설정한다.

2. 외부 API로 요청을 보내게 되면 HttpMessageConverter를 통해 RequestEntity를 요청 메시지 변환한다.

3. 요청된 메시지를 CLientHttpRequestFactory를 통해 ClientHttpRequest로 가져온 후 외부 API로 요청을 보낸다.

4. 외부에서 요청에 대한 응답을 받으면 RestTemplate은 ResponseErrorHandler로 오류를 확인하고, 오류가 있다면 ClientHttpResponse에서 응답 데이터를 처리한다.

5. 받은 응답 데이터가 정상이라면 다시 한번 HttpMessageConverter를 거쳐 자바 객체로 변환해서 애플리케이션으로 반환한다.

#### RestTemplate 사용하기
<hr>

##### RestTemplate 구현하기
```java
@Service
public class RestTmeplateService {
    
    public String getName
}
```
RestTemplateService의 GET 예제
{:.figcaption}

현업에서 많이 쓰이나 지원 중단(deprecated)된 상태라 `WebClient` 방식 또한 알아두어야 한다.
{:.lead}

### WebClient란?
<hr>


#### WebClient 사용하기
<hr>

##### WebClient 구현하기
```java

```

## 📄 참고문서
{:.lead}
<hr>
<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=296591989">스프링 부트 핵심 가이드</a> 책을 기반으로 작성하였습니다.

Continue with [연관관계 매핑](2024-05-25-SpringBoot-RelationMapping.md){:.heading.flip-title}
{:.read-more}
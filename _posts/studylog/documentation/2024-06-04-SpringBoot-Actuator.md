---
layout: post
title: "액추에이터"
description: >
    데이터 사전 검증과 오류를 처리하기 위한 방법을 알아보기.
categories: [studylog, documentation]
related_posts: [/studylog/documentation/Spring&SpringBoot/, 
/studylog/documentation/SpringBoot-Validation-Exception/,
/studylog/documentation/SpringBoot-RelationMapping/]
comments: false
sitemap: false
cover:  false
image: 
  path: /assets/study/spring/springBoot/Validation-Exception.jpg
---

* this unordered seed list will be replaced by toc as unordered list 
{:toc}

## 액추에이터(Actuator)
<hr>

> HTTP 엔드포인트나 `JMX`를 활용해 애플리케이션을 모니터링하고 관리할 수 있는 기능을 제공한다.
{:.}

```md
💡 JMX란?
JMX(Java Management Extensions)는 실행 중인 애플리케이션의 상태를 모니터링하고 설정을 변경할 수 있게 해주는 API.
JMX를 통해 리소스 관리를 하려면 MBeans(Managed Beans)를 생성 필요.
```

### 액추에이터 종속성 추가 
<hr>

> 

#### 의존성 추가 
<hr>

> 

```java
<dependencies>
    ...
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    ...
</dependencies>
```
spring-boot-starter-actuator 의존성 추가
{:.figcaption}

#### 엔드포인트
<hr>

> 

```java
<dependencies>
    ...
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    ...
</dependencies>
```

#### 액추에이터 기능



## 📄 참고문서
{:.lead}
<hr>
<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=296591989">스프링 부트 핵심 가이드</a> 책을 기반으로 작성하였습니다.

Continue with [서버 간 통신](2024-06-05-SpringBoot-S2S.md){:.heading.flip-title}
{:.read-more}
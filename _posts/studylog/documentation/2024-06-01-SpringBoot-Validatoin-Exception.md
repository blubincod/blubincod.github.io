---
layout: post
title: "유효성 검사와 예외 처리"
description: >
    데이터 사전 검증과 오류를 처리하기 위한 방법을 알아보기.
categories: [studylog, documentation]
related_posts: [/studylog/documentation/Spring&SpringBoot/, 
/studylog/documentation/SpringBoot-JPA/,
/studylog/documentation/SpringBoot-RelationMapping/]
comments: false
sitemap: false
cover:  false
image: 
  path: /assets/study/spring/springBoot/Validation-Exception.jpg
---

* this unordered seed list will be replaced by toc as unordered list 
{:toc}


{:.lead}

## 유효성 검사
<hr>

> 애플리케이션의 비즈니스 로직이 제대로 동작하기 위한 데이터 사전 검증 작업으로, 예를 들어 `NullPointException`이 있다.

### Hibernate Validator
<hr>

> Bean Validation[^1] 명세의 구현체로, Spirng Boot에서 유효성 검사 표준으로 채택해서 사용하고 있다.

[^1]: 유효성 검사를 할 수 있도록 돕는 API.

- JSR-303: 도메일 모델에서 어노테이션을 통해 필드값을 검증한다.

### 스프링 부트에서 유효성 검사
<hr>

#### 의존성 추가 
<hr>

> 유효성 검사 기능은 `spring-boot-starter-web`에 포함되어 있었으나 `version 2.3` 이후로 별도의 라이브러리로 제공한다.

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

#### 대표적인 어노테이션

##### 문자열 검증
- @Null : null 값만 허용
- @NotNull : null을 허용하지 않고 "",""는 허용.
- @NotEmpty : null,""을 허용하지 않고 " "는 허용.
- @NotBlank : null,""," "을 허용하지 않음.

##### 최대값/최소값 검증
- BigDecimal, BigInteger, int, long 등의 타입을 지원.
- @DecimalMax(value = "$numberString") : $numberString보다 작은 값을 허용.
- @DecimalMax(value = "$numberString") : $numberString보다 큰 값을 허용.
- @Min(value = $number) : $number 이상의 값을 허용. 
- @Max(value = $number) : $number 아하의 값을 허용.

##### 이메일 검증
- @Email: 이메일 형식을 검사, ""는 허용.

##### Boolean 검증
- @AssertTrue: true인지 체크, null값은 체크하지 않음.
- @AssertFalse: false인지 체크, null값은 체크하지 않음.

##### 사용 예시
```java

@NotBlank
private String name;

@Email
private String email;

@Positive
private int count;

@AssertTrue
private boolean booleanCheck;

```

## 예외 처리 
<hr>

> Java에서 `try`, `catch`, `throw`로 오류를 처리하 듯, 스프링 부트에서도 편리하게 오류를 처리하는 기능을 제공한다.


### 예외 == 에러 ?
<hr>
예외(Exception)
{:.lead}
입력 값의 처리가 불가능하거나 참조된 값이 잘못된 경우 등 애플리케이션이 정장적으로 동작하지 못하는 상황으로<br> 설계를 통해 처리할 수 있다.

에러(Error)
{:.lead}
메모리 부족, 스택 오버플로우와 같이 주로 가상머신에서 발생시키는 것으로 애플리케이션 코드에서 처리할 수 있는 것이 거의 없다.

### 예외 클래스
<hr>

### 예외 처리 방법 
<hr>

> 예외가 발생했을 때 이를 처리하는 방법 중 크게 3개가 있다.

- 예외 복구
- 예외 처리 회피
- 예외 전환

#### 예외 복구 

> 예외 상황을 파악해서 문제를 해결하는 방식.

#### 예외 처리 회피

> 예외가 발생한 시점에서 바로 처리하지 않고 예외가 발생한 메서드를 호출한 곳에서<br> 에러 처리를 할 수 있게 전가하는 방식.

#### 예외 전환

> 앞의 두가지를 섞은 방식.

#### 스프링 부트의 예외 처리 방식
<hr>

> 


### 커스텀 예외
<hr>

> 예외로 처리할 영역이 늘어나고 예외 상황이 다양해지면서 사용하는 예외 타입도 많아진다.

#### 커스텀 예외 클래스 생성하기 
<hr>

## 📄 참고문서
{:.lead}
<hr>
<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=296591989">스프링 부트 핵심 가이드</a> 책을 기반으로 작성하였습니다.

Continue with [연관관계 매핑](2024-05-25-SpringBoot-RelationMapping.md){:.heading.flip-title}
{:.read-more}
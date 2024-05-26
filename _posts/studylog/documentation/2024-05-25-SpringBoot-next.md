---
layout: post
title: "연관관계 매핑"
description: >
    JPA를 사용하는 애플리케이션에서 엔티티간의 연관관계 설정하기.
categories: [studylog, documentation]
related_posts: [/studylog/documentation/SpringBoot/, 
/studylog/documentation/SpringBoot-API/,
/studylog/documentation/SpringBoot-JPA/]
comments: false
sitemap: false
cover:  false
image: 
  path: /assets/study/spring/springBoot/connect-zip.jpg
---

0. this unordered seed list will be replaced by toc as unordered list 
{:toc}

RDBMS에서 테이블 연관관계를 설정하듯 정확한 연관관계를 표현할 수 없지만<br>JPA를 사용하는 애플리케이션의 엔티티 간의 연관관계를 표현할 수 있다.
{:.lead}

## 연관관계 매핑 종류와 방향
- One To One: 일대일(1:1)
- One To Many: 일대다(1:N)
- Many To One: 다대일(N:1)
- Many To Many: 다대다(N:N)

### 일대일(1:1) 매핑
> 일대일로 매핑될 상품정보 테이블.
<hr>

![image](/assets/study/spring/springBoot/SprintBoot-RelationMapping.png)
```java
@Entity
@Table(name = "product_detail")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@public class ProductDetail extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private long id;

    private String description;

    @OneToOne
    @JoinColumn(name = "product_number")
    private Product product;
}
```
상품 테이블과 상품정보 테이블의 일대일 관계
{:.figcaption}

#### 일대일 단방향 매핑
#### 일대일 양방향 매핑 

### 일대다(1:N) 매핑
> IoC를 적용한 환경에서는 사용할 객체를 직접 생성하지 않고 객체의 생명주기 관리를 **외부**에 위임.<br>IoC를 통해 DI, AOP 등이 가능.<br>
<hr>

```java
@Entity
@Table(name = "product_detail")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@public class ProductDetail extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private long id;

    private String description;

    @OneToOne
    @JoinColumn(name = "product_number")
    private Product product;
}
```
상품 테이블과 상품정보 테이블의 일대일 관계
{:.figcaption}

#### 일대다 단방향 매핑
#### 일대다 양방향 매핑 
#### 다대일(N:1) 매핑
> IoC를 적용한 환경에서는 사용할 객체를 직접 생성하지 않고 객체의 생명주기 관리를 **외부**에 위임.<br>IoC를 통해 DI, AOP 등이 가능.<br>
<hr>

```java
@Entity
@Table(name = "product_detail")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@public class ProductDetail extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private long id;

    private String description;

    @OneToOne
    @JoinColumn(name = "product_number")
    private Product product;
}
```
상품 테이블과 상품정보 테이블의 일대일 관계
{:.figcaption}

#### 다대일 단방향 매핑
#### 다대일 양방향 매핑 
### 다대다(N:N) 매핑
> IoC를 적용한 환경에서는 사용할 객체를 직접 생성하지 않고 객체의 생명주기 관리를 **외부**에 위임.<br>IoC를 통해 DI, AOP 등이 가능.<br>
<hr>

```java
@Entity
@Table(name = "product_detail")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@public class ProductDetail extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private long id;

    private String description;

    @OneToOne
    @JoinColumn(name = "product_number")
    private Product product;
}
```
상품 테이블과 상품정보 테이블의 일대일 관계
{:.figcaption}

#### 다대다 단방향 매핑
#### 다대다 양방향 매핑 

### 영속성 전이 
#### 고아 객체




#### 의존성 주입 | DI (Dependency Injection)
> 제어 역전의 방법 중 하나로 외부 컨테이너가 생성한 객체를 주입받아 사용하는 방식.

##### 의존성 주입 받는 방법
- 생성자를 통한 의존성 주입
![image](/assets/study/spring/springBoot/di_constructor.png)

- 필드 객체 선언을 통한 의존성 주입
![image](/assets/study/spring/springBoot/di_field.png)

- setter 메서드를 통한 의존성 주입<br>
![image](/assets/study/spring/springBoot/di_setter.png)
<hr>

#### 관점 지향 프로그래밍 | AOP (Aspect Oriented Programming)
> **관점**을 기준으로 묶어 개발하는 방식.<br>

**관점 : 핵심 기능과 부가 기능으로 나뉜다.**

##### AOP 구현하는 방법 세가지
- 컴파일 과정에 삽입하는 방식
- 바이트코드를 메모리에 로드하는 과정에 삽입하는 방식
- 프록시 패턴을 이용한 방식
<hr>

## 스프링 부트(Spring Boot)
![image](/assets/study/spring/springBoot/springBootLogo.png)
> 스프링이 제공하는 다양한 프로젝트 중 하나로 모듈 추가로 인해 설정이 복잡해지는 문제를 해결하기 위해 등장.
<hr>

### 스프링 부트의 특징
#### 의존성 관리
>스프링 프레임워크
- 개발에 필요한 각 모듈의 의존성을 직접 설정해야 하고 호환 버전 또한 명시가 필요함.

>스프링 부트
- 'spring-boot-starter'라는 의존성을 제공하여 각 라이브러리의 기능과 관련해서 <br>자주 사용되고 서로 호환되는 버전의 모듈 조합을 제공

#### 자동 설정 
- 애플리케이션에 개발하는 데 필요한 의존성을 추가하면 프레임워크가 자동으로 관리.

#### 내장 WAS
- 각 웹 애플리케이션에 내장 WAS(Web Application Server)가 존재.<br>예를 들어 'spring-boot-starter-web' 라이브러리는 Tomcat을 내장.

#### 모니터링
- 서비스를 운영하는 시기에는 스레드, 메모리, 세션 등의 주요 요소들을 모니터링해야 하는데<br>스프링 부트는 스프링 부트 액추에이터(Spring Boot Actuator)라는 자체 모니터링 도구가 있음.

### 스프링 부트의 동작 방식
> spring-boot-starter-web 모듈을 사용하면 기본적으로 톰캣(Tomcat)을 사용하는 <br>스프링 MVC 구조를 기반으로 동작.
<hr>

## 스프링 부트 웹 애플리케이션 개발에 필요한 지식
### 레이어드 아키텍처
> 애플리케이션의 컴포넌트를 유사 관심사를 기준으로 묶어 수평적으로 구성한 구조.
<hr>

#### 프레젠테이션 계층
- 애플리케이션의 최상단 계층, 클라이언트의 요청을 해석하고 응답.
- UI나 API를 제공.
- 비즈니스 계층으로 요청을 위임하고 받은 결과를 응답.

#### 비즈니스 계층
- 애플리케이션이 제공하는 기능을 정의하고 세부 작업을 수행하는 도메인 객체를 통해 업무를 위임.
- DDD(Domain Driven Design) 기반의 아키텍처에서는 비즈니스 로직에 도메인이 포함되기도 하고,<br>별도로 도메인 계층을 두기도 함.

#### 데이터 접근 계층
- DB에 접근하는 일련의 작업을 수행.

### 디자인 패턴
> 소프트웨어를 설계할 때 자주 발생하는 문제들을 해결하기 위해 고안된 해결책.
<hr>

#### 생성 패턴
- 객체 생성에 사용되는 패턴, 객체를 수정해도 호출부가 영향을 받지 않음.
#### 구조 패턴
- 객체를 조합해서 더 큰 구조를 만드는 패턴.
#### 행위 패턴
- 객체 간의 알고리즘이나 책임 분배에 관한 패턴.
- 여러 객체를 이용해 작업을 분배.
<hr>


<hr>
<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=296591989">스프링 부트 핵심 가이드</a> 책을 기반으로 작성하였습니다.
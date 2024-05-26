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
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

* this unordered seed list will be replaced by toc as unordered list 
{:toc}

RDBMS에서 테이블 연관관계를 설정하듯 정확한 연관관계를 표현할 수 없지만<br>JPA를 사용하는 애플리케이션의 엔티티 간의 연관관계를 표현할 수 있다.
{:.lead}

## 연관관계 매핑 종류와 방향
- One To One: 일대일(1:1)
- One To Many: 일대다(1:N)
- Many To One: 다대일(N:1)
- Many To Many: 다대다(N:N)

### 일대일(1:1) 매핑
<hr>

> 일대일로 매핑될 상품정보 테이블.
{:.lead}

![image](/assets/study/spring/springBoot/SprintBoot-RelationMapping.png)

#### 일대일 단방향 매핑
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
    private Long id;

    private String description;

    @OneToOne
    @JoinColumn(name = "product_number")
    
    private Product product;
    
}
```
상품정보(ProductDetail) 엔티티
{:.figcaption}

#### 일대일 양방향 매핑 
```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "product")
@public class Product extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long number;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer price;
    
    @Column(nullable = false)
    private Integer stock;
    
    @OneToOne
    private ProductDetail productDetail;
    
}
```
일대일 양방향 매핑을 위한 상품(Product) 엔티티
{:.figcaption}

### 일대다(1:N), 다대일(N:1) 매핑
<hr>

![image](/assets/study/spring/springBoot/SprintBoot-RelationMapping2.png)

#### 1. 상품테이블 입장에서 볼 경우
##### 다대일 단방향 매핑
```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "provider")
@public class Provider extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

}
```
공급업체(Provider) 엔티티 
{:.figcaption}

```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "product")
@public class Product extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long number;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer price;
    
    @Column(nullable = false)
    private Integer stock;
    
    @OneToOne(mappedBy = "product")
    @ToString.Exclude
    private ProductDetail productDetail;
    
    @ManyToOne
    @JoinColumn(name = "prvider_id")
    @ToString.Exclude
    private Provider provider;
    
}
```
상품 엔티티와 공급업체 엔티티의 다대일 연관관계 설정
{:.figcaption}

##### 다대일 양방향 매핑 
```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "provider")
@public class Provider extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    @OneToMany(mappedBy = "provider", fetch = FetchType.EAGER)
    @ToString.Exclude
    private List<Product> productList = new ArrayList<>();

}
```
공급업체 엔티티와 상품 엔티티의 일대다 연관관계 설정
{:.figcaption}

#### 2. 공급업체 테이블 에서 볼 경우
##### 일대다 단방향 매핑
```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "provider")
@public class Provider extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

}
```
공급업체(Provider) 엔티티 
{:.figcaption}

```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "product")
@public class Product extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long number;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer price;
    
    @Column(nullable = false)
    private Integer stock;
    
    @OneToOne(mappedBy = "product")
    @ToString.Exclude
    private ProductDetail productDetail;
    
    @ManyToOne
    @JoinColumn(name = "prvider_id")
    @ToString.Exclude
    private Provider provider;
    
}
```
상품 엔티티와 공급업체 엔티티의 다대일 연관관계 설정
{:.figcaption}

##### 일대다 양방향 매핑 
```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "provider")
@public class Provider extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    @OneToMany(mappedBy = "provider", fetch = FetchType.EAGER)
    @ToString.Exclude
    private List<Product> productList = new ArrayList<>();

}
```
공급업체 엔티티와 상품 엔티티의 일대다 연관관계 설정
{:.figcaption}
### 다대다(N:N) 매핑
<hr>

> 각 엔티티에서 서로를 리스트로 가지는 구조가 만들어진다.<br>이런 경우에는 교차 엔티티라고 부르는 중간 테이블 생성하여 일대다 OR 다대일 관계소 해소한다.<br>
{:.lead}

~~실무에서 거의 사용되지 않는 구성이라고 한다.~~
{:.faded}

#### 한 종류의 상품이 여러 생산업체를 통해 생산되고, 생산업체 한 곳에 여러 상품을 생산하는 경우.

##### 다대다 단방향 매핑
##### 일대다 양방향 매핑 
```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "producer")
@public class Producer extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;
    
    private String name;

    @ManyToMany
    @ToString.Exclude
    private List<Product> products = new ArrayList<>();

    public void addProduct(Product product){
        products.add(product);
    }

}
```
생산업체 엔티티
{:.figcaption}

##### 다대다 양방향 매핑 
```java
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true);
@EqualsAndHashCode(callSupeer =true)
@Table(name = "product")
@public class Product extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long number;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer price;
    
    @Column(nullable = false)
    private Integer stock;
    
    @OneToOne(mappedBy = "product")
    @ToString.Exclude
    private ProductDetail productDetail;
    
    @ManyToMany
    @ToString.Exclude
    private List<Producer> producers = new ArrayList<>();
    
    public void addProducer(Producer producer){
        this.producers.add(producer);
    }
    
}
```
상품 엔티티에서 생산업체 엔티티 연관관계 설정
{:.figcaption}

### 영속성 전이(Cascade)
<hr>

> 특정 엔티티의 영속성 상태를 변경할 때 <br>그 엔티티와 엔티티의 영속성에도 영향을 미쳐 영속성 상태를 변경하는 것을 의미한다.
{:.lead}

영속성 타입의 종류
{:.lead}

|:--:|:--:|
|종류|설명|
|ALL|모든 영속 상태 변경에 대해 영속성 전이를 적용|
|PERSIST|엔티티가 영속화할 때 연관된 엔티티도 함께 영속화|
|MERGE|엔티티를 영속성 컨텍스트에 병합할 때 연관된 엔티티도 병합|
|REMOVE|엔티티를 제거할 때 연관된 엔티티도 제거|
|REFRESH|엔티티를 새로고침할 때 연관된 엔티티도 새로고침|
|DETACH|엔티티를 영속성 컨텍스트에서 제외하면 연관된 엔티티도 제외|

#### 고아(Orphan) 객체
<hr>

> 부모 엔티티와 연관관계가 끊어진 엔티티를 의미한다. 

## 📄 참고문서
{:.lead}
<hr>
<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=296591989">스프링 부트 핵심 가이드</a> 책을 기반으로 작성하였습니다.
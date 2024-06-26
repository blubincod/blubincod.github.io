---
layout: post
title:  "데이터베이스 연동"
description: >
    데이터베이스 연동하기.
hide_description: true
categories: [studylog,documentation]
related_posts: 
    - /studylog/documentation/Spring&SpringBoot/
    - /studylog/documentation/SpringBoot-API/
    - /studylog/documentation/SpringBoot-JPA/
comments: false
cover: true
image: 
  path: /assets/img/posts/devlog/mariadb-foundation-logo.jpg
sitemap: false
---

* this unordered seed list will be replaced by the toc
{:toc}

## 알아두기
### ORM (Object Relational Mapping)
<hr>

> 객체 관계 매핑을 의미하며, 객체와 RDB(Relational Database)의 테이블을 자동으로 매핑하는 방법.
{:.lead}
💡 객체지향 언어에서의 객체는 클래스를 의미한다.
{:.note title="note"}
### JPA (Java Persistence API)
> 자바 진영의 ORM 기술 표준으로 채택된 인터페이스 모음.
{:.lead}
### Hibernate
> 자바의 ORM 프레임워크로, JPA가 정의하는 인터페이스를 구현하고 있는 JPA 구현체 중 하나.
{:.lead}

## 데이터베이스 연동하기
<hr>

```md 
개발 환경
Developer Tools : Lombok, Spring Configuration Processor
Web             : Spring Web
SQL             : Spring JPA, MariaDB Driver
```
### 프로젝트 설정
`file: resources/application.properties`
```py
spring.datasource.driverClassName=org.mariadb.jdbc.Driver
spring.datasource.url=jdbc:mariadb://localhost:3306/springboot
spring.datasource.username=root

spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```
application.properties
{:.figcaption}

### 1. 엔티티 설계
<hr>

엔티티(Entity)<br>
&emsp;Spring Data JPA를 사용하여 직접 쿼리를 작성하지 않고 데이터베이스 테이블을 생성하게 하는 것.
{:.note title="info"}

```java
@Entity: 해당 클래스가 엔티티임을 명시하기 위해 사용.
@Table: 클래스 이름과 테이블의 이름이 다르게 지정되어야 하는 경우 사용.
@Id: 선언된 필드는 테이블의 기본값 역할로 사용.

@GeneratedValue: '@Id'와 함께 사용되며, 해당 필드의 값을 어떤 방식으로 자동으로 생성할지 결정할 때 사용.
    - AUTO: 기본값으로, 데이터베이스에 맞게 자동 생성.
    - IDENTITY: AUTO_INCREMENT를 사용해 기본값 생성.
    - SEQUENCE: '@SequenceGenerator' 어노테이션으로 식별자 생성기를 생성하고 값을 자동 주입 받음.
    - TABLE: 어떤 DBMS를 사용하더라도 동일하게 동작하기를 원할 경우 사용.
 
@Transient: 선언된 필드를 데이터베이스에서는 이용하고 싶지 않을 경우 사용.

@Column: 엔티티 클래스의 필드는 자동으로 테이블 칼럼으로 매핑.
    - nullable: 레코드를 생성할 때 칼럼 값에 null 처리가 가능한지를 명시.
```

### 2. 레포지토리 인터페이스 설계
<hr>

### 3. 레포지토리 인터페이스 생성
<hr>

레포지토리를 생성하기 위해 접근하려는 테이블과 매핑되는 엔티티에 대한 인터페이스를 생성하고 `JpaRepository` 상속받기
{:.note title=""}
```java
public interface ProductRepository extends JpaRepository<Product, Long> {

}
```
레포지토리 인터페이스
{:.figcaption}

```java
public interface JpaRepository<T, ID> extends PagingAndSortingRepository<T, ID>,
QueryByExampleExecutor<T> {
    List<T> findAll();
    
    List<T> findAll();
    
    List<> findAllById(Iterable<ID> ids);
    
    ... 
```
JPARepository에서 제공하는 기본 메서드 일부
{:.figcaption}

```java
// 엔티티 관련 어노테이션(anotation)
@Etity
@Table(name = "product")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTIRY)
    private long number;
    
    @Column(nullable =false)
    private String name;
    
    @Column(nullable =false)
    private Integer price;
    
    private LocalDateTime createdAt;
    
}
```
엔티티 클래스
{:.figcaption}


### 4. DAO 설계
<hr>

DAO(Data Acess Object)<br>
&emsp;DB에 접근하기 위한 로직을 관리하기 위한 객체, 로직의 동작 과정에서 데이터를 조작하는 기능 수행.
{:.note title="info"}
💡 DAO 클래스는 일반적으로 `인터페이스 - 구현체` 구성으로 생성.
{:.note}
DAO
{:.lead}
```java
public interface ProductDAO {
    
    Product addProduct(Product product);
    
    Product selectProduct(Long number);
    
    Product updateProductName(Long number, String name) throws Exception;
    
    Product deleteProduct(Long number) throws Exception;
    
}
```
DAO 인터페이스
{:.figcaption}

```java
public class ProductDAOImpl implements ProductDAO {
    
    private final ProductRepository productRepository;
    
    @Autowired
    public ProductDAOImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    @Override
    public Product insertProduct(Product product) {
        return null;
    }
    
    ...
```
DAO 인터페이스의 구현체 클래스 일부
{:.figcaption}
### 5. DAO 연동을 위한 컨트롤러와 서비스 설계
<hr>
> 설계한 클라이언트 요청과 연결하기 위해 컨트롤러와 서비스 생성.
{:.lead}
DTO
{:.lead}

```java
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    
    private String name;
    private int price;
    private int stock;
    
}
```
ProductDto 클래스
{:.figcaption}

Service
{:.lead}

```java
public interface ProductService {
    
    ProductResponseDto getProduct(Long number);
    
    ProductResponseDto saveProduct(ProductDto productDto);
    
    ProductResponseDto changeProductName(Long number, String name) throws Exception;
    
    void deleteProduct(ProductDto productDto) throws Exception;
    
}
```
ProductService 인터페이스
{:.figcaption}

```java
public class ProductServiceImpl implements ProductService {
    
    private final ProductDAO productDAO;
    
    ProductResponseDto saveProduct(ProductDto productDto);
    
    ProductResponseDto changeProductName(Long number, String name) throws Exception;
    
    void deleteProduct(ProductDto productDto) throws Exception;
    
}
```
서비스 인터페이스 구현체 ProductServiceImpl 클래스
{:.figcaption}

Controller
{:.lead}

```java
@RestController
@RequestMapping("/product")
public class ProductController {
    
    private final ProductService productservice;
    
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    
    @GetMapping()
    public ResponseEntity<ProductResponseDto> getProduct(Long number) {
        ProductResponseDto productResponseDto = productService.getProduct(number);
        
        return ResponseEntity.status(HttpStatus.OK).body(productResponseDto);
    }
    
    @PostMapping()
    ...
    
    @PutMapping()
    ...
    
    @DeleteMapping()
    ...
    
}
```
서비스 인터페이스 구현체 ProductServiceImpl 클래스
{:.figcaption}

### 6. Swagger API를 이용하여 동작 확인
![image](/assets/img/posts/devlog/useSwagger.jpeg)
<hr>

## 📄 참고문서
<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=296591989">스프링 부트 핵심 가이드</a> 책을 기반으로 작성하였습니다.

Continue with [JPA 활용하기](2024-05-24-SpringBoot-JPA.md){:.heading.flip-title}
{:.read-more}
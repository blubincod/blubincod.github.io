---
layout: post
title: "API 작성 방법"
description: >
hide_description: true
categories: [studylog, documentation]
related_posts: 
    - /studylog/documentation/Spring&SpringBoot/
    - /studylog/documentation/SpringBoot-ConnectDB/
comments: false
sitemap: true
cover: true
image: /assets/study/spring/springBoot/apiLogo.png
---

* this unordered seed list will be replaced by toc as unordered list 
{:toc}

## API란
<hr>

> 프로그램을 작성하기 위한 일련의 부(Sub) 프로그램, 프로토콜 등을 정의하여 상호 작용을 하기 위한 인터페이스

<!-- ### REST API란 -->

### API 작성하기
```markdown
⚠️ 스프링 4.3 버전 이후로 @RequestMapping 어노테이션은 사용하지 않습니다. ⚠️
```

- @GetMapping

- @PostMapping

- @PutMapping

- @DeleteMapping

#### GET API
> 웹 애플리케이션 서버에서 값을 가져올 때 사용하는 API.
<hr>

```java
@RestController
public class DiaryController {
    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @GetMapping("/read/diary")
    List<Diary> readDiary(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return diaryService.readDiary(date);
    }
}
```


#### POST API
> 웹 애플리케이션을 통해 데이터베이스 등의 저장소에 리소스를 저장할 떄 사용되는 API.
<hr>
- POST API에서는 저장하고자 하는 리소스나 값을 HTTP 바디(body)에 담아 서버에 전달

```java
@RestController
public class DiaryController {
    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @PostMapping("/create/diary")
    void createDiary(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
                     @RequestBody String text) {
        diaryService.createDiary(date, text);
    }
}
```
> @RequestParam
- HTTP 요청의 쿼리 파라미터(query parameter)를 메서드 매개변수에 매핑하는 데 사용.

> @RequestBody
-  HTTP 요청의 본문(body)을 메서드 매개변수에 매핑하는 데 사용.

#### PUT API
> 같은 저장소에 존재하는 리소스 값을 업데이트 하는데 사용하는 API.
<hr>
- POST API와 거의 동일하며 리소스를 HTTP 바디(body)에 담아 서버에 전달

```java
@RestController
public class DiaryController {
    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }
    
    @PutMapping("/update/diary")
    void updateDiary(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
                     @RequestBody String text) {
        diaryService.updateDiary(date, text);
    }
}
```

#### DELETE API
> 저장소에 있는 리소스를 삭제할 때 사용하는 API.
<hr>
- GET 메서드와 같이 URI에 값을 넣어 요청 받는 형식
- 데이터베이스나 캐시에 있는 리소스 값을 삭제하는 역할 수행

```java
@RestController
public class DiaryController {
    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @DeleteMapping("/delete/diary")
    void deleteDiary(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        diaryService.deleteDiary(date);
    }
}
```
<hr>

### DTO 
> DTO(Data Transfer Object)는 다른 레이어  간의 데이터 교환에 활용하며<br>각 클래스 및 인터페이스를 호출하면서 전달하는 매개변수로 사용되는 데이터 객체.

- 데이터를 교환하는 용도
- 로직이 포함되지 않음

```java
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
    private String name;
    private String age;
    private String Organization;
}
```

### REST API를 문서화(Documentation) 도구
![image](/assets/study/spring/springBoot/swaggerLogo.png){: width="150" height="150"}
- Swagger

![image](/assets/study/spring/springBoot/redocLogo.png){: width="150" height="150"}
- ReDoc

![image](/assets/study/spring/springBoot/gitbookLogo.png){: width="150" height="150"}
- GitBook

#### Swagger를 선택하여 사용하기
> SwaggerConfig 생성 

```java
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("zero.weather"))
                .paths(PathSelectors.any())
                .build().apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("날씨 일기 프로젝트")
                .description("날씨 일기를 CRUD 할 수 있는 백엔드 API 입니다.")
                .version("2.0")
                .build();
    }
}
```

> Swagger 접속 - **http://{서버 경로}/swagger-ui/index.html#/**<br>

![image](/assets/study/spring/springBoot/swagger.png)
정리된 문서 형태로 작성한 API를 확인할 수 있다.<br>


### 로깅 라이브러리 - Logback
> 상태나 동작 정보를 시간순으로 기록하며 가장 많이 사용되는 로깅 프레임워크<br>

- 5개의 로그 레벨(TRACE, DEBUG, INFO, WARN, ERROR)을 설정 가능.
- 실제 운영 환경과 개발 환경에서 각각 다른 출력 레벨을 설정해서 로그 확인.
- 설정 파일을 일정 시간마다 스캔하여 애플리케이션을 재가동 필요 없음.
- 저장된 로그 파일에 대한 보관 기간 등을 설정해서 관리 가능.

#### Logback 설정 예시

<details>
<summary>펼치기</summary>
<div markdown="1">
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<configuration>
    <property name="LOGS_PATH" value="./logs"/>
    <property name="LOGS_LEVEL" value="INFO"/>

    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <layout class="ch.qos.logback.classic.PatternLayout">
            <pattern>%d{HH:mm} %-5level %logger{36} - %msg%n</pattern>
        </layout>
    </appender>

    <appender name="FILE"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOGS_PATH}/log_file.log</file>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>[%d{yyyy-MM-dd HH:mm:ss}:%-3relative][%thread] %-5level
                %logger{35} - %msg%n
            </pattern>
            <charset>UTF-8</charset>
        </encoder>
        <rollingPolicy
                class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${LOGS_PATH}/%d{yyyy-MM-dd}_%i.log
            </fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy
                    class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>10MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <maxHistory>60</maxHistory>
        </rollingPolicy>
    </appender>

    <!-- Error Appender -->
    <appender name="ERROR"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOGS_PATH}/error_file.log</file>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>[%d{yyyy-MM-dd HH:mm:ss}:%-3relative][%thread] %-5level
                %logger{35} - %msg%n]
            </pattern>
            <charset>UTF-8</charset>
        </encoder>
        <!-- Rolling 정책 -->
        <rollingPolicy
                class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- .gz,.zip 등을 넣으면 자동 일자별 로그파일 압축 -->
            <fileNamePattern>${LOGS_PATH}/%d{yyyy-MM-dd}_error.log
            </fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>ERROR</level>
        </filter>
    </appender>

    <root level="${LOGS_LEVEL}">
        <appender-ref ref="FILE"/>
        <appender-ref ref="STDOUT"/>
        <appender-ref ref="ERROR"/>
    </root>
</configuration>
```
</div>
</details>

<hr>

## 📄 참고문서
<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=296591989">스프링 부트 핵심 가이드</a> 책을 기반으로 작성하였습니다.

Continue with [데이터베이스 연동](2024-05-23-SpringBoot-ConnectDB.md){:.heading.flip-title}
{:.read-more}
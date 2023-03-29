### 2023.03.28

#### JPA 학습 후 진행 예정(기존 MainServer 수정 예정)

### 2023.03.25

#### 관계형 데이터베이스 구축

1. 테이블 구성.
* 설비 이력 관리 테이블 - equipment
* A/S 관리 테이블 - afterservice
* 회원 정보 테이블 - member
* 자재 정보 테이블 - materials
* 자재 분류 정보 테이블 - materials_group
* 규격 정보 테이블 - specification
* 생산 계획 및 실적 테이블 - production_plan
* 거래처 정보 테이블 - customer
* 발주 정보 테이블 - order
* 수주 정보 테이블 - receiveorder
* 엔지니어 정보 테이블 - eng

2. 조인 테이블 추가.
* 회원사 설비 소유 테이블 - own

3. EER-Diagram 작성.
* 제 1 정규화 : 모든 튜플을 원자값으로 구성하였다.
* 제 2 정규화 : 모든 애트리뷰트가 기본키에 완전함수종속 되도록 릴레이션을 분리하였다.
* 제 3 정규화 : 이행적 함수 종속성을 제거하였다.

4. Spring Boot - MainServer 프로젝트 생성
* RestController 구성
* Service 구성
* JDB Connector, DAO 구성
* Domain Object 구성

5. MainServer - Database 연동 테스트
* 완료

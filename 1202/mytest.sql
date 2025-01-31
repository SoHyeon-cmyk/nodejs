DROP DATABASE if EXISTS mytest; #삭제
CREATE DATABASE mytest; #생성
USE mytest; #선택

CREATE TABLE emp(
	id INT PRIMARY KEY AUTO_INCREMENT
	, emp_name VARCHAR(20) NOT NULL
	, salary INT
);


INSERT INTO emp (emp_name, salary)
VALUES
('홍길동',1000),
('김철수',2000),
('박영희',500),
('김사과',10000),
('임꺽정',700),
('오렌지',600);

SELECT * FROM emp;

# check는 제약 조건으로 특정 컬럼의 값이 지정된 조건을 만족해야 함을 강조합니다(question칼럼의 값이 1,2,3중 하나여야 한다는 조건을 의미)
CREATE TABLE tbl_users(
	email VARCHAR(30) PRIMARY KEY
	, pw VARCHAR(200) NOT NULL
	, question INT NOT NULL CHECK(question IN(1,2,3))
	, answer VARCHAR(200) NOT NULL
	, created_date DATETIME DEFAULT NOW() NOT NULL
	, updated_date DATETIME DEFAULT NOW() NOT NULL
);

SELECT * FROM tbl_users;
DESC tbl_users;

TRUNCATE TABLE tbl_users;


# 경력을 저장하는 테이블
# id, 숫자 자동증가 기본키
# email, foriegne key(tbl_users의 email칼럼을 참조)
# company varchar(200) not null,
# position varchar(200) not null
# start_date date not null
# end_date date

	#tbl_user테이블의 email을 참조하여 외래키로 생성
CREATE TABLE tbl_careers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(30) NOT NULL REFERENCES tbl_users(email),
	company VARCHAR(200) NOT NULL,
	`position` VARCHAR(200) NOT NULL,
	start_date DATE NOT NULL,
	end_date DATE
);

#str_to_date('2024-01-01', '%Y-%m-%d') = 글자를 시간정보로 변경해주는 함수

INSERT INTO tbl_careers 
(email, company, `position`, start_date, end_date)
VALUES ('test1@test.com', '그린컴퓨터 아카데미', '교육부',STR_TO_DATE('2024-01-01', '%Y-%m-%d'), STR_TO_DATE('2024-12-31', '%Y-%m-%d'));

INSERT INTO tbl_careers 
(email, company, `position`, start_date, end_date)
VALUES ('test2@test.com', '스터디카페', '총무',STR_TO_DATE('2024-01-01', '%Y-%m-%d'), STR_TO_DATE('2024-12-31', '%Y-%m-%d'));

SELECT * FROM tbl_careers;
DESC tbl_careers;

SELECT * FROM tbl_careers
WHERE email='test1@test.com';

# DATE_FORMAT함수는 날짜정보의 폼을 변경해주는 함수
SELECT id, 
email, 
company, 
`position`,
DATE_FORMAT(start_date, '%Y년 %m월 %d일') start_date,
DATE_FORMAT(end_date, '%Y년 %m월 %d일') end_date
FROM tbl_careers;

INSERT INTO tbl_careers (email, company, `position`, start_date, end_date) 
VALUES
(
	'test@test.com',
	'더미텍스트',
	'더미텍스트',
	STR_TO_DATE('2024-01-01', '%Y-%m-%d'),
	STR_TO_DATE('2024-12-01', '%Y-%m-%d')
);

DELETE FROM tbl_careers
WHERE id=10;


SELECT email, 
DATE_FORMAT(created_date, '%Y년 %m월 %d일') created_date,
DATE_FORMAT(updated_date, '%Y년 %m월 %d일') updated_date 
FROM tbl_users
WHERE email = "test@test.com";

UPDATE tbl_careers
SET company = "수정될 글자",
`position` = "수정될 글자",
start_date = "2024-01-01",
end_date = "2024-02-02"
WHERE id = 39;

#활동게시물 테이블
CREATE TABLE tbl_activities (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(200) NOT NULL,
	content TEXT NOT NULL,
	writer_email VARCHAR(30),
	created_date DATETIME DEFAULT NOW() NOT NULL,
	updated_date DATETIME DEFAULT NOW() ON UPDATE NOW() NOT NULL,
	FOREIGN KEY (writer_email) REFERENCES tbl_users(email)
);

# 외래키 제약 조건 : FOREIGN KEY (writer_email) REFERENCES tbl_users(email) 부분은 tbl_activities 테이블의 writer_email열이 tbl_users테이블의 email 열에 있는 값 중 하나와 일치해야 한다는 것을 의미합니다.

# ON UPDATE NOW() : 이구문은 행이 업데이트 될때마다 updated_date 열의 값을 현재 시간으로 자동으로 갱신하도록 설정합니다.

# tbl_activities 테이블에 activity_view컬럼을 추가 (기본값 = 0)
ALTER TABLE tbl_activities
ADD activity_view INT DEFAULT 0;

# activity_view의 값을 수정
UPDATE tbl_activities
SET activity_view = 60
WHERE id = 1;

SELECT * FROM tbl_activities;

INSERT INTO tbl_activities (title, content, writer_email)
VALUES 
('제주도 여행후기', '제주도 여행을 놀러갔는데 너무 재미있었다', 'test@test.com'),
('아플때 팁', '아프기 전에 예방하는 습관이 중요합니다', 'test@test.com'),
('부산 여행 후기', '부산은 바다가 좋아요', 'test1@test.com'),
('강아지가 아플때', '강아지가 지금 아픈데 어떡해야하나요?', 'test1@test.com'),
('일본 여행 후기', '일본에 놀러갔다 왔어요', 'test2@test.com');

# 좋아요 테이블
CREATE TABLE tbl_activity_like (
	activity_id INT,
	email VARCHAR(30),
	PRIMARY KEY (activity_id, email),
	FOREIGN KEY (activity_id) REFERENCES tbl_activities(id),
	FOREIGN KEY (email) REFERENCES tbl_users(email)
);

SELECT * FROM tbl_activity_like;
DESC tbl_activity_like;

#1번 게시물에 3명이 좋아요를 누른 상태
INSERT INTO tbl_activity_like (activity_id, email)
VALUES 
(1, 'test1@test.com'),
(1, 'test2@test.com'),
(1, 'test3@test.com');

#2번 게시물에 2명이 좋아요를 누른 상태
INSERT INTO tbl_activity_like (activity_id, email)
VALUES 
(2, 'test1@test.com'),
(2, 'test2@test.com');

# 이미지 테이블
CREATE TABLE tbl_activity_img (
	activity_id INT,
	img_url VARCHAR(500),
	PRIMARY KEY (activity_id, img_url),
	FOREIGN KEY (activity_id) REFERENCES tbl_activities(id)
);

SELECT * FROM tbl_activity_img;

INSERT INTO tbl_activity_img (activity_id, img_url)
VALUES
(2, 'https://cdn.pixabay.com/photo/2023/06/11/16/06/switzerland-8056378_640.jpg'),
(2, 'https://cdn.pixabay.com/photo/2024/11/12/21/11/owl-9193004_640.jpg'),
(2, 'https://cdn.pixabay.com/photo/2024/03/12/15/42/greylag-goose-8629040_640.jpg');

# LIMIT = 결과중 처음부터 몇개만 가져오기
SELECT * FROM tbl_activities LIMIT 4; # 몇개의 데이터를 읽어올지 limit로 설정
SELECT * FROM tbl_activities LIMIT 2, 2; # 2번째부터 그 후 2개를 출력하기

# OFFSET = 어디서부터 가져올지
SELECT * FROM tbl_activities LIMIT 2 OFFSET 2; #2번째 행부터 4행까지 출력(4 ~ 5)

# 상위 3개의 결과를 조회
SELECT * FROM tbl_activities 
ORDER BY activity_view DESC
LIMIT 3;

# 첫 3개의 결과를 건너 뛰고 이후 결과에서 2개를 조회
SELECT * FROM tbl_activities 
ORDER BY activity_view DESC
LIMIT 2 OFFSET 3;

# 전체 게시물 갯수 조회하기
SELECT COUNT(*) "total cnt" FROM tbl_activities;

# inner join = 두테이블에서 같은 값만 조건에 만족하는 애들만 합친다.
SELECT a.id,
	a.title,
	a.content,
	a.writer_email,
	a.created_date,
	a.updated_date,
	a.activity_view,
	IFNULL(b.ac_like, 0) AS activity_like
FROM tbl_activities AS a 
LEFT OUTER JOIN (
	SELECT activity_id, COUNT(*) AS ac_like
	FROM tbl_activity_like
	GROUP BY activity_id
) AS b
ON a.id = b.activity_id
WHERE title LIKE '%여행%'
ORDER BY activity_like DESC
LIMIT 2 OFFSET 0;

#IFNULL(컬럼, 0) = 컬럼값이 null일 경우 0을 반환해라

# ROW_NUMBER() = 번호 매기기 (각 행에 고유한 번호를 부여하는 함수, 주로 데이터의 순서를 매기거나, 특정 조건에 따라 각 행에 번호를 붙여야 할때 사용)
SELECT activity_id, img_url, ROW_NUMBER() OVER(PARTITION BY activity_id)
FROM tbl_activity_img;

# OVER(PARTITION BY activity_id) = activity_id별로 각행에 번호를 매겨라(같은 activity_id를 가진 행들 사이에서 1,2,3...의 순서로 번호를 붙여라)


SELECT c.id,
	c.title,
	c.content,
	c.writer_email,
	c.created_date,
	c.updated_date,
	c.activity_view,
	c.activity_like,
	# d.email이 null인 경우 no를 그렇지 않은 경우 yes를 반환(좋아요를 눌렀는지 여부를 나타냄)
	if(d.email IS NULL, 'no', 'yes') liked 
FROM (SELECT a.id,
	a.title,
	a.content,
	a.writer_email,
	a.created_date,
	a.updated_date,
	a.activity_view,
	# tbl_activities에 좋아요 수를 포함시키며, 좋아요가 없는 경우 0으로 처리
	IFNULL(b.ac_like, 0) AS activity_like
FROM tbl_activities AS a 
# tbl_activities 테이블을 기준으로 tbl_activity_like테이블과 left outer join을 수행
LEFT OUTER JOIN (
	SELECT activity_id, COUNT(*) AS ac_like
	FROM tbl_activity_like
	GROUP BY activity_id
) AS b #tbl_activity_like테이블에서 activity_id별로 좋아요 갯수를 계산하고 이를 b라는 서브쿼리로 가져옵니다.
ON a.id = b.activity_id) AS c LEFT OUTER JOIN (
#이 서브쿼리는 tbl_activity_like 테이블에서 이메일이 test1@test.com인 좋아요 정보를 조회합니다.
SELECT * FROM tbl_activity_like
WHERE email = 'test1@test.com') AS d
# join연산을 사용할 때 두 데이블을 연결하는 조건
ON c.id = d.activity_id;





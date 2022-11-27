// stratagy 패턴: 객체가 할 수 있는 행위를 하이레벨과 로우레벨로 나눠서 구현합니다. 
// 하이레벨: 모든 객체가 상속받는 변하지 않는 큰 틀의 행동
// 로우레벨: (하이레벨을)상속받는 객체의 종류에 따라 디테일한 변화가 가능한 행동
// 객체지향의 4가지 특징: 추상화, 캡슐화, 다형성, 상속

// 커피만들기 클래스를 만든다면
/**
 * 1. 원두를 볶는다.
 * 2. 원두를 분쇄한다. 
 * 3. 아메리카노 커피를 만든다. <-- 하이레벨과 로우레벨로 나눈다.
*/

// 만약 다른 커피를 만들고 싶다면? 커피만들기 클래스에서 3번을 바꿔야 한다. 
/**
 * 1. 원두를 볶는다.
 * 2. 원두를 분쇄한다. 
 * 3. 하이레벨 --> 커피를 만든다.
 * 로우레벨 --> 우유를 첨가하고 추출액과 섞는다. (카페라떼)
 * 로우레벨 --> 필터를 설치하고 뜨거운 물을 붓는다. (필터커피)
 * 로우레벨 --> 차가운 물을 오랫동안 점적한다. (더치커피)
*/


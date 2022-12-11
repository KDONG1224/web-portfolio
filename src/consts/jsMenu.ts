interface JsMenusProps {
  key: string;
  name: string;
  url: string;
}

export const javscriptMenus = [
  {
    key: '01',
    name: '데이터 저장하기',
    url: 'javascriptRefer01'
  },
  ,
  {
    key: '02',
    name: '데이터 불러오기',
    url: 'javascriptRefer02'
  },
  {
    key: '03',
    name: '데이터 실행하기',
    url: 'javascriptRefer03'
  },
  {
    key: '04',
    name: '데이터 제어하기',
    url: 'javascriptRefer04'
  },
  {
    key: '05',
    name: '문자열 객체',
    url: 'javascriptRefer05'
  },
  {
    key: '06',
    name: '배열 객체',
    url: 'javascriptRefer06'
  },
  {
    key: '07',
    name: '날짜 객체',
    url: 'javascriptRefer07'
  },
  {
    key: '08',
    name: '수학 객체',
    url: 'javascriptRefer08'
  },
  {
    key: '09',
    name: '숫자 객체',
    url: 'javascriptRefer09'
  },
  {
    key: '10',
    name: '브라우저 객체',
    url: 'javascriptRefer10'
  },
  {
    key: '11',
    name: '요소 객체',
    url: 'javascriptRefer11'
  },
  {
    key: '12',
    name: '이벤트 객체',
    url: 'javascriptRefer12'
  }
];

export const javascriptReferV1 = [
  {
    key: '01',
    name: '변수 : 데이터 저장',
    href: '#sample01',
    codeView: `{
      var x = 100; //변수 x에 숫자 100을 저장
      var y = 200; //변수 y에 숫자 200을 저장
      var z = "javascript"; //변수 z에 문자 javascript 저장

      document.write("*** 01. 변수 ***"); //변수를 출력하게 하는 방법
      document.write(x);
      document.write(y);
      document.write(z);
  }`,
    result: [
      'var x = 100; //변수 x에 숫자 100을 저장',
      'var y = 200; //변수 y에 숫자 200을 저장',
      'var z = "javascript"; //변수 z에 문자 javascript 저장'
    ]
  },
  {
    key: '02',
    name: '변수 : 데이터 저장 + 데이터 변경',
    href: '#sample02',
    codeView: `{
      let x = 100;
      let y = 200;
      let z = "javascript";
      x = 300;     //변수 x의 값이 100에서 300으로 변경
      y = 400;
      z = "jquery"

      document.write("*** 02. 변수 : 데이터 저장 + 데이터 변경 ***"); 
      document.write(x);
      document.write(y);
      document.write(z);
  }`,
    result: ['x : 300', 'y : 400', 'z : jquery']
  },
  {
    key: '03',
    name: '변수 : 데이터 저장 + 데이터 변경 + 데이터 추가',
    href: '#sample03',
    codeView: `{
      let x = 100;
      let y = 200;
      let z = "javascript";
      x += 300;  // x = x + 300; (대입연산자 --> + = )
      y += 400;  // y = y + 400;
      z += "jquery";  // z = z + jquery;

      document.write("*** 03. 변수 ***");
      document.write(x);
      document.write(y);
      document.write(z);
  }`,
    result: ['x : 400', 'y : 600', 'z : javascriptjquery']
  },
  {
    key: '04',
    name: '상수 : 데이터 저장 (변하지 않음)',
    href: '#sample04',
    codeView: `{
      const x = 100;
      const y = 200;
      const z = "javascript";
      //x = 300;
      //y = 400;
      //z = "jquery";
      //Uncaught TypeError: Assignment to constant variable.

      document.write("*** 04. 상수 ****");
      document.write(x);
      document.write(y);
      document.write(z);
  }`,
    result: ['x : 100', 'y : 200', 'z : javascript']
  },
  {
    key: '05',
    name: '배열 : 데이터 저장 (여러개) : 표현 방법1',
    href: '#sample05',
    codeView: `{
      const arr = new Array();    //배열선언
      arr[0] = 100;               //첫번째 배열 저장소에 숫자 100을 저장
      arr[1] = 200;               //두번째 배열 저장소에 숫자 200을 저장
      arr[2] = "javascript";      //세번째 배열 저장소에 문자열 javascript를 저장

      document.write("*** 05. 배열 ***");
      document.write(arr[0]);
      document.write(arr[1]);
      document.write(arr[2]);
  }`,
    result: ['arr[0] : 100', 'arr[1] : 200', 'arr[2] : javascript']
  },
  {
    key: '06',
    name: '배열 : 데이터 저장 (여러개) : 표현 방법2',
    href: '#sample06',
    codeView: `{
      const arr = new Array(100, 200, "javascript");

      document.write("*** 06. 배열 ***");
      document.write(arr[0]);
      document.write(arr[1]);
      document.write(arr[2]);
  }`,
    result: ['arr[0] : 100', 'arr[1] : 200', 'arr[2] : javascript']
  },
  {
    key: '07',
    name: '배열 : 데이터 저장 (여러개) : 표현 방법3',
    href: '#sample07',
    codeView: `{
      const arr = [];             //배열 선언
      arr[0] = 100;   
      arr[1] = 200;   
      arr[2] = "javascript";   

      document.write("*** 07. 배열 ***");
      document.write(arr[0]);
      document.write(arr[1]);
      document.write(arr[2]);
  }`,
    result: ['arr[0] : 100', 'arr[1] : 200', 'arr[2] : javascript']
  },
  {
    key: '08',
    name: '배열 : 데이터 저장 (여러개) : 표현 방법4',
    href: '#sample08',
    codeView: `{
      const arr = [100, 200, "javascript"];       //배열 선언  

      document.write("*** 08. 배열 ***");
      document.write(arr[0]);
      document.write(arr[1]);
      document.write(arr[2]);
  }`,
    result: ['arr[0] : 100', 'arr[1] : 200', 'arr[2] : javascript']
  },
  {
    key: '09',
    name: '객체 : 데이터 저장 (키와 값) : 표현 방법1 : 객체 스타일',
    href: '#sample09',
    codeView: `{
      const obj = new Object();
      obj[0] = 100;
      obj[1] = 200;
      obj[2] = "javascript";

      document.write("*** 09. 객체 ***");
      document.write(obj[0]);
      document.write(obj[1]);
      document.write(obj[2]);
  }`,
    result: ['obj[0] : 100', 'obj[1] : 200', 'obj[2] : javascript']
  },
  {
    key: '10',
    name: '객체 : 데이터 저장 (키와 값) : 표현 방법2 : 배열 스타일',
    href: '#sample10',
    codeView: `{
      const obj = new Object();
      obj.a = 100;
      obj.b = 200;
      obj.c = "javascript";

      document.write("*** 10. 객체 ***);
      document.write(obj.a);
      document.write(obj.b);
      document.write(obj.c);
  }`,
    result: ['obj.a : 100', 'obj.b : 200', 'obj.c : javascript']
  },
  {
    key: '11',
    name: '객체 : 데이터 저장 (키와 값) : 표현 방법3',
    href: '#sample11',
    codeView: `{
      const obj = {};
      obj.a = 100;
      obj.b = 200;
      obj.c = "javascript";

      document.write("*** 11. 객체 ***");
      document.write(obj.a);
      document.write(obj.b);
      document.write(obj.c);
  }`,
    result: ['obj.a : 100', 'obj.b : 200', 'obj.c : javascript']
  },
  {
    key: '12',
    name: '객체 : 데이터 저장 (키와 값) : 표현 방법4',
    href: '#sample12',
    codeView: `{
      const obj = {a: 100, b: 200, c:"javascript"};  //가장 많이 사용하는 형태

      document.write("*** 12. 객체 ***");
      document.write(obj.a);
      document.write(obj.b);
      document.write(obj.c);
  }`,
    result: ['obj.a : 100', 'obj.b : 200', 'obj.c : javascript']
  },
  {
    key: '13',
    name: '객체 : 데이터 저장 (키와 값) : 표현 방법5 : 배열 속에 객체',
    href: '#sample13',
    codeView: `{
      const obj = {a: 100, b: 200, c:"javascript"};  //가장 많이 사용하는 형태

      const obj = [
          {a:100, b:200},
          {c:"javascript"}
      ];

      document.write("*** 13. 객체 ***");
      document.write(obj[0].a);
      document.write(obj[0].b);
      document.write(obj[1].c);

      // console.log(obj[0]); 콘솔로그 - 크롬 개발자 모드
  }`,
    result: ['obj[0].a : 100', 'obj[0].b : 200', 'obj[1].c : javascript']
  },
  {
    key: '14',
    name: '객체 : 데이터 저장 (키와 값) : 표현 방법6 : 객체 속에 배열',
    href: '#sample14',
    codeView: `{
      const obj = {
          a: 100,
          b: [200, 300],
          c: "javascript"
      }

      document.write("*** 14. 객체 ***");
      document.write(obj.a);
      document.write(obj.b);
      document.write(obj.b[0]);
      document.write(obj.b[1]);
      document.write(obj.c);
  }`,
    result: [
      'obj.a : 100',
      'obj.b : 200,300',
      'obj.b[0] : 200',
      'obj.b[1] : 300',
      'obj.c : javascript'
    ]
  },
  {
    key: '15',
    name: '객체 : 데이터 저장 (키와 값) : 표현 방법7 : 객체 속에 변수',
    href: '#sample15',
    codeView: `{
      const a = 100;
      const b = 200;
      const c = "javascript";

      const obj = { a, b, c}

      document.write("*** 15. 객체 ***); //실행문
      document.write(obj.a);
      document.write(obj.b);
      document.write(obj.c);
  }`,
    result: ['obj.a : 100', 'obj.b : 200', 'obj.c : javascript']
  },
  {
    key: '16',
    name: '객체 : 데이터 저장 (키와 값) : 표현 방법8 : 객체 속에 함수',
    href: '#sample16',
    codeView: `{
      const obj = {
          a: 100,
          b: [200, 300],
          c: "javascript",
          d: function(){
              document.write("javascript가 실행되었습);
          },
          e: function(){
              document.write( obj.c + "가 실행되었습);
          },
          f: function(){
              document.write( this.c + "가 실행되었습);
          }
      }

      document.write("*** 16. 객체 ***);
      document.write(obj.a);
      document.write(obj.b);
      document.write(obj.b[0]);
      document.write(obj.b[1]);
      document.write(obj.c);
      obj.d(); //실행문(함수)
      obj.e();
      obj.f();
  }`,
    result: [
      'obj.a : 100',
      'obj.b : 200,300',
      'obj.b[0] : 200',
      'obj.b[1] : 300',
      'obj.c : javascript',
      'obj.d() : javascript가 실행되었습니다.',
      'obj.e() : javascript가 실행되었습니다.',
      'obj.f() : javascript가 실행되었습니다.'
    ]
  },
  {
    key: '17',
    name: '변수의 종류 : 전역변수, 지역변수',
    href: '#sample17',
    codeView: `{
      document.write("*** 17. 변수의 종류 : 전역변수, 지역변수 ***");

      let x = 100;            //변수 설정 : 전역 변수
      let y = 200;
      let z = "javascript";
      let a = 300;

      function func(){
          let x = 100;            //변수 설정 : 지역 변수
          let y = 200;
          let z = "javascript";
          a = 400;            //전역 변수 : 변수 값이 300 -> 400 변경
          y = 500;            //지역 변수 : 변수 값이 200 -> 500 변경

          document.write("함수 안");
          document.write(x);
          document.write(y);
          document.write(z);
          document.write(a);
      }
      func();

      document.write("함수 밖");
      document.write(x);
      document.write(y);
      document.write(z);
      document.write(a);
  }`,
    result: [
      '함수 안',
      'x : 100',
      'y : 500',
      'z : javascript',
      'a : 400',
      '   ',
      '함수 밖',
      'x : 100',
      'y : 200',
      'z : javascript',
      'a : 400'
    ]
  },
  {
    key: '18',
    name: '변수의 변환 : 형 변환',
    href: '#sample18',
    codeView: `{
      document.write("*** 18. 변수의 변환 : 형 변환 ***");

      let x = 100;
      let y = "100";

      document.write("x : " + x + " : " + typeof(x));
      document.write("y : " + y + " : " + typeof(y));

      x = "" + x;     //숫자를 문자열로 형 변환
      document.write("x : " + x + " : " + typeof(x));

      y = Number(y);     //내장 객체(넘버)를 이용한 형 변환
      document.write("y : " + y + " : " + typeof(y));

      x = Number(x);
      document.write("x : " + x + " : " + typeof(x));

      y = String(y);     
      document.write("y : " + y + " : " + typeof(y));
  }`,
    result: [
      'x : number',
      'y : string',
      'x : string',
      'y : number',
      'x : number',
      'y : string'
    ]
  },
  {
    key: '19',
    name: '변수의 유형 : 데이터 타입',
    href: '#sample19',
    codeView: `{
      //변수 : 숫자(number), 문자(string), 함수(function), 배열(object),
      //       객체(object), 불린(트루폴스값: boolen), 특수값(null, undefined), 심볼(symbol)
          
      document.write("*** 19. 변수의 유형(데이터 타입) ***");
          
      let num = 100;
      let str = "javascript";
      let func = function(){};
      let arr = [];
      let obj = {};
      let boo = true;
      let nul;              //아무런 값이 없을 때
      let und = undefined;  //값이 정의 되어 있지 않을 때
      let sym = Symbol();
          
      document.write(typeof(num));
      document.write(typeof(str));
      document.write(typeof(func));
      document.write(typeof(arr));
      document.write(typeof(obj));
      document.write(typeof(boo));
      document.write(typeof(nul));
      document.write(typeof(und));
      document.write(typeof(sym));
  }`,
    result: [
      'num : number',
      'str : string',
      'func : function',
      'arr : object',
      'obj : object',
      'boo : boolean',
      'nul : undefined',
      'und : undefined',
      'sym : symbol'
    ]
  }
];

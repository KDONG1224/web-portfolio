export interface AlcholcupDataProps {
  id: number;
  type: string;
  name: string;
  img: string;
  price: number;
  likeNum: number;
  alc: number;
  stress: number;
  taste: string;
  feeling: string;
  condition: string;
  description: string;
}

export const alcholcupData: AlcholcupDataProps[] = [
  {
    id: 1,
    type: '위스키',
    name: '발렌타인(17년)',
    img: 'https://file.mk.co.kr/mkde/N0/2020/03/20200304_4411081_1583307027.jpg',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'clean',
    feeling: 'joy',
    condition: 'present',
    description:
      '스모키한 훈제향과 매운맛이 강하면서도 목으로 넘어가는느낌이 soft.'
  },
  {
    id: 2,
    type: '위스키',
    name: '잭다니엘(7년)',
    img: 'http://m.assabeer.com/web/product/big/202101/0de6da588d659d509a477b745154ea03.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'tough',
    feeling: 'joy',
    condition: 'party',
    description:
      '증류한 원액을 오크통에 숙성시키기 전, 사탕나무 단풍으로 숯으로 목탄 숙성법 과정을 거친다.'
  },
  {
    id: 3,
    type: '위스키',
    name: '조니워커(6년 레드라벨)',
    img: 'http://assabeer.com/web/product/small/b_246.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'sweet',
    feeling: 'joy',
    condition: 'party',
    description:
      '아일라 지역 몰트인 쿨일라의 비릿한 훈제향과 요오드 팅크향, 스카이 섬의 탈리스커에서 비롯되는 톡 쏘는 피트향과 끝맛에서 느껴지는 미네랄같은 느낌을 엿볼 수 있다.'
  },
  {
    id: 4,
    type: '위스키',
    name: '로얄 샬루트(21년)',
    img: 'https://blog.kakaocdn.net/dn/drLPFP/btqF3SgXcpZ/oloNdxklICNE3AJEab1Oik/img.jpg',
    price: 200000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'sweet',
    feeling: 'sadness',
    condition: 'present',
    description:
      '엘리자베스 2세 여왕의 대관식을 기념하기 위하여 생산된 스카치 위스키이다. 시바스 리갈로 유명한 시바스 브라더스에서 보유한 원액중 가장 귀중한 원액만을 모아 21년간 숙성하여 만들었다고 한다.'
  },
  {
    id: 5,
    type: '위스키',
    name: '시바스 리갈(18년산)',
    img: 'http://m.kanashop.kr/web/product/big/b-wk0094.jpg',
    price: 150000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'savory',
    feeling: 'sadness',
    condition: 'present',
    description:
      '벨벳처럼 부드러운 다크초콜릿 향, 우아한 꽃 향기와 달콤하게 잘 익은 스모크향이 어우러진 최상의 부드러움'
  },
  {
    id: 6,
    type: '위스키',
    name: '글렌피딕(12년)',
    img: 'http://m.kanashop.kr/web/product/big/20200505/dee6086e60ca279582edfc8187d8831c.jpg',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'sweet',
    feeling: 'sadness',
    condition: 'party',
    description:
      '버번위스키를 보관했던 미국산 오크 캐스크와 와인을 숙성했던 스페인산 오크 캐스크에 숙성된 원액에 매링튠을 추가하여 12년간 숙성한 술'
  },
  {
    id: 7,
    type: '위스키',
    name: '짐빔(4년 화이트라벨)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDy_spaOz5iCtVw4fWjAp4-w919iystwbT-U99NYbJrdcbqlMSU3IIFJnbhrNL37Ib26k&usqp=CAU',
    price: 500000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'clean',
    feeling: 'sadness',
    condition: 'party',
    description:
      '미국의 대표적인 버번 위스키 브랜드. 1795년까지 7대를 거슬러 올라가는 유구한 역사를 지닌 아메리칸 위스키이다'
  },
  {
    id: 8,
    type: '위스키',
    name: '크라운로얄',
    img: 'https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/f0f95512-c06b-4d29-b058-765389b2e593.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'sweet',
    feeling: 'anger',
    condition: 'party',
    description:
      '1934년 영국와 죠지6세가 캐나다를 방문했을 때 그 영광을 빛내기 위해 진상한 것이 바로 크라운 로얄이다. 이 술은 캐나디언 위스키의 전반적 특징인 가벼움을 지니면서도 fruit이 은은하게 스며 나오며 비단같이 부드러운 맛을 내는 최고급 블렌디드 위스키로서 주원료인 호밀과 밀,옥수수를 엿기름으로 당화시켜 발효 후 섭씨 95도이하에서 증류시켜 오크통에서 3-6년을 저장,숙성시켰다.'
  },
  {
    id: 9,
    type: '위스키',
    name: '제임슨',
    img: 'http://m.kanashop.kr/web/product/big/b-wk0075.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'clean',
    feeling: 'anger',
    condition: 'alone',
    description:
      '달달한 향과 대조적인 부드러운 뒷맛으로 비교적 호불호가 갈리는 브랜드 중 하나. 부드럽고 균형감 있는 맛 때문에 커피나 크림, 우유를 재료로 한 칵테일 베이스로 가장 많이 추천되지만, 정작 니트나 스트레이트 스타일을 즐기는 위스키 매니아들은 특징이 없는 밋밋한 맛이라고 외면하기도 한다.'
  },
  {
    id: 10,
    type: '위스키',
    name: '산토리 가쿠빈',
    img: 'https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/6ce86d7d-a915-468b-9ed8-260340fcf863.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'sweet',
    feeling: 'disgust',
    condition: 'alone',
    description:
      '산토리에서 생산하는 40도의 대중적인 위스키. 이름의 유래가 되는 거북이 등딱지 모양의 각진 병이 트레이드 마크로, 야마자키와 하쿠슈 증류소의 몰트 위스키 원주를 자체 생산한 그레인 위스키와 배합하여 달달한 향기와 진한 맛, 드라이한 뒷맛이 특징이다.'
  },
  {
    id: 11,
    type: '위스키',
    name: '야마쟈키(12년)',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTVfMjI4/MDAxNTg0MjY1Mzk1NDMy.QF1fqyhBICECtJoY87cowsFV1GzimOhU8G_pbbQp4J0g.SnIOHVYjvDlV4LflW3wzAyxh6NDmFjRsGvxy4rDnb2cg.JPEG.ffwasr/1584265396553.jpg?type=w800',
    price: 200000,
    likeNum: 0,
    alc: 43,
    stress: 5,
    taste: 'light',
    feeling: 'disgust',
    condition: 'present',
    description:
      '4계절의 전형적인 일본기후, 풍부한 물, 안개가 발생하기 쉬운 지역등 위스키생산에 가장 이상적인 환경에서 생산된 일본 최상급 위스키'
  },
  {
    id: 12,
    type: '위스키',
    name: '임페리얼(12년)',
    img: 'https://assets.business.veluga.kr/media/public/Imperial_12.png',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'sweet',
    feeling: 'fear',
    condition: 'party',
    description:
      'balance가 훌륭하며, 과일과 계피의 달콤한 향미에 크리미한 텍스처가 길고 럭셔리한 여운을 준다.'
  },
  {
    id: 13,
    type: '위스키',
    name: '제이엔비(12년)',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTEyMDhfMjQ4/MDAxNTc1Nzk3NDQ2NzU0.KW2ERVoW9xGehcBKpJ6Cihbc5YY-Yb20uBKvJzM0IO8g.S8KVeOf6pq7PAZxJEA8L3-wF23x-h4r5lR70isNi4ZEg.JPEG.segejuru/21.jpg?type=w800',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'sweet',
    feeling: 'fear',
    condition: 'present',
    description:
      '1761년에 조지 3세 왕에게 인정을 받아 영국 왕실 주류 공급업체로 선정되어, J&B의 라벨에 왕실 로고를 사용할 수 있게 되었다. 또한, 이러한 이유로 J&B의 로고 뒤편에는 J&B를 인정한 조지 3세의 이름이 쓰여 있다.'
  },
  {
    id: 14,
    type: '위스키',
    name: '라가불린(16년)',
    img: 'https://m.ppwine.kr/web/product/big/202111/834c1faf55655c0b719a05923c81bb00.jpg',
    price: 200000,
    likeNum: 0,
    alc: 43,
    stress: 5,
    taste: 'flavorful',
    feeling: 'fear',
    condition: 'party',
    description:
      '라가불린은 게릭어로 “수차가 있는 분지”라는 뜻. 증류소는 1740년대 밀조시대부터 이어지는 전통을 지니고 있다. 현재, UD 사 클래식 몰트 시리즈의 하나. 숯향이 중후하며 강렬하다. 맛도 매우 중량감이 flavorful.'
  },
  {
    id: 15,
    type: '위스키',
    name: '맥켈란(12년)',
    img: 'https://blog.kakaocdn.net/dn/ceB9aX/btqWjqIpfgb/p5kLjmTSwbfDaH3kZ43He0/img.png',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'savory',
    feeling: 'joy',
    condition: 'alone',
    description:
      '글렌피딕, 더 글렌리벳, 글렌모렌지와 함께 세계적인 인지도를 가지고 있는 싱글 몰트 중 하나이며, 지역적인 분류로는 스페이사이드이다. 특히 고급 & 고가 위스키의 대명사격이며,[1] 위스키계의 롤스로이스라는 별명으로 불리기도 한다.'
  },
  {
    id: 16,
    type: '위스키',
    name: '부쉬밀(16년)',
    img: 'http://m.kanashop.kr/web/product/big/201904/f5e3fc2d35da26599fe84377e97aae3a.jpg',
    price: 200000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'light',
    feeling: 'joy',
    condition: 'present',
    description:
      '부쉬밀은 아일랜드에서 유일하게 100% 맥아 보리를 수작업으로 세 번 증류하고 단 10대의 포트 스틸에서 한정 생산하는 스몰 배치 방식을 고수하여 깊고 부드러운 맛과 향이 특징입니다.'
  },
  {
    id: 17,
    type: '위스키',
    name: '아녹(12년)',
    img: 'https://blog.kakaocdn.net/dn/bLgCD1/btq0LPSkT2a/WLJrLX3t0ALOuDaeB3tf5K/img.jpg',
    price: 150000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'fruit',
    feeling: 'joy',
    condition: 'party',
    description:
      '아녹 12년은 세계적으로 유명한 제품으로 신중히 선별한 셰리와 버번 캐스크의 조합에서 숙성하여 라이트하고 섬세한 신선한 시트러스와 꿀의 맛과 향, 놀랍도록 부드러운 피니쉬의 스페이사이드에서 보기 드문 Non-Sherried Style 위스키입니다.'
  },
  {
    id: 18,
    type: '위스키',
    name: '오반(14년)',
    img: 'https://t1.daumcdn.net/cfile/tistory/153455414FE5D47407',
    price: 150000,
    likeNum: 0,
    alc: 43,
    stress: 5,
    taste: 'balance',
    feeling: 'sadness',
    condition: 'party',
    description:
      '웨스트 하이랜드 스타일로 분류되며, 가볍고 달콤한 전형적인 하이랜드 스타일과 스모키하고 드라이한 섬 지역의 위스키 사이의 완벽한 balance를 갖춘 위스키로서 상당한 매니아층을 가지고 있다.'
  },
  {
    id: 19,
    type: '위스키',
    name: '더 글렌리벳(12년)',
    img: 'https://blog.kakaocdn.net/dn/0attS/btqLZIZRxxF/JX2kqc43rDk4820linfv3K/img.png',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'fruit',
    feeling: 'sadness',
    condition: 'alone',
    description:
      '더 글렌리벳 증류소에서 생산하는 싱글 몰트 스카치 위스키. 맥캘란, 글렌피딕, 글렌모렌지와 함께 세계에서 가장 잘나가는 싱글 몰트 위스키로 꼽힌다. 기본적으로 목이 긴 증류기를 사용하여 증류하며, 대부분 버번 캐스크에서 숙성시키는 관계로 바디감이 가볍고 맛이 부드러운 성격을 가진다.'
  },
  {
    id: 20,
    type: '보드카',
    name: '앱솔루트(오리지널)',
    img: 'http://m.kanashop.kr/web/product/big/201903/5f18dcb2f1681ba716760ce27c7b6c91.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'soft',
    feeling: 'sadness',
    condition: 'alone',
    description:
      '입안에 감도는 느낌이 부드럽고, 맛은 바닐라향, 마무리는 신선하고 풍부한 fruit이 나며 조화롭다.'
  },
  {
    id: 21,
    type: '보드카',
    name: '스미노프(오리지널)',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MTVfMzcg/MDAxNTAyNzgyMjA3Nzk5.5FIxzLtQAx5eZNn7ToVIywBzcvJ0Llp6XN_Kwh2080og.33Xe_jRPF8r58bbpDxshwJy34UoGTqBK5aL26I8tqZ4g.JPEG.vlfdn77/image_3398408101502782185700.jpg?type=w800',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'clean',
    feeling: 'sadness',
    condition: 'alone',
    description:
      '자작나무 숯을 이용해 10번의 여과를 거친 순수한 보드카로 무색, 무취, 무향의 가장 순수한 형태. 오렌지의 맛과 향이 느껴져요.'
  },
  {
    id: 22,
    type: '보드카',
    name: '벨루가',
    img: 'https://coinpan.com/files/attach/images/198/067/611/117/ad44f4f261af1fd7f54cb6d6313f27c0.JPG',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'party',
    description:
      '‘벨루가’라는 이름은 원래 철갑상어의 한 종이다. 이러한 벨루가의 고급 이미지를 활용해 프리미엄 보드카로 자리잡은 것이 바로 벨루가 보드카이다. 싹튼 밀을 사용하여 엿기름 향이 강하다'
  },
  {
    id: 23,
    type: '보드카',
    name: '그레이구스',
    img: 'http://m.kanashop.kr/web/product/big/b-m0046.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'fresh',
    feeling: 'joy',
    condition: 'party',
    description:
      '프랑스 코냐크 지방에서 생산되고 있으며, 양조 책임자는 프랑수아 티볼트(François Thibault)이다. 평균 알코올 도수는 40%이고, 프랑스 북부 피카르디주 지역의 비옥한 평야에서 재배된 겨울 밀을 사용한다'
  },
  {
    id: 24,
    type: '보드카',
    name: '스베드카(오리지널)',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAxODA2MDlfMTQ2/MDAxNTI4NTI5OTU1NjUw.ZpbXBPUSnsXWWPlakkLvTuairUzRCfEDDV8OIO0-EUQg.FWo7kA1kWcLl5q8sPFgH6Fw9yE50r4b4qcAS7DiROngg.JPEG.vlfdn77/%EC%8A%A4%EB%B2%A0%EB%93%9C%EC%B9%B4.jpeg?type=w800',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'fruit',
    feeling: 'joy',
    condition: 'party',
    description:
      '일반 보드카에비해 1.5배 많은 5번의 증류작업을 거쳐 잡향과 잡맛이 제거되어 부드럽고 clean'
  },
  {
    id: 25,
    type: '보드카',
    name: '벨베디어',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAxODAxMTdfMTY3/MDAxNTE2MTc4NTAxNTQ1.ybYU1mdPvnyHUnbFsGH75XlaCnzesIM7HfFME6UNS8wg.MAwNghC9BhIsng1IlYIgTpOZBGmnBWhk8wgK7L7XYUgg.JPEG.iamstartz/belvedere-pure-vodka-20cl_temp.jpg?type=w800',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'fresh',
    feeling: 'joy',
    condition: 'present',
    description:
      '벨베디어는 최상급 호밀인 단코우키 골드 라이를 사용하여 4번증류 하여 쌉싸름함과 시원함이 느껴진다.'
  },
  {
    id: 26,
    type: '보드카',
    name: '케틀원',
    img: 'https://blog.kakaocdn.net/dn/8eRmz/btqITvig6Xz/3r2IknHr4PktolVEa3xqf0/img.png',
    price: 200000,
    likeNum: 0,
    alc: 30,
    stress: 4,
    taste: 'clean',
    feeling: 'joy',
    condition: 'party',
    description:
      '네덜란드 보드카. 전통적인 증류기와 구리 냄비 증류기를 사용해 소량씩 손으로 만든다. 증류액의 첫 번째와 마지막 1백 갤런은 너무 강하거나 너무 약해서 버린다'
  },
  {
    id: 27,
    type: '사케',
    name: '쥬욘다이 혼마루 히덴타마가에시',
    img: 'http://cdn.shopify.com/s/files/1/0287/8075/7066/products/14_honmaru_1200x1200.jpg?v=1587447128',
    price: 200000,
    likeNum: 0,
    alc: 15,
    stress: 2,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'present',
    description:
      '드라이한 맛이 강하고 향기로운 향으로 인기를 얻었습니다. 과일 음양 향과 입안 가득 퍼지는 부드러운 단맛이 특징. 드라이한 맛과 부드러운 입맛의 균형을 이루고 있어 술 초보자도 추천합니다.'
  },
  {
    id: 28,
    type: '사케',
    name: '와타루세켄노 오니타이지',
    img: 'https://assets.business.veluga.kr/media/public/%E1%84%8F%E1%85%B5%E1%86%BC%E1%84%8C%E1%85%AE%E1%84%8C%E1%85%A9_%E1%84%8B%E1%85%AA%E1%84%90%E1%85%A1%E1%84%85%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8F%E1%85%A6%E1%86%AB%E1%84%82%E1%85%A9_%E1%84%8B%E1%85%A9%E1%84%82%E1%85%B5%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B52000.png',
    price: 50000,
    likeNum: 0,
    alc: 13.5,
    stress: 2,
    taste: 'fresh',
    feeling: 'joy',
    condition: 'present',
    description:
      '깔끔한 맛과 칼칼한 뒷맛이 특징입니다. 알콜향이 조금 나는 편이라 실온에 두고 마시는 것보다는 완전히 차갑게 마시거나 따뜻하게 마시는 것이 좋습니다.'
  },
  {
    id: 29,
    type: '사케',
    name: '월계관 준마이 750',
    img: 'https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/b6ede414-8785-442b-ae61-979f458b7b5d.jpg',
    price: 50000,
    likeNum: 0,
    alc: 15.6,
    stress: 2,
    taste: 'fruit',
    feeling: 'anger',
    condition: 'party',
    description:
      'fruit과 깔끔한 맛 덕에 미국 및 유럽에서 굉장히 인기가 좋습니다. 여러 요리들과 잘 어울리고 맛도 좋아 사케를 처음 접하는 사람들에게 흔히 추천되는 제품입니다.'
  },
  {
    id: 30,
    type: '사케',
    name: '오제키 사케 스모',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4WmRplXdk8P4iu-Uv-BPcgz1CuI3hQC1GA&usqp=CAU',
    price: 10000,
    likeNum: 0,
    alc: 13.5,
    stress: 2,
    taste: 'sweet',
    feeling: 'anger',
    condition: 'alone',
    description:
      '저렴한 가격으로도 사케만의 단 맛과 향을 은은하게 느낄 수 있는 가성비 좋은 제품입니다. 맛은 전체적으로 투명하고 깔끔한 편입니다.'
  },
  {
    id: 31,
    type: '사케',
    name: '간바레 오또상',
    img: 'https://assets.business.veluga.kr/media/public/%E1%84%92%E1%85%A1%E1%84%8F%E1%85%AE%E1%84%85%E1%85%B2%E1%84%8C%E1%85%AE%E1%84%8C%E1%85%A9_%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A1%E1%84%85%E1%85%A6_%E1%84%8B%E1%85%A9%E1%84%90%E1%85%A9%E1%84%89%E1%85%A1%E1%86%BC_900.png',
    price: 50000,
    likeNum: 0,
    alc: 14.5,
    stress: 2,
    taste: 'sweet',
    feeling: 'anger',
    condition: 'party',
    description:
      '약간 쌉쌀하면서도 달달한 맛이 느껴져 사케를 처음 접하는 사람들이 마셔도 부담이 없는 것이 특징입니다.'
  },
  {
    id: 32,
    type: '사케',
    name: '하쿠시카 준마이긴죠',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIPjSsIhS-bG-fhAAMQ-vlqhwfkmBrC01Cg&usqp=CAU',
    price: 50000,
    likeNum: 0,
    alc: 14.7,
    stress: 2,
    taste: 'balance',
    feeling: 'disgust',
    condition: 'party',
    description:
      '부드럽고 담백하며 적당히 드라이한 느낌이 나는 깔끔한 맛의 사케입니다. 신선한 fruit이 입에 감도는 맛과 향의 균형이 아주 잘 잡힌 제품'
  },
  {
    id: 33,
    type: '사케',
    name: '노호홍',
    img: 'https://assets.business.veluga.kr/media/public/%E1%84%8F%E1%85%B5%E1%86%BC%E1%84%8C%E1%85%AE%E1%84%8C%E1%85%A9_%E1%84%82%E1%85%A9%E1%84%92%E1%85%A9%E1%84%92%E1%85%A9%E1%86%BC500.png',
    price: 10000,
    likeNum: 0,
    alc: 13,
    stress: 2,
    taste: 'balance',
    feeling: 'disgust',
    condition: 'present',
    description:
      '알콜향이 적어 부드러운 감칠맛에 깔끔한 목넘김을 자랑하는 사케입니다. 이자카야에서 자주 볼 수 있는 제품으로 차갑게 하든 따뜻하게 하든 어떤 온도로 마셔도 맛의 변화가 크게 없는 무난한 제품입니다.'
  },
  {
    id: 34,
    type: '사케',
    name: '카오리 하나야구 준마이',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MjVfMTc0/MDAxNTYxNDYzNTIwMjU5.Ohc5hQyo09kQkdNVwu0gVRj5KtUR86yPjBHH2_r92aEg.GBS7I2I0BrClD43K90Fv1-k1m106cWhqji_T3ZWRN3Mg.PNG.pilg99/image.png?type=w800',
    price: 50000,
    likeNum: 0,
    alc: 15.5,
    stress: 2,
    taste: 'fruit',
    feeling: 'disgust',
    condition: 'present',
    description:
      '국내의 소믈리에들이 모여 평가한 팩사케들 중에서 1등을 수상한 제품으로 유명한 제품입니다. 사케 효모로 만든 것이 아닌 와인 효모로 빚은 사케로 fruit이 느껴지며, 산미와 단 맛의 균형이 좋은 사케입니다. 일본 요리는 물론 다양한 요리와도 잘 어울립니다.'
  },
  {
    id: 35,
    type: '사케',
    name: '마쯔리텐구',
    img: 'https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product_detail/6a1fdbdc-fbf9-40dd-a20b-e3b0d552306c.jpg',
    price: 50000,
    likeNum: 0,
    alc: 14.5,
    stress: 2,
    taste: 'soft',
    feeling: 'fear',
    condition: 'present',
    description:
      '마쯔리텐구는 깨끗하고 부드러운 맛의 사케로 샐러드나 회, 따뜻한 전골과도 조화가 좋습니다.'
  },
  {
    id: 36,
    type: '사케',
    name: '하쿠쯔루 마루',
    img: 'http://m.kanashop.kr/web/product/big/201901/c8f665690219b04ca3fd9b7b3e35ad48.jpg',
    price: 50000,
    likeNum: 0,
    alc: 13.5,
    stress: 2,
    taste: 'savory',
    feeling: 'fear',
    condition: 'present',
    description:
      '달콤하고 향긋한 향과 담백하고 부드러운 맛이 특징입니다. 알콜향이 강해 다른 사케들을 마시지 못하는 사람들도 쉽게 마실 수 있을 정도로 알콜향이 적으며 입문용 사케로 좋습니다.'
  },
  {
    id: 37,
    type: '소주',
    name: '참이슬 후레쉬',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjFfMTEw%2FMDAxNjA1OTUyNDE5Njg4.vCkJ-F7J1u4yGox6QUGMMZCG18FB1ILhF8_7EDkughAg.ft6LpRTJkgX3lCj6ruixWa3YAcpXode44FxA5QmPXRcg.JPEG.bananasim%2FDSC07639.JPG&type=a340',
    price: 10000,
    likeNum: 10,
    alc: 16.5,
    stress: 2,
    taste: 'clean',
    feeling: 'fear',
    condition: 'party',
    description:
      "전국 판매 1위! 서울 경기권의 참이슬 입니다.생산공법에 있어, 특허 받은 대나무 활성 숲으로 4번의 정제 과정을 거쳐 만들어지는 술 입니다. 유럽에서는 '건강 설탕'으로 불리고 있는 핀란드산 결정과당을 사용하여 깨끗한 첨가물로만 만들어진다고 합니다. 참이슬이 출시된 이후 꾸준한 사랑을 받고 있는 하이트진로의 '참이슬'은 서울 경기도 지역의 향토 소주라는 사실 알고 계셨나요? 소맥을 사랑하는 우리에겐 테슬라 라는 새로운 소맥 조합법이 등장하기도 하였습니다. 최근에는 필리핀 해외 법인까지 설립함과 동시에 한류 소주 열풍의 주역입니다."
  },
  {
    id: 38,
    type: '소주',
    name: '참이슬 오리지널',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODExMTNfMTg3%2FMDAxNTQyMDg0OTI4ODI2.G29Wc0jnnJ9ezcFLfUkh4DZgLof5Fe5Ks6jgyohq0i0g.PmBNZfNIen9bhGsSJw6Q-VM9BrSKY3hCmIWeRB7BrGQg.JPEG.naninaniyaa%2FSAM_1178.JPG&type=a340',
    price: 10000,
    likeNum: 9,
    alc: 20.1,
    stress: 3,
    taste: 'bitter',
    feeling: 'joy',
    condition: 'alone',
    description:
      '1924년 출시되어 지금까지도 사랑받고 있는 참이슬 오리지널. 대한민국 소주의 정통성을 지켜온 정통소주로 대나무 숯으로 4번 걸러, 숙취 유발 물질을 깨끗하게 제거하고 레귤러 대비 높은 도수를 보입니다. 깊고 진한 맛을 구현해 진짜 소주의 참맛을 아는 소비자들에게 인기 입니다!'
  },
  {
    id: 39,
    type: '소주',
    name: '처음처럼',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjJfMTA1%2FMDAxNjE2MzgxODgwMzMy.p3kgdccb2UD8VrAkgTdAVVd5bFH1W45qY9ZB5M_0_E0g.WfAh7depQ4je4L7LFLyp5KSVIe8z78cKS4-c7H-cLoMg.JPEG.mike8283%2F20210319_170751.jpg&type=a340',
    price: 10000,
    likeNum: 8,
    alc: 16.5,
    stress: 2,
    taste: 'soft',
    feeling: 'joy',
    condition: 'party',
    description:
      '리뉴얼 된 처음처럼은 기존 16.9도에서 0.4도나 낮아진 16.5도로 도수가 낮아진만큼 부담없이 홈술로 즐길 수 있는 부드러운 느낌의 술입니다'
  },
  {
    id: 40,
    type: '소주',
    name: '진로소주',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjNfMTI0%2FMDAxNjQwMjU1NTY5MDA5.Irmd05__zwucypTpGUvh5XrH2HSl94uzF8ZN5jPqUaYg.Oo6FRpoTsLQEKVt0DEnCKqPTsjj5Oq2Sy0CQH6qlPQog.JPEG.pjhmirr%2F1640255552071.jpg&type=sc960_832',
    price: 10000,
    likeNum: 7,
    alc: 16.9,
    stress: 2,
    taste: 'soft',
    feeling: 'joy',
    condition: 'party',
    description:
      '한잔 들이킬 때 알콜 향이 코를 먼저 자극하고 인공적인 단맛도 살짝 감돌면서 특유의 쓴맛이 입안에 남는 술입니다. 맛은 전체적으로 참이슬과 비슷하나 참이슬 보다는 목넘김이 부드럽습니다'
  },
  {
    id: 41,
    type: '소주',
    name: '좋은데이',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzExMDRfMzEg%2FMDAxNTA5NzM4NDA3Njk5.aT_arEJkjKIEFzKQcNUtc4NeokbklSZ1fWUdlu0l6igg.miOMb500KHPZltPSfVkLqjT_IwKBT38MK-EaQaR1P6Yg.JPEG.kimjumal%2F_SAM4892.JPG&type=a340',
    price: 10000,
    likeNum: 7,
    alc: 16.9,
    stress: 2,
    taste: 'light',
    feeling: 'joy',
    condition: 'party',
    description:
      '무가당 소주이기 때문에 마실 때 살이 덜 찌는 느낌을 받을 수 있습니다. 쓴맛이 적어 술술 넘어가는 맛이며, 족발에 잘 어울리는 술입니다'
  },
  {
    id: 42,
    type: '소주',
    name: '좋은데이 민트초코',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MThfMjg1%2FMDAxNjMxOTI4MzcyNzMz.RPdAAXltP3S_ofiWanwTGmVB1-aYOgak6UVP_3ml9UQg.tVINyq5hz63W2Zd1sjYylwmVuKRQi3mGQRidMoEDtcIg.JPEG.kkadungg%2FKakaoTalk_Photo_2021-09-18-10-22-38_003.jpeg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 12.5,
    stress: 2,
    taste: 'savory',
    feeling: 'joy',
    condition: 'party',
    description:
      '입에 머금을 때 딱 민트초코 맛이 느껴지며, 목으로 넘긴 후에는 알코올 향이 납니다. 민트향보다는 초코향이 더 강한 느낌의 한번쯤은 먹어보면 좋을 맛입니다'
  },
  {
    id: 43,
    type: '소주',
    name: '처음처럼 빠삐코',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMTNfMTEz%2FMDAxNjM2NzMzMjI3MTcw.YpyWiTWdH2geBTJ8axVLM3y0qna7JAIY_-PplPkTtpkg.7KfQL1JOM6AzqidIG8tjyXVjLHhCP2KYN40vVPyG80Ig.JPEG.eodnjs9694%2Foutput_3529449149.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 12,
    stress: 2,
    taste: 'sweet',
    feeling: 'joy',
    condition: 'party',
    description:
      '맛은 빠삐코를 녹여서 물을 섞은 맛이 나고, 마지막에 소주 특유의 알콜 느낌이 살짝 납니다. 도수가 낮은 것도 있지만 단 맛 때문에 술이 술술 넘어갑니다. '
  },
  {
    id: 44,
    type: '소주',
    name: '메로나에이슬',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDlfMzEg%2FMDAxNjMxMTEzNjUzMzkx._Wqw6Aci5vLQMIK16YzcJNT1sVnclH-zNlUrICG7lxkg.ZbudrudUBaXDQmWK0eZoLjLMhOgIMR5FFFsF5c6aTXkg.JPEG.box89080%2F20210908%25A3%25DF234056.jpg&type=ofullfill340_600',
    price: 10000,
    likeNum: 3,
    alc: 12,
    stress: 2,
    taste: 'sweet',
    feeling: 'joy',
    condition: 'alone',
    description:
      '메로나 원액이랑 소주랑 섞은 느낌이 들 정도로 강한 메로나 향이 느껴지는 이 술은 뭉근한 식감도 느껴져, 술을 못하거나 달달한 술을 좋아하는 분들에게 추천하고 싶은 술입니다'
  },
  {
    id: 45,
    type: '소주',
    name: '한라산',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160726_156%2Fwhitesnowice_1469511857998QNYXV_JPEG%2FDSCN5678.JPG&type=a340',
    price: 10000,
    likeNum: 5,
    alc: 21,
    stress: 3,
    taste: 'strong',
    feeling: 'joy',
    condition: 'alone',
    description:
      '참이슬 후레쉬보다는 쓰지만 혀 끝에서 입안으로 퍼질 때는 얕은 농도의 느낌이라 좀 더 라이트한 맛으로 느껴집니다. 이 때문에 생각보다 도수가 높게 느껴지지 않지만, 한잔 두잔 하다보면 생각보다 단맛이 나는데? 하는 순간 한병도 채 안돼서 취해있는 자기 자신을 볼 수 있습니다'
  },
  {
    id: 46,
    type: '소주',
    name: '순하리 처음처럼 유자',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJBjJfTh_kMVT82LAwmC2tEpjiQt43U8emsiLurYoTtSXGU3OVgK8mxIlPBdH5A-pKm8&usqp=CAU',
    price: 10000,
    likeNum: 1,
    alc: 14,
    stress: 2,
    taste: 'fruit',
    feeling: 'sadness',
    condition: 'party',
    description:
      '인공적인 향이나 맛도 없고 숙취도 없이 깔끔하게 맛있습니다. 단 맛은 나지 않고 유자 향이 섞인 소주 맛입니다'
  },
  {
    id: 47,
    type: '소주',
    name: '청포도에이슬',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDNfNTkg%2FMDAxNjIwMDQzNDUwNjU2.zOyygpZd1LmmCQuWBSQN-qU9mK5kqXW-qNxR1qo7GwIg.DC3cKfRQD3cuFGgTu2D65ccevnwFtj31lc1PGEG9XYog.JPEG.h_k1024%2FIMG_4449.JPG&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 13,
    stress: 2,
    taste: 'sweet',
    feeling: 'sadness',
    condition: 'party',
    description:
      '뚜껑을 여는 순간 청포도 사탕과 같은 상큼한 향이 확 풍깁니다. 첫맛도 달달한 음료수 같은데 끝맛과 목넘김에서 소주맛이 살짝 느껴지는 술 입니다. 술 못드시는 분들이 가볍게 즐길 수 있는 종류의 술입니다'
  },
  {
    id: 48,
    type: '소주',
    name: '일품진로1924',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MjBfMjAy%2FMDAxNTM0NzUxMDAyNzQw.PSlXfqyoGmlLkw_RPeUfTn2lNZijwrQFyXzL5LVuttcg.dD5MXVD1WVxzJUEV5bnjBaZNVb-jwkYJaj5ZIP2wQ_Qg.JPEG.errorplan%2F%25C1%25F8%25B7%25CE.jpg&type=a340',
    price: 10000,
    likeNum: 0,
    alc: 25,
    stress: 3,
    taste: 'flavorful',
    feeling: 'sadness',
    condition: 'present',
    description:
      '100년을 바라보는 하이트진로의 역사와 함께 장인의 정신이 깃들어 있는 명품주'
  },
  {
    id: 49,
    type: '소주',
    name: '진짜맛있는국화',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F009%2F2016%2F05%2F23%2F20160523_2481617_1463982732_99_20160523145304.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 12,
    stress: 2,
    taste: 'fresh',
    feeling: 'sadness',
    condition: 'party',
    description:
      '야생국화로 좋은 찹쌀과 좋은 누룩을 이용하여 만든 진짜 맛있는 국화'
  },
  {
    id: 50,
    type: '소주',
    name: '한라산올래',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEwMDFfMTg3%2FMDAxNTY5ODk0MjY4NzU0.lyvyRe36Ir2pe4848yuIctt66hXXcAwx9ilCcibSr1Yg.wi4v8PSAE3nKHKVVUHds_0T5t5bQm7Uo0aVW4I5cPLMg.JPEG.8full%2FIMG_8125.JPG&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 17.5,
    stress: 2,
    taste: 'soft',
    feeling: 'anger',
    condition: 'alone',
    description:
      '국내 생산 쌀을 증류한 증류식 소주원액의 거친향과 0도 이하에서 냉각하는 최첨단 냉각공법을 적용한 부드러운 저도수 소주'
  },
  {
    id: 51,
    type: '소주',
    name: '천년애',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MDlfMTc2%2FMDAxNTI4NTI1MjIwMjc2.1slNmMc5QZw61de4hmi4TI7xc9z3lEAcyFWbGUdNsjsg.cNPbCvGXbKPTyAhCYaWRKBdguMHm5KFPuoL5hGptJp0g.JPEG.smileshc%2FS5002214.JPG&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 17.2,
    stress: 2,
    taste: 'light',
    feeling: 'anger',
    condition: 'party',
    description:
      '천년애는 소주 특유의 알코올 향과 쓴맛을 줄이면서도 소주의 좋은 맛은 남겼습니다'
  },
  {
    id: 52,
    type: '소주',
    name: '푸른밤 긴밤',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDlfNzAg%2FMDAxNTIzMjQxNzY3MjI4.iQ3TAH3KDuv58SCVIay6Ruy5hSprDk8SMqxNbJUANMkg.gvkCbXPpItiZU8lVYd009z9wPDCMqEM6LlByRFopAn4g.JPEG.gittygittygitty%2FIMGP6358.JPG&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 20.1,
    stress: 3,
    taste: 'clean',
    feeling: 'anger',
    condition: 'alone',
    description:
      '정제수, 주정, 결정과당, 자일리톨, 효소처리, 스테비아, 정제소금, 토마틴의 첨가로 개운한 감미가 있는 소주입니다'
  },
  {
    id: 53,
    type: '소주',
    name: '잎새주 부라더',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150727_242%2Fduck_1052_1438007008125jvYA0_JPEG%2FIMG_1519.JPG&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 17.5,
    stress: 2,
    taste: 'soft',
    feeling: 'anger',
    condition: 'party',
    description:
      '알코올 함량 17.5도로 한결 부드러워진 맛과 센스있는 단풍잎 라벨 디자인을 마구마구 뽐내고 있습니다'
  },
  {
    id: 54,
    type: '소주',
    name: '복받은 부라더',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDFfMTI3%2FMDAxNjA2ODI4NjE3OTY5.YH3tAXmcwU6sD_MEO7HKChB33neLibJXGLM-ufYH65Mg.xPr6MJX7xv183B53boe_q92a6TuHfJl6BVGKnzIK6_wg.JPEG.shinhwa4466%2F1606828617565.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 12,
    stress: 2,
    taste: 'fruit',
    feeling: 'disgust',
    condition: 'present',
    description:
      '복받은 부라더는 진짜 복분자 과즙이 들어있어 붉은 색을 띤다는 점이 특징입니다'
  },
  {
    id: 55,
    type: '소주',
    name: '푸른밤 짧은밤',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAxMTFfMjYx%2FMDAxNTE1NjgyNTU1NDg0.YCpOAikFaPFfZ6zKUw1VqRXSiXbj-brJVRvIEly7VbAg.jryYFBRaBvphBm9wBd9JmQ2Z0C_ecTzjj7B1w-gcajcg.JPEG.dccooper%2FIMG_4166.JPG&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 16.9,
    stress: 2,
    taste: 'flavorful',
    feeling: 'disgust',
    condition: 'alone',
    description:
      '정제수, 주정, 결정과당, 자일리톨, 효소처리, 스테비아, 정제소금, 토마틴의 첨가로 개운한 감미가 있는 소주입니다'
  },
  {
    id: 56,
    type: '소주',
    name: '좋은데이 깔라만시',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEyMDVfMTQ1%2FMDAxNTQzOTc0NDg2Njg1.SL_Gak9Gr99gDT0DCpzbGsn9dXv_yTsqeB9U6qyMIbkg.R7jJfPynzuym5CS_x6zS813fFvlGlYgLLpC3EaLjaoMg.JPEG.stable_navel%2F%25B1%25F2%25B6%25F3%25B8%25B8%25BD%25C3.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 12.5,
    stress: 2,
    taste: 'savory',
    feeling: 'disgust',
    condition: 'party',
    description:
      '곡물을 발효시켜 증류한 주정에 깔라만시 원액을 담아 상큼한 맛이 특징입니다'
  },
  {
    id: 57,
    type: '막걸리',
    name: '대박',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMzFfNDIg%2FMDAxNTg1NjY0NzM1MDIw.xZcc9h885ft9ySt6cuzq31HD8rpmxGrGpk51VBaFpOcg.OYIAMdphGIOlR-uzMXO1mC3K9uwZJ7pDnXCTTz_tcn0g.JPEG.h09741%2FKakaoTalk_20200328_184947466.jpg&type=ofullfill340_600',
    price: 10000,
    likeNum: 1,
    alc: 6,
    stress: 1,
    taste: 'light',
    feeling: 'fear',
    condition: 'party',
    description:
      '최적의 발효 조건으로 막걸리 본연의 맛을 담아내다! 전통누룩과 막걸리 전용 효모로 빚어 막걸리 본연의 맛을 완성시킨 제품입니다'
  },
  {
    id: 58,
    type: '막걸리',
    name: '우국생',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5525%2F2021%2F07%2F08%2F0000270964_001_20210708093822107.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 6,
    stress: 1,
    taste: 'clean',
    feeling: 'fear',
    condition: 'party',
    description:
      '우국생은 발효제어기술과 전국 냉장유통에 이어, 차별화된 디자인과 맛과 향이 더욱 신선한 좋은 국내산 쌀만을 재료로 사용하여 우리술의 가치를 더욱 높인 막걸리입니다'
  },
  {
    id: 59,
    type: '막걸리',
    name: '옛날막걸리',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMDdfNjYg%2FMDAxNjQxNTQyMTMyMzM1.dYiSdgcXHhSsUqlkA62KarLDU2C7vyRKVJyTkPfYppog.fPRRQroOhHoFzwdN7qKMhZXpNT7ELFchFR6Z6uhfUzYg.JPEG.idealjhhj%2F6.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 7.8,
    stress: 1,
    taste: 'heavy',
    feeling: 'fear',
    condition: 'alone',
    description:
      '옛날 방식 그대로 누룩의 양을 3배 이상 사용하여 맛과 향이 매우 진하고 구수하며, 인공 감미료를 첨가하지 않은 막걸리입니다.'
  },
  {
    id: 60,
    type: '막걸리',
    name: '유산균막걸리',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjdfMTQ4%2FMDAxNjE5NTEzNTYwNTQ2.IDmg-H9s6G1a3AuZ_GJ78GmeWWApU8Fg9R10YH08wOIg.BBFgo1v06reNVk_5qlg3dF_zIhi1p9FzJTew3l5NU88g.JPEG.makmlie%2FIMG_4029%25282000%2529.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 5,
    stress: 1,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'party',
    description:
      '유산균 음료보다 100배, 일반 생막걸리보다 1,000배 많은 유산균 막걸리를 만들었습니다.'
  },
  {
    id: 61,
    type: '막걸리',
    name: '쌀막걸리',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjhfMTk5%2FMDAxNjIyMjEzOTg1NjM5.-wy5FWf7G26cqOj8q4l5LjPYsqLRe-o_K6JHUA9Lix0g.G8sqPO8-wTHexTs0FPL0Ic1jCRlKAwP5oTMlYbJvw_og.JPEG.gofus97%2F20210528_234116.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 6,
    stress: 1,
    taste: 'soft',
    feeling: 'joy',
    condition: 'party',
    description:
      '전통제법을 복원한 생쌀발효법으로 빚어 필수아미노산이 풍부하여 부드러운 맛이 일품인 우리쌀 100%로 빚은 우리 막걸리 입니다.'
  },
  {
    id: 62,
    type: '막걸리',
    name: '아이싱',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120920_260%2Fseojiwoo2000_1348115719246TgR7t_JPEG%2FIMG_7031.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 4,
    stress: 1,
    taste: 'savory',
    feeling: 'joy',
    condition: 'party',
    description:
      '아이싱 자몽은 하얀 쌀과 유산균 발효를 통해 부드러운 맛과 상큼함을 살려 뽀얗게 빚은 산뜻한 술입니다.'
  },
  {
    id: 63,
    type: '막걸리',
    name: '자연담은복분자막걸리',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210306_279%2F1614963701984jQymr_JPEG%2F22428335037558568_1846758901.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 6,
    stress: 1,
    taste: 'heavy',
    feeling: 'fear',
    condition: 'present',
    description:
      '자연담은 복분자 막걸리는 국산 쌀과 복분자로 빚은 고급 막걸리로 복분자의 깊은 맛과 우리 전통 막걸리의 조화로움을 한껏 느낄 수 있습니다.'
  },
  {
    id: 64,
    type: '막걸리',
    name: '자연담은오미자막걸리',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130223_59%2Fbinhyun0407_1361548735187mmFyF_JPEG%2F1.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 7,
    stress: 1,
    taste: 'fresh',
    feeling: 'fear',
    condition: 'present',
    description:
      '자연담은 오미자 막걸리는 국산 쌀과 오미자로 빚은 고급 막걸리로 오미자의 새콤한 맛과 우리 전통 막걸리의 조화로움을 한 껏 느낄 수 있습니다'
  },
  {
    id: 65,
    type: '막걸리',
    name: '자연담은더덕막걸리',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130309_139%2Fmusoi99_13628335745953EStM_JPEG%2F%25B8%25B6%25B4%25A9-%25BF%25CD%25C0%25CE-%25B5%25F0%25C4%25B5%25B4%25F5-%25B1%25B9%25BC%25F8%25B4%25E7-%25C0%25DA%25BF%25AC%25B4%25E3%25C0%25BA-%25B4%25F5%25B4%25F6%25B8%25B7%25B0%25C9%25B8%25AE-%25B8%25AE%25BA%25E4_07.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 7,
    stress: 1,
    taste: 'bitter',
    feeling: 'fear',
    condition: 'present',
    description:
      '자연담은 오미자 막걸리는 국산 쌀과 오미자로 빚은 고급 막걸리로 더덕의 쌉싸래한 맛과 우리 전통 막걸리의 조화로움을 한 껏 느낄 수 있습니다'
  },
  {
    id: 66,
    type: '막걸리',
    name: '자연담은인산막걸리',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130903_250%2Fbluebird302_1378177936873McsFD_JPEG%2FP6067029-RE.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 7,
    stress: 1,
    taste: 'flavorful',
    feeling: 'fear',
    condition: 'present',
    description:
      '자연담은 오미자 막걸리는 국산 쌀과 오미자로 빚은 고급 막걸리로 인삼 특유의 향과 우리 전통 막걸리의 조화로움을 한 껏 느낄 수 있습니다'
  },
  {
    id: 67,
    type: '막걸리',
    name: '첫술',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxOTEwMTdfMjgz%2FMDAxNTcxMjc5Nzc5MDgy.q206gbMteMKiMSTOrUuBt8a6kNjpLLQJThMtSb6IVqMg.jpbHmsx4AfDZbyaIjlWsGyac_-71rYLqleujhmpxcckg.PNG%2FIDyrj7ft-ZnS7yZFlCKS06nvjP4I.jpg&type=ofullfill340_600',
    price: 10000,
    likeNum: 1,
    alc: 7,
    stress: 1,
    taste: 'flavorful',
    feeling: 'fear',
    condition: 'present',
    description:
      '일년에 단 한 번, 첫 수확한 햅쌀로 한정수량만 빚는 프리미엄 생막걸리입니다.'
  },
  {
    id: 68,
    type: '막걸리',
    name: '막걸리카노',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MTdfNTIg%2FMDAxNTA1NjU1Nzk1ODEy.jCdWlbFlEI0RRm-lMi4p8Yg5cEhyTrfR-NNDBXH1_CIg.rcYaIiP8yTPtoeRnDHlR5t2u_U763YUYIMc7_tNIiUog.JPEG.kingnupi%2F2017-08-28-12-35-22.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 4,
    stress: 1,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'alone',
    description:
      '생쌀을 곱게 갈아 7일간 발효하여 더욱 깔끔하고 부드러워진 막걸리와 깊고 풍부한 로스팅 커피와의 블렌딩으로 완벽하게 균형잡힌 풍미와 입안 가득 깊은 맛을 느낄 수 있는 커피 막걸리입니다'
  },
  {
    id: 69,
    type: '막걸리',
    name: '쌀막걸리바나나',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTFfMjUw%2FMDAxNjQxOTAxNDMwNTUw.foTxPrqwRC6SubclOJtNMz3E_JNz3-QZXxx7Wm5E7iAg.JzehXbe403tXy1NauAvXcoWXRx_RfjXVZsPWp9zSbbEg.JPEG.bonobo007%2F2016%25A3%25DF1004%25A3%25DF21425000.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 4,
    stress: 1,
    taste: 'savory',
    feeling: 'joy',
    condition: 'party',
    description:
      '쌀로 빚은 술에 바나나를 넣은 신개념 술로, 탄산의 청량감과 낮은 알코올 도수로 누구나 가볍게 즐길 수 있습니다.'
  },
  {
    id: 70,
    type: '막걸리',
    name: '쌀막걸리복숭아',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160918_180%2Fdonga9mong_1474127298159WAEUk_JPEG%2Fimage_6918572711474126815027.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 3,
    stress: 1,
    taste: 'light',
    feeling: 'joy',
    condition: 'party',
    description:
      '쌀로 빚은 술에 복숭아를 넣은 신개념 술로, 그동안 막걸리를 경험하지 않았던 젊은 세대를 위한 새로운 스타일의 제품입니다.'
  },
  {
    id: 71,
    type: '막걸리',
    name: '쌀막걸리크림치즈',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAzMTdfMTc2%2FMDAxNDg5NzA3OTA0NzI0.Q4ehrQU5xywq28g05DLsdNJjIdSgsniYaWKXAt0LlEsg.IibOppars00DGPb8x-gcwz9hUxBW2bEVjpn6yMk-03Yg.JPEG.stable_navel%2F%25C4%25A1%25C1%25EE%25BE%25F7_%25C4%25A1%25BE%25F3%25BE%25F7.jpg&type=sc960_832',
    price: 10000,
    likeNum: 1,
    alc: 3,
    stress: 1,
    taste: 'soft',
    feeling: 'joy',
    condition: 'party',
    description:
      '쌀로 빚은 술에 크림치즈를 넣은 신개념 술입니다. 쌀의 부드러움에 크림치즈의 고소함, 탄산의 상쾌함까지 더해져 매콤한 음식이나 치즈가 토핑된 음식과도 잘 어울립니다.'
  },
  {
    id: 72,
    type: '막걸리',
    name: '장수생막걸리',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTlfNiAg%2FMDAxNjEzNjg0NjAxNTIy.S0HPGk1NAL8IMJ7Pdr5AudPhGhqfk1MpJUemLq5rrGwg.yCFy5asQrC4yAA4_45xEZFDcCd7HAHowQJTE60mkRgcg.JPEG.gofus97%2F20210219_061235.jpg&type=a340',
    price: 10000,
    likeNum: 1,
    alc: 6,
    stress: 1,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'party',
    description:
      '장수 생막걸리는 효묘균이 그대로 살아있습니다. 백미를 사용해 장기저온숙성 방식으로 만들어져 영양이 풍부하고 자연발효에 의한 탄산과 어울려 감칠맛과 청량감이 일품입니다. 또한 고품격 전통 막걸리의 대명사로서 트림과 숙취도 거의 없어 오랜시간동안 사랑을 받고 있습니다'
  },
  {
    id: 73,
    type: '와인',
    name: '서브미션',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F081%2F2020%2F09%2F25%2F0003126942_004_20200925050738157.jpg&type=a340',
    price: 100000,
    likeNum: 3,
    alc: 14.5,
    stress: 2,
    taste: 'heavy',
    feeling: 'joy',
    condition: 'party',
    description:
      '오크에 깊게 빠진 풍부한 아로마, 풀바디에 가까운 풍부한 탄닌과 구조감이 섬세하고 부드러운 피니시를 선사한다. 프렌치오크 70% 뉴오크 30% 10개월 오크숙성을 거치며 다크 푸르츠의 풍부한 향을 발산한다'
  },
  {
    id: 74,
    type: '와인',
    name: '텍스트북 나파 카베르네 소비뇽 2018',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMjlfMTU0%2FMDAxNTc3NTk3MzUwNDA5.k9tiGuJ5vFxfbdpBcXeeieufeV-Wha6ovE23y2-uDN4g.kteGhs2XvLPbx2qYB14M5D5MMNBbR2OIapdBbdd3hEIg.JPEG.factory0928%2F20191229_114732.jpg&type=ofullfill340_600',
    price: 100000,
    likeNum: 2,
    alc: 13.5,
    stress: 2,
    taste: 'heavy',
    feeling: 'joy',
    condition: 'party',
    description:
      '짙고 어두운 루비색상을 지니며 블루베리,레드베리,자두,육두구,바닐라향이 나타난다. 부드럽고 탄탄한 적당한 타닌감과 산미가 훌륭하게 조화를 이루고 긴 여운과 풀 바디감을 지닌 와인으로 나파 벨리의 레드와인의 정석인 와인이다'
  },
  {
    id: 75,
    type: '와인',
    name: '까시에로 까베르네 쇼비뇽',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjRfNTkg%2FMDAxNjQwMzA4ODM1MjE1.5ZRL45hyD3rHRFrpvj0L5GkS17vAHJo4PA4ITmjLzHkg.2as0Bgkyp1f22FAmUd_9d0uOoH7kuui0EGHFzrgjuKIg.PNG.dasol0_0%2Fimage.png&type=a340',
    price: 50000,
    likeNum: 1,
    alc: 13.5,
    stress: 2,
    taste: 'savory',
    feeling: 'joy',
    condition: 'party',
    description:
      '진한 자주색을 띠며 농익은 체리의 아로마향과 자두등의 fruit과 함께 타닌이 주는 질감이 부담없이 느껴지는 미디엄 바디의 와인이다. 약간의 쓴맛을 가지고 있지만 맛과 부케가 훌륭하고 균형잡힌 구조감과 여운을 가지고 있는 와인이다.'
  },
  {
    id: 76,
    type: '와인',
    name: '앙시앙땅',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjhfMTI3%2FMDAxNjM1NDAxNjM4Nzg3.AsssdxggqL03d9TmMuProbUddMF9JeRo3h1aB4sdjZAg.mVBRqU0SeNHbZcZHqXzD5jTKnNTgRzlmK4Sn5tirQ8cg.JPEG.cmsnjhj%2FP20211014_210926238_85BB6010-DFE0-41E7-BF25-7B79E59C4510.jpg&type=a340',
    price: 50000,
    likeNum: 1,
    alc: 13,
    stress: 2,
    taste: 'soft',
    feeling: 'joy',
    condition: 'party',
    description:
      '6개월 프렌치 오크 숙성한다. 맑은 중간루비 색상을 가졌다. 달콤한 딸기 등 붉은베리류와 스파이시한 향이 코를 자극한다. 드라이하고 풍부한 바디감을 가진 이 와인은 적당하고 부드러운 타닌을 가지고 있으며 블렉베리, 오크의 풍미와 함께 입안을 채운다.'
  },
  {
    id: 77,
    type: '와인',
    name: '몬테스알파',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDZfMTgw%2FMDAxNjMwODU1MTE0NzQy.xw4Tk1FXGlFP-C65foDpTsFHV-VbUYohXzZYsG2ZZXkg.nFmupDSyczI0yK6Fx7vkV47F6yMAnpElAecyvGmgu4Yg.PNG.rhdrnxhd0%2Fimage.png&type=a340',
    price: 50000,
    likeNum: 3,
    alc: 14,
    stress: 2,
    taste: 'fruit',
    feeling: 'sadness',
    condition: 'party',
    description:
      '강렬한 느낌을 주는 루비 색이 인상적인 이 와인은 열매 과일, 블랙커런트,시가 박스, 바닐라와 민트 향 등이 복합적이며, Fruit와 Oak의 느낌이 하나로 잘 화합하여 부드럽고 우아한 면모를 느낄 수 있다.'
  },
  {
    id: 78,
    type: '와인',
    name: '카멜로드',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjJfMjM4%2FMDAxNjIxNjkwODA3MDQy.PDYmF7zYrUv7RIrOl4p_n-L_nvIoMxv-X-MheCmo9vYg.f3xGfVMcioq-2fXZY7tGtGYYvKA7HX-PeYp7WdilHTUg.JPEG.bjh419%2FIMG_0733.jpg&type=a340',
    price: 50000,
    likeNum: 2,
    alc: 13.5,
    stress: 2,
    taste: 'fruit',
    feeling: 'sadness',
    condition: 'party',
    description:
      '밝은 루비의 빛깔을 낀다. 블랙체리, 딸기 등의 붉은 fruit과 스파이스, 가벼운 꽃향기를 느낄 수 있으며, 풍부하며 부드러운 질감과 긴 피니쉬가 특징이다. 미디움 정도의 산도감, 바디감을 느낄 수 있는 드라이한 와인이다'
  },
  {
    id: 79,
    type: '와인',
    name: '1865 까베르네 쇼비뇽',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131110_51%2Fsool5duk_13840807500162xbNy_JPEG%2F1865_%25B8%25AE%25C1%25A6%25B8%25A3%25B9%25D9_%25B1%25EE%25BA%25A3%25B8%25A3%25B3%25D7_%25BC%25D2%25BA%25F1%25B4%25A84.jpg&type=a340',
    price: 100000,
    likeNum: 5,
    alc: 14.5,
    stress: 2,
    taste: 'flavorful',
    feeling: 'sadness',
    condition: 'present',
    description:
      '짙은 흙내음이 풍부한 검붉은 과실향과 달콤한 바닐라, 부드러운 토스트의 기운과 잘 어우러져 복합적인 아로마를 형성한다. 풀바디의 파워풀한 와인으로 까베르네 소비뇽의 전형을 보여주는 와인이다'
  },
  {
    id: 80,
    type: '와인',
    name: '몬테스',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDNfMTI2%2FMDAxNjEyMzU2ODkyODM5.8ih7oV2SIsPDzsT4YJ_Qqw2UNakua3CD1OIgve1_fmUg.CyJYH0SDpM0-MjCajSOONd_lXm8L_vr-U6123U5o4G0g.JPEG.scu0%2F20210129%25A3%25DF193016.jpg&type=a340',
    price: 50000,
    likeNum: 4,
    alc: 14,
    stress: 2,
    taste: 'fruit',
    feeling: 'sadness',
    condition: 'party',
    description:
      '반짝이는 느낌의 진한 루비 빛깔의 와인으로 잘 조화된 향기를 가지고 있으며 특히 산딸기 같은 붉은 빛의 열매의 신선함과 캬라멜, 계피, 박하 등의 느낌을 함께 가지고 있습니다.'
  },
  {
    id: 81,
    type: '와인',
    name: '롱반 멜롯',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA2MDFfNzgg%2FMDAxNTkxMDIwMjQ5MTg4.Udh_SCq0DATDRGJH5zWafB86ZBp8jvqp-X_N_KyI_Kwg.HvMVlBWvS2h6iO0nL-aO8PuonUvcWRttOiUgR21fjBgg.JPEG%2FexternalFile.jpg&type=a340',
    price: 50000,
    likeNum: 3,
    alc: 13.5,
    stress: 2,
    taste: 'savory',
    feeling: 'sadness',
    condition: 'party',
    description:
      '밝은 루비빛으로 블랙베리,라즈베리,달콤한 향신료 아로마가 느껴지며 입에서는 과실 풍미와 함께 스모키함, 삼나무, 옅은 가죽 풍미도 느껴진다. 적절한 프렌치 오크 숙성을 통해 과실과 오크 풍미간의 balance, 복합적인 풍미, 다층적인 구조를 보여주며 긴 여운을 남긴다'
  },
  {
    id: 82,
    type: '맥주',
    name: '카스 프레시',
    img: 'http://www.taxtimes.co.kr/data/photos/mig_photos/2017/226640/226640_1.jpg',
    price: 10000,
    likeNum: 0,
    alc: 4.5,
    stress: 1,
    taste: 'clean',
    feeling: 'sadness',
    condition: 'alone',
    description:
      '맥주의 상쾌함과 깔끔한 맛을 한층 더 극대화한, 여러분의 인생 곳곳의 즐거운 순간들과 함께했을 때 가장 맛있게 즐길 수 있는 맥주입니다'
  },
  {
    id: 83,
    type: '맥주',
    name: '테라',
    img: 'https://img.hankyung.com/photo/202105/01.26324218.1.jpg',
    price: 10000,
    likeNum: 0,
    alc: 4.6,
    stress: 1,
    taste: 'clean',
    feeling: 'sadness',
    condition: 'alone',
    description:
      '세계 공기질 부문 1위 호주에서 자란 청정맥아와 오직 발효공정에서 나오는 리얼탄산을 100% 사용하여 거품은 조밀하고 탄산은 오래 지속됩니다.'
  },
  {
    id: 84,
    type: '맥주',
    name: '클라우드',
    img: 'https://company.lottechilsung.co.kr/common/images/product_view0202_bh3.jpg',
    price: 10000,
    likeNum: 0,
    alc: 5,
    stress: 1,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'alone',
    description:
      '100% 발효원액에 추가로 물을 타지 않은 오리지널 그래비티 공법으로 만들어 맛이 깊고 풍부한 맥주입니다.'
  },
  {
    id: 85,
    type: '맥주',
    name: '기네스',
    img: 'http://image.auction.co.kr/itemimage/18/b8/a7/18b8a7de26.jpg',
    price: 10000,
    likeNum: 0,
    alc: 4.2,
    stress: 1,
    taste: 'bitter',
    feeling: 'joy',
    condition: 'party',
    description:
      '기네스 오리지널은 최고급 양질의 맥아와 홉, 아일랜드 보리로 제조되었습니다. 선명한 맛의 기네스 오리지널은, 부드러우면서 크리미한 기네스 드래프트 혹은 포린 엑스트라 스타우트의 청량함과는 전적으로 다른 경험을 선사합니다.'
  },
  {
    id: 86,
    type: '맥주',
    name: '제주 위트 에일',
    img: 'https://cdn.imweb.me/thumbnail/20210801/8cbb4d920f3fd.png',
    price: 10000,
    likeNum: 0,
    alc: 5.3,
    stress: 1,
    taste: 'fresh',
    feeling: 'joy',
    condition: 'alone',
    description:
      '제주 위트 에일은 제주 감귤 껍질의 상큼함과 섬세한 꽃 향, 입 안 가득 부드럽게 퍼지는 시트러스향이 만나 산뜻한 끝 맛을 선사하는 밀맥주입니다.'
  },
  {
    id: 87,
    type: '맥주',
    name: '호가든 로제',
    img: 'http://www.consumernews.co.kr/news/photo/202004/604532_203833_1542.jpg',
    price: 10000,
    likeNum: 0,
    alc: 3,
    stress: 1,
    taste: 'soft',
    feeling: 'joy',
    condition: 'alone',
    description: '라즈베리가 첨가되어 상큼한, 꽃향이 나는 붉은빛의 맥주입니다.'
  },
  {
    id: 88,
    type: '맥주',
    name: '에델바이스',
    img: 'https://www.edelweissbeer.com/media/tl5f1bat/wheat-bottle-can-2x.png?quality=85',
    price: 10000,
    likeNum: 0,
    alc: 5,
    stress: 1,
    taste: 'savory',
    feeling: 'joy',
    condition: 'party',
    description:
      '순수한 알프스 산맥의 물을 사용하여 제조되며 풍부한 거품이 오래 지속됩니다'
  },
  {
    id: 89,
    type: '맥주',
    name: '곰표맥주',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjBfMTY2/MDAxNTk1MjM3MTY1NzQ0.po-0yDzBtQqJbWlI4gcej-NbVjmg2hT_qNXPkQ6fP5Eg.nQ19sJG0bhwUQ3xOZKJYQgO6tiFlihmHHTpVRleLeHwg.JPEG.decadentliz/IMG_8449_%EC%84%B8%EB%B8%90%EB%B8%8C%EB%A1%9C%EC%9D%B4_%EA%B3%B0%ED%91%9C_%EB%B0%80%EB%A7%A5%EC%A3%BC.JPG?type=w800',
    price: 10000,
    likeNum: 0,
    alc: 4.5,
    stress: 1,
    taste: 'fruit',
    feeling: 'joy',
    condition: 'alone',
    description:
      'CU와 대한제분이 콜라보로 만든, 레트로한 감성의 독특한 맥주입니다'
  },
  {
    id: 90,
    type: '맥주',
    name: '필스너 우르켈',
    img: 'https://img.hankyung.com/photo/201710/AE.15041121.1.jpg',
    price: 10000,
    likeNum: 0,
    alc: 4.4,
    stress: 1,
    taste: 'bitter',
    feeling: 'joy',
    condition: 'alone',
    description: '체코의 맥주로, 현존하는 모든 맑고 황금색인 라거 맥주의 원형'
  },
  {
    id: 91,
    type: '맥주',
    name: '칭다오',
    img: 'https://file.mk.co.kr/meet/neds/2021/05/image_readtop_2021_469918_16210635374646012.jpg',
    price: 10000,
    likeNum: 0,
    alc: 4.7,
    stress: 1,
    taste: 'fresh',
    feeling: 'joy',
    condition: 'party',
    description:
      '양꼬치엔 칭다오! 씁쓸한 맛이 적고 달싹하면서도 시원한 청량감을 주는 맛이 일품'
  },
  {
    id: 92,
    type: '맥주',
    name: '코젤다크',
    img: 'https://cphoto.asiae.co.kr/listimglink/6/2016060115505613526_1.jpg',
    price: 10000,
    likeNum: 0,
    alc: 3.8,
    stress: 1,
    taste: 'savory',
    feeling: 'joy',
    condition: 'party',
    description:
      '소시지, 햄 등 육류 안주에 어울리는, 쓴 맛이 적고 구수한 카라멜 향의 흑맥주'
  },
  {
    id: 93,
    type: '맥주',
    name: '하이네켄 오리지널',
    img: 'https://www.heineken.com/media-az/01pfxdqq/heineken-original-bottle.png?quality=85',
    price: 10000,
    likeNum: 0,
    alc: 5,
    stress: 1,
    taste: 'fresh',
    feeling: 'joy',
    condition: 'party',
    description:
      '1873년부터 양조된 최고의 맥주, 미세한 과일 향이 어우러진 깊은 풍미'
  },
  {
    id: 94,
    type: '맥주',
    name: '버드와이저',
    img: 'https://cdn.hkbs.co.kr/news/photo/201608/dfd0627b1d2f5d38775597c46aa84dfd092216.jpg',
    price: 10000,
    likeNum: 0,
    alc: 5,
    stress: 1,
    taste: 'clean',
    feeling: 'joy',
    condition: 'party',
    description:
      "King of Beers', 미국을 대표하는 맥주로, 매년 미국에서 판매량 1위를 놓치지 않는 앤하이저부시의 대표적인 상품"
  },
  {
    id: 95,
    type: '맥주',
    name: '아사히 수퍼드라이',
    img: 'https://w.namu.la/s/c226d5ff92742ad3c83b53b55442129f7bc59b9952a25544b509ac1a8cffc4e18aed03c94256612d14f3ebd0af768c5e91f63ca7ffc1060cec65f5378944e10178424c9e143ed0bd2234a991d1ac6daa52241391a8aa757d59fa8dda2bbf2e8c',
    price: 10000,
    likeNum: 0,
    alc: 5,
    stress: 1,
    taste: 'clean',
    feeling: 'joy',
    condition: 'party',
    description:
      '깔끔하고 상쾌한 맥주, 몇 잔을 마셔도 맛있는 맥주, 어떤 음식에도 잘 맞는 맥주'
  },
  {
    id: 96,
    type: '전통술',
    name: '이강주',
    img: 'http://leegangj.cdn3.cafe24.com/images/prods/leegangju/zoom/19bottle_01.png',
    price: 10000,
    likeNum: 0,
    alc: 19,
    stress: 2,
    taste: 'soft',
    feeling: 'disgust',
    condition: 'present',
    description:
      '조선 중엽부터 전라도와 황해도 지방에서 빚어온 한국의 전통민속주이다. 이름에 나타나 있는 것처럼 소주에 배(梨)와 생강(薑)을 첨가하여 만든 고급 약소주(藥燒酒)이며, 조선 3대 명주 중 하나'
  },
  {
    id: 97,
    type: '전통술',
    name: '감홍로',
    img: 'https://assets.business.veluga.kr/media/public/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%92%E1%85%A9%E1%86%BC%E1%84%85%E1%85%A9_%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A1%E1%84%80%E1%85%B5_700ml.png',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'savory',
    feeling: 'disgust',
    condition: 'present',
    description:
      '별주부전에서 토끼를 유혹하던 술. 평안도 지역에서 생산하던 술로, 은은한 붉은 색과 깊은 향이 특징. 조선 3대 명술 중 하나'
  },
  {
    id: 98,
    type: '전통술',
    name: '죽력고',
    img: 'https://assets.business.veluga.kr/media/public/%E1%84%8C%E1%85%AE%E1%86%A8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%80%E1%85%A9.png',
    price: 100000,
    likeNum: 0,
    alc: 32,
    stress: 4,
    taste: 'fresh',
    feeling: 'disgust',
    condition: 'present',
    description:
      '푸른 대나무를 숯불에 얹어 뽑아낸 죽력을 섞어 빚은 증류주로, 조선 3대 명주 중 하나'
  },
  {
    id: 99,
    type: '전통술',
    name: '풍정사계 춘',
    img: 'https://cdn.cbnews.kr/news/thumbnail/201903/108200_38951_411_v150.jpg',
    price: 50000,
    likeNum: 0,
    alc: 15,
    stress: 2,
    taste: 'soft',
    feeling: 'disgust',
    condition: 'present',
    description:
      '정의 자연을 정성껏 술독에 담아 맛과 향이 다른 네 가지 술에 春(봄·약주), 夏(여름·과하주), 秋(가을·탁주), 冬(겨울·증류식소주)으로 사계란 이름을 지었습니다.'
  },
  {
    id: 100,
    type: '전통술',
    name: '맑은 문희주',
    img: 'http://img.danawa.com/prod_img/500000/195/903/img/5903195_1.jpg?shrink=500:500&_v=20180831154451',
    price: 50000,
    likeNum: 0,
    alc: 13,
    stress: 2,
    taste: 'flavorful',
    feeling: 'sadness',
    condition: 'present',
    description:
      '재료를 세 번 덧담금 하는 전통 삼양주 기법으로 90일에서 100일간을 숙성시켜 빚고 있는데, 인공 감미료를 전혀 쓰지 않고 유기농 햇 찹쌀과 전통누룩 그리고 천연 암반수로만 빚어 숙취가 없고 풍미가 상당히 뛰어나다.'
  },
  {
    id: 101,
    type: '전통술',
    name: '문배술 40',
    img: 'http://img.wemep.co.kr/deal/5/070/2590705/ca3d629351b68d831d9cb0288b4af6436fb2dfbe.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'clean',
    feeling: 'sadness',
    condition: 'present',
    description: '일체의 첨가물 없는 깨끗한 소주, 달큰한 문배향과 깔끔한 끝 맛'
  },
  {
    id: 102,
    type: '전통술',
    name: '삼해소주',
    img: 'http://img.danawa.com/prod_img/500000/877/219/img/13219877_1.jpg?shrink=330:330&_v=20210125141215',
    price: 50000,
    likeNum: 0,
    alc: 45,
    stress: 5,
    taste: 'flavorful',
    feeling: 'sadness',
    condition: 'present',
    description:
      '삼해약주로 증류하여 고소한 곡 향, 누룩 향의 어우러짐과 부드러움을 동시에 느낄 수 있으며 복잡 미묘 하면서도 깊은 정취를 음미할 수 있습니다.'
  },
  {
    id: 103,
    type: '전통술',
    name: '문경바람 백자',
    img: 'https://assets.business.veluga.kr/media/public/%EB%AC%B8%EA%B2%BD%EB%B0%94%EB%9E%8C_%EB%B0%B1%EC%9E%90_25.png',
    price: 30000,
    likeNum: 0,
    alc: 25,
    stress: 3,
    taste: 'fruit',
    feeling: 'sadness',
    condition: 'present',
    description:
      '문경사과를 원료로 정통 발효 공법으로 제조한 사과 와인을 증류하고 백자에서 숙성해 만든다'
  },
  {
    id: 104,
    type: '전통술',
    name: '경성과하주',
    img: 'https://assets.business.veluga.kr/media/public/%E1%84%89%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AF%E1%86%AB_%E1%84%80%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%AA%E1%84%92%E1%85%A1%E1%84%8C%E1%85%AE.png',
    price: 30000,
    likeNum: 0,
    alc: 20,
    stress: 3,
    taste: 'strong',
    feeling: 'joy',
    condition: 'present',
    description: '고문헌에 가장 충실하게 복원한 과하주'
  },
  {
    id: 105,
    type: '전통술',
    name: '구기홍주 14',
    img: 'https://assets.business.veluga.kr/media/public/%E1%84%80%E1%85%AE%E1%84%80%E1%85%B5%E1%84%92%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%AE.png',
    price: 30000,
    likeNum: 0,
    alc: 14,
    stress: 2,
    taste: 'soft',
    feeling: 'joy',
    condition: 'present',
    description:
      '전남 진도의 전통명주 진도홍주를 알코올 14도의 부드러운 술로 재해석한 약주이다. 청양의 특산물인 구기자와 함께 빚어 은은한 향과 감칠맛이 일품이다.'
  },
  {
    id: 106,
    type: '전통술',
    name: '면천두견주',
    img: 'https://cdn.cctoday.co.kr/news/photo/201804/1132571_445324_3220.jpg',
    price: 30000,
    likeNum: 0,
    alc: 18,
    stress: 2,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'present',
    description: '진달래꽃(두견)과 찹쌀로 빚은 약주'
  },
  {
    id: 107,
    type: '전통술',
    name: '솔송주',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAyMDEwMjRfMjMx/MDAxNjAzNTA1NjUyNjYw.ceAa6UALQjJCFL2vnVzUpyps9DPSD3HcwDKojKdXgMUg.jBRiJAuIFxGfogtMtDamQw_7AkQsyrE-2x2eRmydCLMg.JPEG.mo7970/FB%EF%BC%BFIMG%EF%BC%BF1603505492998.jpg?type=w800',
    price: 10000,
    likeNum: 0,
    alc: 13,
    stress: 2,
    taste: 'soft',
    feeling: 'joy',
    condition: 'present',
    description:
      '은은한 솔잎의 향과 감칠맛이 일품인, 500년간 제조법이 대대로 전해지는 전통 프리미엄 약주'
  },
  {
    id: 108,
    type: '브랜디',
    name: '헤네시 VSOP',
    img: 'http://cdn.veluga.kr/files/supplier/undefined/drinks/63._%E1%84%8B%E1%85%A6%E1%86%B7%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8E%E1%85%B5%E1%84%89%E1%85%A3%E1%86%B7%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%84%8B%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B3%E1%84%8B%E1%85%AA%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%84%8F%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1%E1%84%8C%E1%85%AE_%E1%84%92%E1%85%A6%E1%84%82%E1%85%A6%E1%84%89%E1%85%B5_V.S.O.P.png',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'present',
    description:
      '꼬냑의 대명사 Hennessy V.S.O.P는 프랑스 꼬냑 지방의 최우수 산지 4곳의 포도만을 이용해 만든 원액60여 종을 블랜딩한 가장 널리 알려진 꼬냑'
  },
  {
    id: 109,
    type: '브랜디',
    name: '까뮤 보더리 X.O',
    img: 'http://cdn.veluga.kr/files/supplier/undefined/drinks/15.%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B5_%E1%84%81%E1%85%A1%E1%84%86%E1%85%B2_%E1%84%87%E1%85%A9%E1%84%83%E1%85%A5%E1%84%85%E1%85%B5_%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%89%E1%85%A9.png',
    price: 200000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'party',
    description: '보더리 지방에서 나온 포도만을 원료로 하여 만든 꼬냑'
  },
  {
    id: 110,
    type: '브랜디',
    name: '마르텔 VSOP',
    img: 'http://cdn.veluga.kr/files/supplier/undefined/drinks/17._%E1%84%91%E1%85%A6%E1%84%85%E1%85%B3%E1%84%82%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1_%E1%84%86%E1%85%A1%E1%84%85%E1%85%B3%E1%84%90%E1%85%A6%E1%86%AF_%E1%84%87%E1%85%B3%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%B3%E1%84%8B%E1%85%A9%E1%84%91%E1%85%B5_%E1%84%85%E1%85%A6%E1%84%83%E1%85%B3_%E1%84%87%E1%85%A2%E1%84%85%E1%85%A5%E1%86%AF%E1%84%89%E1%85%B3.png',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'clean',
    feeling: 'fear',
    condition: 'present',
    description:
      '마르텔은 세계에서 두 번째로 생산량이 많은 꼬냑 회사로서, 꼬냑 지역의 5대 브랜디 가운데 하나입니다.'
  },
  {
    id: 111,
    type: '브랜디',
    name: '레미마틴 VSOP',
    img: 'http://m.kanashop.kr/web/product/big/201903/b73f7ba2314637108b7897c146761906.jpg',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'bitter',
    feeling: 'fear',
    condition: 'alone',
    description:
      '그랑상파뉴와 쁘띠상파뉴 두지역의 최상급 꼬냑만을 엄선해서 만들어진 제품으로 1724년 이후 지속적인 명성을 유지하고 있으며 은은한 향미가 매력'
  },
  {
    id: 112,
    type: '브랜디',
    name: '샤보 VSOP',
    img: 'https://lesprit.kr/img_maker/camus_vsop_bottle.jpg',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'flavorful',
    feeling: 'fear',
    condition: 'party',
    description:
      '1828년 프랑스에서 태어난 샤보는 세계에서 가장 오래된 알마냑으로 알려져 있습니다. 15세기 초까지 거슬러 올라가는 전통적인 제조 방법에 의해 증류된 알마냑 원액을 나무 결이 거친 Black Oak에서 숙성시켜 맛과 향이 탁월합니다.'
  },
  {
    id: 113,
    type: '브랜디',
    name: '쟈노 VSOP',
    img: 'https://www.gourmetencasa-tcm.com/14466/janneau-vsop-70cl.jpg',
    price: 50000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'flavorful',
    feeling: 'joy',
    condition: 'present',
    description: '1851년부터 아르마냑 지방에서 최고급 아르마냑을 생산'
  },
  {
    id: 114,
    type: '브랜디',
    name: '깔바도스 불라 XO',
    img: 'http://www.kajawine.kr/data/item/1636677031/thumb-6rmU67CU64E7Iqk67aI6528xo_360x480.jpg',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'sweet',
    feeling: 'joy',
    condition: 'alone',
    description:
      '가족 소유의 증류소 Boulard의 유쾌한 칼바도스. 1825년 프랑스 북부 노르망디에서 발견된 Pierre-August Boulard의 이름을 따서 증류소 이름을 지었습니다.'
  },
  {
    id: 115,
    type: '브랜디',
    name: '샤또 드 브루이 VSOP',
    img: 'https://t1.daumcdn.net/cfile/blog/99E82D365E74E05F3A',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'savory',
    feeling: 'joy',
    condition: 'party',
    description:
      '진한 금색을 띄며, 잘 익은 사과, 아몬드, 오렌지 껍질, 라임, 등의 fruit은 모과의 향으로 마무리 된다. 입안에서는 부드럽고 매끄러우며 잘 익은 과일과 모과의 아로마가 진하게 느껴진다'
  }
];

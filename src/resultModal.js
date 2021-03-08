import React from 'react';

const resultModal = (props) => {
    const answer = [
        ["전기∙수소차", ["전기자동차, 태양광 자동차", "하이브리드 자동차", "연료전지 자동차, 수소차"], "· 전기차: 고전압 배터리에서 전기에너지를 전기모터로 공급하여 구동력을 발생시키는 자동차이다.<br>·수소차: 수소와 공기 중의 산소를 직접 반응시켜 전기를 생산하는 연료전지를 이용하는 자동차이다."],
        ["자율 주행 차", ["초 안전 플랫폼", "자율주행 언택트 서비스"], "고성능·고신뢰 자동주행 기능이 탑재된 차량이 센서 등으로부터 획득한 다양한 정보를 활용하여, 차량의 정밀힌 위치와 주변 환경을 인식하고 이를 기반으로 안전하게 운행이 가능한 자동차이다."],
        ["바이오 메디컬", ["신약 진단", "첨단재생의료"], "생명공학, 의·약학 지식에 기초하여 인체에 사용되는 제품을 생산하거나 서비스를 제공하는 산업이다."],
        ["디지털 헬스케어", ["지능형 건강관리", "개인용 헬스케어기기", "현장진단기기"], "ICT를 활용하여 언제 어디서나 다양한 센서를 통해 개인별 건강 상태를 측정, 관리하고 나아가 맞춤형 서비스를 제공 가능케 하는 기기 개발 및 서비스 산업이다."],
        ["시스템 반도체", ["5G", "지능형로봇", "착용형 스마트기기", "실감형 콘텐츠(AR/VR)", "재난안전 관리시스템"], "데이터 저장이 주 용도인 메모리 반도체와 달리 여러 기능을 단일 칩에 통합하여 경제성 및 편의성을 극대화한 반도체이다."],
        ["스마트 제조", ["제조업 모든 영역"], "ICT를 활용하여 제조과정을 디지털화하여 생산성 향상, 에너지 절감, 인간중심 작업환경 구현, 최적 비용 및 고객맞춤형 제품 생산하는 시스템 또는 지능형 공장이다."],
        ["스마트 시티", ["스마트에너지", "스마트 환경", "스마트 교통", "스마트 빌딩"], "도시의 교통, 환경, 보안, 행정, 기타 도시 관리 및 개발 등에 ICT를 활용하는 혁신적인 도시 시스템이다."],
        ["서비스 플랫폼", ["비대면 교육 플랫폼", "이커머스 플랫폼", "클라우드 협업 플랫폼(쿠팡, 배민 등)"], "공급자와 사용자 사이의 경제적 가치 창출 활동을 지원하는 매개체/틀을 제공하는 기술기반 구조이다."],
        ["5G+", ["네트워크", "보안", "디바이스", "융합서비스"], "5G 기반 디지털 산업과 서비스 창출적 의미, 통신 인프라+산업 및 서비스 분야와 연계한 개념이다."],
        ["지능형 로봇", ["제조, 전문 서비스", "개인 서비스", "로봇 부품, 로봇 시스템 등"], "단순 반복 작업을 수행하는 산업용 로봇과는 달리 AI, ICT 기술을 바탕으로 다양한 형태의 서비스를 제공하는 인간 지향적 로봇이다."],
        ["인공지능", ["자연어 처리", "컴퓨터 패턴 인식", "지능형 로봇", "스마트 공장 및 헬스케어", "금융/핀테크"], "인간의 지적 능력을 기계로 구현하는 과학 기술이다."],
        ["빅데이터", ["소비 트렌드 예측", "고객 서비스", "비즈니스 모델 및 상품/서비스의 혁신"], "초대용량의 정형, 비정형 데이터 자체. 데이터의 생산, 수집, 저장, 관리 및 분석을 통해 가치를 추출하고 지능화 서비스의 기반을 지원하는 기술이다."],
        ["IoT", ["농산업", "자동차 산업", "광산업, 에너지", "헬스케어, 보안", "스마트 홈-빌딩-시티-물류", "공항 출입국 관리 시스템 등"], "다양한 사물이 센서와 통신 기능을 내장하여 인간의 구체적인 개입이나 지시 없이 스스로 인터넷에 연결하고 상호 통신하여, 각 사물들이 생성한 정보를 공유/통합하여 지능적이고 효율적인 서비스를 제공하는 환경 또는 기술이다."],
        ["블록체인", ["데이터 보안 강화", "금융 거래", "서비스 공급 및 관리"], "데이터를 블록에 담아 체인 형태로 연결하는 것. 즉 정보를 공개적으로 기록하고 여러 대의 컴퓨터에 복제하여 저장하는 기술이다."],
        ["드론", ["군사, 농업, 정보통신", "재해 관측, 환경 및 교통", "취미 및 레저"], "무선 전파를 이용해 지상 또는 외부에서 조종할 수 있는 무인 항공기. 사전 입력된 프로그램에 따라 비행하는 무인 비행체이다."],
        ["실감형 콘텐츠(AR/VR)", ["몰입형 콘텐츠" ,"지능형 콘텐츠", "융복합 콘텐츠", "콘텐츠 유통-품질-신뢰"], "ICT를 기반으로 인간의 감각과 인지를 유발하여 실제와 유사한 경험 및 감성을 확장하는 기술로, 다양한 분야에서 보고, 듣고, 만지고 공감할 수 있는 체험형 콘텐츠이다."],
        ["재난안전", ["자연재난예방 사업", "사회재난예방사업", "재난대응, 복구 사업"], "사회ㆍ자연의 위험을 예방하고 대상을 보호하는 것을 목적으로 물리ㆍ기술ㆍ정보ㆍ보안을 유기적으로 결합한 차세대 융합 보안이다."],
        ["신재생 에너지", ["태양에너지, 지열에너지", "해양에너지, 풍력에너지", "바이오에너지", "연료전지"], "재생가능 에너지를 이용하는 에너지로, 전환 수단과 에너지 형태에 따른 신에너지, 에너지원의 종류에 따른 재생에너지로 분류한다."],
        ["이차전지", ["스마트폰", "모바일/휴대용 IT기기", "전기차/하이브리드카"], "외부의 전기에너지를 화학 에너지의 형태로 바꾸어 저장했다가 필요할 때에 전기를 만들어 내는 장치이며, 반복적인 충·방전을 통해 반영구적으로 사용 가능하다."],
        ["친환경 소재 및 자원순환", ["천연 소재", "바이오 플라스틱", "자원순환"], "· 친환경 소재: 환경에 해를 끼치지 않는 소재로, 생산 또는 소비할 때 오염물질이 발생하지 않거나 기존의 다른 소재에 비해 오염물질을 상대적으로 적게 발생하는 소재이다.<br>· 자원순환: ‘채취-생산-소비-폐기’로 이루어지는 구조를 순환형으로 전환하여 한정된 천연자원을 적게 사용하면서 폐기물을 최대한 생산과정에 재투입하여 환류하는 것이다."]
    ]

    return (
        <div id="result-modal" className="appear">
            <div className="result-modal-header">
                <svg onClick={
                () => {
                    document.getElementById("result-modal").classList.add("disappear")
                    setTimeout(() => props.openModal(false), 500)
                }
            } height="24" viewBox="0 0 329.26933 329" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
                </svg>
            </div>
            <h1 className="title">결과 상세</h1>
            <p className="sub">
                사용자님의 흥미 있는 4차 산업혁명 분야는 <b>{props.list}</b>으로 나타났습니다.
            </p>
            <table className="etc-list">
                <colgroup>
                    <col width="20%" />
                    <col width="30%" />
                    <col width="50%" />
                </colgroup>
                <thead>
                    <tr>
                        <th>영역</th>
                        <th>관련 영역</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        answer.map(
                            (item) => {
                                if (props.list.includes(item[0])) return <tr><td>{item[0]}</td><td>{item[1].join(', ')}</td><td>{item[2]}</td></tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default resultModal;
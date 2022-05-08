import axios from "axios";


// axios api 생성 -> 공통 수행 작업 설정
const customAxios = axios.create({
    baseURL: "http://localhost:9000",
    // 라이브러리의 timeout 기본 값을 [ ]초로 재 정의하여
    // 인스턴스의 모든 요청은 [ ]초 간만 대기 후 타임아웃 처리합니다.
    //timeout: 3000,

});


// axios가 요청하기 직전에 가로채서( request interceptor ) 수행 
customAxios.interceptors.request.use(

    // 요청 메시지 설정
    (config) => {
        //console.log(config);
        //config.withCredentials = true;
        return config;
    },

    // 요청 메시지 실패
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)


// axios가 응답받기 직전에 가로채서( response interceptor ) 수행 
customAxios.interceptors.response.use(
    
    // 응답 성공했을 때, 수행되는 함수
    (response) => {
        console.log("Custom Axios response");
        console.log(response); 
        console.log(response.data)
        return response.data;
    },

    // 응답 실패했을 때, 수행되는 함수
    (error) => {
        
        // 요청이 이루어졌으며, 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            // http status code handle
            switch(error.response.status) {
                // 403 Forbidden
                case 403: {
                    console.log("클라이언트는 콘텐츠에 접근할 권리 X");
                    break;
                }
                // 404 Not Found
                case 404: {
                    // 요청한 경로나 자원이 존재하지 않음
                    console.log("서버는 요청받은 리소스를 찾을 수 없습니다. (알려지지 않은 URL => 요청 URL 확인)");
                    // 찾을 수 없는 페이지입니다. 안내로 이동?
                    break;
                }
                // 415 Unsupported Media Type
                case 415: {
                    // 지원되지 않는 미디어 타입
                    console.log("지원되지 않는 미디어 타입. => Content-type 확인");
                    break;
                }
            }


        }
        // 요청이 이루어 졌으나, 응답을 받지 못했습니다.
        else if (error.request) {
            console.log("요청이 이루어 졌으나, 응답을 받지 못했습니다.");
            console.log(error.request);
            console.log(error);
        }
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        else {
            console.log(error.message);
        }

        return Promise.reject(error);
    }
)


export { customAxios };

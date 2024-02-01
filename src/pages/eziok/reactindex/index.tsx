import React, { useEffect } from 'react';

declare global {
    interface Window {
        eziok_std_process: (url: string, type: string, callback: string) => void;
    }
}

export default function EziokIndex() {
    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
        function printResult(data) {
            var resultCode = data.split('|')[0];
            var resultMsg = data.split('|')[1];
            if (resultCode === '0') {
                // 간편인증-표준창 성공 완료시 처리 부분
                document.querySelector("#result").textContent = resultMsg;
            }
            else {
                // 간편인증-표준창 실패 완료시 처리 부분
                alert("Error : " + resultMsg);
            }
        }
    `;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const eziok = () => {
        window.eziok_std_process(
            'https://scert.ez-iok.com/stdauth/ds_auth_ptb/asset/js/ptb_ezauth_proc.js',
            'WB',
            'printResult',
        ); // callback 방식 사용
        // window.eziok_std_process("https://이용기관 간편인증-표준창 요청 (Node.js)URL/eziok/eziok_std_request", "MB", ""); // redirect 방식 사용
    };
    return (
        <div>
            <div>asdasd</div>

            <button onClick={eziok}>인증_팝업</button>
            <textarea cols={100} rows={50} id="result"></textarea>
        </div>
    );
}

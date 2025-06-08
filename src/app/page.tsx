"use client";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Head from "next/head";
import clsx from "clsx";




export default function Home() {
 
  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        "bg-gradient-to-tr from-[#181828] via-[#23243a] to-[#0a0a1a] ",
        "text-white"
      )}
    >
      <Head>
        <title>신상용 의 포트폴리오</title>
      </Head>
      <Fullpage>
        <FullpageNavigation />{" "}
        {/* // ← 이 부분이 오른쪽 도트 네비게이션입니다! */}
        <FullPageSections>
          {/* 이목을 끌어주는 최상단섹션 */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-tr from-[#181828] via-[#23243a] to-[#0a0a1a]">
             
            </section>
          </FullpageSection>
          {/* Hero Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="flex flex-col items-center justify-center h-full">
            
            </section>
          </FullpageSection>
          {/* About Me Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="flex flex-col items-center justify-center h-full">
            
            </section>
          </FullpageSection>
          {/* Projects Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="flex flex-col items-center justify-center h-full">
            </section>
          </FullpageSection>
          {/* Experience Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="flex flex-col items-center justify-center h-full">
           
            </section>

        
          </FullpageSection>
          {/* Footer Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <footer className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-cyan-500 to-blue-600">
              <div className="max-w-4xl mx-auto px-4 text-center text-gray-800">
                <p className="text-2xl leading-relaxed whitespace-pre-line">
                  {/* <p className="text-lg leading-relaxed whitespace-pre-line"> */}
                  {`저의 포트폴리오를 찾아주셔서 감사합니다! 🙌
하루하루 더 발전 하는 프론트엔드 개발자 가 되겠습니다.
tkddyd1259@gmail.com 📧 언제든지 편하게 연락 주세요! 😊`}
                  {/* {`저의 포트폴리오 를 열람해 주셔서 감사합니다.
           하루하루 더 발전하고 싶은  개발자, 신상용입니다.`} */}
                </p>
                <div className="mt-8 flex justify-center gap-8 text-gray-800 font-semibold">
                  <a
                    href="mailto:tkddyd1259@gmail.com"
                    className="hover:underline"
                  >
                    이메일
                  </a>
                  <a
                    href="https://github.com/tkddyd0817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://tkddyd0817.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    블로그
                  </a>
                </div>
                <div className="mt-8 text-sm text-gray-700">© 2025</div>
              </div>
            </footer>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
     
    </div>
  );
}

import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home({title}) {
  const [ellipsis, setEllipsis] = useState(["."]);
  const ellipsisRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(ellipsisRef.current.length < 3){
        ellipsisRef.current = [...ellipsisRef.current, "."];
        setEllipsis(ellipsisRef.current);
        
      }else{
        ellipsisRef.current = ["."];
        setEllipsis(ellipsisRef.current);
      }
    },1000);
  return () => clearInterval(interval); 
  },[ellipsisRef.current]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-mono text-green-600">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full py-6 text-center">
        <div className="flex flex-col items-center w-2/3 px-6 py-12 card">
          <h1 className="text-2xl font-bold">
            Welcome to{" "}
            <a className="text-gray-200" href="https://www.voices.help">
              Voices.help
            </a>
            !
          </h1>

          <p className="w-5/6 pl-4 mt-3 text-sm text-center text-gray-200 md:pl-2 lg:pl-8 xl:pl-16">
            This list of rules helps me manage the voices when they bother me
            <span className="inline-table min-[3ch] w-[3ch] max-[3ch] md:mr-12 lg:mr-16 xl:mr-24">
              <div className="flex justify-start text-green-600">
                {ellipsis.map((e) => (
                  <span>{e}</span>
                ))}
              </div>
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-around w-5/6 max-w-3xl py-12 mt-6 card">
          <ul className="flex flex-col items-center justify-center w-full space-y-6">
            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                1.){" "}
                <span className="w-5/6 text-gray-200 md:w-2/3">
                  They dont know more than you.
                </span>
              </h2>
            </li>

            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                2.){" "}
                <span className="w-5/6 text-gray-200 md:w-2/3">
                  They dont know what other people are thinking.
                </span>
              </h2>
            </li>

            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                3.){" "}
                <span className="w-5/6 space-y-4 text-gray-200 md:w-2/3">
                  <span>
                    They can sometimes be helpful, kind of like a driving
                    instructor for your life.
                  </span>
                  <span class="text-green-600 block text-xs">
                    Always remember the first two rules and if questioning
                    something they say ask a medical professional, a close
                    friend, or even the bot on this page if the information given to
                    you is safe and useful.
                  </span>
                </span>
              </h2>
            </li>

            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                4.){" "}
                <span className="w-5/6 text-gray-200 md:w-2/3">
                  They lie often. Almost everything negative they say is a lie.
                </span>
              </h2>
            </li>

            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                5.){" "}
                <span className="w-5/6 text-gray-200 md:w-2/3">
                  The wrong drugs will make them worse and the right drugs will
                  make them better.
                </span>
              </h2>
            </li>

            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                6.){" "}
                <span className="w-5/6 text-gray-200 md:w-2/3">
                  Schizophrenia is whats called a{" "}
                  <span className="text-green-600">heterogeneous</span> disease
                  which are caused by many different factors including your
                  genes and environment.{" "}
                  <span className="flex mt-4 text-xs text-green-600">
                    In other words, this means the you in a different reality
                    where things in your life went differently could not have
                    schizophrenia.
                  </span>
                </span>
              </h2>
            </li>

            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                7.){" "}
                <span className="w-5/6 text-gray-200 md:w-2/3">
                  Ask your doctor about{" "}
                  <span className="text-green-600">"Clozapine"</span> when the
                  right drugs don't work.
                </span>
              </h2>
            </li>

            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                8.){" "}
                <span className="w-5/6 text-gray-200 md:w-2/3">
                  <a
                    href="https://www.mayoclinic.org/tests-procedures/electroconvulsive-therapy/about/pac-20393894"
                    className="text-green-600"
                  >
                    Electroconvulsive Therapy (ECT)
                  </a>{" "}
                  has been modernized, is now preformed under anesthesia, and is
                  a accepted treatment option for those with treatment resistant
                  schizophrenia when the right drugs don't work.
                </span>
              </h2>
            </li>

            <li className="flex flex-col items-center justify-center w-full px-16">
              <h2 className="flex justify-between w-full text-sm font-bold md:text-lg">
                9.){" "}
                <span className="w-5/6 space-y-4 md:w-2/3">
                  <div className="text-gray-200">
                    Hopefully, one day soon{" "}
                    <a href="https://neuralink.com/" className="text-green-600">
                      Neuralink
                    </a>{" "}
                    will be the solution to schizophrenia.
                  </div>

                  <div className="text-sm">
                    Feel free to contact me Musk if you want someone's brain to
                    pick on schizophrenia; I might even let you stick your thing
                    in me, 😉.
                  </div>
                </span>
              </h2>
            </li>

            <p className="w-5/6 px-4 pt-12 text-xl font-bold text-center">
              I am a web developer who has treatment resistant schizophrenia and
              have been positive for auditory hallucinations, constantly based
              off of the sound level around me, for a long time. I just wanted
              to let you know that I built this website from scratch, and many
              other websites,{" "}
              <span className="text-gray-200">
                so, <span className="text-green-600">please</span>, don't give
                up on life, or believe you can't achieve anything, because you
                have schizophrenia
              </span>
              .
            </p>
          </ul>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <a
          className="flex items-center justify-center space-x-4"
          href="https://www.unenunciate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-12 py-2 text-gray-200 card"
        >
          <span className="mr-4 font-bold">Built by</span>
          <span className="flex items-center p-0.5 bg-green-600 rounded-full">
            <img
              src="/unenunciate.jpeg"
              alt="Unenunciate Logo"
              className="w-6 h-6 rounded-full"
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { title: "Voices.help", content: "..." } };
}
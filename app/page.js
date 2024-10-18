import Image from "next/image";
import logo from ".//images/cgrc-logo.png";
import email from ".//images/mail-outline.svg";

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 '>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Image
          className='max-w-2xl'
          src={logo}
          alt='CGRC logo'
          width={0}
          height={0}
          sizes='50vw'
          style={{ width: "100%", height: "auto" }}
          priority
        />
        {/* <a
          className='flex items-center justify-items-center gap-2 hover:underline hover:underline-offset-4 m-auto'
          href='mailto:bastian.bartels@contextgrc.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src={email}
            alt='Window icon'
            width={16}
            height={16}
          />
          Reach Out For More Information
        </a> */}
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='mailto:bastian.bartels@contextgrc.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src={email}
            alt='Window icon'
            width={16}
            height={16}
          />
          Contact For More Information
        </a>
      </footer>
    </div>
  );
}

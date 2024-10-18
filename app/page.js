import Image from "next/image";
import Logo from ".//images/cgrc-logo.png";
import Email from ".//images/mail-outline.svg";

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 '>
      <main className='flex flex-col gap-11 row-start-2 items-center sm:items-start'>
        <Image
          className='max-w-2xl logo'
          src={Logo}
          alt='CGRC logo'
          width={0}
          height={0}
          priority
        />
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4 pt-12 m-auto'
          href='mailto:bastian.bartels@contextgrc.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src={Email}
            alt='Window icon'
            width={16}
            height={16}
          />
          Contact For More Information
        </a>
      </main>
      {/* <footer className='row-start-3 flex flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='mailto:bastian.bartels@contextgrc.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src={Email}
            alt='Window icon'
            width={16}
            height={16}
          />
          Contact For More Information
        </a>
      </footer> */}
    </div>
  );
}

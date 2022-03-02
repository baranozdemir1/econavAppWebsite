import React from 'react';

import Emoji from './assets/emoji.svg';
import AppStore from './assets/app-store.svg';
import PlayStore from './assets/google-play.svg';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { useTranslation } from 'react-i18next';

import DarkModeToggle from './components/DarkModeToggle';
import LangToggle from './components/LangToggle';

export default function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className="mb-20 flex items-center justify-center">
        <div className="flex items-center justify-center mr-5">
          <DarkModeToggle />
        </div>
        <div className="bg-econavOrange h-24 w-24 flex items-center justify-center rounded-econav shadow-2xl">
          <div className="bg-econavOrange w-[5.5rem] h-[5.5rem] rounded-econav flex items-center justify-center border-2 border-white">
            <img src={Emoji} alt="Emoji" width={60} />
          </div>
        </div>
        <div className="flex items-center justify-center ml-5">
          <LangToggle changeLanguage={changeLanguage} />
        </div>
      </header>
      <main className="font-gilroy flex justify-center items-center flex-col mb-16">
        <div className="flex justify-center items-center flex-col">
          <h2 className='font-medium mb-5 text-black dark:text-white'>{t('topTitle')}</h2>
          <h1 className='font-bold text-center text-3xl md:text-4xl mb-5 text-econavOrange'>
            {t('title')}
          </h1>
          <p className='font-medium text-sm mb-1 text-black dark:text-white'>{t('subtitle')}</p>
          <span className='font-medium text-sm mb-10 text-black dark:text-white'>{t('subtitle2')}</span>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row">
          <a href="https://econav.app" target="_blank" rel="noopener noreferrer" className='bg-white shadow-lg px-5 mb-5 border py-5 flex items-center justify-between rounded-lg md:mb-0 md:mr-5 hover:opacity-75 transition-all'>
            <img src={AppStore} alt={t('appStore')} className='w-15' />
            <p className='font-medium text-center text-sm flex flex-col ml-5'>
              {t('availableSoon')}
              <span className='font-bold'>{t('appStore')}</span>
            </p>
          </a>
          <a href="https://econav.app" target="_blank" rel="noopener noreferrer" className='bg-white shadow-lg border px-5 py-5 flex items-center justify-between rounded-lg hover:opacity-75 transition-all'>
            <img src={PlayStore} alt={t('playStore')} className='w-15' />
            <p className='font-medium text-center text-sm flex flex-col ml-5'>
              {t('availableSoon')}
              <span className='font-bold'>{t('playStore')}</span>
            </p>
          </a>
        </div>
      </main>
      <footer className="font-gilroy font-bold flex items-center justify-center ">
        <a href="https://econav.app" target="_blank" rel="noopener noreferrer" className='shadow-lg mr-3 rounded-full p-2 bg-white dark:bg-black dark:text-white dark:hover:bg-econavOrange border transition-all hover:bg-econavOrange hover:text-white hover:transition-all'>
          <AiOutlineGithub size={25} />
        </a>
        <a href="https://econav.app" target="_blank" rel="noopener noreferrer" className='shadow-lg mr-3 rounded-full p-2 bg-white dark:bg-black dark:text-white dark:hover:bg-econavOrange border transition-all hover:bg-econavOrange hover:text-white hover:transition-all'>
          <AiFillInstagram size={25} />
        </a>
        <a href="https://econav.app" target="_blank" rel="noopener noreferrer" className='shadow-lg rounded-full p-2 bg-white dark:bg-black dark:text-white dark:hover:bg-econavOrange border transition-all hover:bg-econavOrange hover:text-white hover:transition-all'>
          <AiFillLinkedin size={25} />
        </a>
      </footer>
    </>
  );
}
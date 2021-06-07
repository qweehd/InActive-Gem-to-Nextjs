import React, { useState, useEffect } from 'react';
import SectionHeader from '../../../components/SectionHeader/Title';
import GridRandom from '../../Grid/GridRandom';
import Loading from '../../Loading';

import Airtable from 'airtable';

import './LandingPage.css';

import SlideCard from '../../Swipe/FeaturedCard';
import '../../Swipe/Slide.css';

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);

const LandingPage = () => {
  const [mainStores, setMainStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const mainStore = [];
  useEffect(() => {
    base('stores')
      .select({
        view: 'main',
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          mainStore.push({
            id: record.id,
            ...record._rawJson.fields,
          });
        });
        setMainStores(mainStore);
        setLoading(false);
      });
  }, []);

  console.log(mainStores);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <SectionHeader title='인기카페 ✨' desc='원주 최고의 인기카페' />
      <div className='slide'>
        {mainStores.map((store) => {
          if (store.firstCategory[0] === '카페') {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          } else return null;
        })}
      </div>

      <SectionHeader title='오늘의 맛집 🍛' desc='원쥴랭 추천 맛집' />

      <div className='slide'>
        {mainStores.map((store) => {
          if (store.firstCategory[0] === '맛집') {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          } else return null;
        })}
      </div>
      <SectionHeader title='GEM💎' desc='원주 실시간 맛집, 카페' />

      <GridRandom filter='카페' filter2='맛집' stores={mainStores} />
    </>
  );
};

export default LandingPage;

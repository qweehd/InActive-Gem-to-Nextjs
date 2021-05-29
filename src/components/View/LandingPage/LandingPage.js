import React from 'react';
import Navigation from './Navigation';
import SectionHeader from '../../../components/SectionHeader/Title';
import Grid from '../../Grid/Grid';
import Slide from '../../Swipe/Slide';

import './LandingPage.css';
const LandingPage = () => {
  return (
    <>
      <Navigation />
      <SectionHeader title='인기카페 ✨' desc='원주 최고의 인기카페' />
      <Slide section='hot' filter='카페' />
      <SectionHeader title='오늘의 맛집 🍛' desc='원쥴랭 추천 맛집' />
      <Slide section='hot' filter='맛집' />
      <SectionHeader
        title='이번 주말 추천! 🔥'
        desc='좋은 사람들과 좋은 곳에서 시원하게 한잔! 🍻'
      />
      <Slide section='hot' filter='호프・주점' />

      <Grid filter='카페' />

      {/* <Grid section='cafes' filter='카페' /> */}
    </>
  );
};

export default LandingPage;

import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/detailview.style';
import React, {useState} from 'react';

function ShopDetailView() {
  const [tabValuse, setTabValues] = useState([
    {
      id: 0,
      introduction: '병원소개',
      description:
        '모발모발 병원에 대한 정보입니다. 모발모발 병원에 대한 정보입니다. 모발모발 병원에 대한 정보입니다. 모발모발 병원에 대한 정보입니다. 모발모발 병원에 대한 정보입니다. 모발모발 병원에 대한 정보입니다.',
    },
    {id: 1, introduction: '리뷰', description: ''},
    {id: 2, introduction: '입소문', description: ''},
  ]);
  const [tabs, setTabs] = useState([
    {id: 0, name: '병원정보'},
    {id: 1, name: '리뷰'},
    {id: 2, name: '입소문'},
  ]);

  const [isActive, setIsActive] = useState(0);

  return (
    <S.DetailViewLayOut>
      <S.TabBox>
        {tabs.map(li => (
          <S.Tabs
            key={li.id}
            isSelected={li.id === isActive}
            onPress={() => setIsActive(li.id)}>
            <AppText>{li.name}</AppText>
          </S.Tabs>
        ))}
      </S.TabBox>
      <S.DetailTabs>
        {tabValuse.map(li =>
          li.id === isActive ? (
            <React.Fragment key={li.id}>
              <S.Introduction>
                <AppText>{li.introduction}</AppText>
              </S.Introduction>
              <S.Description>
                <AppText>{li.description}</AppText>
              </S.Description>
            </React.Fragment>
          ) : null,
        )}
      </S.DetailTabs>
    </S.DetailViewLayOut>
  );
}

export default ShopDetailView;
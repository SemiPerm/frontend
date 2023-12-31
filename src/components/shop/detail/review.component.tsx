import shopState from '@/recoil/shop/shop.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/detail/review.style';
import {useRecoilValue} from 'recoil';
import CommentIcon from '@/assets/icons/shopDetail/commentIcon.svg';
import {NavigationProps} from '@/types/stackprops';
import BriefReviewScreen from '../review/briefReview.component';

function ShopReview({navigation}: NavigationProps['shopDetails']) {
  const {BriefReviewList} = useRecoilValue(shopState);
  const showScreen = false;
  console.log(navigation);
  return (
    <S.ReviewLayout>
      <S.BriefReview>
        <S.TitleBox>
          <AppText size="15px" weight="SemiBold">
            이런 점이 좋았어요
          </AppText>
          <S.ActionButton onPress={() => navigation.navigate('BriefReiview')}>
            <S.IconBox>
              <CommentIcon />
            </S.IconBox>
            <AppText>나도 참여</AppText>
          </S.ActionButton>
        </S.TitleBox>
        {BriefReviewList.map(item => {
          return (
            <S.ReviewGaugeBox key={item.id}>
              <S.Gauge />
              <S.TextBox>
                <AppText>{item.description}</AppText>
                <AppText>30%</AppText>
              </S.TextBox>
            </S.ReviewGaugeBox>
          );
        })}
      </S.BriefReview>
      <S.DetailReview>
        <S.TitleBox>
          <AppText size="15px" weight="SemiBold">
            방문자 리뷰
          </AppText>
          <S.ActionButton>
            <S.IconBox>
              <CommentIcon />
            </S.IconBox>
            <AppText>리뷰 쓰기</AppText>
          </S.ActionButton>
        </S.TitleBox>
        <S.ReviewList>
          <S.defaultText>
            <AppText color="#5A6068">작성된 후기가 없습니다.</AppText>
            <AppText color="#5A6068">시술 후기를 작성 해보세요!</AppText>
          </S.defaultText>
        </S.ReviewList>
      </S.DetailReview>
      {showScreen && <BriefReviewScreen navigation={navigation} />}
    </S.ReviewLayout>
  );
}

export default ShopReview;

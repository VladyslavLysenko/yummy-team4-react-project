import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SearchBtnBlack = styled.button`
  padding: 14px 32px;
  width: 113px;
  background-color: ${p => p.theme.colors.secondAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: ${p => p.theme.border.blackBtnBorder};
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 16px 52px;
    width: 161px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    padding: 22px 52px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstAccentColor};
    border: ${p => p.theme.border.greenBtnBorder};
    outline: none;
		}
`;

export const SearchBtnGreen = styled.button`
  padding: 14px 32px;
  width: 113px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: ${p => p.theme.border.greenBtnBorder};
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 16px 52px;
    width: 161px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    padding: 22px 52px;
  }

  &:hover,
  &:focus {
     background-color: ${p => p.theme.colors.secondAccentColor};
     border: ${p => p.theme.border.blackBtnBorder};
     outline: none;
		 }
`;

export const SingInBtn = styled(NavLink)`
  padding: 10px 24px;
  width: 95px;
  background-color: transparent;
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: 2px solid #FAFAFA;
  border-radius: 24px 44px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 19px 44px;
    width: 141px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    padding: 20px 44px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.firstAccentColor};
    border: 2px solid #8baa36;
    outline: none;
		}
`;

export const SingInBtnGreen = styled.button`
  padding: 12px 106px;
  width: 279px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.xl}px;
  line-height: 18px;
  border-radius: 6px;
  border: ${p => p.theme.border.greenBtnBorder};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 18px 170px;
    width: 400px;
  }
  @media (min-width: 1440px) {
    padding: 19px 170px;
  }

  &:hover,
  &:focus {
     color: ${p => p.theme.colors.secondAccentColor};
     outline: none;
		 }
`;

export const RegistrationBtn = styled(NavLink)`
  padding: 11px 24px;
  width: 132px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: ${p => p.theme.border.greenBtnBorder};
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 20px 44px;
    width: 184px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
     background-color: ${p => p.theme.colors.secondAccentColor};
     border: ${p => p.theme.border.blackBtnBorder};
     outline: none;
		 }
`;

export const OtherCategoriesBtn = styled.button`
  padding: 10px 32px;
  width: 195px;
  background-color: transparent;
  color: ${p => p.theme.colors.secondAccentColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: 2px solid #8baa36;
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 16px 52px;
    width: 239px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstAccentColor};
    color: ${p => p.theme.colors.mainBgColor};
    outline: none;
		}
`;

export const SubscribeBtnGreen = styled.button`
  padding: 10px 71px;
  width: 204px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 16px;
  border-radius: 6px;
  border: ${p => p.theme.border.greenBtnBorder};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 15px 50px;
    width: 171px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 18px;
  }
  @media (min-width: 1440px) {
    padding: 20px 134px;
    width: 339px;
  }

  &:hover,
  &:focus {
     color: ${p => p.theme.colors.secondAccentColor};
     outline: none;
		 }
`;

export const SubscribeBtnBlack = styled.button`
  padding: 10px 71px;
  width: 204px;
  background-color: ${p => p.theme.colors.darkBgColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 16px;
  border-radius: 6px;
  border: 1px solid #1E1F28;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 15px 50px;
    width: 171px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 18px;
  }
  @media (min-width: 1440px) {
    padding: 20px 134px;
    width: 339px;
  }

  &:hover,
  &:focus {
     color: ${p => p.theme.colors.firstAccentColor};
     outline: none;
		 }
`;

export const SaveChangesBtn = styled.button`
  padding: 14px 84px;
  width: 282px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 18px;
  border: ${p => p.theme.border.greenBtnBorder};
  border-radius: 6px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 19px 143px;
    width: 400px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 18px;
  }

  &:hover,
  &:focus {
     color: ${p => p.theme.colors.secondAccentColor};
     outline: none;
	}
`;

export const SeeAllBtn = styled.button`
  padding: 9px 24px;
  width: 94px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 18px;
  border-radius: 6px;
  border: ${p => p.theme.border.greenBtnBorder};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
     background-color: ${p => p.theme.colors.secondAccentColor};
     border: ${p => p.theme.border.blackBtnBorder};
     outline: none;
	}
`;

export const LogOutBtn = styled.button`
  padding: 14px 44px;
  width: 137px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 18px;
  border-radius: 6px;
  border: ${p => p.theme.border.greenBtnBorder};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 19px 68px;
    width: 192px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 18px;
  }

  &:hover,
  &:focus {
     background-color: ${p => p.theme.colors.secondAccentColor};
     border: ${p => p.theme.border.blackBtnBorder};
     outline: none;
	}
`;

export const CancelBtn = styled.button`
  padding: 14px 44px;
  width: 137px;
  background-color: #D9D9D9;
  color: #23262A;
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 18px;
  border-radius: 6px;
  border: 1px solid #D9D9D9;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 19px 68px;
    width: 192px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 18px;
  }

  &:hover,
  &:focus {
     background-color: transparent;
     border: 1px solid #23262A;
     outline: none;
	}
`;

export const AddBtn = styled.button`
  padding: 11px 48px;
  width: 129px;
  background-color: ${p => p.theme.colors.secondAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.xl}px;
  line-height: 24px;
  border: ${p => p.theme.border.blackBtnBorder};
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 13px 64px;
    width: 161px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstAccentColor};
    border: ${p => p.theme.border.greenBtnBorder};
    outline: none;
	}
`;

export const AddToFavoriteBtn = styled.button`
  padding: 8px 18px;
  width: 150px;
  background-color: transparent;
  color: ${p => p.theme.colors.secondAccentColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 15px;
  border: 2px solid #8baa36;
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 15px 44px;
    width: 278px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    padding: 15px 44px;
    width: 270px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstAccentColor};
    color: ${p => p.theme.colors.mainBgColor};
    outline: none;
	}
`;

export const SeeRecipeBtnBlack = styled.button`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 28px;
    right: 24px;
    display: block;
    width: 138px;
    height: 45px;
    background-color: ${p => p.theme.colors.secondAccentColor};
    color: ${p => p.theme.colors.mainBgColor};
    font-family: 'Poppins';
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 21px;
    border: ${p => p.theme.border.blackBtnBorder};
    border-radius: 24px 44px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: 1440px) {
    bottom: 40px;
    right: 40px;
    width: 160px;
    height: 58px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstAccentColor};
    border: ${p => p.theme.border.greenBtnBorder};
    outline: none;
	}
`;

export const SeeRecipeBtnGreen = styled.button`
  padding: 5px 14px;
  width: 87px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 15px;
  border: ${p => p.theme.border.greenBtnBorder};
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 11px 32px;
    width: 138px;
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 21px;
  }
  @media (min-width: 1440px) {
    padding: 16px 44px;
    width: 172px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondAccentColor};
    border: ${p => p.theme.border.blackBtnBorder};
    outline: none;
	}
`;

export const FavoritesDeleteBtn = styled.button`
  position: absolute;
  bottom: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 24px;
  height: 24px;
  background-color: ${p => p.theme.colors.lightGreenText};
  color: ${p => p.theme.colors.secondAccentColor};
  font-size: ${p => p.theme.fontSizes.l}px;
  border: ${p => p.theme.border.favoriteBtnBorder};
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), ;

  @media (min-width: 768px) {
    top: 28px;
    right: 24px;
    padding: 8px;
    width: 38px;
    height: 38px;
    font-size: 22px;
  }
  @media (min-width: 1440px) {
    top: 40px;
    right: 40px;
    padding: 10px;
    width: 44px;
    height: 44px;
    font-size: 24px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstAccentColor};
    border: ${p => p.theme.border.myRecipesBtnBorder};
    color: ${p => p.theme.colors.mainBgColor};
    outline: none;
`;

export const MyRecipesDeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 24px;
  height: 24px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-size: ${p => p.theme.fontSizes.l}px;
  border: ${p => p.theme.border.myRecipesBtnBorder};
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), ;

  @media (min-width: 768px) {
    padding: 8px;
    width: 38px;
    height: 38px;
    font-size: 22px;
  }
  @media (min-width: 1440px) {
    padding: 10px;
    width: 44px;
    height: 44px;
    font-size: 24px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.lightGreenText};
    border: ${p => p.theme.border.favoriteBtnBorder};
    color: ${p => p.theme.colors.secondAccentColor};
    outline: none;
`;

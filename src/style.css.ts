import { globalStyle, style } from '@vanilla-extract/css';

const page = style({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const phoneFrame = style({
  width: '100%',
  backgroundColor: '#f2f3f5',
  overflow: 'hidden',
  position: 'relative',
});

const hero = style({
  backgroundColor: '#3193FC',
  paddingBottom: '52px',
});

const backButton = style({
  width: '44px',
  height: '44px',
  marginLeft: '6px',
  padding: 0,
  border: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  color: 'rgba(255, 255, 255, 0.94)',
  cursor: 'pointer',
});

globalStyle(`${backButton} svg`, {
  width: '24px',
  height: '24px',
});

const heroContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '24px 16px 0 20px',
});

const analyticsBadge = style({
  padding: '4px 8px',
  borderRadius: '8px',
  backgroundColor: 'rgba(238, 238, 251, 0.55)',
  color: 'rgba(255, 255, 255, 0.94)',
  fontSize: '11px',
  lineHeight: '16px',
  fontWeight: 700,
  letterSpacing: '1.25px',
  marginTop: '1rem',
});

const content = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '0 16px 24px',
});

const questionCard = style({
  width: '100%',
  marginTop: '-36px',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.94)',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  padding: '20px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

const answerRow = style({
  display: 'flex',
  gap: '12px',
});

const answerButton = style({
  minHeight: '56px',
  borderRadius: '16px',
  border: 0,
  boxShadow: 'none',
  backgroundColor: '#f2f3f5',
  color: 'rgba(3, 3, 6, 0.88)',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
});

const answerButtonSelected = style({
  backgroundColor: '#e9ecf0',
});

const questionHint = style({
  width: '100%',
  textAlign: 'center',
  marginTop: '12px',
});

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
});

export const appSt = {
  page,
  phoneFrame,
  hero,
  heroContent,
  analyticsBadge,
  content,
  questionCard,
  answerRow,
  answerButton,
  answerButtonSelected,
  questionHint,
  bottomBtn,
  container,
  box,
};

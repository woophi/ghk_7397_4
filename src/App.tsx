import { Button } from '@alfalab/core-components/button/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';

import { useEffect, useState } from 'react';
import { useStocksData } from './hooks/useStocksData';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

type PredictionOption = 'yes' | 'no';

export const App = () => {
  const [selectedOption, setSelectedOption] = useState<PredictionOption | null>(null);
  const { stocks } = useStocksData();

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const getAnswerButtonClassName = (option: PredictionOption) =>
    option === selectedOption ? `${appSt.answerButton} ${appSt.answerButtonSelected}` : appSt.answerButton;

  if (selectedOption === 'no') {
    return (
      <div className={appSt.container}>
        <Typography.TitleResponsive
          tag="h1"
          view="medium"
          font="system"
          weight="semibold"
          color="primary"
          style={{
            marginTop: '1rem',
          }}
        >
          Рекомендованные бумаги
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Крепкий рубль — плюс для компаний, ориентированных на внутренний рынок. Длинные ОФЗ выиграют на фоне стабильной
          валюты и снижения инфляционных ожиданий.
        </Typography.Text>

        {stocks.no.map(stock => {
          return (
            <PureCell
              onClick={() => {
                window.gtag('event', '7397_choose_security', { var: 'var4', security_ticker: stock.ticker });
                window.location.replace(stock.link);
              }}
            >
              <PureCell.Graphics verticalAlign="center" key={stock.ticker}>
                <img src={stock.img} width={48} height={48} alt={stock.ticker} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium">{stock.name}</Typography.Text>

                  <Typography.Text view="primary-small" color="secondary">
                    {stock.ticker}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Addon verticalAlign="top">
                <Typography.Text view="primary-medium" weight="medium">
                  {stock.price.toLocaleString('ru-RU')}&nbsp;₽
                </Typography.Text>
              </PureCell.Addon>
            </PureCell>
          );
        })}

        <Typography.Text view="primary-small" color="secondary">
          Не является индивидуальной инвестиционной рекомендацией
        </Typography.Text>
      </div>
    );
  }
  if (selectedOption === 'yes') {
    return (
      <div className={appSt.container}>
        <Typography.TitleResponsive
          tag="h1"
          view="medium"
          font="system"
          weight="semibold"
          color="primary"
          style={{
            marginTop: '1rem',
          }}
        >
          Рекомендованные бумаги
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Если рубль ослабнет, выиграют компании-экспортёры: их выручка в валюте, а расходы в рублях. Юаневая ОФЗ и
          замещающие облигации привязаны к валюте, а корпоративные бонды крупных эмитентов добавят доходности портфелю.
        </Typography.Text>

        {stocks.yes.map(stock => {
          return (
            <PureCell
              onClick={() => {
                window.gtag('event', '7397_choose_security', { var: 'var4', security_ticker: stock.ticker });
                window.location.replace(stock.link);
              }}
            >
              <PureCell.Graphics verticalAlign="center" key={stock.ticker}>
                <img src={stock.img} width={48} height={48} alt={stock.ticker} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium">{stock.name}</Typography.Text>

                  <Typography.Text view="primary-small" color="secondary">
                    {stock.ticker}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Addon verticalAlign="top">
                <Typography.Text view="primary-medium" weight="medium">
                  {stock.price.toLocaleString('ru-RU')}&nbsp;₽
                </Typography.Text>
              </PureCell.Addon>
            </PureCell>
          );
        })}

        <Typography.Text view="primary-small" color="secondary">
          Не является индивидуальной инвестиционной рекомендацией
        </Typography.Text>
      </div>
    );
  }

  return (
    <div className={appSt.page}>
      <div className={appSt.phoneFrame}>
        <div className={appSt.hero}>
          <div className={appSt.heroContent}>
            <span className={appSt.analyticsBadge}>АНАЛИТИКА</span>

            <Typography.TitleResponsive
              tag="h1"
              view="medium"
              font="system"
              weight="semibold"
              color="primary-inverted"
              style={{
                margin: '12px 0 8px',
              }}
            >
              Ваш прогноз
              <br />
              на развитие события
            </Typography.TitleResponsive>

            <Typography.Text tag="p" view="primary-medium" defaultMargins={false} color="primary-inverted">
              Покажем активы под выбранный вариант
            </Typography.Text>
          </div>
        </div>

        <div className={appSt.content}>
          <section className={appSt.questionCard}>
            <Typography.Text
              tag="div"
              view="primary-medium"
              style={{
                color: 'rgba(3, 3, 6, 0.88)',
                fontSize: '22px',
                lineHeight: '26px',
                fontWeight: 700,
              }}
            >
              Будет ли доллар
              <br />к концу года выше 90?
            </Typography.Text>

            <div>
              <div className={appSt.answerRow}>
                <Button
                  block
                  view="secondary"
                  className={getAnswerButtonClassName('yes')}
                  onClick={() => {
                    window.gtag('event', '7397_click_answer', { var: 'var4', answer: 'yes' });
                    setSelectedOption('yes');
                  }}
                >
                  Да
                </Button>

                <Button
                  block
                  view="secondary"
                  className={getAnswerButtonClassName('no')}
                  onClick={() => {
                    window.gtag('event', '7397_click_answer', { var: 'var4', answer: 'no' });
                    setSelectedOption('no');
                  }}
                >
                  Нет
                </Button>
              </div>
              <Typography.Text
                tag="p"
                view="primary-small"
                defaultMargins={false}
                className={appSt.questionHint}
                color="secondary"
              >
                Выбор влияет на подбор активов ниже
              </Typography.Text>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

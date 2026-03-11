import { Button } from '@alfalab/core-components/button/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { useEffect, useState } from 'react';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

type PredictionOption = 'yes' | 'no';

export const App = () => {
  const [selectedOption, setSelectedOption] = useState<PredictionOption | null>(null);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const getAnswerButtonClassName = (option: PredictionOption) =>
    option === selectedOption ? `${appSt.answerButton} ${appSt.answerButtonSelected}` : appSt.answerButton;

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
                  onClick={() => setSelectedOption('yes')}
                >
                  Да
                </Button>

                <Button
                  block
                  view="secondary"
                  className={getAnswerButtonClassName('no')}
                  onClick={() => setSelectedOption('no')}
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

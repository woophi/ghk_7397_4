import { useEffect, useState } from 'react';
import gazpImg from '../assets/stocks/gazp.png';
import goldImg from '../assets/stocks/gold.png';
import headImg from '../assets/stocks/hh.png';
import lukolImg from '../assets/stocks/lukol.png';
import mechelImg from '../assets/stocks/mechel.png';
import mtsImg from '../assets/stocks/mts.png';
import neftImg from '../assets/stocks/neft.png';
import nikelImg from '../assets/stocks/nikel.png';
import novatekImg from '../assets/stocks/novatek.png';
import phorImg from '../assets/stocks/phor.png';
import rosneftImg from '../assets/stocks/rosneft.png';
import RU000A10B3Z3Img from '../assets/stocks/RU000A10B3Z3.png';
import RU000A10CTX6Img from '../assets/stocks/RU000A10CTX6.png';
import RU000A10DQA8Img from '../assets/stocks/RU000A10DQA8.png';
import rualImg from '../assets/stocks/rual.png';
import sberImg from '../assets/stocks/sber.png';
import tatNeftImg from '../assets/stocks/tatneft.png';
import tbankImg from '../assets/stocks/tbank.png';
import vtbImg from '../assets/stocks/vtb.png';
import x5Img from '../assets/stocks/x5.png';
import yandexImg from '../assets/stocks/yandex.png';

import { GistResponse } from '../types';

export const TICKER_TO_IMAGE: Record<string, string> = {
  SBER: sberImg,
  T: tbankImg,
  PLZL: goldImg,
  YDEX: yandexImg,
  YNDX: yandexImg,
  TRNFP: neftImg,
  LKOH: lukolImg,
  GAZP: gazpImg,
  GMKN: nikelImg,
  MTLR: mechelImg,
  NVTK: novatekImg,
  ROSN: rosneftImg,
  VTBR: vtbImg,
  VTB: vtbImg,
  X5: x5Img,
  HEAD: headImg,
  TATN: tatNeftImg,
  PHOR: phorImg,
  RUAL: rualImg,
  RU000A10DQA8: RU000A10DQA8Img,
  RU000A10CTX6: RU000A10CTX6Img,
  RU000A105RH2: gazpImg,
  RU000A105KU0: gazpImg,
  RU000A10B3Z3: RU000A10B3Z3Img,
  MTS: mtsImg,
  RU000A100EF5: RU000A10DQA8Img,
  RU000A10D533: RU000A10DQA8Img,
  RU000A108EH4: RU000A10DQA8Img,
};

export const useStocksData = () => {
  const [stocks, setStocks] = useState<GistResponse>({ yes: [], no: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gist.githubusercontent.com/nsdooris/a3b39707cdd7045ced1ef222543c3461/raw/');
      const data = (await response.json()) as GistResponse;
      setStocks({
        yes: data.yes.map(item => ({ ...item, img: TICKER_TO_IMAGE[item.ticker] })),
        no: data.no.map(item => ({ ...item, img: TICKER_TO_IMAGE[item.ticker] })),
      });

      setLoading(false);
    };

    fetchData();
  }, []);

  return { stocks, loading };
};

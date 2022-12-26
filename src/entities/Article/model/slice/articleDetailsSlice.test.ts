import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {
  ArticleType,
  ArticleBlockType, Article,
} from '../types/article';
import {
  ArticleDetailsSchema,
} from '../types/ArticleDetailsSchema';
import {
  articleDetailsReducer,
} from '../slice/articleDetailsSlice';

describe('articleDetailsSlice', () => {
  const article: Article = {
    id: '1',
    title: 'JavaScript news',
    subtitle: 'Что нового в JS за 2022 год?',
	  // eslint-disable-next-line max-len
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
	  user: {
		  id: '1',
		  username: 'Admin',
	  },
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок блока с текстом',
        paragraphs: [
          'В статье «The World’s Most Misunderstood Programming Language Has '
					+ 'Become the World’s Most Popular Programming Language»[32] (с англ. — «Самый непра'
					+ 'вильно понятый язык программирования в мире стал самым популярным в мире языком'
					+ ' программирования») Дуглас Крокфорд утверждает, что лидирующую позицию'
					+ ' JavaScript занял в связи с развитием AJAX, поскольку браузер стал пр'
					+ 'евалирующей системой доставки приложений. Он также констатирует растущу'
					+ 'ю популярность JavaScript, то, что этот язык встраивается в приложения,'
					+ ' отмечает значимость языка.\n\nСогласно TIOBE Index, базирующемуся на '
					+ 'данных поисковых систем Google, MSN, Yahoo!, Википедия и YouTube, в ап'
					+ 'реле 2015 года JavaScript находился на 6-м месте (год назад — на 9-м)[3'
					+ '3].\n\nПо данным Black Duck Software[en][34], в разработке открытого пр'
					+ 'ограммного обеспечения доля использования JavaScript росла. 36 % проектов'
					+ ', выпуски которых состоялись с августа 2008 по август 2009 года, включают '
					+ 'JavaScript, наиболее часто используемый язык программирования с быстрорастущей'
					+ ' популярностью. 80 % открытого программного обеспечения использует Си, C++, '
					+ 'Java, Shell и JavaScript. При этом JavaScript — единственный из этих языков,'
					+ ' чья доля использования увеличилась (более чем на 2 процента, если считать в'
					+ ' строках кода)[35].',
          'Перед Бренданом Эйхом, нанятым в компанию Netscape 4 апреля 1995 года['
					+ '18], была поставлена задача внедрить язык программирования Scheme или что-то '
					+ 'похожее в браузер Netscape. Поскольку требования были размыты, Эйха перевели'
					+ ' в группу, ответственную за серверные продукты, где он проработал месяц,'
					+ ' занимаясь улучшением протокола HTTP[18]. В мае разработчик был переброшен '
					+ 'обратно, в команду, занимающуюся клиентской частью (браузером), где он немедленно'
					+ ' начал разрабатывать концепцию нового языка программирования. Менеджмент '
					+ 'разработки браузера, включая Тома Пакина (англ. Tom Paquin), Михаэля Тоя[en],'
					+ ' Рика Шелла (англ. Rick Schell), был убеждён, что Netscape должен поддерживать '
					+ 'язык программирования, встраиваемый в HTML-код страницы[19].',
        ],
      },
      {
        id: '1',
        type: ArticleBlockType.CODE,
        code: ' render() {\n    const {getState, dispatch} = this.props.store;\n      \n  '
					+ '  return (\n      <div>\n        <p>{getState().count}</p>\n       '
					+ " <button onClick={() => dispatch({ type: 'INCREMENT' })}>\n          "
					+ 'Increment counter\n        </button>\n      </div>\n    );\n  }',
      },
      {
        id: '2',
        type: ArticleBlockType.IMAGE,
        src: 'https://www.imgonline.com.ua/examples/site-screenshot-3.jpg',
        title: 'Рисунок 1 - скриншот сайта',
      },
      {
        id: '2',
        type: ArticleBlockType.CODE,
        code: ' render() {\n    const {getState, dispatch} = this.props.store;\n    '
					+ '  \n    return (\n      <div>\n        <p>{getState().count}</p>\n     '
					+ "   <button onClick={() => dispatch({ type: 'INCREMENT' })}>\n        "
					+ '  Increment counter\n        </button>\n      </div>\n    );\n  }',
      },
      {
        id: '3',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок блока с текстом',
        paragraphs: [
          'В статье «The World’s Most Misunderstood Programming Language Has '
					+ 'Become the World’s Most Popular Programming Language»[32] (с англ. — «Самый непра'
					+ 'вильно понятый язык программирования в мире стал самым популярным в мире языком'
					+ ' программирования») Дуглас Крокфорд утверждает, что лидирующую позицию'
					+ ' JavaScript занял в связи с развитием AJAX, поскольку браузер стал пр'
					+ 'евалирующей системой доставки приложений. Он также констатирует растущу'
					+ 'ю популярность JavaScript, то, что этот язык встраивается в приложения,'
					+ ' отмечает значимость языка.\n\nСогласно TIOBE Index, базирующемуся на '
					+ 'данных поисковых систем Google, MSN, Yahoo!, Википедия и YouTube, в ап'
					+ 'реле 2015 года JavaScript находился на 6-м месте (год назад — на 9-м)[3'
					+ '3].\n\nПо данным Black Duck Software[en][34], в разработке открытого пр'
					+ 'ограммного обеспечения доля использования JavaScript росла. 36 % проектов'
					+ ', выпуски которых состоялись с августа 2008 по август 2009 года, включают '
					+ 'JavaScript, наиболее часто используемый язык программирования с быстрорастущей'
					+ ' популярностью. 80 % открытого программного обеспечения использует Си, C++, '
					+ 'Java, Shell и JavaScript. При этом JavaScript — единственный из этих языков,'
					+ ' чья доля использования увеличилась (более чем на 2 процента, если считать в'
					+ ' строках кода)[35].',
          'Перед Бренданом Эйхом, нанятым в компанию Netscape 4 апреля 1995 года['
					+ '18], была поставлена задача внедрить язык программирования Scheme или что-то '
					+ 'похожее в браузер Netscape. Поскольку требования были размыты, Эйха перевели'
					+ ' в группу, ответственную за серверные продукты, где он проработал месяц,'
					+ ' занимаясь улучшением протокола HTTP[18]. В мае разработчик был переброшен '
					+ 'обратно, в команду, занимающуюся клиентской частью (браузером), где он немедленно'
					+ ' начал разрабатывать концепцию нового языка программирования. Менеджмент '
					+ 'разработки браузера, включая Тома Пакина (англ. Tom Paquin), Михаэля Тоя[en],'
					+ ' Рика Шелла (англ. Rick Schell), был убеждён, что Netscape должен поддерживать '
					+ 'язык программирования, встраиваемый в HTML-код страницы[19].',
        ],
      },
      {
        id: '3',
        type: ArticleBlockType.IMAGE,
        src: 'https://www.imgonline.com.ua/examples/site-screenshot-3.jpg',
        title: 'Рисунок 1 - скриншот сайта',
      },
    ],
  };
  test('service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(articleDetailsReducer(
			state as ArticleDetailsSchema,
	    fetchArticleById.pending,
    )).toEqual({
      isLoading: true,
    });
  });

  test('service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };
    expect(articleDetailsReducer(
			state as ArticleDetailsSchema,
			fetchArticleById.fulfilled(article, article.id, '', ''),
    )).toEqual({
      isLoading: false,
      data: article,
    });
  });
});

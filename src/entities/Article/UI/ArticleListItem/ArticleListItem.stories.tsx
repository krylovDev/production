import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import ArticleListItem from './ArticleListItem';

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

const mockArticle: Article = {
  id: '1',
  title: 'JavaScript newsJavaScript newsJavaScript newsJavaScript newsJavaScript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://upload.wikimedia.org/wikipedia/commons'
    + '/thumb/9/99/Unofficial_JavaScript_logo_2.svg/'
    + '1200px-Unofficial_JavaScript_logo_2.svg.png',
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'Admin',
    avatar: 'https://i.ibb.co/sHcVbRL/image.jpg',
  },
  type: [
    'IT',
    'POLITICS',
    'ECONOMICS',
    'SCIENCE',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок блока с текстом',
      paragraphs: [
        'В статье «The World’s Most Misunderstood Programming Language Has '
        + 'Become the World’s Most Popular Programming Language»[32] (с англ.'
        + ' — «Самый неправильно понятый язык программирования в мире стал'
        + ' самым популярным в мире языком программирования») Дуглас Крокфорд утверждает'
        + ', что лидирующую позицию JavaScript занял в связи с развитием AJAX, поскольку'
        + ' браузер стал превалирующей системой доставки приложений. Он также констатирует'
        + ' растущую популярность JavaScript, то, что этот язык встраивается в '
        + 'приложения, отмечает значимость языка.\n\nСогласно TIOBE Index, '
        + 'базирующемуся на данных поисковых систем Google, MSN, Yahoo!, Википедия'
        + ' и YouTube, в апреле 2015 года JavaScript находился на 6-м месте (год назад'
        + ' — на 9-м)[33].\n\nПо данным Black Duck Software[en][34], в разработке открытого'
        + ' программного обеспечения доля использования JavaScript росла. 36 % проектов,'
        + ' выпуски которых состоялись с августа 2008 по август 2009 года, включают '
        + 'JavaScript, наиболее часто используемый язык программирования с быстрорастущей'
        + ' популярностью. 80 % открытого программного обеспечения использует Си, C++,'
        + ' Java, Shell и JavaScript. При этом JavaScript — единственный из этих языков,'
        + ' чья доля использования увеличилась (более чем на 2 процента, если считать в'
        + ' строках кода)[35].',
        'Перед Бренданом Эйхом, нанятым в компанию Netscape 4 апреля 1995 года[18],'
        + ' была поставлена задача внедрить язык программирования Scheme или что-то похожее '
        + 'в браузер Netscape. Поскольку требования были размыты, Эйха перевели в группу,'
        + ' ответственную за серверные продукты, где он проработал месяц, занимаясь улучшением'
        + ' протокола HTTP[18]. В мае разработчик был переброшен обратно, в команду, '
        + 'занимающуюся клиентской частью (браузером), где он немедленно начал разрабатывать'
        + ' концепцию нового языка программирования. Менеджмент разработки браузера, '
        + 'включая Тома Пакина (англ. Tom Paquin), Михаэля Тоя[en], Рика Шелла (англ. Rick Schell),'
        + ' был убеждён, что Netscape должен поддерживать язык программирования, '
        + 'встраиваемый в HTML-код страницы[19].',
      ],
    },
    {
      id: '1',
      type: 'CODE',
      code: ' render() {\n    '
        + 'const {getState, dispatch} = this.props.store;\n      '
        + '\n    return (\n      <div>\n        <p>{getState().count}'
        + "</p>\n        <button onClick={() => dispatch({ type: 'INCREMENT' })}>"
        + '\n          Increment counter\n        </button>\n      </div>\n    );\n  }',
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://www.imgonline.com.ua/examples/site-screenshot-3.jpg',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '2',
      type: 'CODE',
      code: ' render() {\n    const {getState, dispatch} = '
        + 'this.props.store;\n      \n    return (\n      <div>\n '
        + '       <p>{getState().count}</p>\n        <button onClick='
        + "{() => dispatch({ type: 'INCREMENT' })}>\n         "
        + ' Increment counter\n        </button>\n      </div>\n   '
        + ' );\n  }',
    },
    {
      id: '3',
      type: 'TEXT',
      title: 'Заголовок блока с текстом',
      paragraphs: [
        'В статье «The World’s Most Misunderstood Programming Language Has '
        + 'Become the World’s Most Popular Programming Language»[32] (с англ.'
        + ' — «Самый неправильно понятый язык программирования в мире стал'
        + ' самым популярным в мире языком программирования») Дуглас Крокфорд утверждает'
        + ', что лидирующую позицию JavaScript занял в связи с развитием AJAX, поскольку'
        + ' браузер стал превалирующей системой доставки приложений. Он также констатирует'
        + ' растущую популярность JavaScript, то, что этот язык встраивается в '
        + 'приложения, отмечает значимость языка.\n\nСогласно TIOBE Index, '
        + 'базирующемуся на данных поисковых систем Google, MSN, Yahoo!, Википедия'
        + ' и YouTube, в апреле 2015 года JavaScript находился на 6-м месте (год назад'
        + ' — на 9-м)[33].\n\nПо данным Black Duck Software[en][34], в разработке открытого'
        + ' программного обеспечения доля использования JavaScript росла. 36 % проектов,'
        + ' выпуски которых состоялись с августа 2008 по август 2009 года, включают '
        + 'JavaScript, наиболее часто используемый язык программирования с быстрорастущей'
        + ' популярностью. 80 % открытого программного обеспечения использует Си, C++,'
        + ' Java, Shell и JavaScript. При этом JavaScript — единственный из этих языков,'
        + ' чья доля использования увеличилась (более чем на 2 процента, если считать в'
        + ' строках кода)[35].',
        'Перед Бренданом Эйхом, нанятым в компанию Netscape 4 апреля 1995 года[18],'
        + ' была поставлена задача внедрить язык программирования Scheme или что-то похожее '
        + 'в браузер Netscape. Поскольку требования были размыты, Эйха перевели в группу,'
        + ' ответственную за серверные продукты, где он проработал месяц, занимаясь улучшением'
        + ' протокола HTTP[18]. В мае разработчик был переброшен обратно, в команду, '
        + 'занимающуюся клиентской частью (браузером), где он немедленно начал разрабатывать'
        + ' концепцию нового языка программирования. Менеджмент разработки браузера, '
        + 'включая Тома Пакина (англ. Tom Paquin), Михаэля Тоя[en], Рика Шелла (англ. Rick Schell),'
        + ' был убеждён, что Netscape должен поддерживать язык программирования, '
        + 'встраиваемый в HTML-код страницы[19].',
      ],
    },
    {
      id: '3',
      type: 'IMAGE',
      src: 'https://www.imgonline.com.ua/examples/site-screenshot-3.jpg',
      title: 'Рисунок 1 - скриншот сайта',
    },
  ],
} as Article;

export const TILE = Template.bind({});
TILE.args = {
  view: ArticleView.TILE,
  article: mockArticle,
};

export const LIST = Template.bind({});
LIST.args = {
  view: ArticleView.LIST,
  article: mockArticle,
};

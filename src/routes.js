import React from 'react';
import { mount, route, redirect } from 'navi';

import Categories from './containers/Categories';
import Item from './containers/Item/ItemListPage';
import ItemDetail from './containers/Item/ItemDetailPage';
import { ITEM, CATEGORIES } from './breadcrumb';
import ItemEdit from './containers/Item/ItemEditPage';

const routes = mount({
  '/': redirect('/categories'),
  '/categories': route(req => ({
    data: {
      breadcrumb: [CATEGORIES],
    },
    view: <Categories />,
  })),
  '/item': mount({
    '/': route({
      data: {
        breadcrumb: [ITEM],
      },
      view: <Item />,
    }),
    '/:id/detail': route(req => ({
      data: {
        breadcrumb: [
          ITEM,
          {
            url: '/item',
            title: 'Chi tiết',
          },
        ],
      },
      view: <ItemDetail recordId={req.params.id} />,
    })),
    '/:id/edit': route(req => ({
      data: {
        breadcrumb: [
          ITEM,
          {
            url: '/item',
            title: 'Chỉnh sửa',
          },
        ],
      },
      view: <ItemEdit recordId={req.params.id} />,
    })),
  }),
});
export default routes;

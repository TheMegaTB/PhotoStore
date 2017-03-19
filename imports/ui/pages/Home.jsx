import React from 'react';
import classNames from 'classnames';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import ImageList from '../components/ImageList';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >
        <ImageList/>
    </div>
  );
}

export default Home;

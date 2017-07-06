require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// 获取图片相关数据
let imageDatas=require('../data/imageDatas.json');

// 利用自执行函数，将图片信息转换成图片URL路径信息
imageDatas=(function genImageURL(imageDatasArr){
	for(var i=i,j=imageDatasArr.length;i<j;i++){
		var singleImageData=imageDatasArr[i];

		singleImageData.imageURL=require('../images/'+singleImageData.fileName);

		imageDatasArr[i]=singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      	<section className="stage">
      		<section className="img-sec">
      		</section>
      		<section className="controller-nav">
      		</section>
      	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

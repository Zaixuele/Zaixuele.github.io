var posts=["2024/08/27/博客相关/使用Hexo-Github搭建个人博客/","2024/10/13/周报/21岁-昨天今天明天/","2024/09/30/周报/周报02-失去的感知力/","2024/09/01/周报/周报01-为什么写周报/","2024/11/13/博客相关/黑幕/","2024/10/06/周报/周报03-国庆的假期/","2024/10/27/周报/周报05-偏水的一期生活记录/","2024/11/03/周报/周报06-下赛道了/","2024/11/10/周报/周报07-短评《Penguin》/","2024/11/25/周报/周报08-雨/","2024/12/15/周报/周报09-忙里偷闲写一篇/","2024/12/16/技术/淘宝爬虫-Python实践/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2024/08/27/博客相关/使用Hexo-Github搭建个人博客/","2024/10/06/周报/周报03-国庆的假期/","2024/09/30/周报/周报02-失去的感知力/","2024/09/01/周报/周报01-为什么写周报/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };